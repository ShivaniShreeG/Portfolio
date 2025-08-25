import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10 w-full h-full"
      options={{
        background: { color: "#000000" },
        particles: {
          number: { value: 90, density: { enable: true, area: 800 } },
          color: { value: ["#00ffff", "#14b8a6", "#00ffcc"] }, // 💠 neon cyan, magenta, aqua
          shape: { type: "circle" },
          opacity: {
            value: 0.7,
            random: true,
            animation: { enable: true, speed: 1.5, minimumValue: 0.3 }
          },
          size: {
            value: { min: 1, max: 5 },
            animation: { enable: true, speed: 3, minimumValue: 0.5 }
          },
          move: {
            enable: true,
            speed: { min: 0.5, max: 2 }, // particles move at different speeds
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
            attract: { enable: false }
          },
          links: {
            enable: true,
            distance: 180,
            color: "#00ffff",
            opacity: 0.5,
            width: 1.2,
            blink: false,
            shadow: { enable: true, blur: 20, color: "#00ffff" }
          },
          shadow: {
            enable: true,
            blur: 20,
            color: "#00ffff"
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: ["grab", "repulse"] }, // ✨ hover feels alive
            onClick: { enable: true, mode: ["push", "remove"] } // click adds & removes
          },
          modes: {
            grab: { distance: 200, links: { opacity: 1 } },
            repulse: { distance: 120, duration: 0.4 },
            push: { quantity: 3 },
            remove: { quantity: 2 }
          }
        },
        detectRetina: true,
        fpsLimit: 60
      }}
    />
  );
}
