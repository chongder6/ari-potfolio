"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">

        <div>

          <p className="text-cyan-400 mb-4 tracking-[0.3em] uppercase">
            AI/ML Engineer & Educator
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
            Building
            <span className="text-cyan-400"> AI Products </span>
            with Strategy & Innovation
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
            Product-focused technologist passionate about AI, LLMs,
            analytics, and scalable digital experiences.
          </p>

          <div className="flex gap-6">

            <button className="glow-button px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold">
              View Projects
            </button>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-full border border-white/20"
            >
              Download Resume
            </a>

          </div>

        </div>

        <div className="relative">

          <div className="w-[350px] h-[350px] rounded-full bg-cyan-500/20 blur-3xl absolute"></div>

          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

            <img
              src="/profile/profile.png"
              alt="profile"
              className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-cyan-400"
            />

            <h3 className="text-2xl font-bold text-center mb-4">
              Arijit Chongder
            </h3>

            <p className="text-gray-400 text-center">
              AI/ML Engineer | Product Strategist | Educator
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}