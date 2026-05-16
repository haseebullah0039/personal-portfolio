import logo from "@/assets/logo.webp";
import HeroCounter from "@/components/HeroCounter";
import PortfolioGallery from "@/components/PortfolioGallery";
import { portfolioStats, projects } from "@/data/portfolio";

function StatIcon({ type }) {
  if (type === "users") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm-8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0 2c-2.67 0-8 1.34-8 4v2h10v-2c0-1.14.45-2.11 1.27-2.92A14.2 14.2 0 0 0 8 13Zm8 0c-.29 0-.62.02-.97.06A4.54 4.54 0 0 1 18 17v2h6v-2c0-2.66-5.33-4-8-4Z" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm1 10.59 3.7 3.7-1.41 1.41L11 13V6h2Z" />
      </svg>
    );
  }

  if (type === "star") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 2.8 2.8 5.67 6.26.91-4.53 4.42 1.07 6.23L12 17.1l-5.6 2.93 1.07-6.23L2.94 9.38l6.26-.91Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3h9l5 5v13H6Zm8 1.5V9h4.5" />
    </svg>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="section-heading">
        <div className="portfolio-title">
          <img
            className="portfolio-title-logo"
            src={logo}
            alt=""
            width={48}
            height={48}
          />
          <span>
            Haseeb <b>Ullah</b> <i aria-hidden="true">&ndash;</i> <em>Creative Designer</em>
          </span>
        </div>
        <h2>
          <span className="heading-line-primary">FEATURED</span>
          <span className="heading-line-accent">CREATIVE WORK</span>
        </h2>
        <p>
          Explore selected design, editing, photography, and videography work
          crafted to improve brand presence and audience engagement.
        </p>
      </div>

      <PortfolioGallery projects={projects} enableHashSync />

      <div className="portfolio-actions">
        <a className="ghost-btn load-btn" href="#portfolio-more">View More Work</a>
        <a className="primary-btn load-btn" href="#contact">Start a Project</a>
      </div>

      <div className="portfolio-stats-grid">
        {portfolioStats.map((stat) => (
          <article className="portfolio-stat-card" key={stat.label}>
            <span className="portfolio-stat-icon">
              <StatIcon type={stat.icon} />
            </span>
            <div>
              <HeroCounter value={stat.value} suffix={stat.suffix} />
              <span>{stat.label}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
