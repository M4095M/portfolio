import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Technologies from "./components/Technologies";
import Navbar from "./components/Navbar";
import Experiences from "./components/Experiences";
import Education from "./components/Education";

export default function Home() {
  return (
    <div className="overflow-x-hidden font-geist-mono bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">
      <Navbar />
      <HeroSection />
      <Technologies />
      <Experiences />
      <Education />
      <footer className="flex justify-center text-sm font-extralight">
        Morsli Mohamed Abdennour -M4095M-
      </footer>
    </div>
  );
}
