import React from "react";

function About() {
  return (
    <div className="flex w-full h-full xl:p-24 md:p-2 justify-center">
      <div className="flex border-2 border-gradient w-full backdrop-brightness-95 p-8 xl:text-2xl 2xl:text-2xl md:text-xs sm:text-sm 3xl:text-6xl text-vanilla rounded-lg">
        <div className="flex h-full justify-center flex-col font-light font-Poppins">
          <span>
            <span className="font-bold">Name:</span> Arseniy.
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
    </div>
  );
}

export default About;
