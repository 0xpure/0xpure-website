import React, { useEffect, useState } from "react";
import { useTrail, useSpring, animated } from "@react-spring/web";

const AboutMobile = () => {
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
    height: "90%",
    from: { height: "0%" },
    config: { duration: 1000 },
  });

  // Содержимое, которое нужно анимировать
  const content = [
    "Name: " + randomString + ".",
    "Age: 17.",
    "Hometown: Penza, Russia.",
    "Education: Secondary education in software engineering/programming.",
    "Experience in programming: starting from 2018, about 4-5 years.",
    "Communication languages: English, Russian, Hebrew.",
    "Personal story: I started my journey into programming by mastering Python as the most mainstream language at that time, after familiarizing myself with the Django/Flask frameworks and others, I decided to switch to full-stack development, which I continue to do to this day.",
  ];

  // Используем useTrail для создания анимации для каждого элемента массива
  const trail = useTrail(content.length, {
    opacity: 1, // Начальная непрозрачность
    transform: "translateY(0px)", // Начальное положение
    from: { opacity: 0, transform: "translateY(20px)" }, // Конечные значения
    config: { mass: 1, tension: 500, friction: 30 }, // Настройки анимации
  });

  return (
    <animated.div style={springs} className="flex w-full p-2 justify-center">
      <div className="flex w-full backdrop-brightness-95 p-2 text-base text-black-blue-dark font-semibold rounded-lg">
        <div className="flex flex-col">
          {trail.map((props, index) => (
            <animated.div key={index} style={{ ...props, marginBottom: "8px" }}>
              <span
                className={
                  index === 0
                    ? "italic"
                    : index === content.length - 1
                    ? "mt-1"
                    : ""
                }
              >
                {content[index]}
              </span>
            </animated.div>
          ))}
        </div>
      </div>
    </animated.div>
  );
};

export default AboutMobile;
