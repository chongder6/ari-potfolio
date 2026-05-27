"use client";

export default function Hero() {

  return (

    <section
      className="
        relative
        min-h-screen

        flex
        items-center

        px-6
        md:px-12

        pt-40
        pb-24
      "
    >

      <div className="max-w-7xl mx-auto w-full">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          <div>

            <p
              className="
                uppercase
                tracking-[0.3em]

                text-sm
                text-white/40

                mb-8
              "
            >
              AI&ML Engineer • Educator • Product Manager
            </p>

            <h1
              className="
                text-6xl
                md:text-8xl
                lg:text-[8rem]

                leading-[0.95]

                font-medium

                tracking-[-0.05em]

                max-w-5xl
              "
            >
              Building
              <br />

              Digital
              <br />

              Products
              <br />

              That Feel
              <br />

              Premium.
            </h1>

            <p
              className="
                mt-10

                text-white/50

                text-lg

                leading-relaxed

                max-w-xl
              "
            >
              Crafting modern product experiences
              with AI, strategy, and scalable
              systems focused on user impact.
            </p>

            <div className="flex gap-4 mt-12">

              <a
                href="#projects"
                className="
                  glow-button

                  px-8
                  py-4

                  rounded-full

                  text-sm
                  font-medium
                "
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="
                  px-8
                  py-4

                  rounded-full

                  border
                  border-white/10

                  bg-white/[0.03]

                  text-sm
                  text-white/80

                  backdrop-blur-xl

                  hover:bg-white/[0.05]

                  transition-all
                "
              >
                Resume
              </a>

            </div>

          </div>

          <div className="relative">

            <div
              className="
                absolute

                -top-20
                -left-20

                w-72
                h-72

                rounded-full

                bg-white/[0.04]

                blur-[120px]
              "
            />

            <div
              className="
                relative

                rounded-[2.5rem]

                border
                border-white/10

                bg-white/[0.03]

                backdrop-blur-2xl

                p-8
                md:p-10
              "
            >

              <div className="relative w-full h-[500px] overflow-hidden rounded-[2rem]">

  <img
    src="/profile/profile.png"
    className="
      absolute
      inset-0

      w-full
      h-full

      object-cover

      animate-slide1
    "
  />

  <img
    src="/profile/profile2.jpg"
    className="
      absolute
      inset-0

      w-full
      h-full

      object-cover

      animate-slide2
    "
  />

  <img
    src="/profile/profile3.jpg"
    className="
      absolute
      inset-0

      w-full
      h-full

      object-cover

      animate-slide3
    "
  />

</div>

              <div className="mt-8">

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <div>

                    <h2
                      className="
                        text-2xl
                        font-medium
                      "
                    >
                      ARIJIT CHONGDER
                    </h2>

                    <p className="text-white/40 mt-2">
                      AI Product Manager
                    </p>

                  </div>

                  <div
                    className="
                      w-3
                      h-3

                      rounded-full

                      bg-white
                    "
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}