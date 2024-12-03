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
        <li className="font-sans pl-2 border-l-2 border-dashed border-orange-500">
          Urban Photography
        </li>
        <li className="font-sans pl-2 border-l-2 border-orange-500">
          Videography / Short Films
        </li>
        <li className="font-sans pl-2 border-l-2 border-orange-500">
          Professional Editing
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li className="font-sans pl-2 border-l-2 border-dashed border-orange-500">
          Methodist University
        </li>
        <li className="font-sans pl-2 border-l-2 border-orange-500">
          Bachelors in Multimedia Development
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li className="font-sans pl-2 border-l-2 border-dashed border-orange-500">
          Methodist Univeristy Campus Photos
        </li>
        <li className="font-sans pl-2 border-l-2 border-orange-500">
          Short Films
        </li>
        <li className="font-sans pl-2 border-l-2 border-orange-500">
          Multiple Social Medias
        </li>
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
      <div className="mx-autop md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="mx-auto rounded-3xl"
          src="/img/1819_square.jpg"
          alt="self-image"
          width={500}
          height={500}
        />
        <div>
          <div className="text-center text-4xl font-bold text-white mt-12  mb-5 ">
            <h2 className="w-44 pb-1 mx-auto md:mx-0 border-b-4 border-orange-500">
              About Me
            </h2>
          </div>
          <p className="text-center md:text-left text-base lg:text-lg">
            What&apos;s up! I&apos;m currently a student at Methodist University
            located in my hometown: Fayetteville, NC. At 19 years old, I spent
            the last 4 years of my life practicing my favorite hobby. Capturing
            stills and motion pictures is my favorite way to express myself to
            the world. Growing up, I had an uncle who was a photographer. He
            gave my sister his oldest camera, and after experiencing the ability
            to frame my own lifestyle and upload it to the world, it was history
            from there.
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
            {TAB_DATA.find((i) => i.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
