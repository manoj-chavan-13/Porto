import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faLightbulb,
  faCogs,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

export default function Dreams() {
  const dreams = [
    {
      title: "Minta",
      description:
        "An innovative company aimed at revolutionizing tech solutions for communities and businesses alike.",
      icon: faLightbulb,
    },
    {
      title: "MUPG",
      description:
        "A lightweight, efficient programming language, designed to improve coding productivity and reduce errors.",
      icon: faRocket,
    },
    {
      title: "Innomate",
      description:
        "A dynamic platform for students to engage in collaborative learning and share transformative project ideas.",
      icon: faCogs,
    },
    {
      title: "Qcon AI",
      description:
        "An advanced AI that seeks to optimize human communication through clearer, more effective interactions.",
      icon: faBrain,
    },
  ];

  return (
    <section id="dreams" className="py-20 text-white relative overflow-hidden">
      <div className="container mx-auto py-9 rounded-3xl bg-white shadow-2xl shadow-[#4e51ff3b] px-6 md:px-12 text-gray-900">
        <h2 className="text-5xl font-extrabold mb-8 text-center">
          Vision for the Future
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center">
          My goal is to create impactful innovations that empower and elevate
          both individuals and communities. By focusing on cutting-edge
          solutions through ventures like Minta, I hope to redefine technology's
          role in enhancing everyday life. With MUPG, my vision is to simplify
          the world of programming, making it accessible and enjoyable for all.
          Innomate aims to foster a collaborative environment where students can
          flourish, while Qcon AI will transform human interaction by promoting
          clearer, more empathetic communication.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dreams.map((dream, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-300 to-indigo-400 hover:from-indigo-500 hover:to-indigo-600 transition-all duration-500 ease-out transform hover:scale-105 hover:rotate-1"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 w-24 h-24 flex items-center justify-center rounded-full shadow-2xl">
                <FontAwesomeIcon
                  icon={dream.icon}
                  className="text-4xl text-indigo-600"
                />
              </div>
              <h3 className="text-4xl text-white font-bold text-center mt-10">
                {dream.title}
              </h3>
              <p className="text-gray-200 text-center mt-4">
                {dream.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
