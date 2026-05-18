import { useEffect, useState } from "react";
import { certificates } from "@/data/portfolio";

const certificateHighlights = [
  { value: `${certificates.length}+`, label: "Verified certificates" },
  { value: "2024-2025", label: "Latest learning window" },
  { value: "4", label: "Creative disciplines covered" }
];

export default function CertificatesSection({ onOpenCertificate, sectionId = "certificates" }) {
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

      setCardsPerView(3);
    };

    syncCardsPerView();
    window.addEventListener("resize", syncCardsPerView);

    return () => window.removeEventListener("resize", syncCardsPerView);
  }, []);

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
    <section id={sectionId ?? undefined} className="section certificates-section">
      <div className="certificate-showcase">
        <div className="section-heading certificate-heading">
          <p className="pill">Certificates</p>
          <h2>
            <span className="heading-line-primary">CREATIVE</span>
            <span className="heading-line-accent">CREDENTIALS</span>
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
                  onClick={() => onOpenCertificate(certificate)}
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

      <div className="section-flow-line" aria-hidden="true" />
    </section>
  );
}
