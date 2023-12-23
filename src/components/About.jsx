import { Typography, Button } from "@material-tailwind/react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="h-screen">
      <div className="max-w-6xl mx-auto px-6 flex justify-center items-center">
        <div>
        <Typography variant="h1" className="text-center mb-10">
          About me
        </Typography>

        <div className="flex flex-col md:flex-row gap-10 items-center md:justify-between w-full">
          <div className="shape w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-about-me-img bg-no-repeat bg-center bg-cover"></div>
          <div className="flex flex-col items-center md:items-start">
            <Typography
              variant="h3"
              className="text-xl mb-1 md:text-2xl lg:text-4xl"
            >
              I'm Suresh Thapa.
            </Typography>
            <Typography
              variant="small"
              className="text-sm dark:text-dark-muted mb-2"
            >
              Frontend Web Developer
            </Typography>
            <Typography
              variant="paragraph"
              className="tracking-wide leading-relaxed text-center md:text-justify max-w-lg"
            >
              I am a Frontend Web developer based in Kathmandu, Nepal. I am an
              Information Technology undergraduate from KCT. I am very
              passionate about improving my coding skills & developing
              applications & websites. I build WebApps and Websites using MERN
              Stack. Working for myself to improve my skills.
            </Typography>
            <Button className="mt-4 text-white bg-dark-background dark:bg-white dark:text-black">Resume</Button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
