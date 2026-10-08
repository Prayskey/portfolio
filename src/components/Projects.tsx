import { motion } from "framer-motion";
import campusflow from "../assets/img/campusflow.webp";
import nexedge from "../assets/img/nexedge.webp";
import travel_site from "../assets/img/travel_site.webp";
import car_site from "../assets/img/car_site.webp";
import nexedge_ui from "../assets/img/nexedge_ui.webp";
import people_shaking_hands from "../assets/img/pexels-felicity-tai-7964468.webp";

type Project = {
  id: number;
  title: string;
  category: "Development" | "Design" | "Contact";
  desc: string;
  image: string;
  tags?: string[];
  href?: string;
  cta?: string;
  external?: boolean;
};

export default function Projects() {
  const projectList: Project[] = [
    {
      id: 1,
      title: "NexEdge",
      category: "Development",
      desc: "An automated trading journal that captures trades from live broker data and uses analytics and AI-powered coaching to surface patterns in your trading.",
      image: nexedge,
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      href: "https://prayskey-nexedge.vercel.app",
      cta: "View Project",
      external: true,
    },
    {
      id: 2,
      title: "CampusFlow",
      category: "Development",
      desc: "A university clearance and certificate retrieval platform built at Hack4FUTO. Students clear remotely from any device, and certificates are verified on a blockchain. I built the backend.",
      image: campusflow,
      tags: ["Node.js", "Express", "Supabase", "Blockchain"],
      href: "https://campusflow-mmt9.onrender.com",
      cta: "View Project",
      external: true,
    },
    {
      id: 3,
      title: "Travel Site UI/UX",
      category: "Design",
      desc: "A Figma design for a travel booking website with a bold hero, destination search and a clear path from browsing to booking.",
      image: travel_site,
      tags: ["Figma", "UI/UX"],
      // href: "https://figma.com/...", // Add link to show button
      cta: "View Design",
      external: true,
    },
    {
      id: 4,
      title: "Car Site UI/UX",
      category: "Design",
      desc: "A Figma landing page design for an electric car brand, built around strong product visuals, key specs and a clear call to action.",
      image: car_site,
      tags: ["Figma", "UI/UX"],
      // href: "https://figma.com/...",
      cta: "View Design",
      external: true,
    },
    {
      id: 5,
      title: "NexEdge Wireframe",
      category: "Design",
      desc: "The Figma wireframe for the NexEdge dashboard, covering balance, equity, goal progress, performance metrics and open trades.",
      image: nexedge_ui,
      tags: ["Figma", "Wireframe"],
      // href: "https://figma.com/...",
      cta: "View Design",
      external: true,
    },
    {
      id: 6,
      title: "Work With Me",
      category: "Contact",
      desc: "Have a project in mind? Let's build something exceptional together.",
      image: people_shaking_hands,
      href: "#contact",
      cta: "Get in touch",
      external: false,
    },
  ];

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  return (
    <section
      id="projects"
      className="px-6 md:px-25 bg-surface py-20 border-t border-border-main transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl tracking-wide font-heading text-text-muted sm:text-3xl mb-12"
        >
          Featured <span className="font-extrabold text-accent">Projects</span>
        </motion.h2>

        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectList.map((project) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              key={project.id}
              className="flex flex-col rounded-md border border-border-main bg-surface shadow-sm overflow-hidden md:relative md:h-72 w-full group hover:shadow-lg"
            >
              {/* Image + desktop title overlay */}
              <div className="relative h-48 sm:h-52 md:absolute md:inset-0 md:h-full w-full bg-[#0d0d0d] flex justify-center p-2 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain object-top transition-transform duration-500 md:group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 z-10 transition-transform duration-300 group-hover:translate-y-full group-focus-within:translate-y-full">
                  <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-white font-heading font-bold text-base mt-0.5">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Details: below the image on mobile, hover/focus overlay on desktop */}
              <div className="p-5 flex flex-col flex-grow justify-between z-20 bg-surface md:absolute md:inset-0 md:bg-bg/95 md:dark:bg-dark/95 md:backdrop-blur-sm md:p-6 md:translate-y-full md:opacity-0 md:transition-all md:duration-300 md:ease-out md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100">
                <div>
                  <span className="font-mono text-xs font-semibold text-link uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-text-main mt-1">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-text-muted mt-2 leading-relaxed">
                    {project.desc}
                  </p>

                  {project.tags && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm border border-border-main px-2 py-0.5 font-mono text-[10px] font-semibold text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {project.href && (
                  <a
                    href={project.href}
                    target={project.external ? "_blank" : "_self"}
                    rel={project.external ? "noopener noreferrer" : undefined}
                    className="mt-4 inline-flex items-center space-x-1 text-xs font-mono font-bold text-link hover:text-accent transition-colors group/link"
                  >
                    <span>{project.cta}</span>
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
