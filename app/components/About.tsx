"use client";

import {
  Brain,
  BarChart3,
  Sparkles,
  Layers3,
} from "lucide-react";
// import { motion } from "framer-motion";

const stats = [
  {
    number: "40%",
    label: "Led the product definition and algorithmic strategy for a hyper-personalized content stream, successfully aligning machine learning capabilities with user retention goals to increase active daily interaction.",
    icon: Brain,
  },
  {
    number: "30%",
    label: "Boosted platform interactivity by introducing dynamic advisor feeds and micro-consulting rewards.",
    icon: BarChart3,
  },
  {
    number: "3+ Years",
    label: "Leveraging three-plus years of technical instruction and AIML development to mentor engineering students and architect scalable predictive pipelines.",
    icon: Layers3,
  },
  {
    number: "AI + PM",
    label: "Directing product lifecycles from tokenization architecture to production deployment, translating complex machine learning capabilities into seamless, user-centric interfaces without sacrificing technical feasibility.",
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 py-12 px-6"
    >

      <div className="max-w-7xl mx-auto relative">

        <div className="max-w-2xl relative z-10">

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

        <div className="grid grid-cols-12 gap-6 content-start self-start">

          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`
  card-hover

  ${
    index === 0
      ? "col-span-12 rounded-[3rem] rotate-[-2deg] bg-white/[0.04] p-10"
      : index === 1
      ? "col-span-6 rounded-[4rem] rotate-[2deg] bg-white/[0.03] p-8 mt-10"
      : index === 2
      ? "col-span-6 rounded-[2.5rem] rotate-[-1deg] bg-white/[0.02] p-8"
      : "col-span-12 rounded-[3.5rem] rotate-[1deg] bg-white/[0.05] p-10 -mt-2"
  }

  border border-white/10

  backdrop-blur-2xl
`}
              >
                <div className="mb-4">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>
                  
                <h3 className="text-4xl font-bold text-cyan-400 mb-3">
                  {item.number}
                </h3>

                <p className="text-gray-400">
                  {item.label}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}