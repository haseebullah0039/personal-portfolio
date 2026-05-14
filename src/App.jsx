import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BrandIntroLoader from "@/components/BrandIntroLoader";
import CursorFollower from "@/components/CursorFollower";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Navbar from "@/components/Navbar";
import PageTransitionLoader from "@/components/PageTransitionLoader";
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

function shouldShowPageLoader(hash) {
  if (!hash) {
    return false;
  }

  if (hash === "#portfolio-more" || hash.startsWith("#case-study-")) {
    return true;
  }

  return ["#home", "#about", "#services", "#portfolio", "#contact"].includes(hash);
}

export default function App() {
  const [pageState, setPageState] = useState(() => getPageState(getCurrentHash()));
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [isPageTransitionVisible, setIsPageTransitionVisible] = useState(false);
  const currentHashRef = useRef(getCurrentHash());
  const hasInitializedRef = useRef(false);
  const transitionTimerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return undefined;
    }

    const introTimer = window.setTimeout(() => {
      setIsIntroVisible(false);
      document.body.classList.remove("intro-active");
    }, 3600);

    document.body.classList.add("intro-active");

    const handleHashChange = () => {
      const nextHash = window.location.hash || "#home";
      const nextState = getPageState(nextHash);

      if (
        hasInitializedRef.current
        && nextHash !== currentHashRef.current
        && shouldShowPageLoader(nextHash)
      ) {
        window.clearTimeout(transitionTimerRef.current);
        setIsPageTransitionVisible(true);
        transitionTimerRef.current = window.setTimeout(() => {
          setIsPageTransitionVisible(false);
        }, nextHash.startsWith("#case-study-") ? 1200 : 900);
      }

      currentHashRef.current = nextHash;
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

      hasInitializedRef.current = true;
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.clearTimeout(introTimer);
      window.clearTimeout(transitionTimerRef.current);
      document.body.classList.remove("intro-active");
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <BrandIntroLoader isVisible={isIntroVisible} />
      <PageTransitionLoader isVisible={isPageTransitionVisible} />
      <Navbar />
      <CursorFollower />
      <AnimatePresence mode="wait">
        <motion.div
          key={`${pageState.page}-${pageState.slug ?? "root"}`}
          className="page-shell"
          initial={{ opacity: 0, filter: "blur(14px)", scale: 0.985 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 0.992 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.div>
      </AnimatePresence>

      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
