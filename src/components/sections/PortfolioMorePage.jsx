import { useMemo, useState } from "react";
import { allProjects } from "@/data/portfolio";

const filters = ["All Work", "Graphic Design", "Video Editing", "Photography", "Videography"];

export default function PortfolioMorePage() {
  const [activeFilter, setActiveFilter] = useState("All Work");
  const visibleProjects = useMemo(
    () => activeFilter === "All Work"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  const getCount = (filter) => filter === "All Work"
    ? allProjects.length
    : allProjects.filter((project) => project.category === filter).length;

  return (
    <main id="portfolio-more" className="portfolio-page">
      <section className="section portfolio-section">
        <div className="section-heading">
          <p className="pill">Complete Portfolio</p>
          <h2>
            More <span>Creative Projects</span>
          </h2>
          <p>
            Browse a larger collection of design, editing, photography, and
            videography work presented as a clear visual portfolio.
          </p>
        </div>

        <div className="filter-row">
          {filters.map((filter) => (
            <button
              className={activeFilter === filter ? "is-active" : ""}
              type="button"
              key={filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter} <b>{getCount(filter)}</b>
            </button>
          ))}
        </div>

        <div className="project-grid portfolio-page-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.title}>
              {project.featured ? <div className="featured-ribbon">Featured</div> : null}
              <div className="project-image">
                <span>{project.accent}</span>
                <div className="project-overlay">
                  <small>{project.category} / {project.year}</small>
                  <h3>{project.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio-actions">
          <a className="ghost-btn load-btn" href="#portfolio">Back to Portfolio</a>
          <a className="primary-btn load-btn" href="#contact">Start a Project</a>
        </div>
      </section>
    </main>
  );
}
