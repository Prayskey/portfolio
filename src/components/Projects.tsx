
export default function Projects() {
  const projectList = [
    { id: 1, title: "Web dev 1", category: "Development", desc: "A minimal, highly performant React dashboard application built using Tailwind v4.", image: "/project1.jpg" },
    { id: 2, title: "Web dev 2", category: "Development", desc: "E-commerce interface featuring state management and smooth micro-interactions.", image: "/project2.jpg" },
    { id: 3, title: "Web dev 3", category: "Development", desc: "A lightning-fast portfolio template optimized for accessibility and flawless dark mode.", image: "/project3.jpg" },
    { id: 4, title: "Figma UI/UX Design 1", category: "Design", desc: "Complete high-fidelity mobile application design system focusing on intuitive user flows.", image: "/project4.jpg" },
    { id: 5, title: "My Figma UI/UX Design 2", category: "Design", desc: "Clean landing page concept emphasizing whitespace, bold typography, and visual hierarchy.", image: "/project5.jpg" },
    { id: 6, title: "Add yours", category: "Contact", desc: "Want to collaborate on a digital experience? Let's build something exceptional together.", image: "/project6.jpg" },
  ];

  return (
    <section id="projects" className="px-25 py-16 mx-auto border-t border-border-main">

      <h2 className="text-center mt-3 text-2xl  tracking-wide  font-heading text-text-muted sm:text-3xl mb-8">
        Featured <span className="font-bold">Projects</span>
      </h2>











      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="group relative h-104 w-full overflow-hidden rounded-xs border border-border-main bg-surface shadow-sm transition-all duration-300 hover:shadow-md"
          >
            {/* 1. Project Background Image */}
            <div className="absolute inset-0 w-full h-full bg-neutral-200 dark:bg-neutral-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback if no image path exists yet
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            {/* 2. Static Title Label Overlay (Visible by default at the bottom, slides down out of view on hover) */}
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-4 z-10 transition-transform duration-300 group-hover:translate-y-full">
              <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-white font-heading font-bold text-base mt-0.5">
                {project.title}
              </h3>
            </div>

            {/* 3. Smooth Interactive Hover Description Overlay */}
            <div className="absolute inset-0 bg-bg/90 dark:bg-dark/90 backdrop-blur-sm p-6 flex flex-col justify-end translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 z-20">
              <span className="font-mono text-xs font-semibold text-link uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="font-heading font-bold text-lg text-text-main mt-1">
                {project.title}
              </h3>
              <p className="font-sans text-sm text-text-muted mt-2 leading-relaxed">
                {project.desc}
              </p>

              {/* Context Link Indicator */}
              <div className="mt-4 flex items-center space-x-1 text-xs font-mono font-bold text-link hover:underline cursor-pointer">
                <span>View Project</span>
                <span>→</span>
              </div>
            </div>

          </div>
        ))}
      </div>













    </section>
  );
}
