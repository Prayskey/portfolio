import { useState } from "react";
import { Moon, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home", active: true },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "RESUME", href: "#resume" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="max-w-2xl px-6 py-6 mx-auto border-b border-border-main relative">
      <div className="flex items-center justify-between">

        {/* Desktop Navigation: Hidden on mobile (hidden), shown on desktop (sm:flex) */}
        <nav className="hidden sm:block">
          <ul className="font-mono text-sm flex space-x-4 tracking-wide">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`transition-colors hover:text-link ${item.active ? "text-text-main" : "text-text-muted"
                    }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons Group (Theme toggle & Mobile Burger) */}
        <div className="flex items-center space-x-2 ml-auto sm:ml-0">
          {/* Dynamic Dark Mode Button Toggle */}
          <button
            className="p-2 rounded-md text-text-muted hover:text-link hover:bg-accent/10 transition-all"
            aria-label="Toggle theme"
          >
            <Moon className="h-5 w-5" />
          </button>

          {/* Mobile Menu Toggle Button: Hidden on desktop (sm:hidden) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-text-muted hover:text-link hover:bg-accent/10 transition-all sm:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu: Absolute positioning matches your max-w-2xl frame */}
      {isOpen && (
        <nav className="absolute top-full left-0 right-0 z-50 bg-bg border-b border-border-main px-6 py-4 sm:hidden">
          <ul className="font-mono text-sm flex flex-col space-y-4 tracking-wide">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)} // Auto-close menu when clicking a link
                  className={`block py-1 transition-colors hover:text-link ${item.active ? "text-text-main" : "text-text-muted"
                    }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
