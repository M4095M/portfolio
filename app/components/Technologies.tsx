import Image from "next/image";

const skills = [
  { name: "Next.js", file: "/icons/Nextjs.svg" },
  { name: "TailwindCSS", file: "/icons/TailwindCSS.svg" },
  { name: "Node.js", file: "/icons/Nodejs.svg" },
  { name: "Flutter", file: "/icons/Flutter.svg" },
  { name: "Java", file: "/icons/Java.svg" },
  { name: "Tauri", file: "/icons/Tauri.svg" },
  { name: "Rust", file: "/icons/Rust.svg" },
  { name: "Python", file: "/icons/Python.svg" },
  { name: "MongoDB", file: "/icons/MongoDB.svg" },
  { name: "PostgreSQL", file: "/icons/PostgresSQL.svg" },
];

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="flex flex-col justify-center items-center px-4"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Technologies
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 py-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group hover:z-50 hover:scale-150 transition-transform duration-300 relative flex flex-col items-center"
          >
            <Image
              src={skill.file}
              alt={skill.name}
              width={60}
              height={60}
              className="transition duration-300"
            />
            <span className="absolute bottom-[-2.5rem] scale-0 group-hover:scale-100 transition-transform duration-300 bg-charcoal text-sm font-semibold rounded-md px-2 py-1">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
