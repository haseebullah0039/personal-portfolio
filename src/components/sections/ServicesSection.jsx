import { services } from "@/data/portfolio";

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="section-heading">
        <p className="pill">Services</p>
        <h2>
          Premium Creative <span>Services</span>
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
