import { Element } from "react-scroll";

const experiences = [
  {
    title: "Full Stack Developer at Telesoft",
    description:
      "Focused on web/mobile app application. Additionally, resolved data recovery challenges by implementing log-based analysis methods using Python scripts.",
    technologies: ["Flutter", "Nodejs", "Python", "PostgreSQL"],
  },
  {
    title: "Documents Verification Andriod App",
    description:
      "Developed a mobile application for Android devices using Flutter, integrating advanced features with Java packages and Kotlin code. Implemented eID card reading using NFC technology and incorporated machine learning functionalities such as face recognition, document scanning, and verification.",
    technologies: ["Flutter", "Java", "Kotlin", "SQLite"],
  },
  {
    title: "Risk Management Desktop App",
    description:
      "Building a desktop application for risk management for my startup using Tauri: Nextjs + Rust. The application featured advanced data analytics and security modules, designed to help businesses effectively manage and mitigate risks.",
    technologies: ["Tauri", "Nextjs", "Rust", "MongoDB"],
  },
  {
    title: "DevCamp 2.0",
    description:
      "Winner of DevCamp 2.0 with my team Data Fighthers, Honored by HADJ KHELIL himself. where my role was front-end developement using Nextjs, and also data cleaning",
    technologies: ["Nextjs", "TailwindCSS"],
  },
];

const Experiences = () => {
  return (
    <section id="experiences" className="relative py-16 px-6 lg:px-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center">
        Experiences
      </h1>
      <div className="space-y-16">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 border border-goldenrod rounded-lg shadow-md p-6 duration-200 transition-transform transform hover:scale-105"
          >
            <div className="w-full">
              <h3 className="text-2xl font-semibold inline-block  bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text mb-2">
                {experience.title}
              </h3>
              <p className="text-whiteSmoke mb-4">{experience.description}</p>
            </div>

            <div className="flex flex-wrap gap-3 justify-start">
              {experience.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-charcoal border border-royalBlue text-sm px-4 py-1 rounded-full shadow-sm hover:bg-royalBlue hover:border-charcoal transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
