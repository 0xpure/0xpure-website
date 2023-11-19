import React, { useState, useEffect } from "react";

import ProjectList from "./Projects/ProjectsInfo";
const numberOfProjects = Object.keys(ProjectList).length;

function Project() {
  const [cols, setCols] = useState(2);
  useEffect(() => {
    if (numberOfProjects == 1) {
      setCols(1);
    }
  }, []);

  return (
    <div className="flex absolute flex-col justify-center h-3/4 xl:p-12 md:p-12">
      <div
        className={`grid grid-cols-2 h-full flex-col overflow-y-scroll scrollbar overflow-x-hidden`}
      >
        {Object.keys(ProjectList).map((prj) => {
          const prData = ProjectList[prj];
          const [name, url, img, status, id, isWorking] = prData;
          let colorStatus;
          console.log(isWorking);
          if (isWorking == undefined) {
            console.log("text-aqua");
            colorStatus = "text-aqua";
          } else {
            colorStatus = isWorking ? "text-green-600" : "text-red-600";
          }
          if (status == "If you're on the site now, it's probably working") {
            colorStatus = "";
          }

          return (
            <div
              className="group relative xl:h-64 xl:m-5 md:h-28 md:m-1"
              key={id}
            >
              <a href={url} target="_blank">
                <div
                  className="border cursor-pointer rounded-lg bg-cover bg-center xl:h-64 xl:w-96 md:h-28 md:w-60 transition duration-300 ease-in-out transform group-hover:opacity-70"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
                <div className="absolute rounded-lg cursor-pointer inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
                <div className="absolute inset-0 transition duration-300 ease-in-out group-hover:flex flex-col hidden justify-center items-center h-full">
                  <span className="xl:text-2xl 2xl:text-3xl md:text-xs sm:text-sm 3xl:text-6xl">
                    {name}
                  </span>
                  <span className="flex flex-col items-center xl:mt-3 md:mt-1">
                    Current status:{" "}
                    <span className={` ${colorStatus} text-center`}>
                      {status}
                    </span>
                  </span>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
