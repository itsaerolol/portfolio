"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>HTML / CSS</li>
        <li>NextJS / ReactJS</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Methodist University, Bachelors in App Development</li>
        <li>Multiple Codecademy Certifications</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>Globally Accessible Home Server</li>
        <li>Web Portfolio using React / NextJS</li>
        <li>Private P2P Messaging app</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };


  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-3xl"
          src="/img/1819_square.jpg"
          alt="self-image"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mt-12 mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptatum, optio saepe minus facilis sapiente beatae, mollitia
            alias consequatur nihil sint eum facere error, excepturi laudantium
            autem dicta vitae voluptatibus.
          </p>
          <div className="flex flex-row mt-8">

            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
              {TAB_DATA.find((i) => (i.id === tab)).content}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
