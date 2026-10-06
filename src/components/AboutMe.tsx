// export default function AboutMe() {
//   return (
//     <section id="about" className="max-w-2xl px-6 py-16 mx-auto border-t border-border-main">
//       <span className="font-mono text-xs font-semibold tracking-wider text-link uppercase">
//         02 // About Me
//       </span>
//       <h2 className="mt-3 text-2xl font-bold tracking-tight font-heading text-text-main sm:text-3xl">
//         My Journey
//       </h2>
//       <p className="mt-4 text-base font-sans text-text-muted leading-relaxed">
//         {/* Your content will live here, beautifully aligned */}
//         I'm a Fullstack React developer specializing in building minimal, highly
//         performant user interfaces. I am a developer driven by craft and clean systems...
//       </p>
//     </section>
//   );
// }

import portfolio_pic from "/1791280430122.png"

export default function AboutMe() {
  return <img src={portfolio_pic} alt="This is the portfolio pic..." />
}
