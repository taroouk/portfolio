import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { ScrollProgress } from "./components/ScrollProgress";
import { Footer } from "./sections/Footer";
import { useEffect, useState } from "react";
import { IntroLoader } from "./components/IntroLoader";


export default function App() {
  const [showIntroLoader, setShowIntroLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntroLoader(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[#05060a]" />
      <div className="fixed inset-0 -z-10 opacity-70 [background:radial-gradient(1000px_circle_at_15%_10%,rgba(99,102,241,0.22),transparent_55%),radial-gradient(900px_circle_at_85%_20%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(900px_circle_at_50%_90%,rgba(168,85,247,0.14),transparent_60%)]" />

      {showIntroLoader ? <IntroLoader /> : null}
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
