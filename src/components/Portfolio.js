import React from "react";

const Projects = React.lazy(() => import("./ProjectObject"));

function Portfolio() {
  return (
    <div className="flex w-full h-full xl:p-3 md:p-1 justify-center ">
      <div className="flex w-full h-full border-2 border-gradient backdrop-brightness-95 p-8 xl:text-2xl 2xl:text-3xl md:text-xs sm:text-sm 3xl:text-6xl text-vanilla flex-col rounded-lg">
        <div className="flex justify-center items-center flex-col font-Poppins">
          <span className="p-4 xl:text-2xl 2xl:text-3xl md:text-xs sm:text-sm 3xl:text-6xl font-bold">
            websites/projects that i made
          </span>
          <span className="xl:text-2xl 2xl:text-3xl md:text-xs sm:text-sm 3xl:text-6xl">
            I publish only those projects that are currently working.
          </span>

          <span className=" xl:text-2xl 2xl:text-3xl md:text-xs sm:text-sm 3xl:text-6xl">
            (If they stop working their status will be changed).
          </span>
        </div>
        
        <div className="flex justify-center w-full items-center h-3/4">{<Projects />}</div>
      </div>
    </div>
  );
}

export default Portfolio;
