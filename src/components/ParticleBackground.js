// src/components/ParticleBackground.js
import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

function ParticleBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0 w-full h-full"
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "#000000" },
        },
        particles: {
          number: {
            value: 100,
            density: { enable: true, area: 800 },
          },
          color: {
            value: ["#00FFFF", "#00CED1", "#50C878"], // Aqua, Teal, Emerald
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.6,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticleBackground;
