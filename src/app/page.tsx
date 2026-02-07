import { Hero } from "@/features/hero/Hero";
import { Experience } from "@/features/experience/Experience";
import { Projects } from "@/features/projects/Projects";
import { OpenSource } from "@/features/opensource/OpenSource";
import { Achievements } from "@/features/achievements/Achievements";
import { Contact } from "@/features/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <OpenSource />
      <Achievements />
      <Contact />
    </>
  );
}

