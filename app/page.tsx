import Hero from "./components/main/Hero";
import Navbar from "./components/main/Navbar";
import Projects from "./components/main/Projects";
import Skills from "./components/main/Skills";
import Contact from "./components/main/Contact";

export default function Home() {
  return (
    <main className="h-full w-full bg-darkBlue foreground-content">
      <div className="flex flex-col gap-20 text-white">
        <Hero />
        <Navbar />
        <Skills />
        <Projects />
        <Contact />
        <div></div>
      </div>
    </main>
  );
}
