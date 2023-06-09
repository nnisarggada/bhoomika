import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondary text-background h-20 flex justify-center items-center text-sm lg:text-lg">
      <p>
        <span
          onClick={() => window.open("https://artistichumans.com", "_blank")}
          className="cursor-pointer hover:underline"
        >
          Artistic Humans
        </span>{" "}
        &copy; 2023 | Developed by{" "}
        <span
          onClick={() => window.open("https://nnisarg.xyz", "_blank")}
          className="cursor-pointer text-accent hover:underline"
        >
          Nnisarg Gada
        </span>
      </p>
    </div>
  );
};

export default Footer;
