import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import BrandIntroLoader from "@/components/BrandIntroLoader";
import DeferredSection from "@/components/DeferredSection";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ToolsMarqueeSection from "@/components/sections/ToolsMarqueeSection";

const CursorFollower = lazy(() => import("@/components/CursorFollower"));
const CaseStudyPage = lazy(() => import("@/components/sections/CaseStudyPage"));
const CertificateViewerPage = lazy(() => import("@/components/sections/CertificateViewerPage"));
const PortfolioMorePage = lazy(() => import("@/components/sections/PortfolioMorePage"));

const HOME_SECTION_HASHES = ["#home", "#about", "#services", "#portfolio", "#contact"];
const CERTIFICATE_SCROLL_KEY = "certificate-return-scroll";
const ROUTE_RETURN_KEY = "route-return-state";
const SCROLL_END_DEBOUNCE_MS = 140;
const SCROLL_STATE_PERSIST_DEBOUNCE_MS = 120;
const ROUTE_FALLBACK = <main className="page-shell" aria-busy="true" />;

const deferredHomeSections = [
  {
    sectionId: "about",
    loader: () => import("@/components/sections/AboutSection"),
    minHeight: 920
  },
  {
    sectionId: "services",
    loader: () => import("@/components/sections/ServicesSection"),
    minHeight: 940
  },
  {
    sectionId: "portfolio",
    loader: () => import("@/components/sections/PortfolioSection"),
    minHeight: 1460
  },
  {
    sectionId: "certificates",
    loader: () => import("@/components/sections/CertificatesSection"),
    minHeight: 1120,
    componentProps: {
      onOpenCertificate: (certificate) => {
        if (typeof window !== "undefined") {
          window.sessionStorage.setItem(CERTIFICATE_SCROLL_KEY, String(window.scrollY));
          window.location.hash = `#certificate-${certificate.slug}`;
        }
      }
    }
  },
  {
    sectionId: null,
    loader: () => import("@/components/sections/TestimonialsSection"),
    minHeight: 860
  },
  {
    sectionId: "contact",
    loader: () => import("@/components/sections/ContactSection"),
    minHeight: 860
  }
];

function getCurrentHash() {
  return typeof window === "undefined" ? "" : window.location.hash;
}

