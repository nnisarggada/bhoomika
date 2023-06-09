import React from "react";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col justify-evenly items-center p-12 gap-10">
      <h1 className="text-4xl font-bold">The Journey Within</h1>
      <h3 className="text-xl text-center">
        Without even an interval, we are continuously playing one or the other
        character
      </h3>
      <button
        onClick={() =>
          window.open("https://www.youtube.com/watch?v=UCl-l-DXjf0", "_blank")
        }
        className="text-xl text-center text-text bg-primary drop-shadow-2xl w-60 h-16 rounded-lg hover:-translate-y-2 hover:transition-all hover:duration-300 hover:ease-in-out"
      >
        Watch Trailer
      </button>
      <img src={require("../assets/hero.png")} alt="hero" />
    </div>
  );
};

export default Hero;
