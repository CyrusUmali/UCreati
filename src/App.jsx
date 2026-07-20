import { useState } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import WorksSection from "./WorksSection";
import ContactSection from "./ContactSection";
import ServicesSection from "./ServicesSection";
import ScrollControls from "./ScrollControls";
import Navbar from "./Navbar";
import ServiceBridge from "./ServiceBridge";
import WorksDivider from "./components/WorksDivider";
import { PROJECTS } from "./js/data";

export default function App() {
  const [activeType, setActiveType] = useState(
    [...new Set(PROJECTS.map((p) => p.type))][0]
  );

  return (
    <>
      {/* <BorderSnake /> */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorksDivider
        allProjects={PROJECTS}
        activeType={activeType}
        onTypeChange={setActiveType}
      />
      
      <WorksSection
  activeType={activeType}
  onTypeChange={setActiveType}
/>
      <ServiceBridge />
      <ServicesSection />
      <ContactSection />

      <ScrollControls />
    </>
  );
}