function getPageState(hash) {
  if (hash.startsWith("#certificate-")) {
    return {
      page: "certificate",
      slug: hash.replace("#certificate-", "")
    };
  }

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

function isPortfolioHash(hash) {
  return hash === "#portfolio" || hash.startsWith("#portfolio-");
}

function isHomeNavigationHash(hash) {
  return HOME_SECTION_HASHES.includes(hash) || hash === "#services" || isPortfolioHash(hash);
}

function readRouteReturnState() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.sessionStorage.getItem(ROUTE_RETURN_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function writeRouteReturnState(value) {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(ROUTE_RETURN_KEY, JSON.stringify(value));
}

function clearRouteReturnState() {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.removeItem(ROUTE_RETURN_KEY);
}

function getScrollTargetHash(hash) {
  if (isPortfolioHash(hash)) {
    return "#portfolio";
  }

  return hash;
}

function getNavbarOffset() {
  if (typeof document === "undefined") {
    return 104;
  }

  const header = document.querySelector(".site-header");
  return header ? Math.ceil(header.getBoundingClientRect().height + 16) : 104;
}

function scrollToHash(hash, behavior = "smooth") {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const targetHash = getScrollTargetHash(hash);
  if (targetHash === "#home" || !targetHash) {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const target = document.querySelector(targetHash);
  if (target) {
    const targetTop = target.getBoundingClientRect().top + window.scrollY - getNavbarOffset();
    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior
    });
  }
}

export default function App() {
  const [pageState, setPageState] = useState(() => getPageState(getCurrentHash()));
  const [activeSectionHash, setActiveSectionHash] = useState("#home");
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [showCursorFollower, setShowCursorFollower] = useState(false);
  const currentHashRef = useRef(getCurrentHash());
  const currentPageRef = useRef(getPageState(getCurrentHash()).page);
  const hasInitializedRef = useRef(false);
  const manualScrollHashRef = useRef(null);
  const scrollPersistFrameRef = useRef(null);
  const scrollPersistTimeoutRef = useRef(null);
  const scrollEndTimerRef = useRef(null);

  const updateHistoryState = useCallback((partialState = {}, url = null) => {
    if (typeof window === "undefined") {
      return;
    }

    const nextUrl = url ?? (window.location.hash || "#home");
    const nextState = {
      ...(window.history.state ?? {}),
      ...partialState
    };

    window.history.replaceState(nextState, "", nextUrl);
  }, []);

  const syncPageFromLocation = useCallback((nextHash, {
    navigationType = "hashchange",
    state = null
  } = {}) => {
    const resolvedHash = nextHash || "#home";
    const previousPage = currentPageRef.current;
    const nextPageState = getPageState(resolvedHash);

    if (previousPage === "home" && nextPageState.page !== "home") {
      writeRouteReturnState({
        hash: currentHashRef.current || activeSectionHash || "#home",
        scrollY: window.scrollY
      });
    }

    currentHashRef.current = resolvedHash;
    currentPageRef.current = nextPageState.page;
    setPageState(nextPageState);

    if (nextPageState.page === "portfolio" || nextPageState.page === "case-study") {
      setActiveSectionHash("#portfolio");
    } else if (nextPageState.page === "certificate") {
      setActiveSectionHash("#certificates");
    }

    window.requestAnimationFrame(() => {
      if (nextPageState.page === "portfolio" || nextPageState.page === "case-study" || nextPageState.page === "certificate") {
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      const savedCertificateScroll = window.sessionStorage.getItem(CERTIFICATE_SCROLL_KEY);
      if (resolvedHash === "#certificates" && savedCertificateScroll) {
        window.sessionStorage.removeItem(CERTIFICATE_SCROLL_KEY);
        window.scrollTo({ top: Number(savedCertificateScroll), behavior: "auto" });
        return;
      }

      if (navigationType === "popstate" && typeof state?.scrollY === "number") {
        clearRouteReturnState();
        window.scrollTo({ top: state.scrollY, behavior: "auto" });
        return;
      }

      const savedRouteReturn = readRouteReturnState();
      if (
        previousPage !== "home"
        && nextPageState.page === "home"
        && savedRouteReturn
        && typeof savedRouteReturn.scrollY === "number"
      ) {
        clearRouteReturnState();
        updateHistoryState({ scrollY: savedRouteReturn.scrollY }, savedRouteReturn.hash || resolvedHash);
        currentHashRef.current = savedRouteReturn.hash || resolvedHash;
        window.scrollTo({ top: savedRouteReturn.scrollY, behavior: "auto" });
        return;
      }

      if (manualScrollHashRef.current === resolvedHash) {
        scrollToHash(resolvedHash, "smooth");
        return;
      }

      if (navigationType === "initial") {
        if (resolvedHash && resolvedHash !== "#home") {
          scrollToHash(resolvedHash, "auto");
        }

        return;
      }

      if (isHomeNavigationHash(resolvedHash)) {
        scrollToHash(resolvedHash, "auto");
      }
    });

    hasInitializedRef.current = true;
  }, [activeSectionHash, updateHistoryState]);

  const navigateToHash = useCallback((hash) => {
    if (typeof window === "undefined") {
      return;
    }

    const nextHash = hash || "#home";
    const shouldReplace = currentHashRef.current === nextHash && pageState.page === "home";
    const historyMethod = shouldReplace ? "replaceState" : "pushState";
    const immediateActiveHash = getScrollTargetHash(nextHash);

    if (isHomeNavigationHash(nextHash)) {
      setActiveSectionHash(immediateActiveHash);
    } else if (getPageState(nextHash).page === "portfolio" || getPageState(nextHash).page === "case-study") {
      setActiveSectionHash("#portfolio");
    }

    manualScrollHashRef.current = nextHash;
    window.history[historyMethod](
      {
        ...(window.history.state ?? {}),
        scrollY: window.scrollY
      },
      "",
      nextHash
    );

    syncPageFromLocation(nextHash, {
      navigationType: "programmatic",
      state: window.history.state
    });
  }, [pageState.page, syncPageFromLocation]);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return undefined;
    }

    const introTimer = window.setTimeout(() => {
      setIsIntroVisible(false);
      document.body.classList.remove("intro-active");
    }, 1800);

    document.body.classList.add("intro-active");
    window.history.scrollRestoration = "manual";

    updateHistoryState({
      scrollY: window.scrollY
    }, window.location.hash || "#home");

    const persistScrollPosition = () => {
      window.clearTimeout(scrollPersistTimeoutRef.current);
      scrollPersistTimeoutRef.current = window.setTimeout(() => {
        window.cancelAnimationFrame(scrollPersistFrameRef.current);
        scrollPersistFrameRef.current = window.requestAnimationFrame(() => {
          updateHistoryState({ scrollY: window.scrollY });
        });
      }, SCROLL_STATE_PERSIST_DEBOUNCE_MS);
    };

    const handleHashChange = () => {
      syncPageFromLocation(window.location.hash || "#home", {
        navigationType: "hashchange",
        state: window.history.state
      });
    };

    const handlePopState = (event) => {
      syncPageFromLocation(window.location.hash || "#home", {
        navigationType: "popstate",
        state: event.state
      });
    };

    window.addEventListener("scroll", persistScrollPosition, { passive: true });
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handlePopState);

    syncPageFromLocation(window.location.hash || "#home", {
      navigationType: "initial",
      state: window.history.state
    });

    return () => {
      window.clearTimeout(introTimer);
      window.clearTimeout(scrollPersistTimeoutRef.current);
      window.clearTimeout(scrollEndTimerRef.current);
      window.cancelAnimationFrame(scrollPersistFrameRef.current);
      document.body.classList.remove("intro-active");
      window.history.scrollRestoration = "auto";
      window.removeEventListener("scroll", persistScrollPosition);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [syncPageFromLocation, updateHistoryState]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    document.body.classList.toggle("navbar-visible", pageState.page !== "certificate");

    return () => {
      document.body.classList.remove("navbar-visible");
    };
  }, [pageState.page]);

  useEffect(() => {
    if (typeof window === "undefined" || pageState.page === "certificate") {
      return undefined;
    }

    const enableCursor = () => {
      setShowCursorFollower(true);
    };

    let idleTimerId = null;
    let idleCallbackId = null;

    if ("requestIdleCallback" in window) {
      idleCallbackId = window.requestIdleCallback(enableCursor, { timeout: 1400 });
    } else {
      idleTimerId = window.setTimeout(enableCursor, 900);
    }

    return () => {
      if (idleCallbackId !== null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleCallbackId);
      }

      if (idleTimerId !== null) {
        window.clearTimeout(idleTimerId);
      }
    };
  }, [pageState.page]);

  useEffect(() => {
    if (pageState.page !== "home" || typeof window === "undefined" || typeof document === "undefined") {
      return undefined;
    }

    const trackedSections = HOME_SECTION_HASHES
      .map((hash) => {
        const element = document.querySelector(hash);
        return element ? { hash, element } : null;
      })
      .filter(Boolean);

    if (trackedSections.length === 0) {
      return undefined;
    }

    const syncObservedSection = (nextHash) => {
      if (manualScrollHashRef.current) {
        setActiveSectionHash(getScrollTargetHash(manualScrollHashRef.current));
        return;
      }

      const observedHash = nextHash || "#home";
      setActiveSectionHash(observedHash);

      const currentHash = window.location.hash || "#home";
      const nextUrl = isPortfolioHash(currentHash) && observedHash === "#portfolio"
        ? currentHash
        : observedHash;

      if (nextUrl !== currentHash) {
        updateHistoryState({ scrollY: window.scrollY }, nextUrl);
        currentHashRef.current = nextUrl;
      } else {
        updateHistoryState({ scrollY: window.scrollY });
      }
    };

    const getBestVisibleHash = () => {
      const viewportMarker = getNavbarOffset() + window.innerHeight * 0.28;
      let bestHash = "#home";
      let bestDistance = Number.POSITIVE_INFINITY;

      trackedSections.forEach(({ hash, element }) => {
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportMarker);

        if (rect.bottom > getNavbarOffset() && distance < bestDistance) {
          bestHash = hash;
          bestDistance = distance;
        }
      });

      return bestHash;
    };

    const syncFromLayout = () => {
      window.requestAnimationFrame(() => {
        syncObservedSection(getBestVisibleHash());
      });
    };

    const handleScroll = () => {
      if (!manualScrollHashRef.current) {
        return;
      }

      window.clearTimeout(scrollEndTimerRef.current);
      scrollEndTimerRef.current = window.setTimeout(() => {
        manualScrollHashRef.current = null;
        syncFromLayout();
      }, SCROLL_END_DEBOUNCE_MS);
    };

    const observer = new IntersectionObserver(
      () => {
        syncFromLayout();
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.55],
        rootMargin: `-${getNavbarOffset()}px 0px -45% 0px`
      }
    );

    trackedSections.forEach(({ element }) => {
      observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", syncFromLayout);
    syncFromLayout();

    return () => {
      observer.disconnect();
      window.clearTimeout(scrollEndTimerRef.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", syncFromLayout);
    };
  }, [pageState.page, updateHistoryState]);

  const navbarActiveHash = pageState.page === "portfolio" || pageState.page === "case-study"
    ? "#portfolio"
    : activeSectionHash;

  return (
    <>
      <BrandIntroLoader isVisible={isIntroVisible} />
      {pageState.page === "certificate" ? null : (
        <Navbar activeHash={navbarActiveHash} onNavigate={navigateToHash} />
      )}
      {pageState.page === "certificate" || !showCursorFollower ? null : (
        <Suspense fallback={null}>
          <CursorFollower />
        </Suspense>
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${pageState.page}-${pageState.slug ?? "root"}`}
          className="page-shell"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {pageState.page === "certificate" ? (
            <Suspense fallback={ROUTE_FALLBACK}>
              <CertificateViewerPage
                slug={pageState.slug}
                onClose={() => {
                  if (typeof window !== "undefined") {
                    window.location.hash = "#certificates";
                  }
                }}
              />
            </Suspense>
          ) : pageState.page === "case-study" ? (
            <Suspense fallback={ROUTE_FALLBACK}>
              <CaseStudyPage slug={pageState.slug} />
            </Suspense>
          ) : pageState.page === "portfolio" ? (
            <Suspense fallback={ROUTE_FALLBACK}>
              <PortfolioMorePage />
            </Suspense>
          ) : (
            <main>
              <HeroSection />
              <ToolsMarqueeSection />
              {deferredHomeSections.map((section, index) => (
                <DeferredSection
                  key={section.sectionId ?? `deferred-${index}`}
                  loader={section.loader}
                  sectionId={section.sectionId}
                  minHeight={section.minHeight}
                  componentProps={section.componentProps}
                />
              ))}
            </main>
          )}
        </motion.div>
      </AnimatePresence>

      {pageState.page === "certificate" ? null : <Footer />}
      {pageState.page === "certificate" ? null : <FloatingWhatsAppButton />}
    </>
  );
}
