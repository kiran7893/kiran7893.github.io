import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../features/hero/Hero';
import { About } from '../features/about/About';
import { Experience } from '../features/experience/Experience';
import { Projects } from '../features/projects/Projects';
import { Skills } from '../features/skills/Skills';
import { Contact } from '../features/contact/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

