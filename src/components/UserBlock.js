import React, { Suspense } from "react";
import avatar from "./img/avatar5.png";
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
    "xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 md:w-24 md:h-24 3xl:w-80 3xl:h-80 sm:w-24 sm:h-24 w-20 h-20"
  );
  const [mobileFragment, setMobileFragment] = useState("");


  const fonts = [
    "font-Poppins",
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

    const timer = setInterval(() => {
      if (window.matchMedia("only screen and (max-width: 900px)").matches) {
        setMobile(true);
        setMobileWidth("w-full p-3");
        setMobileImage("w-28 h-28");
        // eslint-disable-next-line no-unused-expressions
        setCurrentFont["font-Poppins"];
      } else {
        setMobile(false);
        setMobileWidth("w-1/4 p-8");
        setMobileImage(
          "xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 md:w-44 md:h-44 3xl:w-80 3xl:h-80 sm:w-36 sm:h-36 w-24 h-24"
        );
      }
      if (isMobile === true) {
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
                className="p-2 cursor-pointer font-Poppins text-black-blue-dark-darker font-semibold"
                onClick={() => {
                  setMobileFragment(<AboutMobile />);
                }}
              >
                About
              </span>
              <span
                className="p-2 cursor-pointer font-Poppins text-black-blue-dark-darker font-semibold"
                onClick={() => {
                  setMobileFragment(<SkillsMobile />);
                }}
              >
                Skills
              </span>
              <span
                className="p-2 cursor-pointer font-Poppins text-black-blue-dark-darker font-semibold"
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
      className={`z-10 overflow-y-auto flex overflow-hidden flex-col h-full ${isMobileWidth} items-center justify-start transform transition-all ease-in-out duration-1000 ${
        isVisible ? "absolute opacity-100" : " absolute opacity-0"
      }
      ${
        x
          ? "translate-x-0 relative"
          : "absolute xl:translate-x-[150%] lg:translate-x-[100%] sm:translate-x-[150%] "
      }`}
    >
      <div className="flex w-full justify-center">
        <img
          src={avatar}
          alt="avatar"
          className={`${isMobileImage} rounded-full`}
        ></img>
      </div>

      <div className="flex w-full justify-center">
        <span
          className={`flex ${currentFont} ${
            isMobile ? "font-bold" : "font-bold"
          } xl:text-2xl 2xl:text-3xl md:text-base sm:text-sm 3xl:text-6xl text-base mt-5 text-black-blue-dark`}
        >
          pureheroky
        </span>
      </div>

      <div>
        <span
          className={`flex xl:text-xl 2xl:text-2xl md:text-base sm:text-xs 3xl:text-4xl text-sm font-Poppins font-normal m-3 text-center`}
        >
          18 y.o Fullstack/Python software developer
        </span>
      </div>

      <MobileFragmentFunction />

      <div className="flex flex-col h-full justify-end items-center">
        <span className="xl:text-2xl 2xl:text-3xl md:text-base sm:text-sm 3xl:text-5xl text-base font-Poppins font-bold">
          socials:
        </span>
        <div className="font-Poppins font-thin flex flex-col">
          <span className="flex hover:font-extrabold justify-center xl:text-xl 2xl:text-2xl md:text-xs sm:text-xs 3xl:text-2xl text-xs">
            Git:
            <a
              href="https://github.com/pureheroky"
              target="_blank"
              className="pl-2" rel="noreferrer"
            >
              github.com/pureheroky
            </a>
          </span>
          <span className="flex hover:font-extrabold justify-center xl:text-xl 2xl:text-2xl md:text-xs sm:text-xs 3xl:text-2xl text-xs">
            Telegram:
            <a href="https://t.me/psychopure" target="_blank" className="pl-2" rel="noreferrer">
              t.me/pureheroky
            </a>
          </span>
          <span className="flex hover:font-extrabold justify-center xl:text-xl 2xl:text-2xl md:text-xs sm:text-xs 3xl:text-2xl text-xs">
            Discord:
            <a href="https://discord.com/login" className="pl-2">
              pureheroky
            </a>
          </span>
          <span className="flex hover:font-extrabold justify-center xl:text-xl 2xl:text-2xl md:text-xs sm:text-xs 3xl:text-2xl text-xs">
            Gmail:
            <a
              href="mailto:pureheroky@gmail.com"
              target="_blank"
              className="pl-2" rel="noreferrer"
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
