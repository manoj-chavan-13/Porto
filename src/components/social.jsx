import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const SocialLinks = () => {
  const [hovered, setHovered] = useState(null);

  const socialMedia = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={40} />,
      color: "hover:text-blue-500",
      link: "https://www.linkedin.com/in/manojchavan1311/",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub size={40} />,
      color: "hover:text-gray-700",
      link: "https://github.com/manoj-chavan-13",
    },
    {
      id: 3,
      name: "Instagram",
      icon: <FaInstagram size={40} />,
      color: "hover:text-pink-600",
      link: "https://www.instagram.com/manoj.03i",
    },
    {
      id: 4,
      name: "WhatsApp",
      icon: <FaWhatsapp size={40} />,
      color: "hover:text-green-500",
      link: "https://wa.me/8767746744",
    },
    {
      id: 5,
      name: "Gmail",
      icon: <FaEnvelope size={40} />,
      color: "hover:text-red-600",
      link: "mailto:manojschavan6@gmail.com",
    },
  ];

  return (
    <div
      id="social"
      className="text-center mt-16 m-4 p-6 rounded-3xl lg:px-36 md:mx-auto"
    >
      <h3 className="text-3xl font-extrabold text-gray-900 mb-8 sm:text-4xl">
        Connect with Me
      </h3>
      <p className="text-base text-gray-600 mb-6 sm:text-lg">
        Let's stay connected on social media or reach out via Gmail.
      </p>
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 space-y-4 md:space-y-0 relative">
        {socialMedia.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative ${social.color} transition-transform duration-300 hover:scale-110`}
            onMouseEnter={() => setHovered(social.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="p-4 md:p-5 rounded-full border-4 border-gray-200 group-hover:border-gray-400 bg-white shadow-md transition-all duration-300 group-hover:shadow-xl">
              {social.icon}
            </div>
            {hovered === social.id && (
              <span className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs md:text-sm px-2 py-1 rounded-md shadow-md transition-all duration-200">
                {social.name}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
