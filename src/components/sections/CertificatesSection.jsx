import { useEffect, useState } from "react";
import { certificates } from "@/data/portfolio";

const certificateHighlights = [
  { value: `${certificates.length}+`, label: "Verified certificates" },
  { value: "2024-2025", label: "Latest learning window" },
  { value: "4", label: "Creative disciplines covered" }
];

export default function CertificatesSection() {
  const [activeCertificate, setActiveCertificate] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const isMobileCarousel = cardsPerView === 1;

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const syncCardsPerView = () => {
      if (window.innerWidth < 760) {
        setCardsPerView(1);
        return;
      }

      if (window.innerWidth < 1180) {
        setCardsPerView(2);
        return;
      }

      setCardsPerView(2);
    };

    syncCardsPerView();
    window.addEventListener("resize", syncCardsPerView);

    return () => window.removeEventListener("resize", syncCardsPerView);
  }, []);

  useEffect(() => {
    if (!activeCertificate || typeof document === "undefined") {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveCertificate(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCertificate]);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, Math.max(0, certificates.length - cardsPerView)));
  }, [cardsPerView]);

  useEffect(() => {
    if (cardsPerView !== 3) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (
        current >= certificates.length - cardsPerView
          ? 0
          : current + 1
      ));
    }, 5200);

    return () => window.clearInterval(timer);
  }, [cardsPerView]);

  const maxIndex = Math.max(0, certificates.length - cardsPerView);
  const showPrevious = () => {
    setActiveIndex((current) => (current <= 0 ? maxIndex : current - 1));
  };
  const showNext = () => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
  };

  return (
    <section id="certificates" className="section certificates-section">
      <div className="certificate-showcase">
        <div className="section-heading certificate-heading">
          <p className="pill">Certificates</p>
          <h2>
            Creative <span>Credentials</span>
          </h2>
          <p>
            Verified training across design, editing, photography, and videography that supports
            polished delivery, dependable execution, and a stronger professional standard.
          </p>
        </div>

        <div className="certificate-summary-card">
          <p className="certificate-summary-eyebrow">Professional profile</p>
          <h3>Recognized learning that strengthens every client deliverable.</h3>
          <p className="certificate-summary-text">
            Each certificate reflects hands-on development in visual communication, post-production,
            and brand storytelling, helping the work stay both creative and commercially polished.
          </p>
          <div className="certificate-summary-metrics" aria-label="Certificate highlights">
            {certificateHighlights.map((item) => (
              <div className="certificate-summary-metric" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="certificate-carousel">
        <div className="certificate-carousel-head">
          <span>Professional learning and verified creative development</span>
        </div>

        <div className="certificate-viewport">
          {isMobileCarousel ? null : (
            <div className="certificate-controls">
              <button type="button" aria-label="Previous certificate" onClick={showPrevious}>&lsaquo;</button>
              <button type="button" aria-label="Next certificate" onClick={showNext}>&rsaquo;</button>
            </div>
          )}
          <div
            className="certificate-track"
            style={isMobileCarousel ? undefined : { transform: `translateX(-${activeIndex * (100 / cardsPerView)}%)` }}
          >
            {certificates.map((certificate) => (
              <article
                className="certificate-card"
                key={certificate.title}
                style={isMobileCarousel ? undefined : { width: `${100 / cardsPerView}%` }}
              >
                <button
                  type="button"
                  className="certificate-card-button"
                  onClick={() => setActiveCertificate(certificate)}
                >
                  <div className="certificate-thumb">
                    <img src={certificate.image} alt={certificate.title} loading="lazy" decoding="async" />
                  </div>
                  <div className="certificate-copy">
                    <small>Certified credential</small>
                    <h3>{certificate.title}</h3>
                    <p>{certificate.issuer}</p>
                    <span>{certificate.date}</span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>

      {activeCertificate ? (
        <div className="certificate-lightbox" role="dialog" aria-modal="true" aria-labelledby="certificate-title">
          <button
            className="certificate-lightbox-backdrop"
            type="button"
            aria-label="Close certificate preview"
            onClick={() => setActiveCertificate(null)}
          />
          <div className="certificate-lightbox-shell">
            <button
              className="certificate-lightbox-close"
              type="button"
              aria-label="Close certificate preview"
              onClick={() => setActiveCertificate(null)}
            >
              <span />
              <span />
            </button>
            <div className="certificate-lightbox-header">
              <h3 id="certificate-title">{activeCertificate.title}</h3>
              <p>{activeCertificate.issuer} {"\u2022"} {activeCertificate.date}</p>
            </div>
            <div className="certificate-lightbox-media">
              <img src={activeCertificate.image} alt={activeCertificate.title} />
            </div>
          </div>
        </div>
      ) : null}
      <div className="section-flow-line" aria-hidden="true" />
    </section>
  );
}
