/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RigidBodyProps
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

export default function Lanyard({
  position = [0, 0, 30], // Camera position: [x, y, z] - adjust to move camera closer/further
  gravity = [0, -40, 0], // Gravity force: [x, y, z] - negative Y pulls down
  fov = 30, // Field of view: smaller = more zoomed in, larger = more zoomed out
  transparent = true // Background transparency: true = transparent, false = black background
}: LanyardProps) {
  return (
    // CONTAINER POSITIONING: Responsive - center on small screens, right on large screens
    <div className="absolute -top-30 z-0 w-full h-[120vh] flex justify-center lg:justify-end items-start transform scale-100 origin-center">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
}

function Band({ maxSpeed = 50, minSpeed = 0 }: BandProps) {
  const band = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: any = {
    type: 'dynamic' as RigidBodyProps['type'],
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4
  };

  // ============================================
  // STRIPE/LANYARD TEXTURE CONFIGURATION
  // ============================================
  // Create simple fallback texture for the lanyard stripe
  const [texture] = useState(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // STRIPE COLORS: Change these hex colors to customize the stripe
      ctx.fillStyle = '#1a1a1a'; // Dark background color
      ctx.fillRect(0, 0, 256, 256);
      ctx.fillStyle = '#333333'; // Light stripe color
      // STRIPE PATTERN: Adjust the loop to change stripe thickness
      for (let i = 0; i < 256; i += 16) { // 16 = stripe spacing, 8 = stripe width
        ctx.fillRect(0, i, 256, 8);
      }
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    return tex;
  });

  // ============================================
  // CARD GEOMETRY CONFIGURATION
  // ============================================
  // Create simple fallback geometries for the card
  // CARD SIZE: BoxGeometry(width, height, depth)
  const [cardGeometry] = useState(() => new THREE.BoxGeometry(1.6, 2.25, 0.02)); // 1.6 wide, 2.25 tall, 0.02 thick
  
  // CLIP SIZE: CylinderGeometry(radiusTop, radiusBottom, height, segments)
  const [clipGeometry] = useState(() => new THREE.CylinderGeometry(0.1, 0.1, 0.3, 16)); // Small cylinder for the clip
  
  // CLAMP SIZE: BoxGeometry(width, height, depth)
  const [clampGeometry] = useState(() => new THREE.BoxGeometry(0.2, 0.1, 0.1)); // Small box for the clamp

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3()
      ])
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  const [isSmall, setIsSmall] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });

  // ============================================
  // RESPONSIVE POSITIONING
  // ============================================
  // Adjust horizontal position based on screen size
  const [horizontalOffset, setHorizontalOffset] = useState<number>(0);

  useEffect(() => {
    const updatePosition = () => {
      const isSmallScreen = window.innerWidth < 1024;
      setIsSmall(isSmallScreen);
      // On large screens, offset to the right; on small screens, center (0)
      setHorizontalOffset(isSmallScreen ? 0 : 3);
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  // Setup physics joints
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== 'boolean') {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z
      });
    }
    if (fixed.current && band.current && card.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) {
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        }
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      
      // Update curve points to follow the card's actual position
    //   curve.points[0].copy(j3.current.translation());
    //   curve.points[1].copy(j2.current.lerped);
    //   curve.points[2].copy(j1.current.lerped);
    //   curve.points[3].copy(fixed.current.translation());
      // From fixed anchor → j1 → j2 → j3 (card)
