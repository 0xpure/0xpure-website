import React from "react";

import ProjectList from "../Projects/ProjectsInfo";

function ProjectMobile() {
  return (
    <div className="flex w-full justify-center mt-1">
      <div className={`flex flex-col w-full h-80 overflow-y-scroll`}>
        {Object.keys(ProjectList).map((prj) => {
          const prData = ProjectList[prj];
          const [name, url, img, status, id, isWorking] = prData;
          const colorStatus = isWorking
            ? "text-green-600"
            : "text-red-600" & "";
          return (
            <div
              className="group relative m-2"
              key={id}
            >
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
    </div>
  );
}

export default ProjectMobile;
