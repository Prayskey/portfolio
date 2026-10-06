export default function Contact() {
  const socialLinks = [
    { label: "GITHUB", href: "https://github.com/prayskey", handle: "@prayskey" },
    { label: "LINKEDIN", href: "https://linkedin.com/in/prayskey", handle: "prayskey" },
    { label: "X / TWITTER", href: "https://x.com/prayskey01", handle: "@prayskey" },
    { label: "EMAIL", href: "mailto:prayskeyo@gmail.com", handle: "prayskeyo@gmail.com" },
  ];

  return (
    <section
      id="contact"
      className="px-6 md:px-25 py-20 border-t border-border-main"
    >
      {/* Follows Your Precise Portfolio Header Pattern (Centered & Split) */}
      <h2 className="text-center mt-3 text-2xl tracking-wide font-heading text-text-muted sm:text-3xl mb-16">
        Let's Work <span className="font-extrabold text-accent">Together</span>
      </h2>

      {/* Grid Layout: 1 column on mobile, split columns on desktop configurations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">

        {/* Left Column: Direct Links (Spans 5 columns on desktop) */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <p className="font-sans text-base text-text-muted leading-relaxed max-w-sm mx-auto lg:mx-0">
            Have an exciting concept or a project in mind? Drop a message or reach out directly through my social platforms.
          </p>

          <ul className="space-y-6 max-w-xs mx-auto lg:mx-0">
            {socialLinks.map((link) => (
              <li key={link.label} className="group">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <span className="font-mono text-xs font-bold text-text-muted group-hover:text-link transition-colors block">
                    {link.label}
                  </span>
                  <span className="font-sans text-sm font-semibold text-text-main group-hover:underline block mt-0.5">
                    {link.handle} <span className="inline-block transition-transform group-hover:translate-x-1 text-link">→</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Contact Form (Spans 7 columns on desktop) */}
        <form className="lg:col-span-7 space-y-6 max-w-2xl mx-auto lg:w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2 text-left">
              <label htmlFor="name" className="font-mono text-xs font-semibold text-text-muted pl-1">NAME</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-xs border border-border-main bg-bg text-text-main font-sans text-sm outline-none focus:border-accent/60 transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2 text-left">
              <label htmlFor="email" className="font-mono text-xs font-semibold text-text-muted pl-1">EMAIL</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-xs border border-border-main bg-bg text-text-main font-sans text-sm outline-none focus:border-accent/60 transition-colors"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2 text-left">
            <label htmlFor="message" className="font-mono text-xs font-semibold text-text-muted pl-1">MESSAGE</label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 rounded-xs border border-border-main bg-bg text-text-main font-sans text-sm outline-none focus:border-accent/60 transition-colors resize-none"
              placeholder="Tell me about your project..."
              required
            />
          </div>

          <div className="text-center lg:text-left">
            <button
              type="submit"
              className="w-full sm:w-auto py-3 px-8 rounded-full font-heading font-bold text-sm tracking-wide cursor-pointer text-btn-text transition-all duration-200 bg-accent hover:bg-accent-hover hover:shadow-sm"
            >
              Send Message
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
