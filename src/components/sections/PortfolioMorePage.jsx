import PortfolioGallery from "@/components/PortfolioGallery";
import { allProjects } from "@/data/portfolio";

export default function PortfolioMorePage() {
  return (
    <main id="portfolio-more" className="portfolio-page">
      <section className="section portfolio-section">
        <div className="section-heading">
          <p className="pill">Complete Portfolio</p>
          <h2>
            <span className="heading-line-primary">MORE</span>
            <span className="heading-line-accent">CREATIVE PROJECTS</span>
          </h2>
          <p>
            Browse a larger collection of design, editing, photography, and
            videography work presented as a clear visual portfolio.
          </p>
        </div>

        <PortfolioGallery projects={allProjects} gridClassName="portfolio-page-grid" />

        <div className="portfolio-actions">
          <a className="ghost-btn load-btn" href="#portfolio">Back to Portfolio</a>
          <a className="primary-btn load-btn" href="#contact">Start a Project</a>
        </div>
      </section>
    </main>
  );
}
