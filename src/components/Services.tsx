import { motion } from "framer-motion"; // 💡 Import motion
import { Layout, Search, Cpu } from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      id: 1,
      title: "Web Development",
      tag: "Fullstack / React",
      desc: "Building highly performant, accessible Fullstack React applications and minimal user interfaces tailored for smooth user experiences.",
      svg: <Layout className="h-7 w-7 text-accent transition-colors duration-300" />,
    },
    {
      id: 2,
      title: "SEO Optimization",
      tag: "Vitals / Performance",
      desc: "Optimizing code architecture, semantic HTML structure, and core web vitals to ensure top rankings on search engines and lightning-fast speeds.",
      svg: <Search className="h-7 w-7 text-accent transition-colors duration-300" />,
    },
    {
      id: 3,
      title: "AI & ML Integration",
      tag: "Intelligent Systems",
      desc: "Designing and integrating intelligent AI workflows, automated systems, and smart tech features directly into functional digital products.",
      svg: <Cpu className="h-7 w-7 text-accent transition-colors duration-300" />,
    },
  ];

  // Grid cascading variants
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] } }
  };

  return (
    <section
      id="services"
      className="px-6 md:px-16 lg:px-24 bg-surface py-20 border-t border-border-main transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading entry animation */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="text-center text-2xl tracking-wide font-heading text-text-muted sm:text-3xl mb-16"
        >
          What I <span className="font-extrabold text-accent">Do</span>
        </motion.h2>

        {/* 🎬 Trigger layout reveal on viewport exit boundaries */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {serviceList.map((service) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              key={service.id}
              className="group relative flex flex-col justify-between p-8 rounded-md border border-border-main bg-bg transition-colors duration-300 hover:border-accent/40 select-none hover:shadow-md"
            >
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />

              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-[11px] font-bold text-accent bg-accent/10 dark:bg-accent/5 px-2.5 py-1 rounded-sm tracking-wider uppercase">
                      {service.tag}
                    </span>

                    <div className="p-2.5 rounded-md bg-surface border border-border-main transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/5">
                      {service.svg}
                    </div>
                  </div>

                  <h3 className="font-heading font-semibold text-xl text-text-main tracking-wide">
                    {service.title}
                  </h3>

                  <p className="mt-4 font-sans text-sm text-text-muted leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
