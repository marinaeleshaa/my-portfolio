import { setActiveProjectAction } from "@/redux/slices/ProjectSlice";
import { AppDispatch } from "@/redux/Store";
import { motion, useMotionValue, useTransform } from "motion/react";
import Image from "next/image";
import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  readonly randomRotation?: boolean;
  readonly sensitivity?: number;
  readonly cardDimensions?: { width: number; height: number };
  readonly sendToBackOnClick?: boolean;
  readonly cardsData?: { id: number; img: string }[];
  readonly animationConfig?: { stiffness: number; damping: number };
  readonly className?: string;
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  className,
}: StackProps) {
  const dispatch = useDispatch<AppDispatch>();
  const hasInitialized = useRef(false);
  
  // Memoize initial cards data to prevent re-initialization on every render
  const initialCards = useMemo(() => {
    return cardsData.length
      ? cardsData
      : [
          {
            id: 1,
            img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
          },
          {
            id: 2,
            img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
          },
          {
            id: 3,
            img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
          },
          {
            id: 4,
            img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
          },
        ];
  }, [cardsData]);

  // Use function initializer to ensure state only initializes once
  const [cards, setCards] = useState(() => initialCards);

  // Initialize active project to match the top card (last card in array is on top) - only once
  useEffect(() => {
    if (!hasInitialized.current && initialCards.length > 0) {
      const topCardId = initialCards[initialCards.length - 1].id;
      dispatch(setActiveProjectAction(topCardId));
      hasInitialized.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  // Calculate random rotations once per card ID based on initial cards to prevent recalculation
  const randomRotations = useMemo(() => {
    const rotations: Record<number, number> = {};
    initialCards.forEach((card) => {
      rotations[card.id] = randomRotation ? Math.random() * 10 - 5 : 0;
    });
    return rotations;
  }, [initialCards, randomRotation]);

  const sendToBack = useCallback((id: number) => {
  setCards((prev) => {
    const newCards = [...prev];
    const index = newCards.findIndex((card) => card.id === id);
    if (index === -1) return prev;

    // اسحب الكارت
    const [card] = newCards.splice(index, 1);
    // وحطيه تحت
    newCards.unshift(card);

    // ⇦ أهم سطر: الكارت اللي فوق بعد الترتيب
    const topCard = newCards[newCards.length - 1];

    // ⇦ بعت الـ id الصح لِـ Redux
    dispatch(setActiveProjectAction(topCard.id));

    return newCards;
  });
}, [dispatch]);


  return (
    <div
      className={`relative ${className} `}
      style={{
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotations[card.id] || 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className={`rounded-2xl overflow-hidden border-4 border-white ${className}`}
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
            >
              <Image
                width={cardDimensions.width}
                height={cardDimensions.height}
                src={card.img}
                alt={`card-${card.id}`}
                className="w-full h-full object-fit pointer-events-none"
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
