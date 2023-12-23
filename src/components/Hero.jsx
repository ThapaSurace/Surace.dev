import React from "react";
import { Typography } from "@material-tailwind/react";
import { Linkedin, Github } from "lucide-react";
import { FaHandPointRight } from "react-icons/fa";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex justify-center items-center h-[calc(100vh-63.6px)] px-4 md:px-8 py-4">
        <div className="flex flex-col gap-8 items-center md:items-start max-w-6xl mx-auto w-full">
          <div className="flex flex-col items-center space-y-10 md:flex-row md:gap-x-10 md:justify-between w-full">
            <div className="rounded-custom w-60 h-60 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] bg-hero-image bg-center bg-cover bg-no-repeat shadow-md md:order-2" />
            <div className="mt-4 md:order-1 max-w-sm lg:max-w-md flex flex-col items-center md:items-start">
              <div className="flex flex-col items-center">
                <Typography
                  variant="h1"
                  className="text-2xl lg:text-5xl sm:text-4xl mb-3 text-center md:text-start"
                >
                  Front-End React Developer
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-center text-sm  md:text-start sm:text-base md:text-lg md:w-full dark:text-muted"
                >
                  Hi !, I'm Suresh Thapa.{" "}
                 <span className=" text-purple-600">
                 <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={68}
                    words={[
                      "A passonate frontend react developer based on kathmandu, Nepal",
                    ]}
                  />
                 </span>
                </Typography>
              </div>
              <div className="flex gap-2 items-center mt-4">
                <Github
                  size={35}
                  className="bg-black dark:bg-transparent text-white p-1 rounded-md cursor-pointer"
                />
                <Linkedin
                  size={35}
                  className="bg-black dark:bg-transparent text-white p-1 rounded-md cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="my-4 flex gap-2 items-center">
            <span className="text-lg md:text-2xl">Tech Stack</span>
            <FaHandPointRight />
            <div className="flex gap-4 items-center text-2xl md:text-3xl flex-wrap ml-2">
              <IoLogoHtml5 className="cursor-pointer text-blue-600" />
              <IoLogoCss3 className="cursor-pointer text-[#00ffff]" />
              <IoLogoJavascript className="cursor-pointer text-yellow-600" />
              <IoLogoReact className="cursor-pointer text-[#48d1cc]" />
              <SiNextdotjs className="cursor-pointer text-green-700" />
              <SiExpress />
              <SiMongodb className="cursor-pointer text-green-900" />
              <SiTailwindcss className="cursor-pointer text-blue-400" />
              <SiBootstrap className="cursor-pointer text-blue-900" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
