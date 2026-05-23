"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-[#07111F]/60 border-b border-white/10 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold tracking-wide">
          Arijit.
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#experience" className="hover:text-cyan-400 transition">
            Experience
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-gray-300 bg-[#07111F]">

          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>

        </div>
      )}

    </nav>
  );
}