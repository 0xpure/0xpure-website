import React from "react";

const Projects = React.lazy(() => import("./ProjectObjectMobile"));

function PortfolioMobile() {
  return (
    <div className="flex w-full p-2 justify-center">
      <div className="flex w-full backdrop-brightness-95 p-4 text-base text-vanilla flex-col rounded-lg">
        <div className="flex justify-center items-center flex-col">
          <span className="text-base">websites/projects that i made</span>
          <span className="text-sm text-center">
            I publish only those projects that are currently working.
          </span>

          <span className="text-sm text-center">
            (If they stop working their status will be changed).
          </span>
        </div>
        <div className="flex items-center">{<Projects />}</div>
      </div>
    </div>
  );
}

export default PortfolioMobile;
