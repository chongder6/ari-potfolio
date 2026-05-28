import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";
import ScrollProgress from "./components/ScrollProgress";
import MouseGlow from "./components/MouseGlow";
import Particles from "./components/Particles";


export default function Home() {
  return (
    <main className="relative z-10 text-white">

      
      <Particles />
      
      <BackgroundEffects />

      <MouseGlow />

      <Navbar />
      
      <ScrollProgress />

      <Hero />

      <div className="border-t border-white/5">
      <About />
      </div>

      <div className="border-t border-white/5">
      <Experience />
      </div>

      
      <Projects />
      
    
      <div className="border-t border-white/5">
      <Skills />
      </div>

      <div className="border-t border-white/5">
      <Contact />
      </div>

      <Footer />

    </main>
  );
}