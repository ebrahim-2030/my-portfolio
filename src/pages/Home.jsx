import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import { Services } from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <section id="/" className="px-4 md:px-8 lg:px-24  xl:px-48 dark:bg-black">
        <Hero />
      </section>
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "linear",
        }}
        viewport={{ once: true, amount: 0.1 }}
        className="px-4 py-8 md:px-8 lg:px-24  xl:px-48 mt-12 bg-brand"
      >
        <About />
      </motion.section>
      <motion.section
        className="px-4  md:px-8 lg:px-24  xl:px-48 bg-[#fafafa] dark:bg-black"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "linear",
        }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <TechStack />
      </motion.section>
      <motion.section
        id="services"
        className="px-4 md:px-8 lg:px-24  xl:px-48 mt-16  pb-16 pt-16"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "linear",
        }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Services />
      </motion.section>
      <motion.section
        id="projects"
        className="px-4 md:px-8 lg:px-24  xl:px-48 "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "linear",
        }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Projects />
      </motion.section>
      <section
        id="contact"
        className="px-4 md:px-8 lg:px-24 my-16  xl:px-48 2xl:px-96"
      >
        <Contact />
      </section>
    </div>
  );
};

export default Home;
