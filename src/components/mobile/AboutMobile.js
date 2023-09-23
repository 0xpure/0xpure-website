import React from "react";

function AboutMobile() {
  return (
    <div className="flex w-full p-2 justify-center">
      <div className="flex w-full backdrop-brightness-95 p-2 text-base text-black-blue-dark font-semibold rounded-lg">
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
