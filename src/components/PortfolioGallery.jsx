import { useEffect, useMemo, useState } from "react";
import ProjectShowcaseModal from "@/components/ProjectShowcaseModal";

const filters = ["All Work", "Graphic Design", "Video Editing", "Photography", "Videography"];

function getFilterHash(filter) {
  return filter === "All Work"
    ? "#portfolio"
    : `#portfolio-${filter.toLowerCase().replace(/\s+/g, "-")}`;
}

export default function PortfolioGallery({
  projects,
  enableHashSync = false,
  defaultFilter = "All Work",
  gridClassName = ""
}) {
  const [activeFilter, setActiveFilter] = useState(defaultFilter);
  const [activeProject, setActiveProject] = useState(null);

  const visibleProjects = useMemo(
    () => activeFilter === "All Work"
      ? projects
      : projects.filter((project) => project.category === activeFilter),
    [activeFilter, projects]
  );

  useEffect(() => {
    if (!enableHashSync || typeof window === "undefined") {
      return undefined;
    }

    const syncFilterFromHash = () => {
      const hashFilter = filters.find((filter) => getFilterHash(filter) === window.location.hash);
      setActiveFilter(hashFilter ?? defaultFilter);
    };

    window.addEventListener("hashchange", syncFilterFromHash);
    syncFilterFromHash();

    return () => window.removeEventListener("hashchange", syncFilterFromHash);
  }, [defaultFilter, enableHashSync]);

  const getCount = (filter) => filter === "All Work"
    ? projects.length
    : projects.filter((project) => project.category === filter).length;

  const handleFilter = (filter) => {
    setActiveFilter(filter);

    if (enableHashSync && typeof window !== "undefined") {
      window.location.hash = getFilterHash(filter);
    }
  };

  return (
    <>
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

      <div className={`project-grid ${gridClassName}`.trim()}>
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.slug}>
            <button
              type="button"
              className="project-card-button"
              aria-label={`Open ${project.title} project showcase`}
              onClick={() => setActiveProject(project)}
            >
              {project.featured ? <div className="featured-ribbon">Featured</div> : null}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 700px) 100vw, (max-width: 1180px) 50vw, 33vw"
                />
                <div className="project-overlay">
                  <small>{project.category} / {project.year}</small>
                  <h3>{project.title}</h3>
                  <p>{project.accent}</p>
                  <span className="project-overlay-cta">View Case Study</span>
                </div>
              </div>
            </button>
          </article>
        ))}
      </div>

      <ProjectShowcaseModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
