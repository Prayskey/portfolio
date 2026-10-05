import { Moon, Sun } from "lucide-react";
import { useTheme } from "./useTheme.tsx";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative inline-flex h-6 w-12 shrink-0 items-center rounded-full border transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-1 ${isDark
          ? "border-accent/30 bg-accent"
          : "border-border-main bg-text-main/6"
        }`}
    >
      {/* Static end icons (Background layer) */}
      <Sun
        size={11}
        strokeWidth={2}
        className={`pointer-events-none absolute left-1.5 transition-opacity duration-200 ${isDark ? "opacity-0" : "opacity-70 text-text-main"
          }`}
      />
      <Moon
        size={11}
        strokeWidth={2}
        className={`pointer-events-none absolute right-1.5 transition-opacity duration-200 ${isDark ? "opacity-90 text-text-main" : "opacity-0"
          }`}
      />

      {/* Sliding knob with current-state icon */}
      <span
        className={`relative flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.25)] transition-transform duration-200 ease-out ${isDark ? "translate-x-6.75" : "translate-x-0.75"
          }`}
      >
        {isDark ? (
          <Moon size={10} strokeWidth={2} className="text-accent" />
        ) : (
          <Sun size={10} strokeWidth={2} className="text-accent" />
        )}
      </span>
    </button>
  );
}
