export default function Services() {
  const serviceList = [
    {
      id: 1,
      title: "Web Development",
      desc: "Building highly performant, accessible Fullstack React applications and minimal user interfaces tailored for smooth user experiences."
    },
    {
      id: 2,
      title: "SEO Optimization",
      desc: "Optimizing code architecture, semantic HTML structure, and core web vitals to ensure top rankings on search engines and lightning-fast speeds."
    },
    {
      id: 3,
      title: "AI / ML Integration",
      desc: "Designing and integrating intelligent AI workflows, automated systems, and smart tech features directly into functional digital products."
    }
  ];

  return (
    <section
      id="services"
      className="px-6 md:px-25 py-20 border-t border-border-main"
    >
      <h2 className="text-center mt-3 text-2xl tracking-wide font-heading text-text-muted sm:text-3xl mb-12">
        What I <span className="font-extrabold text-accent">Do</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {serviceList.map((service) => (
          <div
            key={service.id}
            className="group p-8 rounded-2xl border border-border-main bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md select-none"
          >
            {/* Later Icon boxes. */}
            <div className="font-mono text-xs font-bold text-link opacity-60 mb-6 group-hover:opacity-100 transition-opacity">
              0{service.id} //
            </div>

            {/* Service Heading */}
            <h3 className="font-heading font-bold text-xl text-text-main group-hover:text-link transition-colors">
              {service.title}
            </h3>

            {/* Service Description Body */}
            <p className="mt-3 font-sans text-sm text-text-muted leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
