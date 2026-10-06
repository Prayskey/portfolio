import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "../theme/ThemeToggle.tsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "#home", active: true },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "RESUME", href: "#resume" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border-main py-4 shadow-sm"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      {/*
        This wrapper controls the max-width layout constraint.
        The mobile menu is now tucked inside this element to inherit its precise boundaries.
      */}
      <div className="max-w-2xl px-6 mx-auto relative">
        <div className="flex items-center justify-between">

          {/* Desktop Navigation */}
          <nav className="hidden sm:block">
            <ul className="font-mono text-sm flex space-x-4 tracking-wide">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`transition-colors hover:text-link ${
                      item.active ? "text-text-main" : "text-text-muted"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Buttons Group */}
          <div className="flex items-center space-x-2 ml-auto sm:ml-0">
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-text-muted hover:text-link hover:bg-accent/10 transition-all sm:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/*
          Mobile Dropdown Menu:
          Positioned perfectly beneath the button line while honoring the max-w-2xl frame margins.
        */}
        {isOpen && (
          <nav className="absolute top-full left-6 right-6 z-50 mt-4 rounded-xl border border-border-main bg-bg/95 backdrop-blur-md p-4 shadow-lg sm:hidden">
            <ul className="font-mono text-sm flex flex-col space-y-4 tracking-wide">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-1 transition-colors hover:text-link ${
                      item.active ? "text-text-main" : "text-text-muted"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
