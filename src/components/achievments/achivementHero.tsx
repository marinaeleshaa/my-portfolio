import Animate from "../common/Animate";
const AchievementHero = () => {
  return (
    <Animate className="relative w-fit">
      <div
        className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 border-l-4 rounded-tl-lg border-t-4 opacity-60"
        style={{ borderColor: "#FF9FFC" }}
      ></div>
      <div
        className="absolute bottom-0 -right-4 w-12 h-12 md:w-16 md:h-16 rounded-br-lg border-r-4 border-b-4 opacity-60"
        style={{ borderColor: "#FF9FFC" }}
      ></div>
      <h2 className="text-3xl  sm:text-4xl md:text-5xl font-bold mb-4 md:mb-2 capitalize text-white">
        achievements
      </h2>
      <p className="text-sm  sm:text-base md:text-lg text-[#B19EEF] max-w-xl">
        Here are some of the key courses and programs I have completed to
        enhance my <span style={{ color: "#FF9FFC" }}>front-end</span> and{" "}
        <span style={{ color: "#FF9FFC" }}>UI/UX</span> skills.
      </p>
    </Animate>
  );
};

export default AchievementHero;
