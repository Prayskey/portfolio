export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="px-6 md:px-25 py-8 border-t border-border-main bg-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left Side: Copyright notice matching your clean font system */}
        <div className="font-mono text-[11px] tracking-wide text-text-muted text-center sm:text-left uppercase">
          © {currentYear} — DESIGNED & BUILT BY PRAYSKEY OGBONNA
        </div>

        {/* Right Side: Interactive Back to Top trigger */}
        <button
          onClick={scrollToTop}
          type="button"
          className="group font-mono text-[11px] font-bold tracking-wider text-link hover:text-accent-hover transition-colors flex items-center space-x-1 cursor-pointer select-none"
          aria-label="Scroll to top of the page"
        >
          <span>BACK TO TOP</span>
          <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
            ↑
          </span>
        </button>

      </div>
    </footer>
  );
}
