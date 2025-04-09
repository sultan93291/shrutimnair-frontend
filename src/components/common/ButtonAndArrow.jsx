import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const ButtonAndArrow = ({
  bgColor = "#E8C547",
  buttonText = "Get Started",
  txtColor = "",
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="flex items-center group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <button
        style={{
          backgroundColor: isHovering ? "transparent" : bgColor,
          borderColor: isHovering ? bgColor : "transparent",
          color: isHovering ? bgColor : txtColor || "#1A1A1A",
        }}
        className={`px-8 py-4 rounded-[60px] border-[2px] transition duration-300`}
      >
        {buttonText}
      </button>
      <button
        style={{
          backgroundColor: isHovering ? "transparent" : bgColor,
          borderColor: isHovering ? bgColor : "transparent",
          color: isHovering ? bgColor : txtColor || "#1A1A1A",
        }}
        className="rounded-[200px] border-[2px] transition duration-300 p-3"
      >
        <FaArrowRight className="rotate-[-45deg]" />
      </button>
    </div>
  );
};

export default ButtonAndArrow;
