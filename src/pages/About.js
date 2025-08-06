import React from 'react';
import { FaUserGraduate, FaCode, FaLaptopCode, FaProjectDiagram, FaAward } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full rounded-2xl p-8 border border-teal-400 shadow-[0_0_25px_#00ffff] bg-black/30 backdrop-blur-md transition-all duration-300">
        <h2 className="animate-slow-bounce text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-aqua to-teal mb-8 text-center drop-shadow-[0_0_8px_#14b8a6] flex items-center justify-center gap-4">
  <FaUser className="text-5xl icon-glow" />
    About Me
</h2>



        <p className="text-lg text-gray-200 leading-relaxed mb-8 text-center">
          I’m <span className="text-aqua font-semibold">Shivani Shree G</span>, a passionate <span className="text-teal-300 font-semibold">Full-Stack Web Developer</span> with a strong foundation in Computer Science and a flair for building scalable, responsive, and user-friendly web applications.
        </p>

        <div className="space-y-6">
          {/* Education */}
          <div className="flex items-start gap-4">
            <div className="min-w-[2rem]">
              <FaUserGraduate className="text-aqua text-2xl" />
            </div>
            <p>
              I recently completed my <span className="text-teal-400 font-medium">Bachelor’s in Computer Science (2022–2025)</span> and am currently working as a <span className="text-teal-400 font-medium">Web Development Intern</span> at Ramchin Technologies Private Limited, contributing to real-world client projects.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex items-start gap-4">
            <div className="min-w-[2rem]">
              <FaCode className="text-aqua text-2xl" />
            </div>
            <p>
              My tech stack includes <span className="text-teal-400">React.js, Node.js, Express.js, MySQL, and Tailwind CSS</span> — mastered through academic and hands-on experience.
            </p>
          </div>

          {/* Project */}
          <div className="flex items-start gap-4">
            <div className="min-w-[2rem]">
              <FaProjectDiagram className="text-aqua text-2xl" />
            </div>
            <p>
              One of my standout projects is <span className="text-teal-400 font-medium">HoverSale</span>, a fully functional e-commerce platform deployed on AWS, and featured on Ramchin’s official project showcase.
            </p>
          </div>

          {/* Certifications & Leadership */}
          <div className="flex items-start gap-4">
            <div className="min-w-[2rem]">
              <FaAward className="text-aqua text-2xl" />
            </div>
            <p>
              I’m certified in <span className="text-teal-400">Oracle Cloud Infrastructure, Cloud Computing, and Core Programming</span>, with a strong leadership track record as quiz club secretary, department sports captain, and national-level competition top performer.
            </p>
          </div>

          {/* Interests */}
          <div className="flex items-start gap-4">
            <div className="min-w-[2rem]">
              <FaLaptopCode className="text-aqua text-2xl" />
            </div>
            <p>
              I thrive in collaborative environments and enjoy <span className="text-teal-400">solving puzzles, doodling</span>, and merging design with technology to build impactful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
