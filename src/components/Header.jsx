import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md  w-full z-10">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Porto</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium flex-grow justify-center items-center">
          <li>
            <a href="#about" className="relative group hover:text-blue-500">
              About
              <span className="absolute left-0 bottom-[-5px] w-full h-[3px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#projects" className="relative group hover:text-blue-500">
              Projects
              <span className="absolute left-0 bottom-[-5px] w-full h-[3px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#skills" className="relative group hover:text-blue-500">
              Skills
              <span className="absolute left-0 bottom-[-5px] w-full h-[3px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#dreams" className="relative group hover:text-blue-500">
              Dreams
              <span className="absolute left-0 bottom-[-5px] w-full h-[3px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#social" className="relative group hover:text-blue-500">
              Social
              <span className="absolute left-0 bottom-[-5px] w-full h-[3px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>

        {/* Outlined Contact Button */}
        <div className="hidden md:flex">
          <a
            href="#social"
            className="border border-blue-500 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="space-y-2">
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
            </div>
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="fixed inset-y-0 left-0 w-64 bg-white p-8 shadow-lg">
            <button onClick={toggleMenu} className="absolute top-4 right-4">
              <FontAwesomeIcon
                icon={faTimes}
                className="w-6 h-6 text-gray-600"
              />
            </button>

            <ul className="flex flex-col space-y-6 font-medium mt-12">
              <li>
                <a
                  href="#about"
                  className="relative group hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  About
                  <span className="absolute left-0 bottom-[-5px] w-full h-[5px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="relative group hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  Projects
                  <span className="absolute left-0 bottom-[-5px] w-full h-[5px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="relative group hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  Skills
                  <span className="absolute left-0 bottom-[-5px] w-full h-[5px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#dreams"
                  className="relative group hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  Dreams
                  <span className="absolute left-0 bottom-[-5px] w-full h-[5px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#social"
                  className="relative group hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  Social
                  <span className="absolute left-0 bottom-[-5px] w-full h-[5px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="relative group hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  Contact
                  <span className="absolute left-0 bottom-[-5px] w-full h-[5px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
