"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";
import { projectsData } from "@/data";
import ProjectTag from "../sub/ProjectTag";

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-10 lg:px-12"
    >
      <h2 className="text-center text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purpleBlue to-lightBlue mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-wrap md:flex-row justify-center items-center gap-2 py-6 projTabs">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React.js"
          isSelected={tag === "React.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="JavaScript"
          isSelected={tag === "JavaScript"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web Design"
          isSelected={tag === "Web Design"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Collaboration"
          isSelected={tag === "Collaboration"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl ?? ""}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
