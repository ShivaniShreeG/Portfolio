import React from 'react';
import { FaProjectDiagram, FaGlobe } from 'react-icons/fa'; // Using globe icon
import { useNavigate } from 'react-router-dom';
import ecommerceImage from '../assets/ecommerce.png';
import portfolioImage from '../assets/portfolio.png';
import weatherImage from '../assets/weather.png';

function Projects() {
  const navigate = useNavigate();

  const projectList = [
    {
      id: 'ecommerce',
      title: "E-Commerce Website",
      image: ecommerceImage,
      description:
        "Built with React, Node.js, and MySQL. Includes user auth, cart, checkout, order management, and admin panel.",
      link: "http://hover-shop.s3-website.eu-north-1.amazonaws.com/",
    },
    {
      id: 'portfolio',
      title: "Portfolio Website",
      image: portfolioImage,
      description:
        "Animated personal portfolio built with React and Tailwind CSS, featuring a glowing UI and animated particle background",
      link: "https://shivanishreeg.github.io/Portfolio/",
    },
    {
      id: 'weather-dashboard',
      title: "Weather Dashboard",
      image: weatherImage,
      description:
        "Interactive map-based weather app using Leaflet.js, OpenWeather API, and Tailwind CSS. Features live location detection, search, draggable pins, and detailed weather cards.",
      link: "https://shivanishreeg.github.io/Weather-Dashboard/", // Replace with your deployed link
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-8 py-16 flex flex-col items-center"
    >
      <h2 className="animate-slow-bounce text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-aqua to-teal mb-12 drop-shadow-[0_0_8px_#14b8a6] flex items-center gap-4">
        <FaProjectDiagram className="text-5xl icon-glow" />
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl">
        {projectList.map(({ id, title, image, description, link }, idx) => (
          <div
            key={idx}
            className="group transform transition duration-300 hover:scale-105"
          >
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg ring-2 ring-teal group-hover:ring-aqua group-hover:drop-shadow-[0_0_15px_#14b8a6] transition-all duration-300">
              <img
                src={image}
                alt={title}
                className="w-full h-52 object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-aqua transition-colors duration-300">
                    {title}
                  </h3>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-aqua opacity-80 hover:opacity-100 transition duration-300"
                  >
                    <FaGlobe />
                  </a>
                </div>
                <p className="text-sm text-gray-300 mb-4">{description}</p>
                <button
                  onClick={() => navigate(`/projects/${id}`)}
                  className="mt-2 inline-block text-sm font-semibold text-black bg-aqua px-4 py-1.5 rounded-full shadow hover:bg-teal transition duration-300"
                >
                  View More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
