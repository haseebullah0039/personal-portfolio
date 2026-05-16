import { useEffect, useMemo, useState } from "react";

const filters = ["All Work", "Graphic Design", "Video Editing", "Photography", "Videography"];
const portfolioStats = [
  { likes: 245, views: 1200 },
  { likes: 318, views: 2400 },
  { likes: 189, views: 980 },
  { likes: 427, views: 3100 },
  { likes: 276, views: 1700 },
  { likes: 354, views: 2800 }
];
const PORTFOLIO_REACTIONS_STORAGE_KEY = "portfolio-card-reactions";

function getFilterHash(filter) {
  return filter === "All Work"
    ? "#portfolio"
    : `#portfolio-${filter.toLowerCase().replace(/\s+/g, "-")}`;
}

function getProjectStats(index) {
  return portfolioStats[index % portfolioStats.length];
}

function getCaseStudyHash(slug) {
  return `#case-study-${slug}`;
}

function formatMetric(value) {
  if (value >= 1000) {
    const shortValue = value >= 10000
      ? Math.round(value / 1000)
      : Math.round((value / 1000) * 10) / 10;

    return `${shortValue}K`;
  }

  return String(value);
}

function getMediaItem(item) {
  if (typeof item === "string") {
    return { type: "image", src: item };
  }

  return {
    type: item?.type ?? "image",
    src: item?.src ?? "",
    poster: item?.poster,
    alt: item?.alt
  };
}

export default function PortfolioGallery({
  projects,
  enableHashSync = false,
  defaultFilter = "All Work",
  gridClassName = ""
}) {
  const [activeFilter, setActiveFilter] = useState(defaultFilter);
  const [cardReactions, setCardReactions] = useState({});

  const persistReactions = (nextReactions) => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(PORTFOLIO_REACTIONS_STORAGE_KEY, JSON.stringify(nextReactions));
  };

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

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const savedReactions = window.localStorage.getItem(PORTFOLIO_REACTIONS_STORAGE_KEY);
      if (savedReactions) {
        setCardReactions(JSON.parse(savedReactions));
      }
    } catch {
      // Ignore invalid local data and keep defaults.
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(PORTFOLIO_REACTIONS_STORAGE_KEY, JSON.stringify(cardReactions));
  }, [cardReactions]);

  const getCount = (filter) => filter === "All Work"
    ? projects.length
    : projects.filter((project) => project.category === filter).length;

  const openProject = (project) => {
    setCardReactions((current) => {
      const next = {
        ...current,
        [project.slug]: {
          liked: current[project.slug]?.liked ?? false,
          likes: current[project.slug]?.likes,
          views: (current[project.slug]?.views ?? 0) + 1
        }
      };

      persistReactions(next);
      return next;
    });

    if (typeof window !== "undefined") {
      window.location.hash = getCaseStudyHash(project.slug);
    }
  };

  const handleProjectCardKeyDown = (event, project) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(project);
    }
  };

  const handleProjectLike = (event, project, defaultLikes) => {
    event.stopPropagation();
    event.preventDefault();

    setCardReactions((current) => {
      const existing = current[project.slug];
      const isLiked = existing?.liked ?? false;
      const currentLikes = existing?.likes ?? defaultLikes;

      return {
        ...current,
        [project.slug]: {
          liked: !isLiked,
          likes: isLiked ? Math.max(defaultLikes, currentLikes - 1) : currentLikes + 1,
          views: existing?.views ?? 0
        }
      };
    });
  };

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
        {visibleProjects.map((project, index) => {
          const stats = getProjectStats(index);
          const savedReactions = cardReactions[project.slug];
          const likes = savedReactions?.likes ?? stats.likes;
          const views = stats.views + (savedReactions?.views ?? 0);
          const isLiked = savedReactions?.liked ?? false;
          const coverMedia = getMediaItem(project.image);

          return (
            <article className="project-card" key={project.slug}>
              <div
                className="project-card-button"
                role="button"
                tabIndex={0}
                aria-label={`Open ${project.title} case study`}
                onClick={() => openProject(project)}
                onKeyDown={(event) => handleProjectCardKeyDown(event, project)}
              >
                <div className="project-image">
                  {coverMedia.type === "video" ? (
                    <video
                      src={coverMedia.src}
                      poster={coverMedia.poster}
                      aria-label={coverMedia.alt ?? project.title}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={coverMedia.src}
                      alt={coverMedia.alt ?? project.title}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 700px) 100vw, (max-width: 1180px) 50vw, 33vw"
                    />
                  )}
                  <div className="project-overlay">
                    <div className="project-overlay-bar">
                      <div className="project-overlay-copy">
                        <h3>{project.title}</h3>
                        <p>Haseeb Ullah</p>
                      </div>
                      <div className="project-overlay-meta" aria-label={`${formatMetric(likes)} likes and ${formatMetric(views)} views`}>
                        <button
                          type="button"
                          className={`project-overlay-stat project-like-button ${isLiked ? "is-active" : ""}`}
                          aria-label={isLiked ? `Unlike ${project.title}` : `Like ${project.title}`}
                          onClick={(event) => handleProjectLike(event, project, stats.likes)}
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 21.35 10.55 20C5.4 15.24 2 12.09 2 8.5A4.5 4.5 0 0 1 6.5 4 5 5 0 0 1 12 7.09 5 5 0 0 1 17.5 4 4.5 4.5 0 0 1 22 8.5c0 3.59-3.4 6.74-8.55 11.54Z" />
                          </svg>
                          <strong>{formatMetric(likes)}</strong>
                        </button>
                        <span className="project-overlay-stat project-view-stat">
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M1.6 12s3.8-6.4 10.4-6.4S22.4 12 22.4 12s-3.8 6.4-10.4 6.4S1.6 12 1.6 12Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="12" r="3.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
                          </svg>
                          <strong>{formatMetric(views)}</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-card-copy">
                  <small>{project.typeLabel}</small>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
