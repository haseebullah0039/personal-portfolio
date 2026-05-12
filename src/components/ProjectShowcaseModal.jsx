import { useEffect, useState } from "react";

function DetailIcon({ type }) {
  if (type === "tools") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.7 6.3a4.2 4.2 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4.2 4.2 0 0 0 5.4-5.4l-2.2 2.2-3.2-.8-.8-3.2 2.2-2.2Z" />
      </svg>
    );
  }

  if (type === "category") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h3A2.5 2.5 0 0 1 12 6.5v3A2.5 2.5 0 0 1 9.5 12h-3A2.5 2.5 0 0 1 4 9.5Zm8 0A2.5 2.5 0 0 1 14.5 4h3A2.5 2.5 0 0 1 20 6.5v3A2.5 2.5 0 0 1 17.5 12h-3A2.5 2.5 0 0 1 12 9.5Zm-8 8A2.5 2.5 0 0 1 6.5 12h3A2.5 2.5 0 0 1 12 14.5v3A2.5 2.5 0 0 1 9.5 20h-3A2.5 2.5 0 0 1 4 17.5Zm8 0a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5Z" />
      </svg>
    );
  }

  if (type === "client") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.4 0-8 2.24-8 5v1h16v-1c0-2.76-3.6-5-8-5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 2 8l10 5 10-5-10-5Zm0 7.2L4.6 6.5 12 3.8l7.4 2.7Zm-8 2.6 8 4 8-4V18l-8 4-8-4Z" />
    </svg>
  );
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

  return (
    <div className="case-study-modal" role="dialog" aria-modal="true" aria-labelledby="case-study-title">
      <button className="case-study-backdrop" type="button" aria-label="Close project details" onClick={onClose} />
      <div className="case-study-shell">
        <button className="case-study-close" type="button" aria-label="Close project details" onClick={onClose}>
          <span />
          <span />
        </button>

        <div className="case-study-media">
          <div className="case-study-media-topbar">
            <span className="case-study-slide-count">
              {String(activeSlide + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}
            </span>
            <button
              className="case-study-preview-toggle"
              type="button"
              onClick={() => setIsImagePreviewOpen(true)}
            >
              Fullscreen Preview
            </button>
          </div>

          <div className="case-study-slider">
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
              alt={`${project.title} showcase ${activeSlide + 1}`}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              onClick={() => setIsImagePreviewOpen(true)}
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

          <p className="case-study-preview-hint">Tap any image for fullscreen viewing.</p>
        </div>

        <div className="case-study-copy">
          <div className="case-study-heading">
            <p className="pill">Case Study</p>
            <span className="case-study-meta">{project.category} / {project.year}</span>
            <h2 id="case-study-title">{project.title}</h2>
            <p>{project.description}</p>
          </div>

          <div className="case-study-panels">
            <article>
              <span><DetailIcon type="purpose" /> Design Purpose</span>
              <p>{project.purpose}</p>
            </article>
            <article>
              <span><DetailIcon type="client" /> Client / Project</span>
              <p>{project.client}</p>
            </article>
            <article>
              <span><DetailIcon type="category" /> Category</span>
              <p>{project.category}</p>
            </article>
            <article>
              <span><DetailIcon type="tools" /> Tools Used</span>
              <p>{project.tools.join(" / ")}</p>
            </article>
          </div>

          <div className="case-study-body">
            <div className="case-study-column">
              <h3>Project Overview</h3>
              <p>{project.summary}</p>
            </div>
            <div className="case-study-column">
              <h3>Creative Process</h3>
              <ul>
                {project.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="case-study-foot">
            <div>
              <h3>Deliverables</h3>
              <div className="case-study-tags">
                {project.deliverables.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div>
              <h3>Project Highlights</h3>
              <div className="case-study-tags">
                {project.metrics.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div>
              <h3>Design Breakdown</h3>
              <div className="case-study-tags">
                {project.tools.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
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
