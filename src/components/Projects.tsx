import campusflow from "../assets/img/campusflow.webp";
import nexedge from "../assets/img/nexedge.webp";
// import uponthee from "../assets/img/uponthee.webp";
import travel_site from "../assets/img/travel_site.webp";
import car_site from "../assets/img/car_site.webp";
import nexedge_ui from "../assets/img/nexedge_ui.webp";
import people_shaking_hands from "../assets/img/pexels-felicity-tai-7964468.webp";

export default function Projects() {
  const projectList = [
    {
      id: 1,
      title: "NexEdge",
      category: "Development",
      desc: "A trading journal that automatically logs your trades, analyzes your performance, and surfaces the patterns behind your results.",
      image: nexedge,
      isProject: true,
      href: "https://prayskey-nexedge.vercel.app",
    },
    {
      id: 2,
      title: "CampusFlow",
      category: "Development",
      desc: "A blockchain-based clearance system that removes the stress from student clearance. Results are stored on-chain and verifiable from anywhere, so students can receive their certificates wherever they are.",
      image: campusflow,
      isProject: true,
      href: "https://campusflow-mmt9.onrender.com/",
    },
    // {
    //   id: 3,
    //   title: "Uponthee",
    //   category: "Development",
    //   desc: "A lodge booking platform for FUTO students with student, landlord and admin portals, live chat, secure payments and automated receipts.",
    //   image: uponthee,
    // },
    {
      id: 4,
      title: "Travel Site UI/UX",
      category: "Design",
      desc: "A Figma design for a travel booking website.",
      image: travel_site,
      isProject: true,
      href: "#",
    },
    {
      id: 5,
      title: "Car Site UI/UX",
      category: "Design",
      desc: "A Figma landing page design for an electric car brand, built around strong product visuals, key specs and a clear call to action.",
      image: car_site,
      isProject: true,
      href: "#",
    },
    {
      id: 6,
      title: "NexEdge Wireframe",
      category: "Design",
      desc: "The Figma wireframe for the NexEdge dashboard, laying out balance, equity, goal progress, performance metrics and open trades.",
      image: nexedge_ui,
      isProject: true,
      href: "#",
    },
    {
      id: 7,
      title: "Work With Me",
      category: "Contact",
      desc: "Have a project in mind? Let's build something exceptional together.",
      image: people_shaking_hands,
      href: "#contact",
      cta: "Get in touch",
      isProject: false,
    },
  ];

  return (
    <section
      id="projects"
      className="px-6 md:px-25 bg-surface py-20 border-t border-border-main"
    >
      <h2 className="text-center mt-3 text-2xl tracking-wide font-heading text-text-muted sm:text-3xl mb-12">
        Featured <span className="font-extrabold text-accent">Projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="group relative h-72 w-full overflow-hidden rounded-xs border border-border-main bg-[#0d0d0d] shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <div className="absolute inset-0 w-full h-full bg-[#0d0d0d] flex items-top justify-center p-2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/60 to-transparent p-5 z-10 transition-transform duration-300 group-hover:translate-y-full">
              <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-white font-heading font-bold text-base mt-0.5">
                {project.title}
              </h3>
            </div>

            <div className="absolute inset-0 bg-bg/95 dark:bg-dark/95 backdrop-blur-sm p-6 flex flex-col justify-end translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 z-20">
              <span className="font-mono text-xs font-semibold text-link uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="font-heading font-bold text-lg text-text-main mt-1">
                {project.title}
              </h3>
              <p className="font-sans text-sm text-text-muted mt-2 leading-relaxed">
                {project.desc}
              </p>


                <a
                  href={project.href}
                  className="mt-4 flex items-center space-x-1 text-xs font-mono font-bold text-link hover:underline"
                  target={project.isProject ? "_blank" : "_self"}
                >
                  <span>{project.isProject ? "View Project" : "Get in Touch"}</span>
                  <span>→</span>
                </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
