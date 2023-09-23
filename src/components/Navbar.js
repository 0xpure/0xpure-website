import React from "react";

function Navbar() {
  return (
    <div className="flex w-full items-start ">
      <div className="flex w-full bg-cherry-red  h-16 items-center justify-center">
        <div className=" text-peach font-Poppins font-semibold flex flex-row gap-16">
          <span>About</span>
          <span>Skills</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
