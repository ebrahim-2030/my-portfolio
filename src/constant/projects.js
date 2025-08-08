import realEstate from "../assets/images/Real-Estate.png";
import noteboard from "../assets/images/Noteboard.png";
import healthcare from "../assets/images/healthcare.png";
import quickblogs from "../assets/images/quickblogs.png";

import tailwind from "../assets/icons/tailwind.png";
import react from "../assets/icons/react.png";
import node from "../assets/icons/node.png";
import mongodb from "../assets/icons/mongo.png";

export const projects = [
  {
    id: 1,
    title: "Real Estate Platform UI",
    description:
      "react-real-estate is a responsive real estate listing platform that allows users to browse, filter, and explore properties, view agent profiles, and contact through a modern user interface. It includes smooth animations, sliders, and a clean, user-focused design.",
    features: [
      "Property Browsing & Filtering",
      "Responsive & Modern UI",
      "Property Detail Pages with Image Sliders",
      "Agent Profiles & Contact Options",
    ],
    technologies: [react, tailwind],
    image: realEstate,
    liveDemo: "https://realestate-react-app-lovat.vercel.app/",
    sourceCode: "https://github.com/ebrahim-2030/realestate-react-app",
  },

  {
    id: 2,
    title: "AI-Enabled Full Stack Blog App (MERN Stack)",
    description:
      "Build and deploy a modern blog application with an AI-powered content generator, admin panel, and image management using MERN Stack, Google Gemini AI, and ImageKit API.",
    features: [
      "AI-Powered Blog Generation",
      "Admin Dashboard",
      "Admin Authentication",
      "CRUD Operations",
      "Responsive Design",
    ],
    technologies: [tailwind, react, mongodb, node],
    image: quickblogs,
    liveDemo: "https://mern-blog-app-ten-henna.vercel.app/",
    sourceCode: "https://github.com/ebrahim-2030/mern-blog-app",
  },
  {
    id: 3,
    title: "React HealthCare Portal",
    description:
      "A responsive React-based application for booking appointments with doctors. It includes features like dynamic doctor listings, appointment slots, user profile editing, and contextual data management using React Context API.",
    technologies: [react, tailwind, mongodb, node],
    features: [
      "Book appointments with available doctors",
      "View and edit user profile details",
      "Filter doctors based on speciality",
      "Display available time slots per doctor",
      "Context API used for global state management",
      "Modern UI with Tailwind CSS and Framer Motion",
    ],
    image: healthcare,
    liveDemo: "https://react-healthcare-portal.vercel.app/",
    sourceCode: "https://github.com/ebrahim-2030/react-healthcare-portal",
  },
  {
    id: 4,
    title: "MERN Stack Noteboard",
    description:
      "A full-stack note-taking application built with the MERN stack: MongoDB, Express, React, and Node.js. Features include creating, updating, and deleting notes with confirmation modals, handling rate limits gracefully, and providing dynamic UI feedback using toast notifications. Styled with Tailwind CSS and enhanced with Lucide icons for a clean user experience.",
    features: [
      "Create, Update, Delete Notes (CRUD)",
      "Full-Stack Functionality (MERN)",
      "Rate Limiting with Graceful Handling",
      "Modern UI with Tailwind CSS and Framer Motion",
    ],
    technologies: [react, tailwind, mongodb, node],
    image: noteboard,
    liveDemo: "https://mern-stack-noteboard.onrender.com/",
    sourceCode: "https://github.com/ebrahim-2030/mern-stack-noteboard",
  },
];
