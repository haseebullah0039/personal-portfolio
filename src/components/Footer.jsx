export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="brand-avatar">HU</span>
        <h3>Haseeb Ullah</h3>
        <p>
          Creating premium design, video, photo, and storytelling content for brands
          that want to look confident and connect clearly.
        </p>
        <p>Available for freelance projects, retainers, and remote collaborations.</p>
        <div className="subscribe">
          <input placeholder="Enter your email" />
          <button type="button">Send</button>
        </div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <h4>Services</h4>
        <a href="#portfolio-graphic-design">Graphic Design</a>
        <a href="#portfolio-video-editing">Video Editing</a>
        <a href="#portfolio-photography">Photography</a>
        <a href="#portfolio-videography">Videography</a>
        <a href="#contact">Start a Project</a>
      </div>
      <div>
        <h4>Get In Touch</h4>
        <p>haseebullah03168778804@gmail.com</p>
        <p>+92 300 1234567</p>
        <p>Thana Batkhela, Malakand, Pakistan</p>
      </div>
    </footer>
  );
}
