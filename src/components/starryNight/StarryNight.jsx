"use client";

import React, { useRef, useEffect } from "react";

const StarryNight = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Taille du canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Tableau pour stocker les particules
    const particles = [];

    // Fonction pour créer une étoile
    function createStar() {
      const particle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        brightness: Math.random() * 0.5 + 0.5, // Luminosité initiale
        speed: Math.random() * 0.02, // Vitesse de variation de la luminosité
      };
      particles.push(particle);
    }

    // Fonction pour animer les particules
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dessiner les étoiles
      particles.forEach((particle) => {
        // Variation de luminosité pour l'effet de scintillement
        particle.brightness += particle.speed;
        if (particle.brightness > 1) {
          particle.speed *= -1;
        } else if (particle.brightness < 0.2) {
          particle.speed *= -1;
        }

        // Effet de halo
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.brightness * 0.2})`; // Halo plus transparent
        ctx.fill();

        // Étoile principale
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.brightness})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    // Initialisation des particules : exactement 200 étoiles
    for (let i = 0; i < 200; i++) {
      createStar();
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default StarryNight;
