// import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import myPicture from "../assets/1791280430122.webp";

export default function Hero() {
  // const socialLinks = [
  //   { id: 1, name: "GitHub", href: "https://github.com", icon: <Github className="h-5 w-5" /> },
  //   { id: 2, name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin className="h-5 w-5" /> },
  //   { id: 3, name: "Twitter / X", href: "https://x.com", icon: <Twitter className="h-5 w-5" /> },
  //   { id: 4, name: "Email", href: "mailto:youremail@example.com", icon: <Mail className="h-5 w-5" /> },
  // ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Portfolio Background Image */}
      <img
        src={myPicture}
        alt="Portfolio Background Portrait"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      {/* Overlay for darkening picture - increased slightly for solid contrast */}
      <div className="absolute inset-0 dark:bg-black/30 bg-black/25 pointer-events-none transition-colors duration-300" />

      <div className="relative z-10 max-w-2xl h-full px-6 mx-auto flex flex-col justify-center">

        {/* Main Introduction Title Stack */}
        <div className="text-center mt-3 font-heading tracking-wide space-y-4 text-light">
          <h1 className="font-light text-2xl sm:text-3xl drop-shadow-sm">Hello, I'm</h1>
          <h1 className="font-bold text-5xl sm:text-6xl tracking-tight drop-shadow-md">
            Prayskey Ogbonna
          </h1>
          <p className="tracking-widest font-mono text-xs sm:text-sm text-gray-300">
            AND THIS IS MY PORTFOLIO
          </p>
        </div>

        {/*
          Social Connections Row:
          Horizontal flex layout with custom glass background capsules
        */}






        {/* <div className="flex items-center justify-center gap-4 mt-8">
          {/* {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${link.name}`}
              className="p-3 rounded-full border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:text-white hover:bg-accent hover:border-accent hover:-translate-y-1 hover:shadow-md cursor-pointer"
            >
              {link.icon}
            </a>
          ))}
        </div> */}




      </div>
    </section>
  );
}
