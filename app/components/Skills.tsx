"use client";

// import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Product",
    skills: [
      "Product Strategy",
      "Roadmapping",
      "PRDs",
      "Agile",
      "MVP Scoping",
      "User Research",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "LLMs",
      "RAG",
      "TensorFlow",
      "NLP",
      "Fine-Tuning",
      "Deep Learning",
    ],
  },
  {
    title: "Analytics",
    skills: [
      "SQL",
      "Power BI",
      "Tableau",
      "Excel",
      "Statistics",
      "Data Analysis",
    ],
  },
  {
    title: "Development",
    skills: [
      "Python",
      "FastAPI",
      "Flutter",
      "Django",
      "MongoDB",
      "React",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technical Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {skillGroups.map((group, index) => (
            <div
              key={index}
          
              className="card-hover gradient-border rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >

              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}