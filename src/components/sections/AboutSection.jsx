import SkillBar from "@/components/SkillBar";
import aboutImage from "@/assets/about.webp";
import { skillBars } from "@/data/portfolio";

export default function AboutSection({ sectionId = "about" }) {
  const emailAddress = "info@haseebullahdesigns.com";
  const cvDownloadPath = "/Haseeb-Ullah-CV.pdf";

  return (
    <section id={sectionId ?? undefined} className="section about-section">
      <div className="section-heading">
        <p className="pill">About Me</p>
        <h2 className="about-heading-title">
          <span className="heading-line-primary">CREATING VISUAL CONTENT</span>
          <span className="heading-line-accent">THAT CONNECTS</span>
        </h2>
        <p>
          A multi-disciplinary creative focused on design, editing, photography,
          and videography for brands that want clear, premium visual communication.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-photo">
          <div className="desk-scene">
            <img
              className="about-image"
              src={aboutImage}
              alt="Haseeb Ullah working on creative visual projects"
              loading="lazy"
              decoding="async"
            />
            <div className="experience-card">
              <b>5+</b>
              Years Experience
            </div>
          </div>
          <div className="mini-card email-card">{emailAddress}</div>
          <div className="mini-card location-card">Thana Batkhela, Malakand, Pakistan</div>
        </div>

        <div className="about-copy">
          <h3>Graphic Designer, Video Editor, Photographer &amp; Videographer</h3>
          <p>
            I help brands and individuals communicate with clarity through graphic
            design, video editing, photography, and videography. My work covers
            branding, social media posts, reels, ads, product visuals, lifestyle
            shoots, and story-led video content.
          </p>
          <p>
            Every project is handled with a client-focused process, clean creative
            direction, and attention to detail so the final result looks polished,
            feels purposeful, and supports real business goals.
          </p>

          <h4>Professional Skills</h4>
          {skillBars.map(([label, value]) => (
            <SkillBar key={label} label={label} value={value} />
          ))}

          <div className="button-row">
            <a
              className="ghost-btn"
              href={cvDownloadPath}
              download="Haseeb-Ullah-CV.pdf"
            >
              Download CV
            </a>
            <a className="primary-btn" href="#contact">Hire Me</a>
          </div>
        </div>
      </div>
      <div className="section-flow-line" aria-hidden="true" />
    </section>
  );
}
