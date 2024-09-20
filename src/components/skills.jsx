import React, { useState } from "react";
import {
  FaJsSquare,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaAndroid,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiPostcss,
} from "react-icons/si";

const SkillsShowcase = () => {
  const [hovered, setHovered] = useState(null);

  const skills = [
    {
      id: 1,
      name: "JavaScript",
      icon: <FaJsSquare size={40} />,
      color: "hover:text-yellow-500",
    },
    {
      id: 2,
      name: "Python",
      icon: <FaPython size={40} />,
      color: "hover:text-blue-500",
    },
    {
      id: 3,
      name: "React",
      icon: <FaReact size={40} />,
      color: "hover:text-blue-400",
    },
    {
      id: 4,
      name: "Node.js",
      icon: <FaNodeJs size={40} />,
      color: "hover:text-green-500",
    },
    {
      id: 5,
      name: "Git",
      icon: <FaGitAlt size={40} />,
      color: "hover:text-orange-500",
    },
    {
      id: 6,
      name: "Java",
      icon: <FaJava size={40} />,
      color: "hover:text-red-500",
    },
    {
      id: 7,
      name: "HTML",
      icon: <FaHtml5 size={40} />,
      color: "hover:text-orange-600",
    },
    {
      id: 8,
      name: "CSS",
      icon: <FaCss3Alt size={40} />,
      color: "hover:text-blue-700",
    },
    {
      id: 9,
      name: "MongoDB",
      icon: <SiMongodb size={40} />,
      color: "hover:text-green-400",
    },
    {
      id: 10,
      name: "Express.js",
      icon: <SiExpress size={40} />,
      color: "hover:text-gray-500",
    },
    {
      id: 11,
      name: "Firebase",
      icon: <SiFirebase size={40} />,
      color: "hover:text-yellow-500",
    },
    {
      id: 12,
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={40} />,
      color: "hover:text-blue-400",
    },
    {
      id: 13,
      name: "PostCSS",
      icon: <SiPostcss size={40} />,
      color: "hover:text-pink-500",
    },
    {
      id: 14,
      name: "Android",
      icon: <FaAndroid size={40} />,
      color: "hover:text-green-500",
    },
  ];

  return (
    <div
      id="skills"
      className="relative text-center mt-16 mb-16 p-8 rounded-2xl max-w-3xl mx-auto  "
    >
      {/* Decorative Blurred Divs */}
      <div className="absolute inset-0 bg-white opacity-20 blur-2xl rounded-full transform scale-150"></div>
      <div className="absolute inset-0 bg-white opacity-10 blur-2xl rounded-full transform -translate-x-1/4 -translate-y-1/4 scale-125"></div>

      {/* Decorative floating shapes */}
      <div className="absolute w-32 h-32 bg-purple-400 rounded-full blur-3xl top-20 left-10 animate-bounce-slow opacity-70"></div>
      <div className="absolute w-24 h-24 bg-pink-500 rounded-full blur-3xl top-32 right-10 animate-pulse opacity-70"></div>
      <div className="absolute w-20 h-20 bg-yellow-300 rounded-full blur-2xl bottom-20 left-1/4 animate-bounce opacity-60"></div>

      <h3 className="text-4xl font-extrabold text-gray-900 mb-8">My Skills</h3>
      <p className="text-lg text-gray-700 mb-6">
        Here's a quick overview of the technical skills and tools I use.
      </p>
      <div className="flex flex-wrap justify-center space-x-8 space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`group relative ${skill.color} transition-transform duration-300 hover:scale-110`}
            onMouseEnter={() => setHovered(skill.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="p-5 rounded-full border-4 border-white group-hover:border-gray-200 bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl">
              {skill.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsShowcase;
