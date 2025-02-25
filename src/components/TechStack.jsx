import JS from "../assets/icons/javascript-svgrepo-com.png";
import Java from "../assets/icons/java-svgrepo-com.png";
import Python from "../assets/icons/python-svgrepo-com.png";
import ReactJS from "../assets/icons/reactjs-svgrepo-com.png";
import MongoDB from "../assets/icons/mongodb-svgrepo-com.png";
import NextJS from "../assets/icons/nextjs-fill-svgrepo-com.png";
import MySql from "../assets/icons/mysql-logo-svgrepo-com.png";
import TS from "../assets/icons/typescript-svgrepo-com.png";
import Tailwind from "../assets/icons/tailwind-svgrepo-com.png";
import NodeJS from "../assets/icons/nodejs-svgrepo-com.png";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <motion.div
      className="pb-10 pt-8"
      
    >
      <h2 className="mb-7 text-2xl text-brand font-medium md:text-center">
        Tech Stack
      </h2>
      <motion.div className="grid grid-cols-2 gap-2 text-sm md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8  ">
        <div className="flex items-center gap-3 border-2  border-[#f2f2f2] p-2 rounded hover:border-brand   dark:bg-white">
          <img src={JS} className="inline-block h-7 w-7 " alt="" />
          <span>JavaScript</span>
        </div>
        <div className="flex items-center gap-3 border-2  border-[#f2f2f2] p-2 rounded hover:border-brand   dark:bg-white">
          <img src={TS} className="inline-block h-7 w-7 " alt="" />
          <span>TypeScript</span>
        </div>
        <div className="flex items-center gap-3 border-2  border-[#f2f2f2] p-2 rounded hover:border-brand  dark:bg-white ">
          <img src={Tailwind} className="inline-block h-7 w-7 " alt="" />
          <span>Tailwind</span>
        </div>
        <div className="flex items-center gap-3 border-2  border-[#f2f2f2] p-2 rounded hover:border-brand   dark:bg-white">
          <img src={ReactJS} className="inline-block h-7 w-7 " alt="" />
          <span>ReactJS</span>
        </div>
        <div className="flex items-center gap-3 border-2  border-[#f2f2f2] p-2 rounded hover:border-brand   dark:bg-white">
          <img src={NextJS} className="inline-block h-7 w-7 " alt="" />
          <span>NextJS</span>
        </div>
        <div className="flex items-center gap-3 border-2  border-[#f2f2f2] p-2 rounded hover:border-brand   dark:bg-white">
          <img src={NodeJS} className="inline-block h-7 w-7 " alt="" />
          <span>NodeJS</span>
        </div>
        <div className="flex items-center gap-3 border-2 lg:col-start-2 xl:col-start-7  border-[#f2f2f2] p-2 rounded hover:border-brand   dark:bg-white">
          <img src={MongoDB} className="inline-block h-7 w-7 " alt="" />
          <span>MongoDB</span>
        </div>
        <div className="flex items-center gap-3 border-2  border-[#f2f2f2] p-2 rounded hover:border-brand   dark:bg-white">
          <img src={MySql} className="inline-block h-7 w-7 " alt="" />
          <span>MySQL</span>
        </div>
        <div className="flex items-center gap-3 border-2 lg:col-start-4  border-[#f2f2f2] p-2 rounded hover:border-brand   dark:bg-white">
          <img src={Java} className="inline-block h-7 w-7 " alt="" />
          <span>Java</span>
        </div>
        <div className="flex items-center gap-3 border-2 lg:col-start-5 border-[#f2f2f2] p-2 rounded hover:border-brand   dark:bg-white">
          <img src={Python} className="inline-block h-7 w-7 " alt="" />
          <span>Python</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TechStack;
