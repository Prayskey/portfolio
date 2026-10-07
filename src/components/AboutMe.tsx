import portfolio_pic from "../assets/1791280430122-cropped.webp";
import resume from "../assets/resume.pdf";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="px-6 md:px-25 py-24 transition-colors duration-300"
    >
      <h2 className="text-3xl tracking-tight leading-loose text-center font-heading text-text-muted sm:text-4xl">
        About <span className="text-accent font-extrabold">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center max-w-7xl mx-auto mt-8">

        {/* Left: portrait, hidden on small mobile viewports */}
        <div className="hidden md:block md:col-span-4 justify-self-center">
          <div className="relative overflow-hidden rounded-xl border border-border-main max-w-[320px] shadow-md bg-bg">
            <img
              src={portfolio_pic}
              alt="Prayskey portrait"
              className="w-full h-auto object-cover object-center select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Right: content */}
        <div className="md:col-span-8 md:pl-6 space-y-6">
          <div className="text-base font-sans text-text-muted leading-relaxed space-y-4 max-w-xl">
            <p className="text-lg font-medium text-text-main">
              I use code to turn ambitious concepts into elegant, real-world software.
            </p>
            <p>
              I am a craft-driven Fullstack React Developer dedicated to building minimal, highly performant user interfaces and elegant architecture.
            </p>
            <p>
              I love the process of turning a raw concept into a polished, production-ready product. To push my work further, I am currently exploring the intersection of clean systems and AI technology.
            </p>
          </div>

          <div className="pt-2">
            <a
              href={resume}
              download
              className="inline-block py-2.5 px-6 rounded-full font-heading font-bold text-sm tracking-wide cursor-pointer text-btn-text transition-all duration-200 bg-accent hover:bg-accent-hover hover:shadow-sm"
            >
              Download CV
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
