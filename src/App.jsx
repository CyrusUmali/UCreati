import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import WorksSection from "./WorksSection";
import ContactSection from "./ContactSection";
import ServicesSection from "./ServicesSection";
import ScrollControls from "./ScrollControls";
import Navbar from "./Navbar" 
import ServiceBridge from "./ServiceBridge";

export default function App() {
  return (
    <>
    {/* <BorderSnake /> */}
    <Navbar />
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <ServiceBridge />
      <ServicesSection />
      <ContactSection />

      <ScrollControls />
      
    </>
  );
}
