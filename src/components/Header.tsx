import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "../theme/ThemeToggle.tsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // 1. Track the active section name (matching the href hash without the '#')
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // 2. Simple scroll spy logic: Check which section is currently in view
      const sectionIds = ["home", "projects", "about", "services", "resume", "contact"];
      const scrollPosition = window.scrollY + 200; // Offset to trigger a bit before the section hits top

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
    // Trigger once on mount to set the initial active state
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
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-25 transition-all duration-300 ${scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border-main py-4 shadow-sm"
          : "bg-transparent border-b border-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl font-bold tracking-tight text-text-main"
          >
            Prayskey<span className="text-accent">.</span>
          </a>

          {/* Right side: nav + actions */}
          <div className="flex items-center gap-12">

            {/* Desktop Navigation */}
            <nav className="hidden sm:block">
              <ul className="font-mono text-sm flex items-center space-x-8 tracking-wider">
                {navItems.map((item) => {
                  // 3. Compare activeSection state instead of hardcoded flag
                  const isActive = activeSection === item.id;

                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className={`transition-all duration-200 hover:text-link ${isActive ? "text-text-main font-bold" : "text-text-muted"
                          } ${!scrolled
                            ? "drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] text-text-main bg-black/5 px-2 py-1 rounded"
                            : ""
                          }`}
                      >
                        {item.label}
                      </a>
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
                className={`p-2 rounded-md transition-all sm:hidden ${scrolled
                    ? "text-text-muted hover:text-link hover:bg-accent/10"
                    : "text-text-main bg-black/10 backdrop-blur-sm shadow-sm"
                  }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <nav className="absolute top-full left-0 right-0 z-50 mt-4 rounded-xl border border-border-main bg-bg/95 backdrop-blur-md p-5 shadow-lg sm:hidden">
            <ul className="font-mono text-sm flex flex-col space-y-4 tracking-wider">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-1.5 transition-colors hover:text-link ${isActive
                          ? "text-text-main font-bold border-l-2 border-accent pl-2"
                          : "text-text-muted pl-2"
                        }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
