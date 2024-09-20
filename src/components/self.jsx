import React from "react";
import me from "../assets/PF.jpg";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative bg-white py-20 md:py-52 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="bg-blue-200 w-64 md:w-80 h-64 md:h-80 rounded-full opacity-50 blur-2xl absolute -top-24 -left-20 transform -rotate-45"></div>
          <div className="bg-yellow-300 w-48 md:w-64 h-48 md:h-64 rounded-full opacity-50 blur-2xl absolute bottom-0 right-0 transform rotate-45"></div>
          <div className="bg-purple-300 w-32 md:w-40 h-32 md:h-40 rounded-full opacity-50 blur-2xl absolute -top-10 right-1/4 transform -rotate-30"></div>
          <div className="bg-blue-400 w-24 md:w-32 h-24 md:h-32 rounded-full opacity-50 blur-2xl absolute bottom-1/4 left-1/4 transform rotate-15"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 relative z-10">
        {/* Profile Section */}
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <div className="relative w-36 md:w-48 h-36 md:h-48 overflow-hidden rounded-full border-4 border-yellow-400 bg-gradient-to-br from-blue-200 via-purple-200 to-yellow-200 shadow-lg">
            <img
              src={me}
              alt="Manoj Chavan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Get to Know Me
          </h2>
          <p className="text-gray-700 text-base md:text-lg py-6 md:py-10 mb-6 md:mb-8">
            Hi, I'm Manoj Chavan, a dedicated Software Engineer with a passion
            for solving real-world problems through technology. I enjoy
            developing robust web and mobile applications that make a meaningful
            impact. Currently, I'm refining my skills in full-stack development
            and building my own startup, Minta, where I'm the founder. I believe
            in using technology to simplify and enhance everyday tasks.
          </p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-8">
            {/* Role Card */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg flex-1 transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white w-12 md:w-16 h-12 md:h-16 flex items-center justify-center rounded-full shadow-lg">
                <span className="text-xl md:text-2xl">💼</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                Role
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Full-Stack Developer
              </p>
            </div>

            {/* Education Card */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg flex-1 transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white w-12 md:w-16 h-12 md:h-16 flex items-center justify-center rounded-full shadow-lg">
                <span className="text-xl md:text-2xl">🎓</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                Education
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                IT Engineering, 2nd Year
              </p>
            </div>

            {/* Experience Card */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg flex-1 transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white w-12 md:w-16 h-12 md:h-16 flex items-center justify-center rounded-full shadow-lg">
                <span className="text-xl md:text-2xl">🚀</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                Experience
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                3 months of Web Development @margfoundation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
