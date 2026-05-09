import logo from "@/assets/logo.png";
import { useEffect, useMemo, useState } from "react";
import { projects } from "@/data/portfolio";

const filters = ["All Work", "Graphic Design", "Video Editing", "Photography", "Videography"];

function getFilterHash(filter) {
  return filter === "All Work"
    ? "#portfolio"
    : `#portfolio-${filter.toLowerCase().replace(/\s+/g, "-")}`;
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All Work");
  const visibleProjects = useMemo(
    () => activeFilter === "All Work"
      ? projects
      : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  const getCount = (filter) => filter === "All Work"
    ? projects.length
    : projects.filter((project) => project.category === filter).length;

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    window.history.replaceState(null, "", getFilterHash(filter));
  };

  useEffect(() => {
    const hashFilter = filters.find((filter) => getFilterHash(filter) === window.location.hash);

    if (hashFilter) {
      setActiveFilter(hashFilter);
    }
  }, []);

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
          Featured <span>Creative Work</span>
        </h2>
        <p>
          Explore selected design, editing, photography, and videography work
          crafted to improve brand presence and audience engagement.
        </p>
      </div>

      <div className="filter-row">
        {filters.map((filter) => (
          <button
            className={activeFilter === filter ? "is-active" : ""}
            type="button"
            key={filter}
            onClick={() => handleFilter(filter)}
          >
            {filter} <b>{getCount(filter)}</b>
          </button>
        ))}
      </div>

      <div className="project-grid">
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
        <a className="ghost-btn load-btn" href="#portfolio-more">View More Work</a>
        <a className="primary-btn load-btn" href="#contact">Start a Project</a>
      </div>

      <div className="stat-band">
        <div>
          <b>153+</b>
          Projects Completed
        </div>
        <div>
          <b>115+</b>
          Happy Clients
        </div>
        <div>
          <b>38+</b>
          Awards Won
        </div>
      </div>
    </section>
  );
}
