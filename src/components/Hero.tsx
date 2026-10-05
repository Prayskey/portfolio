export default function Hero() {
  return (
    <section className="max-w-2xl px-6 py-16 mx-auto">
      {/* font-mono accent: using your dynamic semantic link token */}
      <span className="font-mono text-xs font-semibold tracking-wider text-link uppercase">
        01 // Introduction
      </span>

      {/* font-heading bold title: using your dynamic text-main token */}
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight font-heading text-text-main sm:text-5xl">
        Building clean digital experiences.
      </h1>

      {/* font-sans body copy: already perfectly using text-text-muted */}
      <p className="mt-4 text-lg font-sans text-text-muted leading-relaxed">
        I'm a React developer specializing in building minimal, highly
        performant user interfaces.
      </p>
    </section>
  );
}
