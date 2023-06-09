import React from "react";

const Awards = () => {
  return (
    <div id="awards" className="flex flex-col items-center p-12 gap-10">
      <h1 className="text-text text-4xl font-bold">Awards</h1>
      <h2 className="text-text text-xl text-center">
        With <span className="font-semibold">17 accolades </span>Bhoomika has
        won many awards across the nation since it's inception in 2015
      </h2>
      <div className="w-screen">
        <img
          src={require("../assets/winner.jpg")}
          alt="awards"
          className="w-full"
        />
      </div>
      <div className="w-full h-80 bg-secondary rounded-xl">
        <div className="w-full h-2/3">
          <img
            src={require("../assets/award1.jpg")}
            alt="awards"
            className="h-full rounded-t-xl object-cover w-full"
          />
        </div>
        <div className="w-full h-1/3 flex flex-col justify-evenly p-4">
          <h3 className="text-background text-xl font-semibold">
            Best Proscenium Play
          </h3>
          <p className="text-background">
            National Theater Festival Baptizer 2016
          </p>
        </div>
      </div>
      <div className="w-full h-80 bg-secondary rounded-xl">
        <div className="w-full h-2/3">
          <img
            src={require("../assets/award2.jpg")}
            alt="awards"
            className="h-full rounded-t-xl object-cover w-full"
          />
        </div>
        <div className="w-full h-1/3 flex flex-col justify-evenly p-4">
          <h3 className="text-background text-xl font-semibold">Best Play</h3>
          <p className="text-background">
            National Theatre Festival BHAVAI 2016
          </p>
        </div>
      </div>
      <div className="w-full h-80 bg-secondary rounded-xl">
        <div className="w-full h-2/3">
          <img
            src={require("../assets/award3.jpg")}
            alt="awards"
            className="h-full rounded-t-xl object-cover w-full"
          />
        </div>
        <div className="w-full h-1/3 flex flex-col justify-evenly p-4">
          <h3 className="text-background text-xl font-semibold">
            Outstanding Performer
          </h3>
          <p className="text-background">
            National Theatre Festival BHAVAI 2016
          </p>
        </div>
      </div>
      <div className="w-full h-80 bg-secondary rounded-xl">
        <div className="w-full h-2/3">
          <img
            src={require("../assets/award4.jpg")}
            alt="awards"
            className="h-full rounded-t-xl object-cover w-full"
          />
        </div>
        <div className="w-full h-1/3 flex flex-col justify-evenly p-4">
          <h3 className="text-background text-xl font-semibold">Best Writer</h3>
          <p className="text-background">
            National Theatre Festival BHAVAI 2016
          </p>
        </div>
      </div>
      <div className="w-full h-80 bg-secondary rounded-xl">
        <div className="w-full h-2/3">
          <img
            src={require("../assets/award5.jpg")}
            alt="awards"
            className="h-full rounded-t-xl object-cover w-full"
          />
        </div>
        <div className="w-full h-1/3 flex flex-col justify-evenly p-4">
          <h3 className="text-background text-xl font-semibold">Best Play</h3>
          <p className="text-background">
            P. L. Deshpande Hindi One Act Play Competition 2016
          </p>
        </div>
      </div>
      <div className="w-full h-80 bg-secondary rounded-xl">
        <div className="w-full h-2/3">
          <img
            src={require("../assets/award6.jpg")}
            alt="awards"
            className="h-full rounded-t-xl object-cover w-full"
          />
        </div>
        <div className="w-full h-1/3 flex flex-col justify-evenly p-4">
          <h3 className="text-background text-xl font-semibold">Best Writer</h3>
          <p className="text-background">
            P. L. Deshpande Hindi One Act Play Competition 2016
          </p>
        </div>
      </div>
      <div className="w-full h-80 bg-secondary rounded-xl">
        <div className="w-full h-2/3">
          <img
            src={require("../assets/award7.jpg")}
            alt="awards"
            className="h-full rounded-t-xl object-cover w-full"
          />
        </div>
        <div className="w-full h-1/3 flex flex-col justify-evenly p-4">
          <h3 className="text-background text-xl font-semibold">Best Actor</h3>
          <p className="text-background">
            P. L. Deshpande Hindi One Act Play Competition 2016
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
