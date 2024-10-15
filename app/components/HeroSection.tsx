const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center min-h-screen text-white px-8 py-16 md:px-16 lg:px-32 relative"
    >
      <main className="flex items-center gap-4">
        <div className="flex gap-6 items-center justify-center text-center">
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
              with any technologie. I post in my github some basic repos, as
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
