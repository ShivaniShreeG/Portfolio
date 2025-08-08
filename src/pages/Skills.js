import React from 'react';
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaReact,
  FaNodeJs, FaGithub, FaAws, FaGoogleDrive, FaMicrosoft,
  FaPalette, FaServer, FaCloud, FaToolbox, FaTools
} from 'react-icons/fa';
import {
  SiExpress, SiTailwindcss, SiMysql, SiPostman, SiXampp, SiOracle,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import { MdCloud, MdStorage, MdComputer } from 'react-icons/md';
import { RiDatabase2Line } from 'react-icons/ri';
import { HiServer } from 'react-icons/hi';
import { AiOutlineDatabase } from 'react-icons/ai';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaPalette />,
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, description: "Semantic markup, accessibility, SEO optimization" },
      { name: "CSS3", icon: <FaCss3Alt />, description: "Responsive design, animations, Flexbox/Grid" },
      { name: "JavaScript", icon: <FaJsSquare />, description: "ES6+, DOM manipulation, async programming" },
      { name: "React.js", icon: <FaReact />, description: "Hooks, Context API, React Router" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, description: "Utility-first CSS framework" },
    ],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, description: "Express.js, REST APIs" },
      { name: "Express.js", icon: <SiExpress />, description: "Middleware, routing, APIs" },
      { name: "Java", icon: <FaJava />, description: "OOP, backend systems" },
      { name: "Python", icon: <FaPython />, description: "Scripting, automation, data analysis" },
      { name: "PHP", icon: <FaPhp />, description: "Web backend scripting" },
    ],
  },
  {
    title: "Databases",
    icon: <AiOutlineDatabase />,
    skills: [
      { name: "MySQL", icon: <SiMysql />, description: "Database design, queries, optimization" },
      { name: "AWS RDS", icon: <MdStorage />, description: "Managed relational databases" },
      { name: "AWS Aurora", icon: <RiDatabase2Line />, description: "MySQL-compatible cloud DB" },
      { name: "Oracle Cloud", icon: <SiOracle />, description: "Cloud DB, enterprise solutions" },
      { name: "XAMPP", icon: <SiXampp />, description: "Local PHP & MySQL environment" },
    ],
  },
  {
    title: "Cloud & Hosting",
    icon: <FaCloud />,
    skills: [
      { name: "AWS S3", icon: <FaAws />, description: "Storage, hosting static sites" },
      { name: "AWS EC2", icon: <MdComputer />, description: "Virtual servers, scalable hosting" },
      { name: "AWS Hosting", icon: <HiServer />, description: "Deploying full-stack apps" },
      { name: "Cloud Basics", icon: <MdCloud />, description: "Cloud fundamentals & deployment" },
    ],
  },
  {
    title: "Tools",
    icon: <FaToolbox />,
    skills: [
      { name: "Git & GitHub", icon: <FaGithub />, description: "Version control, collaboration" },
      { name: "Postman", icon: <SiPostman />, description: "API testing, automation" },
      { name: "VS Code", icon: <VscVscode />, description: "Extensions, debugging, productivity" },
      { name: "API Development", icon: <TbApi />, description: "RESTful APIs, integration" },
      { name: "Google Suite", icon: <FaGoogleDrive />, description: "Docs, Sheets, collaboration" },
      { name: "MS Office", icon: <FaMicrosoft />, description: "Word, Excel, PowerPoint" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-black px-4 sm:px-8 py-16 flex flex-col items-center">
      <h2 className="animate-slow-bounce text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-aqua to-teal mb-8 text-center drop-shadow-[0_0_8px_#14b8a6] flex items-center gap-4">
        <FaTools className="text-5xl icon-glow" />
        Skills
      </h2>

      <div className="max-w-6xl w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="pb-10"
        >
          {skillCategories.map(({ title, icon, skills }) => (
            <SwiperSlide key={title}>
              {/* Category Title */}
              <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-aqua to-teal drop-shadow-[0_0_8px_#14b8a6] mb-6 flex items-center gap-3">
                <span className="text-3xl icon-glow">{icon}</span>
                {title}
              </h3>

              {/* Skills in this category */}
              <div className="px-2 sm:px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {skills.map(({ name, icon, description }) => (
                    <div
                      key={name}
                      className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-6 text-white shadow-lg hover:scale-105 transform transition-all duration-300 animate-float"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="text-4xl icon-glow">{icon}</div>
                        <h4 className="text-xl font-bold glow-text">{name}</h4>
                      </div>
                      <p className="text-sm opacity-90">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
