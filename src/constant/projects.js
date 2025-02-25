import realEstate from "../assets/images/Real-Estate.jpg";
import ecommerce from "../assets/images/E-Commerce.jpg";
import hospital from "../assets/images/Hospital.jpg";
import food from "../assets/images/Food.jpg";

import tailwind from "../assets/icons/tailwind.png";
import react from "../assets/icons/react.png";
import node from "../assets/icons/node.png";
import mongodb from "../assets/icons/mongo.png";

export const projects = [
  {
    id: 1,
    title: "Advanced Real Estate Platform",
    description:
      "A full-stack MERN real estate platform built to help users search, filter, and manage property listings. Utilizing MongoDB, Express, React, and Node.js, it features user authentication, property management, and dynamic search filters. This project offers a seamless experience for both clients and agents with real-time updates and communication tools.",
    technologies: [tailwind, react, mongodb, node],
    image: realEstate,
    liveDemo: "https://vercel.com/",
    sourceCode: "https://github.com/",
  },
  {
    id: 2,
    title: "E-Commerce Marketplace",
    description:
      "A full-stack MERN real estate platform built to help users search, filter, and manage property listings. Utilizing MongoDB, Express, React, and Node.js, it features user authentication, property management, and dynamic search filters. This project offers a seamless experience for both clients and agents with real-time updates and communication tools.",
    technologies: [tailwind, react],
    image: ecommerce,
    liveDemo: "https://vercel.com/",
    sourceCode: "https://github.com/",
  },
  {
    id: 3,
    title: "Smart Food Delivery System",
    description:
      "A full-stack MERN real estate platform built to help users search, filter, and manage property listings. Utilizing MongoDB, Express, React, and Node.js, it features user authentication, property management, and dynamic search filters. This project offers a seamless experience for both clients and agents with real-time updates and communication tools.",
    technologies: [tailwind, react, mongodb, node],
    image: food,
    liveDemo: "https://vercel.com/",
    sourceCode: "https://github.com/",
  },
  {
    id: 4,
    title: "DigitalCare Healthcare Solutions",
    description:
      "A full-stack MERN real estate platform built to help users search, filter, and manage property listings. Utilizing MongoDB, Express, React, and Node.js, it features user authentication, property management, and dynamic search filters. This project offers a seamless experience for both clients and agents with real-time updates and communication tools.",
    technologies: [tailwind, react],
    image: hospital,
    liveDemo: "https://vercel.com/",
    sourceCode: "https://github.com/",
  },
];
