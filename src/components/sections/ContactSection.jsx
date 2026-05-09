export default function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading">
        <p className="pill">Get In Touch</p>
        <h2>
          Let&apos;s Work <span>Together</span>
        </h2>
        <p>
          Available for graphic design, video editing, photography, and
          videography projects that need clean execution and strong creative direction.
        </p>
      </div>

      <div className="contact-grid">
        <form
          className="contact-form"
          action="mailto:haseebullah03168778804@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label>
            Your Name
            <input name="name" placeholder="John Doe" required />
          </label>
          <label>
            Email Address
            <input name="email" placeholder="john@example.com" type="email" required />
          </label>
          <label>
            Phone Number
            <input name="phone" placeholder="+92 300 1234567" />
          </label>
          <label>
            Subject
            <input name="subject" placeholder="Creative project inquiry" required />
          </label>
          <label>
            Project Budget
            <select name="budget" defaultValue="">
              <option value="" disabled>Select your budget</option>
              <option>$100 - $500</option>
              <option>$500 - $1,500</option>
              <option>$1,500+</option>
            </select>
          </label>
          <label className="message-field">
            Your Message
            <textarea
              name="message"
              placeholder="Tell me about your design, editing, photography, or videography project."
              required
            />
          </label>
          <button className="primary-btn" type="submit">Start a Project</button>
        </form>

        <aside className="contact-cards">
          <article>
            <b>Email Me</b>
            <span>haseebullah03168778804@gmail.com</span>
            <a href="mailto:haseebullah03168778804@gmail.com">Send Email</a>
          </article>
          <article>
            <b>Call Me</b>
            <span>+92 300 1234567</span>
            <a href="tel:+923001234567">Make a Call</a>
          </article>
          <article>
            <b>Visit Me</b>
            <span>Thana Batkhela, Malakand, Pakistan</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Thana%20Batkhela%20Malakand%20Pakistan"
              target="_blank"
              rel="noreferrer"
            >
              View on Map
            </a>
          </article>
          <article>
            <b>Follow Me</b>
            <span>LinkedIn / Behance / Dribbble / Instagram</span>
            <a href="#portfolio-more">View Portfolio</a>
          </article>
          <article className="available">
            <b>Available for Work</b>
            <span>Accepting design, editing, photography, and videography projects</span>
          </article>
        </aside>
      </div>
    </section>
  );
}
