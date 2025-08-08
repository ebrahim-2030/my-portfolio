import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import leftArrow from "../assets/icons/left-arrow.png";
import RightArrow from "../assets/icons/right-arrow.png";

import { projects } from "../constant/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { li } from "framer-motion/m";
const Projects = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSwiperInit = (swiper) => {
    setSwiperInstance(swiper);
  };

  const handleMouseEnter = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  };

  return (
    <div className="py-10">
      <h2 className="mb-7 text-xl lg:text-2xl text-brand font-medium md:text-center">
        Featured Projects
      </h2>
      <Swiper
        onInit={handleSwiperInit}
        modules={[Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        onMouseEnter={(Swiper) => Swiper.Autoplay.stop()}
        onMouseLeave={(Swiper) => Swiper.Autoplay.start()}
        className=" duration-200 transition-all  rounded"
        style={{
          boxShadow:
            "0 10px 20px rgba(0, 0, 0, 0.1), 0 -6px 6px rgba(0, 0, 0, 0.01)",
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="md:flex xl:items-start md:items-center">
              <div className=" xl:w-2/4 md:w-1/3 md:px-8 p-4">
                <h2 className="text-[17px] lg:text-lg mt-2 xl:mt-4  text-[#000] dark:text-white text-opacity-70 font-medium">
                  {project.title}
                </h2>
                <div className="mt-6 hidden xl:block">
                  <h3 className=" font-medium text-[#000] dark:text-white text-opacity-70">
                    Overview
                  </h3>
                  <p className="text-justify text-[13px] dark:text-white font-medium leading-6  mt-3 border-y-2 py-3 text-[#000] text-opacity-70 xl:block">
                    {project.description}
                  </p>
                </div>
                <div className="hidden md:flex  xl:flex-row justify-between md:flex-col md:gap-4 mt-5 ">
                  <div className=" ">
                    <h3 className="text-[14px]  xl:mt-0 font-medium text-[#444] dark:text-white">
                      Key Features:
                    </h3>

                    <ol className="list-decimal ml-5 text-[12px] leading-6">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className=" font-medium text-[#666] dark:text-white"
                        >
                          {feature}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="">
                    <h3 className="text-[14px] mb-1 font-medium text-[#444] dark:text-white">
                      Technologies Used
                    </h3>

                    <div className="flex items-center  gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="p-1 border-[2px] rounded-lg border-[#aaa] dark:border-white"
                        >
                          <img
                            src={tech}
                            className="h-4 w-4 dark:filter dark:grayscale-0 dark:invert"
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:w-2/4 md:w-2/3   p-4 md:pr-8 md:py-6">
                <div className="h-[200px] md:h-[220px] w-full lg:h-[250px] xl:h-[350px] border border-zinc-100 rounded">
                  <img
                    src={project.image}
                    className="h-full w-full rounded"
                    alt=""
                  />
                </div>
                <div className="mt-4 flex justify-between items-center text-[#555] dark:text-white">
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    className="text-sm font-medium cursor-pointer flex items-center"
                  >
                    <span className=" xl:block">Source Code</span>

                    <FontAwesomeIcon
                      className="ml-2 h-6 w-6 "
                      icon={faGithub}
                    />
                  </a>
                  <span className="block h-6 w-[1px] bg-[#444]"></span>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    className="text-sm font-medium cursor-pointer flex items-center"
                  >
                    <span className=" xl:block">Live Demo</span>

                    <FontAwesomeIcon
                      className="ml-2 h-5 w-5 "
                      icon={faUpRightFromSquare}
                    />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center mt-4 xl:mt-6 gap-5">
        <button className="custom-prev  z-10 hover:scale-110  transition ">
          <img src={leftArrow} className="h-8 md:w-10 w-8 md:h-10" alt="" />
        </button>
        <button className="custom-next z-10 hover:scale-110  transition ">
          <img src={RightArrow} className="h-8 md:w-10 w-8 md:h-10" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Projects;
