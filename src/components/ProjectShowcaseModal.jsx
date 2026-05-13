import { useEffect, useState } from "react";

function getProjectChallenge(project) {
  return project.challenge ?? project.purpose;
}

function getProjectSolution(project) {
  return project.solution ?? project.summary;
}

function getProjectResults(project) {
  return project.results ?? project.metrics;
}

export default function ProjectShowcaseModal({ project, onClose }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
  const activeImage = project?.gallery[activeSlide];

  useEffect(() => {
    setActiveSlide(0);
    setIsImagePreviewOpen(false);
  }, [project]);

  useEffect(() => {
    if (!project || typeof document === "undefined") {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (isImagePreviewOpen) {
          setIsImagePreviewOpen(false);
        } else {
          onClose();
        }
      }

      if (event.key === "ArrowRight") {
        setActiveSlide((index) => (index + 1) % project.gallery.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveSlide((index) => (index - 1 + project.gallery.length) % project.gallery.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isImagePreviewOpen, onClose, project]);

  if (!project) {
    return null;
  }

  const challenge = getProjectChallenge(project);
  const solution = getProjectSolution(project);
  const results = getProjectResults(project);

  return (
    <div className="case-study-modal" role="dialog" aria-modal="true" aria-labelledby="case-study-title">
      <button className="case-study-backdrop" type="button" aria-label="Close project details" onClick={onClose} />

      <div className="case-study-shell">
        <button className="case-study-close" type="button" aria-label="Close project details" onClick={onClose}>
          <span />
          <span />
        </button>

        <div className="case-study-content">
          <section className="case-study-hero">
            <div className="case-study-hero-image-wrap">
              <img
                className="case-study-hero-image"
                src={activeImage}
                alt={`${project.title} showcase ${activeSlide + 1}`}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onClick={() => setIsImagePreviewOpen(true)}
              />
              <button
                className="case-study-preview-toggle"
                type="button"
                onClick={() => setIsImagePreviewOpen(true)}
              >
                Fullscreen Preview
              </button>
            </div>

            <div className="case-study-thumbs" aria-label="Project gallery thumbnails">
              {project.gallery.map((image, index) => (
                <button
                  className={activeSlide === index ? "is-active" : ""}
                  type="button"
                  key={`${project.slug}-${index}`}
                  aria-label={`Show project image ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          </section>

          <section className="case-study-copy">
            <div className="case-study-heading">
              <p className="pill">Case Study</p>
              <span className="case-study-meta">{project.typeLabel} / {project.year}</span>
              <h2 id="case-study-title">{project.title}</h2>
              <p>{project.description}</p>
            </div>

            <div className="case-study-summary-grid">
              <article>
                <span>Category</span>
                <p>{project.category}</p>
              </article>
              <article>
                <span>Client</span>
                <p>{project.client}</p>
              </article>
              <article>
                <span>Tools</span>
                <p>{project.tools.join(" / ")}</p>
              </article>
            </div>

            <div className="case-study-sections">
              <article className="case-study-section-card">
                <h3>Short Intro</h3>
                <p>{project.summary}</p>
              </article>

              <article className="case-study-section-card">
                <h3>Challenge</h3>
                <p>{challenge}</p>
              </article>

              <article className="case-study-section-card">
                <h3>Solution</h3>
                <p>{solution}</p>
              </article>

              <article className="case-study-section-card">
                <h3>Results</h3>
                <div className="case-study-tags">
                  {results.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            </div>

            <div className="case-study-process">
              <h3>Creative Process</h3>
              <ul>
                {project.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>

            <div className="case-study-gallery-block">
              <h3>Gallery Images</h3>
              <div className="case-study-gallery-grid">
                {project.gallery.map((image, index) => (
                  <button
                    className={activeSlide === index ? "is-active" : ""}
                    type="button"
                    key={`${project.slug}-gallery-${index}`}
                    aria-label={`Open gallery image ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                  >
                    <img src={image} alt={`${project.title} gallery ${index + 1}`} loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {isImagePreviewOpen ? (
        <div className="case-study-image-preview" role="dialog" aria-modal="true" aria-label="Fullscreen project image">
          <button
            className="case-study-image-preview-backdrop"
            type="button"
            aria-label="Close fullscreen image preview"
            onClick={() => setIsImagePreviewOpen(false)}
          />
          <div className="case-study-image-preview-shell">
            <button
              className="case-study-close"
              type="button"
              aria-label="Close fullscreen image preview"
              onClick={() => setIsImagePreviewOpen(false)}
            >
              <span />
              <span />
            </button>
            <button
              className="case-study-arrow is-left"
              type="button"
              aria-label="Previous project image"
              onClick={() => setActiveSlide((index) => (index - 1 + project.gallery.length) % project.gallery.length)}
            >
              &#8249;
            </button>
            <img
              src={activeImage}
              alt={`${project.title} fullscreen showcase ${activeSlide + 1}`}
              loading="eager"
              fetchPriority="high"
            />
            <button
              className="case-study-arrow is-right"
              type="button"
              aria-label="Next project image"
              onClick={() => setActiveSlide((index) => (index + 1) % project.gallery.length)}
            >
              &#8250;
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
