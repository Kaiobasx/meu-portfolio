import Navbar from "@/components/Navbar";
// import CinematicHero from "@/components/CinematicHero"; // ← re-enable to revert
import PremiumHero from "@/components/PremiumHero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <PremiumHero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
