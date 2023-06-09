import React from "react";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full h-20 flex justify-between items-center bg-primary text-text px-8">
      <h1 className="text-4xl font-heading font-bold">Bhoomika</h1>
      <div
        onClick={() => {
          setShowMenu(!showMenu);
          if (!showMenu) {
            document.getElementById("navmenu").classList.remove("-right-80");
            document.getElementById("navmenu").classList.add("right-0");
            document.getElementById("navmenu").classList.add("transition-all");
          } else {
            document.getElementById("navmenu").classList.remove("right-0");
            document.getElementById("navmenu").classList.add("-right-80");
            document.getElementById("navmenu").classList.add("transition-all");
          }
        }}
      >
        {!showMenu ? (
          <RiMenu3Line className="text-4xl cursor-pointer" />
        ) : (
          <RiCloseLine className="text-4xl cursor-pointer" />
        )}
      </div>
      <div
        id="navmenu"
        className="fixed top-20 -right-80 w-80 h-full bg-secondary bg-opacity-90 backdrop-blur-md"
      >
        <ul className="p-8 w-full h-80">
          <li className="text-primary text-xl font-bold w-full h-1/4 flex justify-center items-center hover:cursor-pointer hover:border-2 hover:border-primary">
            Home
          </li>
          <li className="text-primary text-xl font-bold w-full h-1/4 flex justify-center items-center hover:cursor-pointer hover:border-2 hover:border-primary">
            About
          </li>
          <li
            onClick={() => {
              window.scrollTo({
                top: document.getElementById("awards").offsetTop - 80,
                behavior: "smooth",
              });
              setShowMenu(false);
              document.getElementById("navmenu").classList.remove("right-0");
              document.getElementById("navmenu").classList.add("-right-80");
              document
                .getElementById("navmenu")
                .classList.add("transition-all");
            }}
            className="text-primary text-xl font-bold w-full h-1/4 flex justify-center items-center hover:cursor-pointer hover:border-2 hover:border-primary"
          >
            Awards
          </li>
          <li className="text-primary text-xl font-bold w-full h-1/4 flex justify-center items-center hover:cursor-pointer hover:border-2 hover:border-primary">
            Shows
          </li>
          <li className="text-primary text-xl font-bold w-full h-1/4 flex justify-center items-center hover:cursor-pointer hover:border-2 hover:border-primary">
            VOD
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
