export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
          Contact
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Let’s Build Something Amazing
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Interested in AI products, product strategy, or collaboration?
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="mailto:arijitchongder3@gmail.com"
            className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/arijitchongder"
            className="px-6 py-3 rounded-full border border-white/10 hover:border-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/chongder6"
            className="px-6 py-3 rounded-full border border-white/10 hover:border-cyan-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://x.com/ikiryo"
            className="px-6 py-3 rounded-full border border-white/10 hover:border-cyan-400 transition"
          >
            Twitter
          </a>
        </div>

      </div>
    </section>
  );
}