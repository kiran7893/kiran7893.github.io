import { Hero } from "@/features/hero/Hero";
import { About } from "@/features/about/About";
import { Experience } from "@/features/experience/Experience";
import { Projects } from "@/features/projects/Projects";
import { Skills } from "@/features/skills/Skills";
import { Contact } from "@/features/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

