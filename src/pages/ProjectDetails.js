import React from 'react';
import { useParams } from 'react-router-dom';
import hoverSaleScreenshot from '../assets/hoverSaleScreenshot.png';
import demoVideo1 from '../assets/hoverSaleDemo1.mp4';
import portfolioScreenshot from '../assets/portfolio.png'; // Add your screenshot

function ProjectDetails() {
  const { id } = useParams();

  const projects = {
    ecommerce: {
      title: 'HoverSale – Full-Stack E-Commerce App',
      screenshot: hoverSaleScreenshot,
      demoVideos: [demoVideo1], // Add more if needed
      liveLink: 'http://hover-shop.s3-website.eu-north-1.amazonaws.com/',
      github: 'https://github.com/ShivaniShreeG/E-Commerce-website',
      overview:
        'HoverSale is a modern, responsive eCommerce platform built using the MERN-like stack with MySQL. Users can register, browse, buy, and track orders. It’s deployed on AWS S3 with full functionality including wishlist, cart, invoice email, and more.',
      features: [
        '🛒 Product listing by category with wishlist/cart',
        '🔐 JWT-based login/register with bcrypt encryption',
        '💳 Buy Now & order tracking system',
        '👤 Profile with editable info and profile picture upload',
        '📧 Invoice PDF auto-generated and emailed',
        '🧑‍💼 Admin dashboard',
        '📱 Fully responsive UI',
      ],
      tech: ['⚛️ React.js', '🎨 Tailwind CSS', '🌐 Node.js', '📦 Express.js', '🛢 MySQL', '☁️ AWS S3'],
      challenges: [
        'Cross-origin setup with CORS and proxies',
        'Dynamic PDF generation for invoices',
        'Authenticated multi-role access (User/Admin)',
      ],
      learnings: ['AWS S3 & EC2 deployment', 'Secure RESTful APIs with JWT', 'Mobile-first responsive layouts with Tailwind'],
    },

    portfolio: {
      title: 'Personal Portfolio – Developer Showcase',
      screenshot: portfolioScreenshot,
      demoVideos: [], // No video
      liveLink: '',
      github: 'https://github.com/ShivaniShreeG/Portfolio',
      overview:
        'This is a sleek, modern personal portfolio built with React and Tailwind CSS. It features a particle background, animated sections, and routing between pages like Projects, About, Contact, and more.',
      features: [
        '🌌 Animated particle background',
        '🧩 Sections: About, Skills, Projects, Contact',
        '📱 Fully responsive design',
        '🗂 Project details with dynamic routes',
        '🌈 Aqua/teal glowing UI theme',
      ],
      tech: ['⚛️ React.js', '🎨 Tailwind CSS', '🌐 React Router', '🧠 tsparticles'],
      challenges: ['Routing with animated transitions', 'Responsive layout with custom particles'],
      learnings: ['Tailwind theming & animation', 'React Router for single-page apps'],
    },
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold text-aqua mb-4">Project: {id}</h1>
        <p className="text-gray-300 text-center">
          No detailed information available for <span className="text-teal font-semibold">{id}</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white pt-24 px-4 pb-16 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* 🖼️ Screenshot & Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src={project.screenshot}
            alt={`${project.title} Screenshot`}
            className="rounded-lg shadow-lg border border-gray-700 object-cover w-full h-auto max-h-[360px]"
          />

          <div className="flex flex-col items-start justify-center space-y-6">
            <h1 className="animate-slow-bounce text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-aqua to-teal drop-shadow-[0_0_8px_#14b8a6]">
              {project.title}
            </h1>

            <div className="w-full flex flex-wrap gap-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-black bg-aqua hover:bg-teal transition duration-300 shadow-md"
                >
                  🌐 Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-black bg-aqua hover:bg-teal transition duration-300 shadow-md"
                >
                  💻 GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 📌 Overview */}
        <section className="space-y-3">
          <h2 className="text-2xl text-aqua font-semibold">📌 Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{project.overview}</p>
        </section>

        {/* 🚀 Features */}
        {project.features?.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-2xl text-aqua font-semibold">🚀 Features</h2>
            <ul className="list-disc text-gray-300 pl-5 space-y-1 text-lg">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 🛠 Tech Stack */}
        {project.tech?.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-2xl text-aqua font-semibold">🛠 Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300 text-lg">
              {project.tech.map((t, i) => (
                <div key={i}>{t}</div>
              ))}
            </div>
          </section>
        )}

        {/* 🧠 Challenges */}
        {project.challenges?.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-2xl text-aqua font-semibold">🧠 Challenges</h2>
            <ul className="list-disc text-gray-300 pl-5 space-y-1 text-lg">
              {project.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 📈 Learnings */}
        {project.learnings?.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-2xl text-aqua font-semibold">📈 Learnings</h2>
            <ul className="list-disc text-gray-300 pl-5 space-y-1 text-lg">
              {project.learnings.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 🎬 Demo Videos */}
        {project.demoVideos?.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl text-aqua font-semibold">🎬 Project Demo</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {project.demoVideos.map((video, index) => (
                <video
                  key={index}
                  controls
                  className="w-full h-[200px] md:h-[240px] rounded-lg border border-gray-600 shadow-lg"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;
