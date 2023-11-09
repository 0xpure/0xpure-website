import React, { Suspense } from "react";
import avatar from "../img/avatar2.jpg";
import { useState, useEffect } from "react";

const AboutMobile = React.lazy(() => import("./mobile/AboutMobile"));
const SkillsMobile = React.lazy(() => import("./mobile/SkillsMobile"));
const PortfolioMobile = React.lazy(() => import("./mobile/PortofolioMobile"));

function UserBlog() {
  const [isVisible, setVisible] = useState(false);
  const [x, setX] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [isMobileWidth, setMobileWidth] = useState("w-1/4 p-8");
  const [isMobileImage, setMobileImage] = useState(
    "xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 md:w-24 md:h-24 3xl:w-80 3xl:h-80 sm:w-24 sm:h-24"
  );
  const [mobileFragment, setMobileFragment] = useState("");

  const fonts = [
    "font-Poppins",
    // "font-Railway",
    "font-Playfair",
    "font-Lora",
    "font-Arvo",
    "font-Orkney",
    "font-Handlee",
    "font-Delius",
    "font-Patrick",
  ];
  const [currentFont, setCurrentFont] = useState(fonts[0]);

  useEffect(() => {
    const timeoutOpacity = setTimeout(() => {
      setVisible(true);
    }, 700);
    const timeoutX = setTimeout(() => {
      setX(true);
    }, 2000);

    if (window.matchMedia("only screen and (max-width: 760px)").matches) {
      setMobile(true);
      setMobileWidth("w-full p-3");
      setMobileImage("w-28 h-28");
      setCurrentFont["font-Poppins"];
    }

    const timer = setInterval(() => {
      if (isMobile == true) {
        const randomIndex = Math.floor(Math.random() * fonts.length);
        setCurrentFont(fonts[randomIndex]);
      }
    }, 200);

    return () => {
      clearTimeout(timeoutOpacity);
      clearTimeout(timeoutX);
      clearInterval(timer);
    };
  }, []);

  function MobileFragmentFunction() {
    if (isMobile) {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="flex justify-center flex-row">
              <span
                className="p-2 font-Poppins text-black-blue-dark-darker font-semibold"
                onClick={() => {
                  setMobileFragment(<AboutMobile />);
                }}
              >
                About
              </span>
              <span
                className="p-2 font-Poppins text-black-blue-dark-darker font-semibold"
                onClick={() => {
                  setMobileFragment(<SkillsMobile />);
                }}
              >
                Skills
              </span>
              <span
                className="p-2 font-Poppins text-black-blue-dark-darker font-semibold"
                onClick={() => {
                  setMobileFragment(<PortfolioMobile />);
                }}
              >
                Portfolio
              </span>
            </div>
            {mobileFragment}
          </Suspense>
        </div>
      );
    }
  }

  return (
    <div
      className={`z-10 overflow-y-auto flex flex-col h-full ${isMobileWidth} items-center justify-start transform transition-all ease-in-out duration-1000 ${
        isVisible ? "absolute opacity-100" : " absolute opacity-0"
      }
      ${
        x
          ? "translate-x-0 relative"
          : "absolute xl:translate-x-[150%] lg:translate-x-[100%] sm:translate-x-[150%] "
      }`}
    >
      <div className="flex">
        <img
          src={avatar}
          alt="That not me, just an image"
          className={`${isMobileImage} rounded-full`}
        ></img>
      </div>

      <div>
        <span
          className={`flex ${currentFont} ${
            isMobile ? "font-bold" : "font-bold"
          } xl:text-2xl 2xl:text-3xl md:text-xs sm:text-sm 3xl:text-6xl mt-5 text-black-blue-dark`}
        >
          pureheroky
        </span>
      </div>

      <div>
        <span
          className={`flex xl:text-xl 2xl:text-2xl md:text-xs sm:text-xs 3xl:text-4xl font-Poppins font-normal m-3 text-center`}
        >
          17 y.o Fullstack/Python software developer
        </span>
      </div>

      <MobileFragmentFunction />

      <div className="flex flex-col h-full justify-end items-center">
        <span className="xl:text-2xl 2xl:text-2xl md:text-xs sm:text-sm 3xl:text-5xl font-Poppins font-bold">
          Contacts:
        </span>
        <div className="font-Poppins font-thin flex flex-col">
          <span className="flex hover:font-extrabold justify-center xl:text-xl 2xl:text-2xl md:text-xs sm:text-xs 3xl:text-2xl ">
            Git:
            <a
              href="https://github.com/0xpure"
              target="_blank"
              className="pl-2"
            >
              github.com/0xpure
            </a>
          </span>
          <span className="flex hover:font-extrabold justify-center xl:text-xl 2xl:text-2xl md:text-xs sm:text-xs 3xl:text-2xl">
            Telegram:
            <a href="https://t.me/psychopure" target="_blank" className="pl-2">
              t.me/pureheroky
            </a>
          </span>
          <span className="flex hover:font-extrabold justify-center xl:text-xl 2xl:text-2xl md:text-xs sm:text-xs 3xl:text-2xl">
            Discord:
            <a href="https://discord.com/login" className="pl-2">
              pureheroky
            </a>
          </span>
          <span className="flex hover:font-extrabold justify-center xl:text-xl 2xl:text-2xl md:text-xs sm:text-xs 3xl:text-2xl">
            Gmail:
            <a
              href="mailto:pureheroky@gmail.com"
              target="_blank"
              className="pl-2"
            >
              pureheroky
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserBlog;
