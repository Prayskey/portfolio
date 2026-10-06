export default function MyStack() {
  const skillStack = [
    { id: 1, name: "React / Vite" },
    { id: 2, name: "TailwindCSS" },
    { id: 3, name: "Typescript" },
    { id: 4, name: "Node.js / Express" },
    { id: 5, name: "FastAPI" },
    { id: 6, name: "PostgreSQL / Supabase" },
    { id: 7, name: "UI/UX" },
    { id: 8, name: "JWT Auth" },
  ];

  return (
    <section
      id="stack"
      className="px-6 md:px-25 bg-bg py-20 border-t border-border-main mx-auto"
    >
      {/* Matching Your Signature Header Split Pattern */}
      <h2 className="text-center mt-3 text-2xl tracking-wide font-heading text-text-muted sm:text-3xl mb-12">
        Technical <span className="font-extrabold text-accent">Stack</span>
      </h2>

      {/*
        Fluid Responsive Grid Framework:
        2 columns on mobile, 3 columns on small tablets, 4 columns on desktop/widescreen.
        This provides perfect symmetry for your 8 items (2x4 rows).
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
