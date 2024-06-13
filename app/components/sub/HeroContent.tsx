"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="heroContainer flex flex-col lg:flex-row items-center justify-center lg:px-20 px-11 lg:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-4 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="lg:hidden Welcome-box py-[8px] px-[7px] border border-purpleBlue rounded-lg opacity-[0.9]"
        >
          <SparklesIcon className="text-white mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Monica Laura Burns</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 lg:text-6xl text-2xl text-white max-w-[600px] w-auto h-auto"
        >
          <span className="leading-[1.25]">
            Web Designer with a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purpleBlue to-lightBlue">
              Creative{" "}
            </span>
            Touch
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-grayBlue my-5 max-w-[600px] leading-[1.25]"
        >
          I am a dedicated web designer, and a citizen of the Digital Nation
          community. I have a strong drive to challenge limits, explore new
          frontiers, and staying up to date with the latest digital trends for a
          sustainable technology.
          <br />
          My primary focus is on user ergonomics, blending in a touch of
          creativity while meeting a project&apos;s specific requirements. I
          understand both the practical aspect and creative vision behind user
          interface design, and I translate them into functional web pages.
          <br />
          Web design is part of my daily life, and I can&apos;t always draw a
          line between job and hobby.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="btnProj py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          See my projects
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.png"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
