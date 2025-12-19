import TechLogos from "@/data/techLogos";
import LogoLoop from "./LogoLoop";

import Animate from "../common/Animate";

const LeftSide = () => {
  return (
    <Animate delay={0.5}>
      <div className=" flex gap-8 w-fit h-[300px] mx-auto relative">
        <LogoLoop
          logos={TechLogos().techLogos1}
          speed={20}
          direction="up"
          logoHeight={50}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          className="bg-clip-text text-white/60"
          ariaLabel="Technology partners"
        />
        <LogoLoop
          logos={TechLogos().techLogos2}
          speed={30}
          direction="up"
          logoHeight={50}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          className="bg-clip-text text-white/80"
          ariaLabel="Technology partners"
        />
        <LogoLoop
          logos={TechLogos().techLogos3}
          speed={40}
          direction="up"
          logoHeight={50}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          className="bg-clip-text text-white"
          ariaLabel="Technology partners"
        />
        <LogoLoop
          logos={TechLogos().techLogos4}
          speed={50}
          direction="up"
          logoHeight={50}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          className="bg-clip-text text-white"
          ariaLabel="Technology partners"
        />
      </div>
    </Animate>
  );
};

export default LeftSide;
