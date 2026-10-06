// Add x, github, Linkedin ect and other contact links icon.




import myPicture from "/1791280430122.png";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Portfolio Background Image */}
      <img
        src={myPicture}
        alt="Portfolio Background Portrait"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />
      {/* Overlay for darkening picture */}
      <div className="absolute inset-0 dark:bg-black/20 bg-black/10 pointer-events-none transition-colors duration-300" />
      <div className="relative z-10 max-w-2xl h-full px-6 mx-auto flex flex-col justify-center">

        {/* <span className="font-mono text-xs font-semibold tracking-wider text-link uppercase">
          01 // Introduction
        </span> */}




        <div className="text-center mt-3 font-heading  tracking-wide  space-y-4 text-light">
          <h1 className="font-light text-3xl">Hello, I'm</h1>
          <h1 className="font-bold text-6xl ">Prayskey Ogbonna</h1>
          <p className="tracking-wider font-mono">AND THIS IS MY PORTFOLIO</p>
        </div>




        {/* <p className="mt-4 text-lg font-sans text-text-muted leading-relaxed max-w-xl font-medium">
          I'm a Fullstack React developer specializing in building minimal, highly
          performant user interfaces.
        </p> */}


      </div>
    </section>
  );
}
