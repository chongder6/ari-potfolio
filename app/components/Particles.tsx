"use client";

import { useEffect, useRef } from "react";

export default function Particles() {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = {
      x: width / 2,
      y: height / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const particles = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 6,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    const animate = () => {

      context.clearRect(0, 0, width, height);

      particles.forEach((p) => {

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {

          p.x -= dx * 0.015;
          p.y -= dy * 0.015;

        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        context.beginPath();

        context.arc(
          p.x,
          p.y,
          p.radius,
          0,
          Math.PI * 2
        );

        context.fillStyle = "red";;

        context.fill();

      });

      requestAnimationFrame(animate);

    };

    animate();

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 999,
      }}
    />
  );
}