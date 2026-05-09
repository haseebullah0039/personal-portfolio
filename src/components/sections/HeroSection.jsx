import HeroCounter from "@/components/HeroCounter";
import HeroTyping from "@/components/HeroTyping";
import profilePicture from "@/assets/profile-picture.png";

export default function HeroSection() {
  return (
    <section className="hero section">
      <div className="hero-copy">
        <p className="intro">
          <span aria-hidden="true">&#128075;</span>
          Hi, I&apos;m
        </p>
        <h1>
          Haseeb
          <span>Ullah</span>
        </h1>
        <h2 className="typing-line">
          <HeroTyping />
        </h2>
        <p>
          Graphic Designer, Video Editor, Photographer &amp; Videographer creating
          polished visuals, engaging content, and story-driven media that help
          brands look confident and connect with the right audience.
        </p>
        <div className="social-row" aria-label="Social profiles">
          <a className="linkedin-link" href="#contact" aria-label="LinkedIn" data-tooltip="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.94 8.98H3.78V20h3.16V8.98ZM7.16 5.58c0-1-.77-1.76-1.79-1.76-1.04 0-1.82.76-1.82 1.76 0 .98.76 1.76 1.78 1.76h.02c1.04 0 1.81-.78 1.81-1.76ZM20.45 13.67c0-3.02-1.61-4.43-3.76-4.43-1.74 0-2.52.96-2.95 1.63V8.98h-3.15c.04 1.03 0 11.02 0 11.02h3.15v-6.16c0-.33.02-.66.12-.9.26-.66.84-1.34 1.83-1.34 1.29 0 1.8 1.01 1.8 2.48V20h3.15l-.19-6.33Z" />
            </svg>
          </a>
          <a className="behance-link" href="#portfolio-more" aria-label="Behance" data-tooltip="Behance">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.16 5.84h5.08c2.46 0 4.02 1.2 4.02 3.16 0 1.24-.58 2.1-1.72 2.58 1.5.42 2.26 1.44 2.26 3.02 0 2.26-1.72 3.56-4.36 3.56H4.16V5.84Zm4.74 4.9c1.02 0 1.62-.46 1.62-1.28 0-.8-.58-1.22-1.64-1.22H6.9v2.5h2Zm.22 4.98c1.2 0 1.88-.54 1.88-1.5 0-.92-.66-1.42-1.9-1.42H6.9v2.92h2.22Zm7.12-8.94h4.78v1.46h-4.78V6.78Zm2.5 11.62c-2.72 0-4.48-1.78-4.48-4.54 0-2.74 1.78-4.58 4.4-4.58 2.72 0 4.3 1.96 4.12 5.12h-5.86c.16 1.16.78 1.76 1.86 1.76.76 0 1.24-.26 1.54-.82h2.28c-.5 1.9-1.9 3.06-3.86 3.06Zm1.42-5.56c-.08-1-.62-1.56-1.54-1.56-.94 0-1.5.54-1.68 1.56h3.22Z" />
            </svg>
          </a>
        </div>
        <div className="button-row">
          <a className="primary-btn" href="#portfolio">View My Work</a>
          <a className="ghost-btn" href="#contact">Start a Project</a>
        </div>
        <div className="hero-stats">
          <span>
            <HeroCounter value={200} suffix="+" />
            Projects Completed
          </span>
          <span>
            <HeroCounter value={150} suffix="+" />
            Happy Clients
          </span>
          <span>
            <HeroCounter value={5} suffix="+" />
            Years Experience
          </span>
        </div>
      </div>

      <div className="hero-visual" aria-label="Haseeb Ullah creative professional profile">
        <span className="floating-badge badge-top">Creative Visual Expert</span>
        <span className="floating-badge badge-right">100% Success Rate</span>
        <span className="floating-badge badge-left">Multi-Skill Creator</span>
        <span className="floating-badge badge-bottom">Trusted by Clients</span>
        <figure className="hero-image-wrap">
          <img
            className="hero-personal-image"
            src={profilePicture}
            alt="Haseeb Ullah creative professional"
            width={760}
            height={760}
          />
        </figure>
      </div>
      <div className="section-flow-line" aria-hidden="true" />
    </section>
  );
}
