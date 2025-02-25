import Moon from "../../assets/icons/moon-stars-svgrepo-com (3).png";
import Sun from "../../assets/icons/sunlight-svgrepo-com.png";

import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <nav
      className={`font-Roboto fixed left-0 px-4 md:px-6 2xl:px-10 top-0 z-50 w-full bg-white dark:bg-black ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="flex pt-4 pb-3 md:pt-5 items-center justify-between">
        <div className="font-Bauhaus h-12 w-12 flex justify-center items-center font-black bg-[#06949411] dark:bg-[#fff] rounded-full">
          <Link to="/" className="text-black text-xl dark:text-black">
            E<span className="text-brand">A</span>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <ul className="hidden text-[13px] md:text-sm md:flex items-center mr-16 gap-4 text-black dark:text-white">
            <ScrollLink
              to="/"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-brand font-bold"
              className="cursor-pointer py-1 px-3 rounded-full font-medium hover:text-brand"
            >
              Home
            </ScrollLink>

            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-45}
              spy={true}
              activeClass="text-brand font-bold"
              className="cursor-pointer py-1 px-3 rounded-full font-medium hover:text-brand"
            >
              About
            </ScrollLink>

            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-brand font-bold"
              className="cursor-pointer py-1 px-3 rounded-full font-medium hover:text-brand"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-brand font-bold"
              className="cursor-pointer py-1 px-3 rounded-full font-medium hover:text-brand"
            >
              Projects
            </ScrollLink>
          </ul>

          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="mr-6 cursor-pointer"
          >
            {isDarkMode ? (
              <img height="28" width="28" src={Sun} alt="Light Mode" />
            ) : (
              <img height="28" width="28" src={Moon} alt="Dark Mode" />
            )}
          </button>

          <div
            className="md:hidden cursor-pointer flex flex-col gap-[5px] items-end"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`w-8 bg-brand h-[3px] rounded-full transition-transform duration-300 ${
                isOpen ? "-rotate-45 translate-y-[8px]" : "rotate-0"
              }`}
            ></span>
            <span
              className={`bg-brand h-[3px] rounded-full transition-all duration-300 ${
                isOpen ? "w-0 -translate-x-1" : "w-6"
              }`}
            ></span>
            <span
              className={`w-8 bg-brand h-[3px] rounded-full transition-transform duration-300 ${
                isOpen ? "rotate-45 -translate-y-[8px]" : "rotate-0"
              }`}
            ></span>
          </div>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="hidden md:block text-brand dark:text-white border-2 border-brand dark:border-white py-1.5 px-4 rounded-full hover:bg-brand hover:text-white duration-300 ease-in-out cursor-pointer"
          >
            Contact Me
          </ScrollLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed shadow-md left-0 w-full transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-[100%]"
        } md:hidden`}
      >
        <ul className="bg-brand text-white pt-8 pb-6 rounded-sm flex flex-col items-center gap-4">
          <ScrollLink
            to="/"
            smooth={true}
            duration={500}
            className="cursor-pointer py-1 px-3 rounded-full font-medium hover:text-[#444] dark:hover:text-brand"
          >
            Home
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            About
          </ScrollLink>

          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Services
          </ScrollLink>

          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-white border-2 hover:bg-transparent hover:border-white py-1 px-4 rounded-full bg-white text-brand duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </ScrollLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
