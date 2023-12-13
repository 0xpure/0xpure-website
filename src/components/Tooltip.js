import React from "react";
import { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {isTooltipVisible ? (
        <div className="absolute -top-4 left-full transform translate-x-2 bg-gray-800 text-white p-2 rounded z-10 sm:text-sm md:text-base lg:text-lg xl:text-lg">
          {text}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Tooltip;
