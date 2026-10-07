import portfolio_pic from "../assets/1791280430122-cropped.webp";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="bg-surface px-6 md:px-25 py-24 transition-colors duration-300"
    >
      <div>
        <div>
          <h2 className="text-3xl tracking-tight leading-loose text-center font-heading text-text-muted sm:text-4xl">
            About <span className="text-accent font-extrabold">Me</span>
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">

            {/* Left: Visible on desktop, hidden on small mobile viewports */}
            <div className="hidden md:block md:col-span-4 justify-self-center">
              <div className="relative overflow-hidden rounded-xl border border-border-main max-w-[320px] shadow-md bg-bg">
                <img
                  src={portfolio_pic}
                  alt="Portfolio Portrait"
                  className="w-full h-auto object-cover object-center select-none pointer-events-none"
                />
              </div>
            </div>

            {/* Right: Content block spanning the remaining grid layout tracks */}
            <div className="md:col-span-8 md:pl-6 space-y-6">



              <div className="text-base font-sans text-text-muted leading-relaxed space-y-4 text-justify max-w-xl">
                <p className="text-lg font-medium text-text-main text-left">
                  I love turning dreams into reality with code.
                </p>
                <p>
                  I'm a Fullstack React developer specializing in building minimal, highly
                  performant user interfaces. I am a developer driven by craft and clean systems,
                  with a strong interest in creating software that feels as good to use as it is to build.
                </p>
                <p>
                  I enjoy taking an idea from a rough concept and turning it into a real, functional
                  product — thinking through the interface, the underlying systems, and all the small
                  details that make an experience feel right.
                </p>
                <p>
                  I'm also currently studying how to design and build AI systems, exploring how
                  intelligent technology can be integrated into useful products and real-world experiences.
                </p>
                <p>
                  For me, development isn't just about writing code. It's about taking an idea that
                  exists in someone's head and giving it a life people can actually interact with.
                </p>
              </div>

              {/* Action Trigger Button */}
              <div className="pt-2">
                <button className="py-2.5 px-6 rounded-full font-heading font-bold text-sm tracking-wide cursor-pointer text-btn-text transition-all duration-200 bg-accent hover:bg-accent-hover hover:shadow-sm">
                  Download CV
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
