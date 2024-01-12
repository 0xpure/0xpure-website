import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import ProjectList from "../Projects/ProjectsInfo";

function ProjectMobile() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    toggleVisibility();
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const springs = useSpring({
    width: "100%",
    from: { width: "0%" },
    config: { duration: 1000 },
    opacity: isVisible ? 1 : 0,
  });

  return (
    <animated.div style={springs} className="flex w-full justify-center mt-1">
      <div className={`flex flex-col w-full h-80 overflow-y-scroll`}>
        {Object.keys(ProjectList).map((prj) => {
          const prData = ProjectList[prj];
          const [name, url, img, status, id, isWorking, date, description] =
            prData;
          let colorStatus;
          switch (isWorking) {
            case undefined:
              colorStatus = "text-aqua";
              break;
            case true:
              colorStatus = "text-green-600";
              break;
            case false:
              colorStatus = "text-red-600";
              break;
            case null:
              colorStatus = "text-sky-400";
              break;
          }
          if (status == "If you're on the site now,\n it's probably working") {
            colorStatus = "";
          }
          return (
            <div className="group relative m-2" key={id}>
              <div
                className="border cursor-pointer rounded-lg bg-cover bg-center h-36 transition duration-300 ease-in-out transform group-hover:opacity-70"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
              <div className="absolute rounded-lg cursor-pointer inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
              <div className="absolute inset-0 transition duration-300 ease-in-out group-hover:flex flex-col hidden justify-center items-center h-full">
                <span className="text-sm">
                  <a href={url} target="_blank">
                    {name}
                  </a>
                </span>
                <span className="flex flex-col items-center mt-1">
                  Current status:{" "}
                  <span className={` ${colorStatus} text-center`}>
                    {status}
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </animated.div>
  );
}

export default ProjectMobile;
