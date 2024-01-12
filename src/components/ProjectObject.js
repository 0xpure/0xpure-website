import React, { useState, useEffect } from "react";

import ProjectList from "./Projects/ProjectsInfo";
import ProjectFrame from "./ProjectFrame";

function Project() {
  const [isMobile, setMobile] = useState(false);
  const [prFrame, setPrFrame] = useState("");
  useEffect(() => {
    if (window.matchMedia("only screen and (max-width: 760px)").matches) {
      setMobile(true);
    }
  }, []);

  const showProjectWindow = (
    name,
    url,
    img,
    status,
    id,
    date,
    description,
    colorStatus
  ) => {
    if (!prFrame) {
      setPrFrame(
        <ProjectFrame
          projectName={name}
          projectGitLink={url}
          projectStatus={status}
          projectImg={img}
          projectId={id}
          projectDate={date}
          projectDesc={description}
          close={Close}
          colorStatus={colorStatus}
        />
      );
    }
  };

  const Close = () => {
    setPrFrame("");
  };

  return (
    <div className="flex absolute flex-col justify-center h-3/4 xl:p-12 md:p-12">
      <div
        className={`grid grid-cols-2 h-full flex-col overflow-y-scroll scrollbar overflow-x-hidden`}
      >
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
            default:
              break;
          }
          if (status === "If you're on the site now,\n it's probably working") {
            colorStatus = "";
          }

          return (
            <div
              className="group relative h-[260px] w-64 lg:w-80 2xl:w-[500px] 2xl:h-60 xl:m-5 md:h-44 md:m-1 m-0"
              key={id}
            >
              {isMobile ? (
                <a href={url} target="_blank" rel="noreferrer">
                  <div
                    className="border cursor-pointer rounded-lg bg-cover bg-center h-[260px] w-64 lg:w-80 2xl:w-[500px] md:h-44 2xl:h-60 transition duration-300 ease-in-out transform group-hover:opacity-70"
                    style={{ backgroundImage: `url(${img})` }}
                  ></div>
                  <div className="absolute h-full rounded-lg cursor-pointer inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
                  <div className="absolute inset-0 transition duration-300 ease-in-out group-hover:flex flex-col hidden justify-center items-center h-full">
                    <span className="xl:text-2xl 2xl:text-3xl md:text-xs sm:text-sm 3xl:text-6xl text-center">
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
              ) : (
                <div
                  onClick={() => {
                    showProjectWindow(
                      name,
                      url,
                      img,
                      status,
                      id,
                      date,
                      description,
                      colorStatus
                    );
                  }}
                  className="cursor-pointer"
                >
                  <div
                    className="border cursor-pointer rounded-lg bg-cover bg-center h-[240px] w-64 lg:w-80 2xl:w-[500px] md:h-44 2xl:h-60 transition duration-300 ease-in-out transform group-hover:opacity-70"
                    style={{ backgroundImage: `url(${img})` }}
                  ></div>
                  <div className="absolute h-full rounded-lg cursor-pointer inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
                  <div className="absolute inset-0 transition duration-300 ease-in-out group-hover:flex flex-col hidden justify-center items-center h-full">
                    <span className="xl:text-2xl 2xl:text-3xl md:text-lg sm:text-xs 3xl:text-6xl text-center">
                      {name}
                    </span>
                    <span className="flex flex-col items-center xl:mt-3 md:mt-1">
                      Current status:{" "}
                      <span className={` ${colorStatus} text-center`}>
                        {status}
                      </span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {prFrame}
    </div>
  );
}

export default Project;
