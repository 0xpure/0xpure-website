import React, { useEffect, useState } from "react";

function AboutMobile() {
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
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
  return (
    <div className="flex w-full p-2 justify-center">
      <div className="flex w-full backdrop-brightness-95 p-2 text-base text-black-blue-dark font-semibold rounded-lg">
        <div className="flex flex-col">
          <span>
            Name: <span className="italic">{randomString}</span>.
          </span>
          <span>Age: 17.</span>
          <span>Hometown: Penza, Russia.</span>
          <span>
            Education: Secondary education in software engineering/programming.
          </span>
          <span>
            Experience in programming: starting from 2018, about 4-5 years.
          </span>
          <span>Communication languages: English, russian, hebrew.</span>
          <span className="mt-1">
            Personal story: I started my journey into programming by mastering
            Python as the most mainstream language at that time, after
            familiarizing myself with the Django/Flask frameworks and others, I
            decided to switch to full-stack development, which I continue to do
            to this day.
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutMobile;
