export default function Resume() {
  const educationHistory = [
    {
      id: 1,
      period: "2024 — Present",
      role: "AI Systems Engineering Student",
      institution: "Self-Directed / Specialized Studies",
      description: "Deepening knowledge in designing and building intelligent systems, exploring neural networks, and integrating smart technology into real-world software products."
    },
    {
      id: 2,
      period: "2021 — 2024",
      role: "B.Sc. Computer Science / Software Track",
      institution: "University Institute",
      description: "Gained core fundamentals in data structures, algorithmic efficiency, and object-oriented systems engineering paradigms."
    }
  ];

  const experienceHistory = [
    {
      id: 1,
      period: "2024 — Present",
      role: "Fullstack React Developer",
      institution: "Freelance / Craft Ventures",
      description: "Architecting minimal, highly performant web architectures. Refactoring legacy code systems into structured, accessible, utility-first components."
    },
    {
      id: 2,
      period: "2023 — 2024",
      role: "Frontend Developer Intern",
      institution: "Digital Agency Lab",
      description: "Collaborated on production-ready user interfaces, optimizing code for speed, core web vitals, and pixel-perfect design-to-code alignment."
    }
  ];

  return (
    <section
      id="resume"
      className="px-6 md:px-25 bg-surface py-20 border-t border-border-main"
    >
      {/* Follows Your Precise Portfolio Header Pattern (Centered & Split) */}
      <h2 className="text-center mt-3 text-2xl tracking-wide font-heading text-text-muted sm:text-3xl mb-16">
        My <span className="font-extrabold text-accent">Qualifications</span>
      </h2>

      {/* Responsive layout: 1 column on mobile, 2 columns on desktop grids */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto relative">

        {/* SECTION 1: WORK EXPERIENCE */}
        <div className="space-y-10">
          <h3 className="font-heading font-bold text-xl text-text-main tracking-tight flex items-center space-x-2 justify-center md:justify-start">
            <span className="text-link font-mono text-base font-normal">//</span>
            <span>Work History</span>
          </h3>

          <div className="relative border-l border-border-main ml-3 md:ml-3 pl-6 space-y-10 max-w-md mx-auto md:mx-0">
            {experienceHistory.map((job) => (
              <div key={job.id} className="group relative text-left">
                {/* Timeline Interactive Anchor Dot */}
                <div className="absolute -left-7.75 top-1.5 h-3 w-3 rounded-full border-2 border-border-main bg-bg group-hover:border-accent transition-colors duration-200" />

                {/* Meta details */}
                <span className="font-mono text-xs font-bold text-link tracking-wide">
                  {job.period}
                </span>
                <h4 className="font-heading font-extrabold text-base text-text-main mt-1 group-hover:text-link transition-colors">
                  {job.role}
                </h4>
                <span className="font-sans text-xs font-semibold text-text-muted block mt-0.5">
                  {job.institution}
                </span>

                {/* Summary copy */}
                <p className="mt-2 font-sans text-sm text-text-muted leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: EDUCATION */}
        <div className="space-y-10">
          <h3 className="font-heading font-bold text-xl text-text-main tracking-tight flex items-center space-x-2 justify-center md:justify-start">
            <span className="text-link font-mono text-base font-normal">//</span>
            <span>Education</span>
          </h3>

          <div className="relative border-l border-border-main ml-3 md:ml-3 pl-6 space-y-10 max-w-md mx-auto md:mx-0">
            {educationHistory.map((edu) => (
              <div key={edu.id} className="group relative text-left">
                {/* Timeline Interactive Anchor Dot */}
                <div className="absolute -left-7.75 top-1.5 h-3 w-3 rounded-full border-2 border-border-main bg-bg group-hover:border-accent transition-colors duration-200" />

                {/* Meta details */}
                <span className="font-mono text-xs font-bold text-link tracking-wide">
                  {edu.period}
                </span>
                <h4 className="font-heading font-extrabold text-base text-text-main mt-1 group-hover:text-link transition-colors">
                  {edu.role}
                </h4>
                <span className="font-sans text-xs font-semibold text-text-muted block mt-0.5">
                  {edu.institution}
                </span>

                {/* Summary copy */}
                <p className="mt-2 font-sans text-sm text-text-muted leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
