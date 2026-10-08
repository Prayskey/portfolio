import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 💡 Import animation tools
import ThemeToggle from "../theme/ThemeToggle.tsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["home", "projects", "about", "services", "resume", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "#home", id: "home" },
    { label: "PROJECTS", href: "#projects", id: "projects" },
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "SERVICES", href: "#services", id: "services" },
    { label: "RESUME", href: "#resume", id: "resume" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 transition-all duration-300 ${scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-border-main py-4 shadow-sm"
          : "bg-transparent border-b border-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl font-bold tracking-tight text-text-main transition-colors duration-200"
          >
            Prayskey<span className="text-accent">.</span>
          </a>

          {/* Right side: nav + actions */}
          <div className="flex items-center gap-8 lg:gap-12">

            {/* Desktop Navigation */}
            <nav className="hidden sm:block">
              <ul className="font-mono text-xs lg:text-sm flex items-center space-x-4 lg:space-x-6 tracking-wider">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <li key={item.label} className="relative py-1 px-2.5">
                      <a
                        href={item.href}
                        className={`relative z-10 transition-colors duration-300 font-medium ${isActive ? "text-text-main" : "text-text-muted hover:text-link"
                          }`}
                      >
                        {item.label}
                      </a>

                      {/* 🎬 DYNAMIC SLIDING PILL BACKGROUND ACCENT */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavBackground"
                          className={`absolute inset-0 rounded transition-colors duration-300 -z-0 ${scrolled
                              ? "bg-accent/10 dark:bg-accent/5"
                              : "bg-surface/30 dark:bg-black/25 border border-border-main/10 shadow-sm"
                            }`}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Action Buttons Group */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md transition-all sm:hidden border ${scrolled
                    ? "text-text-muted border-transparent hover:text-link hover:bg-accent/10"
                    : "text-text-main border-border-main/10 bg-surface/40 dark:bg-black/20 backdrop-blur-[1px] shadow-sm"
                  }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* 🎬 MOBILE DROPDOWN REVEAL ANIMATION */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 z-50 mt-4 rounded-xl border border-border-main bg-bg/95 backdrop-blur-md p-5 shadow-lg sm:hidden"
            >
              <ul className="font-mono text-sm flex flex-col space-y-4 tracking-wider">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-1.5 transition-colors duration-200 hover:text-link rounded ${isActive
                            ? "text-link font-medium border-l-2 border-accent pl-3 bg-accent/5"
                            : "text-text-muted pl-3"
                          }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
