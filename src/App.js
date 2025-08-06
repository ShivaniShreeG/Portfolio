import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails"; // Add this page
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden bg-black text-white">
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10 p-4">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