curve.points[0].copy(fixed.current.translation());
curve.points[1].copy(j1.current.lerped);
curve.points[2].copy(j2.current.lerped);
curve.points[3].copy(j3.current.translation());

      if (band.current.geometry && band.current.geometry.setPoints) {
        band.current.geometry.setPoints(curve.getPoints(32));
      }
      
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';

  return (
    <>
      {/* ============================================
          PHYSICS BODIES AND CARD POSITIONING
          ============================================ */}
      {/* Main group position: [x, y, z] - this controls where the lanyard hangs from */}
      {/* horizontalOffset adjusts X position based on screen size */}
      <group position={[horizontalOffset, 4, 0]}> {/* Y=4 means it hangs from 4 units high, X is responsive */}
        
        {/* Fixed anchor point - this is where the lanyard attaches to the "ceiling" */}
        <RigidBody ref={fixed} {...segmentProps} type={'fixed' as RigidBodyProps['type']} />
        
        {/* Joint 1 - first rope segment */}
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        
        {/* Joint 2 - second rope segment */}
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        
        {/* Joint 3 - third rope segment */}
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        
        {/* CARD BODY - the main card that swings */}
        <RigidBody
          position={[2, 0, 0]} // Starting position of the card
          ref={card}
          {...segmentProps}
          type={dragged ? ('kinematicPosition' as RigidBodyProps['type']) : ('dynamic' as RigidBodyProps['type'])}
        >
          {/* Collision box for the card - must match card dimensions */}
          <CuboidCollider args={[0.8, 1.125, 0.01]} /> {/* Half of card dimensions */}
          
          {/* ============================================
              CARD VISUAL ELEMENTS - CUSTOMIZE HERE
              ============================================ */}
          <group
            scale={isSmall ? 1.5 : 2} // RESPONSIVE SCALE - smaller on mobile, larger on desktop
            position={[0, -1.2, -0.05]} // Position adjustment for the card
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}
          >
            {/* ============================================
                MAIN CARD SURFACE - ADD YOUR CONTENT HERE
                ============================================ */}
            <mesh geometry={cardGeometry}>
              <meshPhysicalMaterial
                color={0xeeeeee} // CARD COLOR - change this hex value (0xRRGGBB)
                                  // Examples: 0xffffff (white), 0xff0000 (red), 0x0000ff (blue)
                clearcoat={1} // Glossy coating: 0 = matte, 1 = very glossy
                clearcoatRoughness={0.15} // Surface roughness: 0 = smooth, 1 = rough
                roughness={0.3} // Base roughness
                metalness={0.5} // Metallic look: 0 = plastic, 1 = metal
              />
            </mesh>
            
            {/* TO ADD TEXT OR IMAGE TO CARD:
                1. You can add a texture map here
                2. Or add Text component from @react-three/drei
                3. Or add an image as a texture
                Example with texture:
                <meshPhysicalMaterial map={yourTexture} ... />
            */}
            
            {/* ============================================
                CLIP (Top attachment) - CUSTOMIZE APPEARANCE
                ============================================ */}
            <mesh 
              geometry={clipGeometry} 
              position={[0, 1.2, 0]} // CLIP POSITION - adjust Y to move up/down on card
              rotation={[Math.PI / 2, 0, 0]}
            >
              <meshStandardMaterial 
                color={0x888888} // CLIP COLOR - change hex value
                roughness={0.3} 
                metalness={1} 
              />
            </mesh>
            
            {/* ============================================
                CLAMP (Top holder) - CUSTOMIZE APPEARANCE
                ============================================ */}
            <mesh 
              geometry={clampGeometry} 
              position={[0, 1.35, 0]} // CLAMP POSITION - adjust Y to move up/down
            >
              <meshStandardMaterial 
                color={0x666666} // CLAMP COLOR - change hex value
                roughness={0.4} 
                metalness={1} 
              />
            </mesh>
          </group>
        </RigidBody>
      </group>
      
      {/* ============================================
          LANYARD STRIPE/ROPE VISUAL
          ============================================ */}
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white" // STRIPE TINT COLOR - 'white' means no tint, use hex for color tint
          depthTest={false}
          resolution={isSmall ? [1000, 2000] : [1000, 1000]} // Resolution for different screen sizes
          useMap
          map={texture}
          repeat={[-4, 1]} // STRIPE REPEAT - adjust first number to change stripe density
          lineWidth={isSmall ? 0.3 : 0.4} // RESPONSIVE STRIPE WIDTH - thinner on mobile
        />
      </mesh>
    </>
  );
}