import React, { useState, useEffect } from "react";
import { projects } from "../constants";
import { FaGithubAlt } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { Typography } from "@material-tailwind/react";

const Projects = () => {
  // eslint-disable-next-line
  const [swiperRef, setSwiperRef] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of slides per view based on screen width
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };

    // Set initial number of slides per view
    handleResize();

    // Attach the event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="py-10">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={slidesPerView}
          spaceBetween={30}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {projects.map((p) => (
            <SwiperSlide className=" overflow-hidden rounded-lg shadow-md">
              <div className=" h-[400px] lg:h-[500px] relative cursor-pointer w-full group">
                <img
                  src={p.img}
                  alt={p.project_name}
                  className="h-full w-full object-center object-cover group-hover:scale-125 transition-all duration-500 ease-in-out transform"
                />
                <div className="absolute top-0 w-full h-full bg-black/60 group-hover:flex justify-center items-center hidden">
                  <div className="flex flex-col gap-2 items-center">
                    <Typography variant="h3" className="text-3xl">
                      {p.project_name}
                    </Typography>
                    <div className="flex gap-2 items-center">
                      {p.attributes.map((atrr, index) => (
                        <span key={index} className="text-sm">
                          {atrr}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 items-center">
                      <a
                        href={p.github_link}
                        className="flex gap-2 items-center border border-white py-2 px-5 rounded-md text-white"
                      >
                        <FaGithubAlt size={30} />
                        <span className="text-xl">code</span>
                      </a>

                      <a
                        href={p.demo_link}
                        className="flex gap-2 items-center border border-white py-2 px-5 rounded-md text-white"
                      >
                        <IoMdArrowDroprightCircle size={30} />{" "}
                        <span className="text-xl">demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Projects;
