import React from "react";

export const code = () => {
  return (
    <div>
      <div
        className={` xl:flex  gap-2 xl:p-10 border-2 md:h-[300px] border-[#f1f1f1] `}
      >
        <div className="w-full xl:w-2/4 px-3  pt-3 xl:pt-6 pb-5 xl:px-6 hidden lg:flex items-center justify-start xl:flex-col xl:items-start xl:justify-start ">
          <h2 className="text-xl xl:text-xl xl:2xl text-brand font-medium">
            {project.title}
          </h2>

          <div className=" my-3 md:ml-4   md:flex gap-4">
            <h2 className="text-[#888] font-semibold md: xl:block ">Techs: </h2>
            <div className="flex gap-4 items-center ">
              {project.technologies.map((tech) => (
                <img src={tech} className="h-6 w-6" alt="" />
              ))}
            </div>
          </div>

          <p className="text-justify text-[#555]  mt-2  xl:block">
            {project.description}
          </p>
          <div className="xl:mt-5 xl:mb-2  md:flex-1 flex md:justify-end items-center gap-2 xl:gap-10 text-[#555]">
            <a
              href={project.sourceCode}
              className="text-sm font-medium cursor-pointer flex items-center"
            >
              <span className=" xl:block">Source Code</span>

              <FontAwesomeIcon className="ml-2 h-6 w-6 " icon={faGithub} />
            </a>
            <a
              href={project.liveDemo}
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
        <div className="xl:w-2/4  w-full h-full">
          <img
            src={project.image}
            className="w-full h-full  object-cover "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
