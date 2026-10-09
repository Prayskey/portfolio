import { motion } from "framer-motion";
import myPicture from "../assets/1791280430122.webp";

// 1. Moved SVG dictionary outside the component and ensured consistent wrapper styling
const svgIcons = {
  github: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M94,7399 C99.523,7399 ... (rest of your path properties)" fillRule="evenodd" />
      {/* Normalized optimized path below for safety */}
      <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" fill="currentColor" />
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

// 2. Uniform layout setup inside mapping definition
const socialLinks = [
  { id: 1, name: "GitHub", href: "https://github.com/prayskey", icon: svgIcons.github },
  { id: 2, name: "LinkedIn", href: "https://linkedin.com/in/prayskey", icon: svgIcons.linkedin },
  { id: 3, name: "Twitter / X", href: "https://x.com/prayskey01", icon: svgIcons.twitter },
  { id: 4, name: "Email", href: "mailto:prayskeyo@gmail.com", icon: svgIcons.email },
];

const socialContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.4 },
  },
};

const socialItemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden transition-colors duration-300">
      <img
        src={myPicture}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />
      <div className="absolute inset-0 dark:bg-black/30 bg-black/25 pointer-events-none transition-colors duration-300" />

      <div className="relative z-10 max-w-2xl h-full px-6 mx-auto flex flex-col justify-center">
        <div className="text-center mt-3 font-heading tracking-wide space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-light text-2xl sm:text-3xl text-white/80 drop-shadow-sm"
          >
            Hello, I'm
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 15, letterSpacing: "-0.02em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "-0.01em" }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-semibold text-5xl sm:text-7xl text-white tracking-tight drop-shadow-md"
          >
            Prayskey Ogbonna
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="tracking-widest font-mono text-xs sm:text-sm text-accent-light uppercase font-medium drop-shadow-sm"
          >
            Full-Stack & AI/ML Engineer
          </motion.p>
        </div>

        <motion.div
          variants={socialContainerVariants}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-4 mt-8"
        >
          {socialLinks.map((link) => (
            <motion.a
              variants={socialItemVariants}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${link.name}`}
              className="flex items-center justify-center p-3 rounded-full border border-white/10 bg-black/30 backdrop-blur-xs text-white/70 transition-all duration-300 hover:text-btn-text hover:bg-accent hover:border-accent cursor-pointer shadow-sm"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
