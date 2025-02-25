import React from "react";
import { motion } from "framer-motion";
import { services } from "../constant/Services";

export const Services = () => {
  return (
    <div>
      <h2 className="mb-10 text-2xl text-brand font-medium md:text-center">
        Expertise & Services
      </h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`bg-[#ffff] dark:bg-black backdrop-blur-sm pt-6 px-5 pb-4 border-l-[5px] border-brand dark:border-[2px] hover:-translate-y-[2px] transition-all duration-200 ease-in-out shadow-md hover:shadow-lg dark:rounded`}
          >
            <img
              src={service.icon}
              className="inline-block h-12 w-12 dark:filter dark:grayscale dark:invert"
              alt="Service Icon"
            />
            <h3 className="text-xl text-brand font-semibold mt-4">
              {service.title}
            </h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-white">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
