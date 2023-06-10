import React from "react";

const Awards = () => {
  return (
    <div className="flex flex-col items-center h-[calc(100vh-5rem)]">
      <div
        id="about"
        className="bg-secondary flex flex-col items-center w-full p-6 py-12 gap-10 h-1/2 md:h-1/2 md:justify-evenly lg:flex-row"
      >
        <h1 className="text-primary text-3xl font-bold text-center lg:text-5xl">
          About The Play
        </h1>
        <h2 className="text-primary text-md text-center max-w-2xl md:text-xl lg:text-justify lg:text-2xl">
          A fascinating drama about the journey of a common man who, in order to
          get a solution to his problems, decides to meet a man who lives
          different characters in his real life. Ironically, the artist seeks
          help from the common man to solve his own problems. Will they both be
          able to help each other?
        </h2>
      </div>
      <div className="w-screen flex flex-col justify-evenly h-1/2 bg-[#000] md:h-1/2 md:flex-row">
        <img
          src={require("../assets/winner1.jpg")}
          alt="awards"
          loading="lazy"
          className="h-1/2 object-contain md:h-full md:w-1/2"
        />
        <img
          src={require("../assets/winner2.jpg")}
          alt="awards"
          loading="lazy"
          className="h-1/2 object-contain md:h-full md:w-1/2"
        />
      </div>
    </div>
  );
};

export default Awards;
