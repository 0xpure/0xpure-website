import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

function About() {
  const [randomString, setRandomString] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    toggleVisibility();
    const generateRandomString = () => {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let newString = "";
      for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        newString += characters.charAt(randomIndex);
      }
      setRandomString(newString);
    };

    generateRandomString();
    const intervalId = setInterval(generateRandomString, 25);

    return () => clearInterval(intervalId);
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const springs = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(50%)",
  });

  return (
    <animated.div
      style={springs}
      className="flex w-full h-full xl:p-24 md:p-2 justify-center"
    >
      <div className="flex border-2 border-gradient w-full backdrop-brightness-95 p-8 xl:text-xl 2xl:text-2xl md:text-xs sm:text-base text-xs text-vanilla rounded-lg">
        <div className="flex h-full justify-center flex-col font-light font-Poppins">
          <span>
            <span className="font-bold">Name: </span>
            <span className="italic">{randomString}</span> .
          </span>
          <span>
            <span className="font-bold mr-2">Age:</span> 17.
          </span>
          <span>
            <span className="font-bold mr-2">Hometown:</span> Penza, Russia.
          </span>
          <span>
            <span className="font-bold mr-2">Education:</span> secondary
            education in software engineering/programming.
          </span>
          <span>
            <span className="font-bold mr-2">Experience in programming:</span>
            starting from 2018, about 4-5 years.
          </span>
          <span>
            <span className="font-bold mr-2">Communication languages:</span>
            english, russian, hebrew.
          </span>
          <span className="mt-5">
            I started my journey into programming by mastering Python as the
            most mainstream language at that time, after familiarizing myself
            with the Django/Flask frameworks and others, I decided to switch to
            full-stack development, which I continue to do to this day, also
            learning neural networks and etc.
          </span>
        </div>
      </div>
    </animated.div>
  );
}

export default About;
