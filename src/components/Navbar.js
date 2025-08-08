import React, { useState } from "react";
import {
  FaLaptopCode,
  FaHome,
  FaCode,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaArrowLeft,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isProjectPage = location.pathname.startsWith("/projects/");

  const menuItems = [
    { name: "Home", icon: <FaHome />, link: "home" },
    { name: "About", icon: <FaUser />, link: "about" },
    { name: "Skills", icon: <FaCode />, link: "skills" },
    { name: "Projects", icon: <FaProjectDiagram />, link: "projects" },
    { name: "Contact", icon: <FaEnvelope />, link: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 px-6 py-4 z-50 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="animate-slow-bounce flex items-center space-x-2 text-glow text-2xl md:text-3xl font-extrabold tracking-wide">
          <FaLaptopCode />
          <span>Shivani</span>
        </div>

        {/* Back button on project page */}
        {isProjectPage ? (
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-glow font-semibold space-x-2 hover:scale-105 transition-transform duration-200"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </button>
        ) : (
          <>
            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-glow text-2xl"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.link}
                  smooth={true}
                  duration={500}
                  offset={-70} // adjust for navbar height
                  className="flex items-center space-x-2 text-glow font-semibold hover:scale-105 transition-transform duration-200 cursor-pointer"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </ScrollLink>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {!isProjectPage && isMobileMenuOpen && (
        <div className="mt-4 md:hidden flex flex-col items-center space-y-4 bg-black bg-opacity-90 py-4 rounded-lg shadow-md">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.link}
              smooth={true}
              duration={500}
              offset={-70}
              className="flex items-center space-x-2 text-glow font-semibold cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.icon}
              <span>{item.name}</span>
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
