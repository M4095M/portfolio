import Image from "next/image";

const skills = [
  // Frontend Technologies
  { name: "Next.js", file: "/icons/Nextjs.svg" },
  { name: "Vue.js", file: "/icons/Vuejs.svg" },
  { name: "TailwindCSS", file: "/icons/TailwindCSS.svg" },
  { name: "Flutter", file: "/icons/Flutter.svg" },

  // Backend Technologies
  { name: "Node.js", file: "/icons/Nodejs.svg" },
  { name: "Laravel", file: "/icons/Laravel.svg" },
  { name: "Django", file: "/icons/Django.svg" },
  { name: "Express", file: "/icons/Express.svg" },

  // Programming Languages
  { name: "Python", file: "/icons/Python.svg" },
  { name: "Java", file: "/icons/Java.svg" },
  { name: "Rust", file: "/icons/Rust.svg" },

  // Databases
  { name: "MongoDB", file: "/icons/MongoDB.svg" },
  { name: "PostgreSQL", file: "/icons/PostgresSQL.svg" },

  // Cloud & Services
  { name: "Docker", file: "/icons/Docker.svg" },
  { name: "Tauri", file: "/icons/Tauri.svg" },
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
            className="group hover:z-50 hover:scale-150 transition-all duration-500 relative flex flex-col items-center animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Image
              src={skill.file}
              alt={skill.name}
              width={60}
              height={60}
              className="transition duration-300"
            />
            <span className="absolute bottom-[-2.5rem] scale-0 group-hover:scale-100 transition-all duration-300 bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm font-semibold rounded-md px-3 py-1 shadow-lg">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
