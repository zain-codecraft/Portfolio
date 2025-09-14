'use client';
import React from "react";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/textgenerateeffect";
import Magicbutton from "./ui/bordermagic";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-8 pt-16 md:pt-36 bg-no-repeat w-screen h-[80vh] md:h-[40vw] mb-10 relative overflow-hidden">
       <div>
        <Spotlight className=" absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen " fill="white"/>
        <Spotlight className="absolute top-10 left-full  h-80vh w-[50vw] " fill="purple"/>
        <Spotlight className="absoulute top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
        </div>

      <div className="absolute inset-0 h-full w-full flex items-center justify-center bg-white dark:bg-Black-100 bg-grid-black/[0.3] dark:bg-grid-white/[0.03]">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] [mask-size:cover]" />

        <div className="flex flex-col justify-center items-center text-center max-w-[90vw] md:max-w-2xl mx-4 z-10">
          <h2 className="uppercase tracking-widest text-xs text-blue-100 mb-1 md:mb-4">
            Dynamic web magic with Next.js
          </h2>

          <TextGenerateEffect
            className="text-[32px] md:text-5xl lg:text-6xl mb-2 md:mb-6"
            duration={0.8}
            words="Transforming Concepts into Seamless User Experiences"
          />

          <p className="text-sm md:text-lg mb-0">
            Hi, I am Zain, a Software Engineer based in Pakistan!
          </p>
          <a href="#about">
            <Magicbutton title={"Show My Work"} icon={<FaLocationArrow/> } position="right"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
