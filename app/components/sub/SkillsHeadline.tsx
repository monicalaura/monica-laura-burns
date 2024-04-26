"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillsHeadline = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] mb-4 border border-purpleBlue opacity-[0.9]"
      >
        <SparklesIcon className="text-lightBlue mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[14px] text-lightBlue">
          Challenging limits, exploring new frontiers
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="lg:text-[45px] text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Using latest technology to bring ideas to life
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="lg:text-[25px] text-[20px] text-lightBlue mb-10 mt-[10px] text-center"
      >
        Meet the deadlines, focus on quality
      </motion.div>
    </div>
  );
};

export default SkillsHeadline;
