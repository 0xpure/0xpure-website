import React from "react";

function About() {
  return (
    <div className="flex w-full h-full xl:p-24 md:p-2 justify-center">
      <div className="flex w-full backdrop-brightness-95 p-8 xl:text-2xl 2xl:text-3xl md:text-xs sm:text-sm 3xl:text-6xl text-vanilla rounded-lg">
        <div className="flex flex-col">
          <span>Name: Arseniy.</span>
          <span>Age: 17.</span>
          <span>Hometown: Penza, Russia.</span>
          <span>
            Education: Secondary education in software engineering/programming.
          </span>
          <span>
            Experience in programming: starting from 2018, about 4-5 years.
          </span>
          <span>Communication languages: English, russian, hebrew.</span>
          <span className="mt-5">
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

export default About;
