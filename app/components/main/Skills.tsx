import React from "react";
import { Skill_data } from "@/data";
import SkillsData from "../sub/SkillsData";
import SkillsHeadline from "../sub/SkillsHeadline";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden lg:pb-30 py-10"
      style={{ transform: "scale(0.9" }}
    >
      <SkillsHeadline />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillsData
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-20 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/skills-video.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
