const educationData = [
  {
    institution: "National Polytechnical School",
    degree: "Industrial Engineering: Data Science & Artificial Intelligence",
    duration: "Current",
  },
  {
    institution: "National Polytechical School",
    degree: "Preparatory classes",
    duration: "2022 - 2024",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center h-screen my-16 px-8"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center">
        Education
      </h1>
      <div className=" h-full justify-evenly flex flex-col w-full max-w-4xl">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col p-4 rounded-lg bg-gradient-to-t from-transparent to-charcoal hover:shadow-lg duration-200 hover:shadow-purple-950"
          >
            <h2 className="text-2xl font-semibold inline-block  bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text ">
              {edu.degree}
            </h2>
            <p className="text-lg ">{edu.institution}</p>
            <p className="text-md text-gray-400">{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
