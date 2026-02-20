"use client";

import React, { useEffect, useRef } from "react";

export const ParticleWave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let particles: Particle[] = [];

    // Configuration
    const particleCount = 60;
    const connectionDistance = 150;
    const waveSpeed = 0.02;
    const waveAmplitude = 50;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseY: number;
      phase: number;

      constructor() {
        this.x = Math.random() * width;
        this.baseY = height / 2 + (Math.random() - 0.5) * 100;
        this.y = this.baseY;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = 0;
        this.phase = Math.random() * Math.PI * 2;
      }

      update(time: number) {
        this.x += this.vx;

        // Reset position if out of bounds
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;

        // Wave motion
        this.y =
          this.baseY +
          Math.sin(time + this.x * 0.01 + this.phase) * waveAmplitude;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const time = Date.now() * 0.001;

      // Draw connections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update(time);
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = 1 - dist / connectionDistance;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      init();
    };

    window.addEventListener("resize", handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full opacity-60" />;
};
