import React from "react";

const Awards = () => {
  return (
    <div className="flex flex-col items-center h-[calc(100vh-5rem)]">
      <div
        id="about"
        className="bg-secondary flex flex-col items-center w-full p-6 py-12 gap-10 md:h-2/3 md:justify-evenly lg:flex-row lg:h-1/2"
      >
        <h1 className="text-primary text-5xl font-bold text-center md:text-7xl">
          About The Play
        </h1>
        <h2 className="text-primary text-xl text-center max-w-2xl md:text-3xl lg:text-justify">
          A fascinating drama about the journey of a common man who, in order to
          get a solution to his problems, decides to meet a man who lives
          different characters in his real life. Ironically, the artist seeks
          help from the common man to solve his own problems. Will they both be
          able to help each other?
        </h2>
      </div>
      <div className="w-screen flex-grow lg:h-1/2 bg-[#000] flex justify-center">
        <img
          src={require("../assets/winner.jpg")}
          alt="awards"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Awards;
