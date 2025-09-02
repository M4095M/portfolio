const experiences = [
  {
    title: "Full Stack Developer at Telesoft",
    description:
      "Focused on web/mobile app application. Additionally, resolved data recovery challenges by implementing log-based analysis methods using Python scripts.",
    technologies: ["Flutter", "Nodejs", "Python", "PostgreSQL"],
  },
  {
    title: "EzMed - Medical Education Platform",
    description:
      "Comprehensive medical education platform with question banks, scenarios, and reporting system. Built with Node.js backend, React frontend, and Prisma ORM. Features include user authentication, course management, and detailed logging systems.",
    technologies: ["Node.js", "React", "Prisma", "PostgreSQL", "Firebase"],
  },
  {
    title: "Business Game - Laravel Simulation",
    description:
      "Complex business simulation game built with Laravel 10 and Svelte 5. Features company management, production systems, employee management, financial operations, supply chain, and geographic expansion across different regions.",
    technologies: ["Laravel", "Svelte", "MySQL", "Docker", "Inertia.js"],
  },
  {
    title: "CRM SaaS Platform",
    description:
      "Modern B2B Customer Relationship Management platform with multi-tenant architecture. Built with Django REST Framework backend and React frontend, featuring customer management, lead tracking, sales opportunities, and subscription management.",
    technologies: ["Django", "React", "PostgreSQL", "JWT", "Stripe"],
  },
  {
    title: "Aura-Q - Queue Management System",
    description:
      "Flutter mobile application for digitizing client queues in company stands. Features Firebase authentication, QR code generation/scanning, real-time updates, and cross-platform compatibility.",
    technologies: ["Flutter", "Firebase", "Dart", "QR Codes", "Real-time"],
  },
  {
    title: "Nest - IoT Temperature Monitoring",
    description:
      "IoT temperature monitoring system with machine learning predictions. Features MQTT communication, real-time data visualization, anomaly detection, and temperature forecasting using trained ML models.",
    technologies: ["Node.js", "Next.js", "MQTT", "Machine Learning", "Prisma"],
  },
  {
    title: "Riglou - Document Verification App",
    description:
      "Advanced Flutter application for document scanning and ID verification. Integrates Google ML Kit for text recognition, barcode scanning, face detection, and document processing with secure storage.",
    technologies: [
      "Flutter",
      "Google ML Kit",
      "Dart",
      "Document Scanner",
      "OCR",
    ],
  },
  {
    title: "TraceLess - Environmental Dashboard",
    description:
      "Environmental impact tracking system with project management, step wizard, and comprehensive analytics. Built with Next.js and features responsive design, real-time data visualization, and project lifecycle management.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "Recharts",
    ],
  },
  {
    title: "Risk-AI - Risk Management Platform",
    description:
      "AI-powered risk management application with Tauri desktop integration. Features risk identification, prioritization, and comprehensive analytics with both web and desktop interfaces.",
    technologies: ["Next.js", "Tauri", "Rust", "TypeScript", "AI/ML"],
  },
  {
    title: "Documents Verification Android App",
    description:
      "Mobile application for Android devices using Flutter, integrating advanced features with Java packages and Kotlin code. Implemented eID card reading using NFC technology and incorporated machine learning functionalities such as face recognition, document scanning, and verification.",
    technologies: ["Flutter", "Java", "Kotlin", "SQLite", "NFC", "ML"],
  },
  {
    title: "DevCamp 2.0 Winner",
    description:
      "Winner of DevCamp 2.0 with my team Data Fighters, honored by HADJ KHELIL. Led front-end development using Next.js and contributed to data cleaning processes for machine learning models.",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Machine Learning",
      "Data Analysis",
    ],
  },
  {
    title: "E-commerce Platforms",
    description:
      "Multiple e-commerce solutions including Vercel Commerce integration, Laravel-based platforms with payment processing, inventory management, and multi-vendor support systems.",
    technologies: ["Next.js", "Laravel", "Shopify", "Stripe", "MySQL"],
  },
];

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-20"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center px-4">
        Experiences
      </h1>
      <div className="space-y-8 md:space-y-16">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="group flex flex-col items-start gap-4 border border-royalBlue rounded-lg shadow-md p-4 sm:p-6 duration-300 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20 hover:border-sky-400"
          >
            <div className="w-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold inline-block bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text mb-2 leading-tight">
                {experience.title}
              </h3>
              <p className="text-whiteSmoke mb-4 text-sm sm:text-base leading-relaxed">
                {experience.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-start">
              {experience.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-charcoal border border-royalBlue text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full shadow-sm hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:border-transparent hover:text-white transition-all duration-300 transform hover:scale-105"
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
