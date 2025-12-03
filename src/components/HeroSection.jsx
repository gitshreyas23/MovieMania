import React from "react";
import heroImage from "../assets/hero.webp";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 h-96 mx-40 mt-8 rounded-3xl px-8 items-center gap-8">
      <div>
        <h1 className="text-5xl">
          This is a <strong>Movie Mania</strong> Application
        </h1>
        <p className="text-2xl mt-4 text-surface-900">
Welcome to the ultimate movie experience!</p>
      </div>

      <div>
        <img className="w-full h-full object-cover rounded-3xl" src={heroImage} />
      </div>
    </div>
  );
};

export default HeroSection;
