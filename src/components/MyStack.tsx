export default function MyStack() {
  const skillStack = [
    { id: 1, name: "HTML/CSS" }, { id: 2, name: "Javascript/Typescript" }, { id: 3, name: "Python" }, { id: 4, name: "TailwindCSS" }, { id: 5, name: "UI/UX" }, { id: 6, name: "PostgreSQL" }, { id: 7, name: "Supabase" },
  ]
  return <section className=" my-5 flex justify-between gap-1.5 px-25">

    {skillStack.map(skill => (
      <button className="py-6 rounded-xs border-border-main border w-60 " key={skill.id}>{skill.name}</button>
    ))}
  </section>
}
