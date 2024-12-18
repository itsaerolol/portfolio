"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-12"
      >
        <div className="col-span-7 place-self-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:mt-4 md:mt-8 font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-800 font-sans">
              A Look into{" "}
            </span>
            <div>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Film",
                  3000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Photography",
                  2000,
                  "Videography",
                  2000,
                  "My Web Project",
                  5000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block", fontFamily: "serif" }}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl">
            Experience my perspective of a digital artform.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-500 to-orange-800 text-white">
              <a href="/topics/projects" className="hover:text-black">
                Projects
              </a>
            </button>
            <button
             
              id="contact-button"
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-500 to-orange-800 hover:bg-slate-800 text-white mt-3"
            >
              <a
                href="/topics/contact"
                className="block bg-[#121212] hover:bg-white hover:text-black rounded-full px-5 py-2"
              >
                Contact Me
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 md:col-span-4 place-self-center mt-4 lg:mt-0 opacity-80 py-16">
          <div className="lg:mr-12 rounded-full bg-[#282828] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/img/camera.png"
              alt="self image"
              className="relative transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-100"
              width={300}
              height={300}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default IntroSection;
