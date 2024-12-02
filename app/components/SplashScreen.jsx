import React from "react";
import Image from "next/image";

const SplashScreen = () => {
  return (
    <div className="lg:mx-24 my-24 grid grid-cols-1 sm:grid-cols-12">
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="lg:mr-12 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
          <Image
            src="/img/IMG_1819.png"
            alt="self image"
            className="relative transform sm:w-72 sm:h-72 lg:w-96 lg:h-96 xl:w-full xl:h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="pt-6 col-span-7 place-self-center sm:text-right">
        <h1 className="text-center md:text-right text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:mt-16 md:mt-8 font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-800 font-sans">
            About Me
          </span>
        </h1>
        <p className="text-center md:text-right text-[#ADB7BE] text-base mb-6 sm:text-md lg:text-xl p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores
          ab ipsum eaque laboriosam, fuga impedit nostrum commodi magni nesciunt
          accusantium, aperiam voluptatem accusamus temporibus culpa officiis
          aspernatur itaque? Quas odit eligendi cupiditate consectetur officiis
          necessitatibus iure ab earum laboriosam repellat totam quidem
          voluptates reprehenderit est eius impedit, fugiat assumenda?
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
