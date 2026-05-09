import { useEffect, useState } from "react";
import CursorFollower from "@/components/CursorFollower";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioMorePage from "@/components/sections/PortfolioMorePage";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function App() {
  const [isPortfolioPage, setIsPortfolioPage] = useState(
    window.location.hash === "#portfolio-more"
  );

  useEffect(() => {
    const handleHashChange = () => {
      const shouldShowPortfolioPage = window.location.hash === "#portfolio-more";
      setIsPortfolioPage(shouldShowPortfolioPage);

      window.requestAnimationFrame(() => {
        const hash = window.location.hash;
        const scrollHash = hash.startsWith("#portfolio-") && hash !== "#portfolio-more"
          ? "#portfolio"
          : hash;
        const target = scrollHash ? document.querySelector(scrollHash) : null;

        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <Navbar />
      <CursorFollower />

      {isPortfolioPage ? (
        <PortfolioMorePage />
      ) : (
        <main id="home">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
      )}

      <Footer />
    </>
  );
}
