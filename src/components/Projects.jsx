import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Hostel Management Website",
    description:
      "A web-based platform to manage hostel operations like room allocation and billing, built using React, Node.js, and Tailwind CSS.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    link: "https://yourhostelmanagementwebsite.com",
    github: "https://github.com/manoj-chavan-13/hostel-management",
    type: "Website",
    icon: faGlobe,
  },
  {
    title: "Playbucket Website",
    description:
      "A distraction-free platform for watching YouTube playlists, built with React, Node.js, and Tailwind CSS to provide a sleek user experience.",
    tech: ["React", "Node.js", "Tailwind CSS", "YouTube API"],
    link: "https://yourplaybucketwebsite.com",
    github: "https://github.com/manoj-chavan-13/BUCKETPLAY",
    type: "Website",
    icon: faGlobe,
  },
  {
    title: "College Applications",
    description:
      "A mobile application for managing college admissions, tracking application statuses, and managing deadlines. Built using Java, Android Studio, and Firebase.",
    tech: ["Java", "Android Studio", "Firebase"],
    link: "https://yourcollegeapplications.com",
    github: "https://github.com/manoj-chavan-13/college-applications",
    type: "Mobile App",
    icon: faMobileAlt,
  },
  {
    title: "Colify Library Application",
    description:
      "A mobile app for managing library book inventory and tracking borrowers. Built with Java, Android Studio, and Firebase.",
    tech: ["Java", "Android Studio", "Firebase"],
    link: "https://yourcolifylibraryapp.com",
    github: "https://github.com/manoj-chavan-13/colify-library",
    type: "Mobile App",
    icon: faMobileAlt,
  },
];

const ProjectCard = ({
  title,
  description,
  tech,
  link,
  github,
  type,
  icon,
}) => {
  return (
    <div className="relative bg-white rounded-lg shadow-xl p-8 transition-transform transform hover:scale-105 duration-300 overflow-hidden">
      {/* Decorative Icon */}
      <div className="absolute top-1 left-5 w-20 h-20 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
        <FontAwesomeIcon icon={icon} className="text-white text-3xl" />
      </div>
      <div className="mt-14">
        <h3 className="text-3xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <p className="text-sm font-semibold text-indigo-600 mb-4">{type}</p>
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        {/* Visit GitHub Button */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-indigo-600 font-semibold border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300"
        >
          Visit GitHub
        </a>
      </div>
      {/* Decorative Shapes */}
      <div className="absolute z-0 -bottom-8 -right-8 w-32 h-32 bg-indigo-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute z-0 -bottom-10 -left-10 w-28 h-28 bg-purple-200 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute z-0 -top-10 -left-5 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-spin"></div>
      <div className="absolute z-0 -top-12 -right-12 w-20 h-20 bg-green-200 rounded-full opacity-25 animate-ping"></div>
      <div className="absolute z-0 bottom-12 right-12 w-16 h-16 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-300 to-indigo-400 rounded-full opacity-20 animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-20 animate-bounce transform translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h1 className="text-6xl font-extrabold text-center mb-8 text-gray-900">
          My Amazing Projects
        </h1>
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
          Showcase of Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 w-3/4 mx-auto p-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
              github={project.github}
              type={project.type}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
