"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {

  const [mouse, setMouse] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {

    const move = (e: MouseEvent) => {

      setMouse({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener(
        "mousemove",
        move
      );
    };

  }, []);

  return (

    <div
      style={{
        position: "fixed",
        left: mouse.x - 200,
        top: mouse.y - 200,

        width: "400px",
        height: "400px",

        borderRadius: "999px",

        background:
          "radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)",

        pointerEvents: "none",

        zIndex: 1,

        filter: "blur(60px)",

        transition:
          "left 0.08s linear, top 0.08s linear",
      }}
    />

  );
}