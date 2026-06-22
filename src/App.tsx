import "./App.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-[#f0d7aa] shadow-[0_0_18px_rgba(240,215,170,0.5)]"
      style={{ scaleX }}
    />
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-[#f4f0e7]">
      <ScrollProgress />
      <div className="pointer-events-none absolute left-[-12rem] top-[42rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-[#d2b98e]/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute right-[-14rem] top-[105rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-[#91b9b3]/[0.06] blur-[150px]" />

      <Navbar />

      <main className="relative w-full">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
