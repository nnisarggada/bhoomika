import React from "react";

const Awards = () => {
  return (
    <div id="about" className="h-section flex flex-col items-center]">
      <div className="bg-secondary flex flex-col items-center w-full p-6 py-12 gap-10 h-full md:justify-evenly lg:flex-row">
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
      <div className="bg-secondary flex flex-col items-center w-full p-6 py-12 gap-10 h-full md:justify-evenly lg:flex-row">
        <h1 className="text-primary text-3xl font-bold text-center lg:text-5xl">
          Credits
        </h1>
        <h2 className="text-primary text-sm text-center max-w-2xl md:text-xl lg:text-justify lg:text-2xl">
          Gujarati Translation (Mentor): Prof. Dipti Buch
          <br />
          Lighting design & operation : Amogh Pisal
          <br />
          Music operation: Shubham Bhanushali Song Mix &
          <br />
          Master: Aditya Kumar, Rudransh Thakur
          <br />
          Song Composition & Vocals: Harnish Dave
          <br />
          Song Production: Manan Mehta, Harsh Joisar
          <br />
          Background vocals: Glory Massey
          <br />
          Makeup: Jitendra Shinde
          <br />
          Voice over: Siddharth Dhakan & Dharmendra Gohil
          <br />
          Production Manager: Vedika Sethi, Harshil Savla
          <br />
          An Artistic Humans Production
        </h2>
      </div>
    </div>
  );
};

export default Awards;
