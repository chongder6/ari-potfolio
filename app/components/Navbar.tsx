"use client";

const navItems = [
  "About",
  "Projects",
  "Experience",
  "Skills",
  "Contact",
];

export default function Navbar() {
  return (

    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

      <nav
        className="
          flex
          items-center
          gap-2

          px-4
          py-3

          rounded-full

          border
          border-white/10

          bg-white/[0.03]

          backdrop-blur-2xl

          shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        "
      >

        <div
          className="
            px-5
            py-2

            rounded-full

            bg-white

            text-black

            text-sm
            font-medium

            tracking-wide
          "
        >
          IKIRYO
        </div>

        {navItems.map((item) => (

          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="
              px-5
              py-2

              rounded-full

              text-sm
              text-white/70

              transition-all
              duration-300

              hover:text-white
              hover:bg-white/[0.05]
            "
          >
            {item}
          </a>

        ))}

      </nav>

    </header>

  );
}