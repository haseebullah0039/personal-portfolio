import { useEffect, useState } from "react";
import CursorFollower from "@/components/CursorFollower";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import CaseStudyPage from "@/components/sections/CaseStudyPage";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioMorePage from "@/components/sections/PortfolioMorePage";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ToolsMarqueeSection from "@/components/sections/ToolsMarqueeSection";

function getCurrentHash() {
  return typeof window === "undefined" ? "" : window.location.hash;
}

function getPageState(hash) {
  if (hash.startsWith("#case-study-")) {
    return {
      page: "case-study",
      slug: hash.replace("#case-study-", "")
    };
  }

  if (hash === "#portfolio-more") {
    return {
      page: "portfolio",
      slug: null
    };
  }

  return {
    page: "home",
    slug: null
  };
}

export default function App() {
  const [pageState, setPageState] = useState(() => getPageState(getCurrentHash()));

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return undefined;
    }

    const handleHashChange = () => {
      const nextState = getPageState(window.location.hash);
      setPageState(nextState);

      window.requestAnimationFrame(() => {
        const hash = window.location.hash;

        if (hash.startsWith("#case-study-")) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

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

      {pageState.page === "case-study" ? (
        <CaseStudyPage slug={pageState.slug} />
      ) : pageState.page === "portfolio" ? (
        <PortfolioMorePage />
      ) : (
        <main id="home">
          <HeroSection />
          <ToolsMarqueeSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <CertificatesSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
      )}

      <Footer />
    </>
  );
}
