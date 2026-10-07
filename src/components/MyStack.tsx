export default function MyStack() {
  const skillStack = [
    { id: 1, name: "React / Vite" },
    { id: 2, name: "TailwindCSS" },
    { id: 3, name: "TypeScript" },
    { id: 4, name: "Node.js / Express" },
    { id: 5, name: "Python" },
    { id: 6, name: "FastAPI" },
    { id: 7, name: "PostgreSQL / Supabase" },
    { id: 8, name: "JWT Auth" },
    { id: 9, name: "TensorFlow / Keras" },
    { id: 10, name: "Scikit-learn" },
    { id: 11, name: "Electron" },
    { id: 12, name: "Figma UI / UX" },
  ];

  return (
    <section
      id="stack"
      className="px-6 md:px-25 bg-bg py-20 border-t border-border-main mx-auto"
    >
      <h2 className="text-center mt-3 text-2xl tracking-wide font-heading text-text-muted sm:text-3xl mb-12">
        Technical <span className="font-extrabold text-accent">Stack</span>
      </h2>

      {/*
        2 columns on mobile, 3 on small tablets, 4 on desktop.
        12 items divide evenly into every breakpoint (6, 4 and 3 rows).
      */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {skillStack.map((skill) => (
          <button
            key={skill.id}
            type="button"
            className="w-full py-6 px-4 rounded-sm border border-border-main bg-surface text-center font-sans font-semibold text-sm text-text-main transition-all duration-300 hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-sm cursor-pointer select-none"
          >
            {skill.name}
          </button>
        ))}
      </div>
    </section>
  );
}
