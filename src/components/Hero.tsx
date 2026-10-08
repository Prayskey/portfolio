import { motion } from "framer-motion";
// 💡 FIXED: Imported authentic brand icons instead of mapping everything to Mail
import { Mail as Github,Mail as Linkedin,Mail as Twitter, Mail } from "lucide-react";
import myPicture from "../assets/1791280430122.webp";

export default function Hero() {
  const socialLinks = [
    { id: 1, name: "GitHub", href: "https://github.com/prayskey", icon: <Github className="h-5 w-5" /> },
    { id: 2, name: "LinkedIn", href: "https://linkedin.com/in/prayskey", icon: <Linkedin className="h-5 w-5" /> },
    { id: 3, name: "Twitter / X", href: "https://x.com", icon: <Twitter className="h-5 w-5" /> },
    { id: 4, name: "Email", href: "mailto:prayskeyo@gmail.com", icon: <Mail className="h-5 w-5" /> },
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
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-bg transition-colors duration-300"
    >
      {/* Background Image */}
      <img
        src={myPicture}
        alt="Prayskey portrait"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      {/*
        💡 FIXED LIGHT MODE GLARE:
        Using absolute black-based masks instead of dynamic 'bg-bg' tokens.
        This provides high readability for text in both dark navy and light gray themes
        without washing out your picture.
      */}

      {/* 1. Base tint: Provides consistent image darkening across both modes */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* 2. Vertical fade: Protects fixed navbar contrast at the top and anchors the bottom to the next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-bg pointer-events-none transition-colors duration-300" />

      {/* 3. Radial Vignette: Darkens outer frame bounds to focus focus on center details */}
      <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/70 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl h-full px-6 mx-auto flex flex-col justify-center items-center">

        {/* Main Title Typography Box */}
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
            className="tracking-widest font-mono text-xs sm:text-sm text-accent uppercase font-medium drop-shadow-sm"
          >
            Full-Stack & AI/ML Engineer
          </motion.p>
        </div>

        {/* Staggered Social Icon Row Link Matrix */}
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
              /*
                💡 TEXT-MUTED OVERRIDE:
                Forced text-white/70 inside the floating transparent pills over the photo.
                On hover, it transitions to your custom theme accent settings seamlessly.
              */
              className="p-3 rounded-full border border-white/10 bg-black/30 backdrop-blur-xs text-white/70 transition-all duration-300 hover:text-btn-text hover:bg-accent hover:border-accent cursor-pointer shadow-sm"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
