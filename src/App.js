import React, { useState, useEffect } from "react";

const UserBlock = React.lazy(() => import("./components/UserBlock"));
const MainContent = React.lazy(() => import("./components/MainContent"));

function App() {
  const [jusitfy, setJustify] = useState(false);
  const [isMobile, setMobile] = useState("flex-row");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setJustify(true);
    }, 500);
    if (window.matchMedia("only screen and (max-width: 760px)").matches) {
      setMobile("flex-col");
    }

    const inter = setInterval(() => {
      if (window.matchMedia("only screen and (max-width: 760px)").matches) {
        setMobile("flex-col");
      } else {
        setMobile("flex-row");
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      clearInterval(inter);
    };
  }, [jusitfy]);

  return (
    <div className=" bg-periwinkle flex w-full h-full flex-col">
      <div className={`bg-periwinkle flex ${isMobile} w-full h-full`}>
        <UserBlock />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
