import myPicture from "/public/1791280430122.png";

export default function Hero() {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <img
        src={myPicture}
        alt="Portfolio Background Portrait"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      {/*
        Dynamic Contrast Mask:
        Fixed for Light Mode: Uses bg-black/30 to safely tone down brightness and add contrast.
        Preserved for Dark Mode: Uses dark:bg-dark/40 for that perfect dimming layer you love.
      */}
      <div className="absolute inset-0 bg-black/30 dark:bg-dark/40 pointer-events-none transition-colors duration-300" />

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
