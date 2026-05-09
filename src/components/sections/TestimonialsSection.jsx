import { useState } from "react";
import { trustCards } from "@/data/portfolio";

const reviews = [
  {
    name: "Brand Client",
    role: "Graphic Design Project",
    text: "Clean, premium visuals with quick communication and a strong understanding of the brand direction."
  },
  {
    name: "Content Creator",
    role: "Video Editing Package",
    text: "The edits felt polished, fast, and ready for social media. Pacing, captions, and sound were handled really well."
  },
  {
    name: "Product Business",
    role: "Photo and Video Shoot",
    text: "Professional product visuals with clear framing, good lighting, and a final look that worked perfectly for marketing."
  }
];

export default function TestimonialsSection() {
  const [activeReview, setActiveReview] = useState(0);
  const review = reviews[activeReview];
  const showPrevious = () => {
    setActiveReview((index) => (index - 1 + reviews.length) % reviews.length);
  };
  const showNext = () => {
    setActiveReview((index) => (index + 1) % reviews.length);
  };

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
        <strong>4.9</strong>
        <span>***** out of 5.0</span>
        <span>Total Reviews <b>37</b></span>
        <span>5 Star Ratings <b>33</b></span>
        <span>Satisfaction <b>98%</b></span>
      </div>

      <div className="slider-space">
        <button type="button" aria-label="Previous testimonial" onClick={showPrevious}>&lsaquo;</button>
        <button type="button" aria-label="Next testimonial" onClick={showNext}>&rsaquo;</button>
        <article className="testimonial-card">
          <p>&ldquo;{review.text}&rdquo;</p>
          <div>
            <strong>{review.name}</strong>
            <span>{review.role}</span>
          </div>
        </article>
        <div className="slider-dots">
          {reviews.map((item, index) => (
            <button
              className={activeReview === index ? "is-active" : ""}
              type="button"
              key={item.name}
              aria-label={`Show testimonial ${index + 1}`}
              onClick={() => setActiveReview(index)}
            ></button>
          ))}
        </div>
      </div>

      <div className="trusted-panel">
        <h3>Trusted By</h3>
        <div>
          {trustCards.map((card) => (
            <article key={card}>
              <h4>{card}</h4>
              <p>*****</p>
              <small>Top Rated</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
