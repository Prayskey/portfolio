import { Layout, Search, Cpu } from "lucide-react"; // Temporary clean icons you can swap

export default function Services() {
  const serviceList = [
    {
      id: 1,
      title: "Web Development",
      tag: "Fullstack / React",
      desc: "Building highly performant, accessible Fullstack React applications and minimal user interfaces tailored for smooth user experiences.",
      // Drop your custom JSX SVG element or paths right here
      svg: <Layout className="h-6 w-6 text-accent" />,
    },
    {
      id: 2,
      title: "SEO Optimization",
      tag: "Vitals / Performance",
      desc: "Optimizing code architecture, semantic HTML structure, and core web vitals to ensure top rankings on search engines and lightning-fast speeds.",
      svg: <Search className="h-6 w-6 text-accent" />,
    },
    {
      id: 3,
      title: "AI & ML Integration",
      tag: "Intelligent Systems",
      desc: "Designing and integrating intelligent AI workflows, automated systems, and smart tech features directly into functional digital products.",
      svg: <Cpu className="h-6 w-6 text-accent" />,
    },
  ];

  return (
    <section
      id="services"
      className="px-6 bg-surface md:px-25 py-20 border-t border-border-main"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mt-3 text-2xl tracking-wide font-heading text-text-muted sm:text-3xl mb-16">
          What I <span className="font-extrabold text-accent">Do</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-8 rounded-sm border border-border-main bg-bg transition-all duration-300 hover:border-accent/40 select-none hover:shadow-xs"
            >
              {/* Top Accent Line decoration */}
              <div className="absolute top-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />

              <div>
                {/* Meta Header Group with inline SVG */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-bold text-accent bg-accent/5 px-2.5 py-1 rounded-xs tracking-wider">
                    {service.tag}
                  </span>

                  {/* Dynamic SVG Container */}
                  <div className="p-2 rounded-xs bg-surface border border-border-main/60 transition-colors duration-300 group-hover:border-accent/20 group-hover:bg-accent/5">
                    {service.svg}
                  </div>
                </div>

                {/* Service Heading */}
                <h3 className="font-heading font-extrabold text-xl text-text-main">
                  {service.title}
                </h3>

                {/* Service Description Body */}
                <p className="mt-4 font-sans text-sm text-text-muted leading-relaxed">
                  {service.desc}
                </p>
              </div>



            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
