import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import FeatureTiles from "./components/FeatureTiles";
import AboutSection from "./components/AboutSection";
import JourneyAndSpotlight from "./components/JourneyAndSpotlight";
import BenefitsSnapshot from "./components/BenefitsSnapshot";
import BenefitsVideos from "./components/BenefitsVideos";
import NumbersSection from "./components/NumbersSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";

export default function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <Navbar onAuthOpen={() => setAuthOpen(true)} />
      <div id="home" className="hero">
        <div className="container">
          <HeroSlider onAuthOpen={() => setAuthOpen(true)} />
          <FeatureTiles />
        </div>
      </div>

      <AboutSection />
      <JourneyAndSpotlight />
      <BenefitsSnapshot />
      <BenefitsVideos />
      <NumbersSection />
      <FAQSection />
      <ContactSection />

      <Footer onAuthOpen={() => setAuthOpen(true)} />

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
