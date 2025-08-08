import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PNG from "../assets/images/png.png";
import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  const fileUrl = "/Ebrahim Asil CV.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "ebrahim-asil-cv.pdf";
    link.click();
  };
  return (
    <div className=" pt-28 md:pt-36  flex flex-col  md:flex-row md:justify-between md:items-center ">
      <div className="md:w-1/2 ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm text-brand font-bold text-opacity-80  rounded-sm  pb-[2px] mb-3 inline-block">
            Hello There!
          </span>
          <h1 className="text-black dark:text-white text-5xl lg:text-6xl font-Bauhaus font-black">
            I am Ebrahim <span className="text-brand">Asil.</span>
          </h1>
          <span className="font-Roboto  text-xl md:text-2xl mt-2 inline-block dark:text-white">
            Software <span className="text-brand">Engineer</span>
          </span>
        </motion.div>
        <motion.p
          className="xl:w-[500px] lg:w-[400px] text-justify mt-4 text-[13px] md:text-[14px] text-[#888] leading-7 dark:text-[#fffd]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          animi, dignissimos provident ut odio repudiandae aperiam. Aspernatur
          quas delectus omnis soluta optio fugit at quibusdam! Nam debitis
          possimus eius laborum!
        </motion.p>
        <motion.div
          className="mt-6 md:mt-8 flex items-center gap-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="https://linkedin.com/in/ebrahim-asil">
            <FontAwesomeIcon
              className="w-9 h-9 text-[#1E90FF] dark:text-white cursor-pointer transition-all duration-100 hover:text-brand"
              icon={faLinkedin}
            />
          </a>
          <a href="https://github.com/ebrahim-2030 ">
            <FontAwesomeIcon
              className="w-9 h-9  text-black dark:text-white cursor-pointer transition-all duration-100 hover:text-brand"
              icon={faGithubSquare}
            />
          </a>

          <button
            onClick={handleDownload}
            className="bg-brand ml-4 text-white py-1.5 px-6 rounded-full"
          >
            Download CV <FontAwesomeIcon className="ml-2" icon={faDownload} />
          </button>
        </motion.div>
      </div>
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="mt-12 lg:mt-0 relative rounded-full  to-black animate-moveShadow dark:animate-moveShadowWhite">
          <motion.img
            className="rounded-full h-[300px] w-[300px]   lg:h-[350px] lg:w-[350px] xl:h-[450px] xl:w-[450px]"
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={PNG}
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
