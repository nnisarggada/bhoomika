import React from "react";

const Awards = () => {
  const AwardCard = ({ award, location, image }) => {
    return (
      <div className="w-full h-80 bg-secondary rounded-xl">
        <div className="w-full h-2/3">
          <img
            src={require("../assets/" + image + ".jpg")}
            alt="awards"
            className="h-full rounded-t-xl object-cover w-full"
          />
        </div>
        <div className="w-full h-1/3 flex flex-col justify-evenly p-4">
          <h3 className="text-background text-xl font-semibold">{award}</h3>
          <p className="text-background">{location}</p>
        </div>
      </div>
    );
  };

  return (
    <div id="awards" className="flex flex-col items-center p-12 gap-10">
      <h1 className="text-text text-4xl font-bold">Awards</h1>
      <h2 className="text-text text-xl text-center">
        With <span className="font-semibold text-accent">17 accolades </span>
        Bhoomika has won many awards across the nation since it's inception in
        2015
      </h2>
      <div className="w-screen">
        <img
          src={require("../assets/winner.jpg")}
          alt="awards"
          className="w-full"
          loading="lazy"
        />
      </div>
      <AwardCard
        award="Best Proscenium Play"
        location="National Theatre Festival Baptizer 2016"
        image="award1"
      />
      <AwardCard
        award="Best Play"
        location="National Theatre Festival BHAVAI 2016"
        image="award2"
      />
      <AwardCard
        award="Outstanding Performer"
        location="National Theatre Festival BHAVAI 2016"
        image="award3"
      />
      <AwardCard
        award="Best Writer"
        location="National Theatre Festival BHAVAI 2016"
        image="award4"
      />
      <AwardCard
        award="Best Play"
        location="P.L. Deshpande Hindi One Act Play Competition 2016"
        image="award5"
      />
      <AwardCard
        award="Best Writer"
        location="P.L. Deshpande Hindi One Act Play Competition 2016"
        image="award6"
      />
      <AwardCard
        award="Best Actor"
        location="P.L. Deshpande Hindi One Act Play Competition 2016"
        image="award7"
      />
    </div>
  );
};

export default Awards;
