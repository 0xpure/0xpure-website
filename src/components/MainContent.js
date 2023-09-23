import React from "react";
import { useEffect, useState, Suspense } from "react";

const About = React.lazy(() => import("./About"));
const Skills = React.lazy(() => import("./Skills"));
const Portfolio = React.lazy(() => import("./Portfolio"));

function MainContent() {
  const [CurrentFrag, setFragment] = useState("");
  const [currentOpacity, setOpacity] = useState(false);
  const [isHidden, setHidden] = useState("")

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setOpacity(true);
    }, 3000);

    if (window.matchMedia('only screen and (max-width: 760px)').matches) {
      setHidden("hidden")
    }

    return () => clearTimeout(animationTimeout);
  }, []);



  return (
    <div
      className={`flex ${isHidden} bg-slate-blue w-3/4 h-full flex-col justify-center items-center transform transition-opacity ease-in-out duration-1000 ${
        currentOpacity ? "opacity-100" : "opacity-0 absolute"
      }`}
    >
      <div className="flex flex-row xl:text-4xl 2xl:text-5xl md:text-xs sm:text-sm 3xl:text-8xl text-vanilla xl:pt-44 xl:pr-44 xl:pl-44 md:pt-8 md:pr-8 md:pl-8">
        <div
          className="m-5 cursor-pointer hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-500 before:scale-x-0 before:bg-vanilla before:absolute before:bottom-0"
          onClick={() => setFragment(<About />)}
        >
          <span>About</span>
        </div>
        <div className="m-5">
          <span>|</span>
        </div>
        <div
          className="m-5 cursor-pointer hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-500 before:scale-x-0 before:bg-vanilla before:absolute before:bottom-0"
          onClick={() => setFragment(<Skills />)}
        >
          <span>Skills</span>
        </div>
        <div className="m-5">
          <span>|</span>
        </div>
        <div
          className="m-5 cursor-pointer hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-500 before:scale-x-0 before:bg-vanilla before:absolute before:bottom-0"
          onClick={() => setFragment(<Portfolio />)}
        >
          <span>Portfolio</span>
        </div>
        {/* <div className="m-5 cursor-pointer hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-500 before:scale-x-0 before:bg-vanilla before:absolute before:bottom-0">
          <span>Price list</span>
        </div> */}
      </div>
      <div className="flex w-full h-full justify-center items-center font-Orkney">
        <Suspense
          fallback={
            <div>
              <span>Loading</span>
            </div>
          }
        >
          {CurrentFrag}
        </Suspense>
      </div>
    </div>
  );
}

export default MainContent;
