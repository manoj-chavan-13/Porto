import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../assets/PF.jpg"; // Adjust the path as needed

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={profilePic}
          alt="Profile"
          className="object-cover w-full h-full opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Hey, I'm{" "}
          <span className="block text-yellow-300 text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Manoj Chavan
          </span>
        </h1>
        <p className="text-md md:text-lg lg:text-xl mb-6">
          I’m a <span className="font-semibold">Full Stack Developer</span> with
          a passion for creating interactive and dynamic web applications.
        </p>

        <div className="flex justify-center mt-10 mb-6">
          <a
            href="#social"
            className="bg-yellow-300 text-gray-900 py-2 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Get in Touch
          </a>
        </div>

        <div className="absolute bottom-20 flex justify-center">
          <a href="#about" className="text-white">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="w-8 h-8 animate-bounce"
            />
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-300 opacity-20 rounded-full transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-yellow-300 opacity-20 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
      </div>
    </section>
  );
}
