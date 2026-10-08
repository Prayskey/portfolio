export default function Resume() {
  const summary =
    "Full-Stack Engineer specialized in architectural design and product execution. I own application lifecycles end-to-end—from robust database and system APIs to responsive frontend user interfaces.";

  const experienceHistory = [
    {
      id: 1,
      period: "July 2026 — Present",
      role: "Software Engineer & Product Developer",
      institution: "NexEdge · Independent Project",
      points: [
        "Architecting an automated full-stack application for live trading synchronization.",
        "Integrating low-latency broker data via MetaApi for real-time historical streaming.",
        "Designing localized AI models to analyze user behavioral trading patterns.",
      ],
    },
    {
      id: 2,
      period: "June 2026 — July 2026",
      role: "Backend Engineer",
      institution: "CampusFlow · Hack4FUTO",
      points: [
        "Designed stateless serverless backend architecture deployed directly to Vercel production.",
        "Engineered remote validation workflows handling instant digital verification pipelines.",
        "Integrated secure cryptographic loops with immutable on-chain record layers.",
      ],
    },
  ];

  const educationHistory = [
    {
      id: 1,
      period: "2024 — 2029",
      role: "B.Eng. Software Engineering",
      institution: "Federal University of Technology, Owerri (FUTO)",
      points: [
        "Advanced specialization in algorithms, relational schemas, and systems design.",
      ],
    },
    {
      id: 2,
      period: "2026 — Present",
      role: "AI/ML Engineering",
      institution: "Self-Directed Specialized Track",
      points: [
        "Training neural modeling layers to execute advanced analytical compute paths.",
      ],
    },
  ];

  const skillGroups = [
    { label: "Core", items: ["TypeScript", "JavaScript"] },
    { label: "Frontend", items: ["React", "Tailwind CSS"] },
    { label: "Backend", items: ["Node.js", "Express.js", "WebSockets"] },
    { label: "Data", items: ["PostgreSQL", "Supabase"] },
    { label: "Infra", items: ["Git", "GitHub", "Vercel", "Railway"] },
    { label: "AI & ML", items: ["Python", "TensorFlow", "Scikit-learn"] },
  ];

  type Entry = {
    id: number;
    period: string;
    role: string;
    institution: string;
    points: string[];
  };

  const Timeline = ({ title, entries }: { title: string; entries: Entry[] }) => (
    <div className="space-y-8">
      <h3 className="font-heading font-semibold text-xl text-text-main tracking-wide flex items-center space-x-2">
        <span className="text-link font-mono text-base font-normal">//</span>
        <span>{title}</span>
      </h3>

      <div className="relative border-l border-border-main ml-3 pl-6 space-y-8">
        {entries.map((entry) => (
          <div key={entry.id} className="group relative text-left">
            {/* Precise, standardized pixel center alignment for timeline points */}
            <div className="absolute -left-[25px] top-1.5 h-3 w-3 rounded-full border-2 border-border-main bg-bg transition-colors duration-300 group-hover:border-accent" />

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
              <div>
                <h4 className="font-heading font-semibold text-base text-text-main transition-colors duration-200 group-hover:text-link">
                  {entry.role}
                </h4>
                <span className="font-sans text-sm text-text-muted block mt-0.5">
                  {entry.institution}
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-link shrink-0 mt-0.5">
                {entry.period}
              </span>
            </div>

            <ul className="mt-3 space-y-2 font-sans text-sm text-text-muted leading-relaxed">
              {entry.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-accent shrink-0 select-none">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="resume" className="px-6 md:px-16 lg:px-24 py-20 bg-bg border-t border-border-main transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Section Headline */}
        <h2 className="text-center text-2xl tracking-wide font-heading text-text-muted sm:text-3xl mb-4">
          My <span className="font-extrabold text-accent">Qualifications</span>
        </h2>

        <p className="max-w-3xl mx-auto text-center font-sans text-sm text-text-muted leading-relaxed mb-16">
          {summary}
        </p>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Timeline Body */}
          <div className="lg:col-span-8 space-y-16">
            <Timeline title="Experience" entries={experienceHistory} />
            <Timeline title="Education" entries={educationHistory} />
          </div>

          {/* Right Capabilities Sidepanel */}
          <div className="lg:col-span-4 space-y-8 sticky top-28">
            <h3 className="font-heading font-semibold text-xl text-text-main tracking-wide flex items-center space-x-2">
              <span className="text-link font-mono text-base font-normal">//</span>
              <span>Capabilities</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {skillGroups.map((group) => (
                <div
                  key={group.label}
                  className="rounded-md border border-border-main bg-surface p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-sm"
                >
                  <span className="font-mono text-xs font-bold text-link uppercase tracking-wider">
                    {group.label}
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-sm border border-border-main bg-bg px-2.5 py-1 font-sans text-xs font-medium text-text-main transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
