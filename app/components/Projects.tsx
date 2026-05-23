"use client";

// import { motion } from "framer-motion";

const projects = [
  {
    title: "FinTalk",
    description:
      "A fintech consultation marketplace with real-time advisor matching and wallet billing.",
    tech: ["Flutter", "FastAPI", "Product Strategy"],
  },

  {
    title: "TinyLLM",
    description:
      "A lightweight LLM workflow with tokenization, LoRA fine-tuning, and deployment.",
    tech: ["LLM", "Python", "FastAPI"],
  },

  {
    title: "AI Study Assistant",
    description:
      "AI-powered learning platform with summaries, quizzes, and smart recommendations.",
    tech: ["RAG", "LLMs", "Analytics"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <div className="mb-20">

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Work
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              
              className="card-hover rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >

              <div className="h-52 relative overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20"></div>

                <div className="absolute inset-0 flex items-center justify-center">

                  <h2 className="text-4xl font-bold text-white/80">
                    {project.title}
                  </h2>

                </div>

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">

                  {project.tech.map((item, i) => (

                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}