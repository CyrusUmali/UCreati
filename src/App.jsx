import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import WorksSection from "./WorksSection";
import ContactSection from "./ContactSection";
import ServicesSection from "./ServicesSection";
import ScrollControls from "./ScrollControls";
import Navbar from "./Navbar"
import { BorderSnake } from "./BorderSnake";

export default function App() {
  return (
    <>
    <BorderSnake />
    <Navbar />
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <ServicesSection />
      <ContactSection />

      <ScrollControls />
      
    </>
  );
}
