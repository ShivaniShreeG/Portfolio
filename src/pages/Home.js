import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";
import profileImage from "../assets/Profile.jpeg";
import "../index.css";

function Home() {
  // Scroll to section function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black px-4 pt-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl w-full">
        
        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="glow-ring animate-float shadow-xl">
            <img
              src={profileImage}
              alt="Shivani"
              className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-glow-animated mb-2">
            Hi, I’m Shivani Shree
          </h1>

          <h2 className="text-lg md:text-xl text-teal font-semibold mb-2 tracking-wide">
            Software Developer • Fullstack Enthusiast • Creative Problem Solver
          </h2>

          <p className="text-gray-400 mb-2 text-sm md:text-base">
            📍 Tuticorin, Tamil Nadu, India
          </p>

          <p className="text-gray-300 mb-4 text-sm md:text-lg leading-relaxed">
            A passionate Full-Stack Developer turning ideas into responsive,
            scalable web applications with intuitive design and robust backend.
          </p>

          <div className="text-aqua text-sm md:text-base mb-6 font-medium tracking-wider">
            React • Node.js • MySQL • Tailwind
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mb-6 text-3xl justify-center md:justify-start">
            <a
              href="https://github.com/ShivaniShreeG"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="icon-glow"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shivani-shree-g/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="icon-glow"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-4 w-full justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("projects")}
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal to-aqua text-white font-semibold button-glow"
            >
              <FaExternalLinkAlt className="group-hover:translate-x-1 transition" />
              View Projects
            </button>

            <a
              href="/Shivani.pdf" // PDF should be in public folder
              download
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal to-aqua text-white font-semibold button-glow"
            >
              <FaDownload className="group-hover:rotate-12 transition" />
              Download Resume
            </a>

            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal to-aqua text-white font-semibold button-glow"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
