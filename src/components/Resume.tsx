export default function Resume() {
  const educationHistory = [
    {
      id: 1,
      period: "2024 — Present",
      role: "B.Sc. Software Engineering",
      institution: "Federal University of Technology, Owerri (FUTO)",
      description: "Studying software engineering fundamentals including data structures, algorithms and object-oriented design, while building full-stack projects alongside my coursework."
    },
    {
      id: 2,
      period: "May 2026 — Present",
      role: "AI/ML Self-Directed Study",
      institution: "Independent Learning",
      description: "Learning how to build AI systems, working with neural networks and machine learning tools such as TensorFlow, Keras and Scikit-learn, and applying them to real software products."
    }
  ];

  const experienceHistory = [
    {
      id: 1,
      period: "Ongoing",
      role: "Founder & Developer",
      institution: "NexEdge",
      description: "Designing and building an automated trading journal that logs trades, analyzes performance and surfaces patterns. Built the full stack with React, Node.js and PostgreSQL, plus a desktop app and a risk calculator."
    },
    {
      id: 2,
      period: "Hackathon",
      role: "Developer, Team Project",
      institution: "CampusFlow",
      description: "Part of the team that built a blockchain-based clearance system. Student results are stored on-chain and can be verified from anywhere, and students can receive their certificates remotely."
    }
  ];

  return (
    <section
      id="resume"
      className="px-6 md:px-25 bg-surface py-20 border-t border-border-main"
    >
      <h2 className="text-center mt-3 text-2xl tracking-wide font-heading text-text-muted sm:text-3xl mb-16">
        My <span className="font-extrabold text-accent">Qualifications</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto relative">

        {/* SECTION 1: WORK EXPERIENCE */}
        <div className="space-y-10">
          <h3 className="font-heading font-bold text-xl text-text-main tracking-tight flex items-center space-x-2 justify-center md:justify-start">
            <span className="text-link font-mono text-base font-normal">//</span>
            <span>Experience</span>
          </h3>

          <div className="relative border-l border-border-main ml-3 md:ml-3 pl-6 space-y-10 max-w-md mx-auto md:mx-0">
            {experienceHistory.map((job) => (
              <div key={job.id} className="group relative text-left">
                <div className="absolute -left-7.75 top-1.5 h-3 w-3 rounded-full border-2 border-border-main bg-bg group-hover:border-accent transition-colors duration-200" />

                <span className="font-mono text-xs font-bold text-link tracking-wide">
                  {job.period}
                </span>
                <h4 className="font-heading font-extrabold text-base text-text-main mt-1 group-hover:text-link transition-colors">
                  {job.role}
                </h4>
                <span className="font-sans text-xs font-semibold text-text-muted block mt-0.5">
                  {job.institution}
                </span>

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
                <div className="absolute -left-7.75 top-1.5 h-3 w-3 rounded-full border-2 border-border-main bg-bg group-hover:border-accent transition-colors duration-200" />

                <span className="font-mono text-xs font-bold text-link tracking-wide">
                  {edu.period}
                </span>
                <h4 className="font-heading font-extrabold text-base text-text-main mt-1 group-hover:text-link transition-colors">
                  {edu.role}
                </h4>
                <span className="font-sans text-xs font-semibold text-text-muted block mt-0.5">
                  {edu.institution}
                </span>

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
