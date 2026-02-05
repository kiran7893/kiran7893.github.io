import { Hero } from "@/features/hero/Hero";
import { Experience } from "@/features/experience/Experience";
import { Projects } from "@/features/projects/Projects";
import { Skills } from "@/features/skills/Skills";
import { Contact } from "@/features/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

