import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const NavbarLink = ({ text, link }) => {
    return (
      <li
        onClick={() => {
          window.scrollTo({
            top: document.getElementById(link).offsetTop - 80,
            behavior: "smooth",
          });
          setShowMenu(false);
          document.getElementById("navmenu").classList.remove("right-0");
          document.getElementById("navmenu").classList.add("-right-80");
          document.getElementById("navmenu").classList.add("transition-all");
        }}
        className="text-primary text-xl font-bold w-full h-1/4 flex justify-center items-center hover:cursor-pointer border-2 border-primary hover:bg-primary hover:text-text transition-all"
      >
        {text}
      </li>
    );
  };

  return (
    <div className="sticky top-0 z-50 w-full h-20 flex justify-between items-center bg-primary text-text px-8">
      <h1
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-2xl font-heading font-bold cursor-pointer hover:text-background transition-all md:text-4xl"
      >
        Bhoomika ~ <span className="font-heading md:hidden">The Play</span>
        <span className="font-heading hidden md:inline">
          The Journey Within...
        </span>
      </h1>
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
        className="fixed top-20 -right-80 w-80 h-full bg-secondary bg-opacity-90 backdrop-blur-md drop-shadow-2xl"
      >
        <ul className="p-8 w-full h-96 flex flex-col gap-4">
          <NavbarLink text="Home" link="home" />
          <NavbarLink text="About" link="about" />
          <NavbarLink text="Awards" link="awards" />
          <NavbarLink text="Shows" link="shows" />
          <NavbarLink text="VOD" link="vod" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
