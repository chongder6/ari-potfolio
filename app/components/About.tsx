"use client";

// import { motion } from "framer-motion";

const stats = [
  {
    number: "40%",
    label: "User Efficiency Growth",
  },
  {
    number: "30%",
    label: "Engagement Improvement",
  },
  {
    number: "3+",
    label: "Years Technical Experience",
  },
  {
    number: "AI + PM",
    label: "Product & AI Expertise",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <div>

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            About
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Product Thinking
            Meets Technical Execution
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Passionate about building AI-driven digital products
            with strong product strategy, scalable systems, and
            user-focused experiences.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Experienced in analytics, LLMs, marketplace systems,
            and cross-functional execution from idea to launch.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-6">

          {stats.map((item, index) => (

            <div
              key={index}
              
              className="card-hover rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >

              <h3 className="text-4xl font-bold text-cyan-400 mb-3">
                {item.number}
              </h3>

              <p className="text-gray-400">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}