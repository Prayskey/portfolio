import portfolio_pic from "../assets/1791280430122-cropped.webp";
import resume from "../assets/resume.pdf";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="px-6 border-t border-border-main md:px-16 lg:px-24 py-24 bg-bg transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl tracking-wide text-center font-heading text-text-muted sm:text-4xl mb-12">
          About <span className="text-accent font-extrabold">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

          {/*
            📸 MOBILE & DESKTOP PORTRAIT CONTAINER:
            Mobile: Centered, compact circle or soft square right above text content
            Desktop (md:): Switches back to your structured grid column setup
          */}
          <div className="col-span-1 md:col-span-4 flex justify-center">
            <div className="relative overflow-hidden rounded-2xl border border-border-main w-40 h-40 md:w-full md:h-auto max-w-[280px] lg:max-w-[320px] shadow-sm bg-surface">
              <img
                src={portfolio_pic}
                alt="Prayskey portrait"
                className="w-full h-full object-cover object-center select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Right: Text and Action Content Block */}
          <div className="col-span-1 md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <div className="text-base font-sans text-text-muted leading-relaxed space-y-4 max-w-2xl">
              <p className="text-lg font-medium text-text-main font-heading tracking-wide">
                I use code to turn ambitious concepts into elegant, real-world software.
              </p>
              <p>
                I am a craft-driven Fullstack React Developer dedicated to building minimal, highly performant user interfaces and elegant architecture.
              </p>
              <p>
                I love the process of turning a raw concept into a polished, production-ready product. To push my work further, I am currently exploring the intersection of clean systems and AI technology.
              </p>
            </div>

            {/* Action Item: Styled dynamically to handle the modern theme text configurations */}
            <div className="pt-2">
              <a
                href={resume}
                download="Prayskey_Ogbonna_Resume.pdf"
                className="inline-block py-2.5 px-6 rounded-md font-mono text-xs tracking-wider cursor-pointer text-btn-text transition-all duration-300 bg-accent hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-md"
              >
                DOWNLOAD_RESUME.PDF
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
