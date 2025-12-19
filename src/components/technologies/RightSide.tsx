import Animate from "../common/Animate";

const RightSide = () => {
  return (
    <Animate className="w-full md:max-w-xl lg:max-w-2xl relative">
      {/* Decorative Corners */}
      <div
        className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 rounded-tl-lg border-l-4 border-t-4 opacity-60"
        style={{ borderColor: "#FF9FFC" }}
      ></div>

      <div
        className="absolute -bottom-4 -right-4 w-12 h-12 md:w-16 md:h-16 rounded-br-lg border-r-4 border-b-4 opacity-60"
        style={{ borderColor: "#FF9FFC" }}
      ></div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold   capitalize text-white">
        Technology
      </h2>

      {/* Subtitle */}
      <h3
        className="text-sm  sm:text-base md:text-lg text-[#B19EEF] max-w-xl mb-4 md:mb-6"
        style={{ color: "#B19EEF" }}
      >
        These are the skills and technologies I work with every day.
      </h3>

      {/* Paragraph */}
      <p
        className="text-base sm:text-lg leading-relaxed"
        style={{ color: "#B19EEF" }}
      >
        I specialize in building modern, responsive, and user-focused web
        interfaces.I’m always exploring new tools and pushing my skills forward
        to create clean, scalable, and high-performance applications.
      </p>

      {/* Small Decorative Circles */}
      <div className="flex gap-3 mt-6 md:mt-8">
        <div className="w-2 h-2 rounded-full my-dark-bg"></div>
        <div className="w-2 h-2 rounded-full my-pink-bg"></div>
        <div className="w-2 h-2 rounded-full my-light-bg"></div>
      </div>
    </Animate>
  );
};

export default RightSide;
