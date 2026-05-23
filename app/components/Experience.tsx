"use client";

// import { motion } from "framer-motion";

const experiences = [
  {
    company: "ImaginXP",
    role: "AI & ML Engineer and Educator",
    period: "July 2025 - Present",
    points: [
      "Owned AI/ML roadmap and product execution",
      "Improved user efficiency by 35-40%",
      "Worked on LLMs, RAG, and fine-tuning systems",
    ],
  },
  {
    company: "COER University",
    role: "Assistant Professor",
    period: "Jan 2025 - July 2025",
    points: [
      "Improved student engagement and retention by 30%",
      "Led AI & Data Science curriculum",
      "Mentored technical projects and research",
    ],
  },
  {
    company: "Premier Ginie",
    role: "Instructor",
    period: "Jan 2024 - May 2024",
    points: [
      "Boosted hands-on technical literacy by 40%",
      "Designed and scaled Arduino and Python modules",
    ],
  },
  {
    company: "LNMIIT",
    role: "Teaching Assistant",
    period: "Aug 2021 - May 2023",
    points: [
      "Technical mentoring and lab guidance",
      "Practical AI implementation support",
      "Managed assignments and evaluations",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <div className="mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Professional Journey
          </h2>
        </div>

        <div className="space-y-10">

          {experiences.map((exp, index) => (
            <div
              key={index}
              
              className="card-hover gradient-border rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >

              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold">
                    {exp.company}
                  </h3>

                  <p className="text-cyan-400 mt-2">
                    {exp.role}
                  </p>
                </div>

                <p className="text-gray-500 mt-4 md:mt-0">
                  {exp.period}
                </p>
              </div>

              <ul className="space-y-3 text-gray-400">
                {exp.points.map((point, i) => (
                  <li key={i}>
                    • {point}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}