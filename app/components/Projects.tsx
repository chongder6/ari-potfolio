"use client";

import { useState } from "react";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Fin Talk",
    description:
      "A Real-Time Financial Micro-Consulting Marketplace connecting users with expert financial advisors for instant guidance.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

    pdf: "/case-studies/FinTalk_CS_small.pdf",

    github:
    "https://github.com/chongder6/fintalk",

    live:
    "https://yourwebsite.com",
  },

  {
    title: "TinyLLM",
    description:
      "Instead of just calling an API, documented the creation of a specialized small-scale model pipeline. This project involved training a compact language model tailored for specific tasks, demonstrating the process of building and optimizing a custom LLM from scratch.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },

  {
    title: "Fintech Dashboard",
    description:
      "Designed premium financial analytics experiences with scalable product systems.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },


  {
    title: "AI Workflow Platform",
    description:
      "Developed intelligent workflow ecosystems integrating AI automation pipelines.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

export default function Projects() {

  const [active, setActive] = useState<number | null>(null);

  return (

    <section
      id="projects"
      className="
        relative

        min-h-screen

        px-6
        md:px-12

        py-32
      "
    >

      <div className="max-w-7xl mx-auto">

        <div className="mb-20">

          <p
            className="
              uppercase
              tracking-[0.3em]

              text-sm
              text-white/40

              mb-6
            "
          >
            Curated Work
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl

              leading-none

              tracking-[-0.05em]
            "
          >
            Featured
            <br />
            Projects
          </h2>

        </div>

        <motion.div
          className="flex flex-col gap-8"
          whileHover={{
            rotateX: -4,
            rotateY: 4,
            scale: 1.02,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {projects.map((project, index) => {

            const isActive = active === index;

            return (

              <div
                key={index}

                onMouseEnter={() => setActive(index)}

                onMouseLeave={() => setActive(null)}

                onClick={() =>
                setActive(active === index ? null : index)
                }

                className={`
                  relative

                  overflow-hidden

                  rounded-[2.5rem]

                  border
                  border-white/10

                  bg-white/[0.03]

                  backdrop-blur-2xl

                  cursor-pointer

                  transition-all
                  duration-700

                  ${
                    isActive
                      ? "h-[600px] scale-[1.02]"
                      : "h-[120px] scale-[0.98]"
                  }
                `}
              >

                <div
                  className="
                    absolute
                    inset-0
                  "
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    className={`
                      w-full
                      h-full

                      object-cover

                      transition-all
                      duration-700

                      ${
                        isActive
                          ? "scale-100 opacity-80"
                          : "scale-110 opacity-30"
                      }
                    `}
                  />

                  <div
                    className="
                      absolute
                      inset-0

                      bg-black/40
                    "
                  />

                </div>

                <div
                  className="
                    relative
                    z-10

                    h-full

                    flex
                    flex-col
                    justify-between

                    p-8
                    md:p-12
                  "
                >

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                    "
                  >

                    <h3
                      className="
                        text-3xl
                        md:text-5xl

                        tracking-[-0.04em]
                      "
                    >
                      {project.title}
                    </h3>

                    <div
                      className={`
                        w-4
                        h-4

                        rounded-full

                        transition-all
                        duration-500

                        ${
                          isActive
                            ? "bg-white scale-125"
                            : "bg-white/30"
                        }
                      `}
                    />

                  </div>

                  <div
                    className={`
                      transition-all
                      duration-700

                      max-w-2xl

                      ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }
                    `}
                  >

                    <p
                      className="
                        text-lg
                        md:text-xl

                        text-white/70

                        leading-relaxed
                      "
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-8">
                      
{/* The buttons .. adding comment for remembering as it is very confusion  */}
  <a
    href={project.pdf}
    target="_blank"
    rel="noopener noreferrer"

    className="
      inline-flex
      items-center

      px-5
      py-2.5

      rounded-full

      bg-white
      text-black

      text-xs
      font-medium

      hover:scale-105

      transition-all
    "
  >
    Case Study
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"

    className="
      inline-flex
      items-center

      px-5
      py-2.5

      rounded-full

      border
      border-white/10

      bg-white/[0.03]

      text-xs
      text-white/80

      hover:bg-white/[0.06]

      transition-all
    "
  >
    See Project
  </a>

  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"

    className="
      inline-flex
      items-center

      px-5
      py-2.5

      rounded-full

      border
      border-white/10

      bg-white/[0.03]

      text-xs
      text-white/80

      hover:bg-white/[0.06]

      transition-all
    "
  >
    Live Demo
  </a>

</div>

                  </div>

                </div>

              </div>

            );

          })}

        </motion.div>

      </div>

    </section>
  );
}