import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const Projects = React.lazy(() => import("./ProjectObject"));
const Tooltip = React.lazy(() => import("./Tooltip"));

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    toggleVisibility();
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const springs = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(50%)",
  });

  return (
    <animated.div
      style={springs}
      className="flex w-full h-full xl:p-3 md:p-1 justify-center "
    >
      <div className="flex w-full h-full border-2 border-gradient backdrop-brightness-95 p-8 xl:text-2xl 2xl:text-3xl md:text-xs sm:text-sm 3xl:text-6xl text-vanilla flex-col rounded-lg">
        <div className="flex justify-center items-center flex-col font-Poppins">
          <span className="flex flex-row cursor-default p-4 xl:text-2xl 2xl:text-3xl md:text-xs sm:text-sm 3xl:text-6xl font-bold">
            websites/projects that i made{" "}
            <Tooltip
              text={
                "Each project has a status:\n 1.working\n 2.development\n 3.cancelled\n 4.complete"
              }
            >
              *
            </Tooltip>
          </span>
        </div>

        <div className="flex justify-center w-full items-center h-3/4">
          {<Projects />}
        </div>
      </div>
    </animated.div>
  );
}

export default Portfolio;
