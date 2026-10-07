import { Mail as Github, Mail as Linkedin, Mail as Twitter, Mail } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      label: "Github",
      href: "https://github.com/prayskey",
      handle: "@prayskey",
      icon: <Github className="h-5 w-5" />
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/prayskey",
      handle: "prayskey",
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      label: "X / Twitter",
      href: "https://x.com/prayskey01",
      handle: "@prayskey",
      icon: <Twitter className="h-5 w-5" />
    },
    {
      label: "Email",
      href: "mailto:prayskeyo@gmail.com",
      handle: "prayskeyo@gmail.com",
      icon: <Mail className="h-5 w-5" />
    },
  ];

  return (
    <section
      id="contact"
      className="px-6 bg-surface md:px-25 py-20 border-t border-border-main"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Centered Headers */}
        <h2 className="mt-3 text-2xl tracking-wide font-heading text-text-muted sm:text-3xl mb-4">
          Let's Work <span className="font-extrabold text-accent">Together</span>
        </h2>

        <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed max-w-xl mx-auto mb-12">
          Feel free to reach out directly through any of these channels.
        </p>

        {/* Form Removed & Links Spread Out Horizontally */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-4 rounded-sm border border-border-main bg-bg transition-all duration-300 hover:border-accent/40 hover:shadow-xs"
            >
              {/* Icon Container */}
              <div className="p-3 rounded-xs border border-border-main bg-surface text-text-muted transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/5 group-hover:text-link shrink-0">
                {link.icon}
              </div>

              {/* Text Label Metadata */}
              <div className="flex flex-col text-left ml-4 overflow-hidden">
                <span className="font-mono text-[10px] font-bold text-text-muted tracking-wider uppercase opacity-60">
                  {link.label}
                </span>
                <span className="font-sans text-sm font-semibold text-text-main group-hover:text-link transition-colors mt-0.5 truncate">
                  {link.handle}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
