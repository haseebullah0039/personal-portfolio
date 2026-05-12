import { useEffect, useState } from "react";
import { reviewMetrics, testimonials, trustCards } from "@/data/portfolio";

export default function TestimonialsSection() {
  const [activeReview, setActiveReview] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirection("next");
      setActiveReview((index) => (index + 1) % testimonials.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setDirection("previous");
    setActiveReview((index) => (index - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setDirection("next");
    setActiveReview((index) => (index + 1) % testimonials.length);
  };

  const review = testimonials[activeReview];

  return (
    <section className="section testimonials">
      <div className="section-heading">
        <p className="pill">Testimonials</p>
        <h2>
          What Clients <span>Say About Me</span>
        </h2>
        <p>Real feedback from clients who trusted me with design, video, photo, and content projects.</p>
      </div>

      <div className="review-strip">
        <div className="review-strip-score">
          <strong>4.9</strong>
          <span>Average creative partner rating</span>
        </div>
        <div className="review-metrics">
          {reviewMetrics.map((metric) => (
            <article key={metric.label} className="review-metric">
              <div>
                <span>{metric.label}</span>
                <b>{metric.value}%</b>
              </div>
              <i>
                <span style={{ width: `${metric.value}%` }} />
              </i>
            </article>
          ))}
        </div>
      </div>

      <div
        className="slider-space"
        onTouchStart={(event) => setTouchStartX(event.changedTouches[0].clientX)}
        onTouchEnd={(event) => {
          const delta = event.changedTouches[0].clientX - touchStartX;
          if (Math.abs(delta) < 40) {
            return;
          }

          if (delta > 0) {
            showPrevious();
          } else {
            showNext();
          }
        }}
      >
        <button type="button" aria-label="Previous testimonial" onClick={showPrevious}>
          <span>&lsaquo;</span>
        </button>
        <button type="button" aria-label="Next testimonial" onClick={showNext}>
          <span>&rsaquo;</span>
        </button>

        <div className="testimonial-stage">
          <article className={`testimonial-card is-single direction-${direction}`} key={`${review.name}-${activeReview}`}>
            <div className="testimonial-stars" aria-label={`${review.rating ?? 5} star rating`}>
              {Array.from({ length: review.rating ?? 5 }, (_, index) => (
                <span key={`${review.name}-star-${index}`}>★</span>
              ))}
            </div>
            <p>&ldquo;{review.text}&rdquo;</p>
            <div className="testimonial-person">
              <img src={review.avatar} alt={review.name} loading="lazy" decoding="async" />
              <div>
                <strong>{review.name}</strong>
                <span>{review.role}</span>
              </div>
            </div>
          </article>
        </div>

        <div className="slider-dots">
          {testimonials.map((item, index) => (
            <button
              className={activeReview === index ? "is-active" : ""}
              type="button"
              key={item.name}
              aria-label={`Show testimonial ${index + 1}`}
              onClick={() => {
                setDirection(index < activeReview ? "previous" : "next");
                setActiveReview(index);
              }}
            ></button>
          ))}
        </div>
      </div>

      <div className="trusted-panel">
        <h3>Trusted By</h3>
        <div className="trusted-marquee">
          {trustCards.map((card) => (
            <article key={card.name}>
              <h4>{card.name}</h4>
              <p>{card.accent}</p>
              <small>{card.note}</small>
            </article>
          ))}
          {trustCards.map((card) => (
            <article key={`${card.name}-duplicate`} aria-hidden="true">
              <h4>{card.name}</h4>
              <p>{card.accent}</p>
              <small>{card.note}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
