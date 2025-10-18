// import React, { ReactElement } from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
import React, { ReactElement } from "react";
import web1 from "../../public/images/web1.png";
import web2 from "../../public/images/web2.png";
import web3 from "../../public/images/web3.png";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
interface Link {
  name: string;
  hash: string;
}

interface Experience {
  title: string;
  location: string;
  description: string;
  icon: ReactElement;
  date: string;
}

// interface Project {
//   title: string;
//   description: string;
//   tags: string[];
//   imageUrl: string;
// }

export const links: Link[] = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData: Experience[] = [
  {
    title: "Software Engineering Student",
    location: "Vietnam - Korea University of Information and Communication Technology (VKU)",
    description:
      "Currently a senior majoring in Software Engineering (Korean-Enhanced Program). Studying core programming, software design, and web development fundamentals with additional Korean language and cultural training to prepare for BrSE-oriented roles.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Frontend Developer Intern (BrSE-Oriented Training)",
    location: "FPT Software Da Nang",
    description:
      "Completed a BrSE-oriented summer internship focusing on both Korean communication and frontend development. Worked in a 3-member team to build a Korean Language Center Management System using ReactJS, Figma, and Git/GitHub. Strengthened collaboration, problem-solving, and UI implementation skills.",
    icon: React.createElement(CgWorkAlt),
    date: "Summer 2025",
  },
  {
    title: "Career Goal: Bridge System Engineer / Project Manager",
    location: "Da Nang, Vietnam",
    description:
      "Aiming to become a professional in software development management or bridge system engineering. Continuously enhancing communication, teamwork, and technical abilities through real-world projects and international collaboration experiences.",
    icon: React.createElement(FaReact),
    date: "Future Goal",
  },
];

export const projectsData = [
  {
    title: "Portfolio Website",
    description:
    "A personal portfolio website built to showcase my profile, skills, and projects. Focused on creating a clean and responsive UI using ReactJS and TypeScript.",
    tags: ["ReactJS", "TypeScript", "HTML", "CSS", "Tailwind"],
    imageUrl: web1,
  },
  {
    title: "Korean Language Center Management System",
    description:
    "A team project developed during my summer internship at FPT Software (2025). The system manages students, courses, and instructors. Designed UI with Figma and implemented the student-side interface using ReactJS and mock data.",
    tags: ["React", "Tailwind","HTML", "CSS", "Redux"],
    imageUrl: web2,
  },
  {
    title: "Website 3",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: web3,
  },
] as const;

export const skillsData: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "MySQL",
  "Framer Motion",
  "MongoDB",
] as const;
