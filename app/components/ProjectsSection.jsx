"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Campus Photograhy",
    description: "Take a look at MU's beautiful scenery",
    image: "/img/projects/image1.jpeg",
    tag: ["All", "Photography"],
    gitUrl: "https://www.instagram.com/p/DA1FjWCx7Ms",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Clutch Coffee Photography Collage",
    description: "Grand opening of Clutch Coffee!",
    image: "/img/projects/image2.jpeg",
    tag: ["All", "Photography"],
    gitUrl: "#projects",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Cup o' Lemonade",
    description: "Testing new camera angles with a short film",
    image: "/img/projects/image3.jpeg",
    tag: ["All", "Film"],
    gitUrl: "https://streamable.com/gy61sm",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Canon Collage",
    description: "A collage of shots on my new Camera",
    image: "/img/projects/image4.jpeg",
    tag: ["All", "Photography"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Room Makeover",
    description: "Appreciate the hard-earned setup makeover!",
    image: "/img/projects/image5.jpeg",
    tag: ["All", "Film"],
    gitUrl: "https://www.youtube.com/shorts/51VpR52EVnI",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Pick a shot",
    description: "Film Motivational Short",
    image: "/img/projects/image6.jpeg",
    tag: ["All", "Film"],
    gitUrl: "https://www.tiktok.com/@its.aero/video/7252471984272100654",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
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
    <section id="projects" className="p-4">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Film"
          isSelected={tag === "Film"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Photography"
          isSelected={tag === "Photography"}
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
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
