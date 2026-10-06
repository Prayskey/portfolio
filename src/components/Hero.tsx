import myPicture from "/public/1791280430122.png"; // Ensure this path is correct based on your project structure

export default function Hero() {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/*
        Full-screen Background Image:
        Spans end-to-end on any screen size seamlessly using object-cover.
      */}
      <img
        src={myPicture}
        alt="Portfolio Background Portrait"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      {/*
        Dynamic Contrast Mask:
        Ensures your text stands out over the gray photo background in both light and dark modes.
      */}
      <div className="absolute inset-0 bg-bg/15 dark:bg-dark/40 pointer-events-none" />

      {/*
        Your Core Text Content:
        Preserves your exact max-w-2xl constraints while centering vertically on the screen.
      */}
      <div className="relative z-10 max-w-2xl h-full px-6 mx-auto flex flex-col justify-center">
        {/* font-mono accent: using your dynamic semantic link token */}
        <span className="font-mono text-xs font-semibold tracking-wider text-link uppercase">
          01 // Introduction
        </span>

        {/* font-heading bold title: using your dynamic text-main token */}
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight font-heading text-text-main sm:text-5xl leading-tight">
          Building clean digital experiences.
        </h1>

        {/* font-sans body copy: already perfectly using text-text-muted */}
        <p className="mt-4 text-lg font-sans text-text-muted leading-relaxed max-w-xl font-medium">
          I'm a React developer specializing in building minimal, highly
          performant user interfaces.
        </p>
      </div>
    </section>
  );
}
