import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useSpring, animated } from "@react-spring/web";

export default function ProjectFrame({
  projectName,
  projectDesc,
  projectDate,
  projectGitLink,
  projectImg,
  projectStatus,
  projectId,
  close,
  colorStatus,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    toggleVisibility();
  }, []);

  const springs = useSpring({
    opacity: isVisible ? 1 : 0,
    // transform: isVisible ? "translateY(0)" : "translateY(-50%)",
  });

  return (
    <animated.div
      className="absolute w-full h-full z-20"
      style={springs}
    >
      <div className="absolute w-full h-full inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-black-blue-dark border-2 border-gradient -translate-y-1/2 rounded shadow-lg">
          <div className="flex-col justify-center font-Poppins ">
            <div className="flex fixed w-full justify-end p-1 md:text-5xl text-xl xl:p-4">
              <CloseIcon
                className="xl:text-xl md:text-base text-xl text-vanilla cursor-pointer"
                onClick={() => {
                  close();
                }}
              />
            </div>
            <div className="flex h-full flex-row justify-around items-center 2xl:p-14 xl:-6 p-2 m-5 2xl:m-0">
              <div className="flex h-full justify-center flex-col items-center w-40 xl:w-64 2xl:w-96 2xl:mt-0 mr-14">
                <img
                  src={projectImg}
                  className="w-24 md:w-36 xl:w-56 2xl:w-96 rounded-xl"
                  alt="project"
                ></img>
                <div className="xl:pt-4">
                  <span className="flex font-Poppins 2xl:text-2xl xl:text-xl md:text-xs text-xs text-vanilla font-bold text-center">
                    {projectName}
                  </span>
                </div>
                <div className="xl:pt-2 w-full text-center">
                  <span className="font-Poppins 2xl:text-2xl xl:text-xl lg:text-xs text-xs text-vanilla font-bold">
                    Status:{" "}
                    <span className={`${colorStatus}`}>{projectStatus}</span>
                  </span>
                </div>
                <div className="xl:pt-2">
                  <span className="font-Poppins 2xl:text-xl xl:text-lg md:text-xs text-xs text-vanilla font-bold text-center">
                    Date of creation: {projectDate}
                  </span>
                </div>
              </div>
              <div className="flex h-full flex-col items-center w-40 xl:w-64 2xl:w-96 2xl:ml-0 ml-14">
                <span className="font-Poppins 2xl:text-xl xl:text-lg md:text-xs text-xs text-vanilla text-center">
                  Description:
                </span>
                <span className="font-Poppins pt-2 whitespace-pre-line 2xl:text-xl text-xs text-vanilla text-center">
                  {projectDesc}
                </span>
                <a
                  className="flex p-2 2xl:text-xl xl:text-lg md:text-xs text-xs mt-auto bg-black rounded-md w-full"
                  href={projectGitLink}
                  target="_blank" rel="noreferrer"
                >
                  <span className="w-full text-center hover:font-bold">
                    Find more on git
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
