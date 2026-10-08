const contactIcons = {
  github: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" fillRule="evenodd" />
    </svg>
  ),
  linkedin: (
    <svg className="h-5 w-5" viewBox="0 0 16 16" fill="currentColor">
      <path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path>
    </svg>
  ),
  twitter: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  email: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
};

export default function Contact() {
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/prayskey",
      handle: "@prayskey",
      icon: contactIcons.github
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/prayskey",
      handle: "prayskey",
      icon: contactIcons.linkedin
    },
    {
      label: "X / Twitter",
      href: "https://x.com/prayskey01",
      handle: "@prayskey",
      icon: contactIcons.twitter
    },
    {
      label: "Email",
      href: "mailto:prayskeyo@gmail.com",
      handle: "prayskeyo@gmail.com",
      icon: contactIcons.email
    },
  ];

  return (
    <section
      id="contact"
      className="px-6 md:px-16 lg:px-24 bg-surface py-20 border-t border-border-main transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl tracking-wide font-heading text-text-muted sm:text-3xl mb-4">
          Let's Work <span className="font-extrabold text-accent">Together</span>
        </h2>

        <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed max-w-xl mx-auto mb-12">
          Feel free to reach out directly through any of these channels.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-4 rounded-md border border-border-main bg-bg transition-all duration-300 hover:border-accent/40 hover:shadow-md"
            >
              <div className="p-3 rounded-md border border-border-main bg-surface text-text-muted transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/5 group-hover:text-link shrink-0">
                {link.icon}
              </div>

              <div className="flex flex-col text-left ml-4 overflow-hidden">
                <span className="font-mono text-[10px] font-bold text-text-muted tracking-wider uppercase opacity-70">
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
