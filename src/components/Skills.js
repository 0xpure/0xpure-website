import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import skills from "./Projects/skills";

function Skills() {
  const [searchItem, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [filteredItems, setFilteredItems] = useState(skills);

  useEffect(() => {
    toggleVisibility();
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const springs = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(50%)",
  });

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchItem);

    const filteredItems = skills.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredItems(filteredItems);
  };

  return (
    <animated.div
      style={springs}
      className="flex w-full h-full xl:p-3 md:p-1 justify-center"
    >
      <div className="flex w-full border-2 border-gradient backdrop-brightness-95 p-8 xl:text-2xl 2xl:text-3xl md:text-xs sm:text-sm 3xl:text-6xl text-black-blue-dark flex-col rounded-lg">
        <div className="flex w-full ">
          <div className="flex flex-row w-full ">
            <input
              type="text"
              placeholder="Search..."
              className="w-full xl:text-xl xl:m-2 xl:p-2 font-Poppins font-semibold md:m-2 md:p-1 bg-periwinkle backdrop-brightness-50 rounded-md focus:outline-none "
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="flex w-full flex-col justify-center h-3/4 overflow-y-scroll scrollbar overflow-x-hidden xl:p-2 md:p-0">
          <ul className=" grid grid-cols-2 h-full">
            {filteredItems.map((item, index) => (
              <li key={index} className="h-auto">
                <span className="xl:text-base 2xl:text-xl md:text-xs sm:text-sm 3xl:text-6xl font-Poppins font-light text-vanilla xl:p-5 md:p-1">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full justify-center xl:pt-2 md:pt-1 mt-auto">
          <span className="text-vanilla xl:text-base md:text-xs">
            I hope this list will grow and the search button will not be useless
            (xd)
          </span>
        </div>
      </div>
    </animated.div>
  );
}

export default Skills;
