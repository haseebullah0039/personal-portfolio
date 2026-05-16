import { services } from "@/data/portfolio";

function ServiceGlyph({ type }) {
  if (type === "play") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 5.5v13l10-6.5Z" />
      </svg>
    );
  }

  if (type === "lens") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 7a5 5 0 1 0 5 5 5.01 5.01 0 0 0-5-5Zm0-5 2 2h3l1 2h2v14H4V6h2l1-2h3Zm0 8.5A1.5 1.5 0 1 1 10.5 12 1.5 1.5 0 0 1 12 10.5Z" />
      </svg>
    );
  }

  if (type === "wave") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 12c2.2 0 2.2-3 4.4-3s2.2 6 4.4 6 2.2-6 4.4-6 2.2 3 4.4 3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 2 2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4Z" />
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="section-heading">
        <p className="pill">Services</p>
        <h2>
          <span className="heading-line-primary">PREMIUM CREATIVE</span>
          <span className="heading-line-accent">SERVICES</span>
        </h2>
        <p>
          Complete visual support for brands, creators, and businesses through
          design, editing, photography, and videography.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article
            className="service-card"
            key={service.title}
          >
            <span className="service-icon-badge">
              <ServiceGlyph type={service.icon} />
            </span>
            <div className="service-media">
              <img
                className="service-image"
                src={service.image}
                alt={service.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="service-action">
                <a href="#contact">Start a Project</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="wide-cta">
        <div className="wide-cta-copy">
          <p className="pill">Custom Solutions Available</p>
          <h2>Have a Creative Project in Mind?</h2>
          <p>
            Let&apos;s build a tailored visual solution that matches your brand, content
            goals, timeline, and audience.
          </p>
        </div>
        <div className="wide-cta-panel">
          <span><b>01</b> Strategy</span>
          <span><b>02</b> Design</span>
          <span><b>03</b> Delivery</span>
        </div>
        <div className="wide-cta-action">
          <span>Ready for tailored creative support</span>
          <a className="primary-btn large-btn" href="#contact">Let&apos;s Work Together</a>
        </div>
      </div>
      <div className="section-flow-line" aria-hidden="true" />
    </section>
  );
}
