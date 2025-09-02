import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center min-h-screen text-white px-8 py-16 md:px-16 lg:px-32 relative"
    >
      <main className="flex items-center gap-4">
        <div className="flex flex-col gap-6 items-center justify-center text-center">
          {/* Profile Picture */}
          <div className="mb-6">
            <Image
              src="/me.jpg"
              alt="Morsli Mohamed Abdennour"
              width={200}
              height={200}
              className="rounded-full border-4 border-sky-500 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <div className="text-3xl md:text-5xl mb-4">
              Morsli Mohamed Abdennour
            </div>
            <div className="text-3xl md:text-4xl bg-gradient-to-r from-sky-500 to-indigo-500 inline-block text-transparent bg-clip-text mb-8">
              Full Stack Developer
            </div>
            <div className="text-base md:text-lg lg:text-xl text-center text-slate-300">
              Hello! I am a passionate full stack developer with expertise in
              building web, mobile, and desktop applications. With a solid
              foundation in software engineering and a focus on modern
              technologies like Next.js for web and Flutter for mobile, I also
              develop desktop applications using Tauri (Rust), but I am flexible
              with any technology. I post in my github some basic repos, as
              important ones are private .I use vim btw, but with vscode (not
              for long), and a linux user. I am excited about collaborating on
              innovative projects that make a real impact. Feel free to explore
              my work and get in touch if you would like to collaborate!
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
