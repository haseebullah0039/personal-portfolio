export default function ContactSection({ sectionId = "contact" }) {
  const emailAddress = "info@haseebullahdesigns.com";
  const phoneNumber = "+92 3461365547";
  const whatsappNumber = "+923461365547";
  const locationLabel = "Thana Batkhela, Malakand, Pakistan";
  const mapLink = "https://www.google.com/maps/search/?api=1&query=Thana%20Batkhela%2C%20Malakand%2C%20Pakistan";

  return (
    <section id={sectionId ?? undefined} className="section contact-section">
      <div className="section-heading">
        <p className="pill">Get In Touch</p>
        <h2>
          <span className="heading-line-primary">LET&apos;S WORK</span>
          <span className="heading-line-accent">TOGETHER</span>
        </h2>
        <p>
          Available for graphic design, video editing, photography, and
          videography projects that need clean execution and strong creative direction.
        </p>
      </div>

      <div className="contact-grid">
        <form
          className="contact-form"
          action={`mailto:${emailAddress}`}
          method="post"
          encType="text/plain"
        >
          <label>
            Name
            <input name="name" placeholder="John Doe" required />
          </label>
          <label>
            Email
            <input name="email" placeholder="john@example.com" type="email" required />
          </label>
          <label>
            Phone (WhatsApp)
            <input name="phone" placeholder={phoneNumber} type="tel" />
          </label>
          <label>
            Subject
            <input name="subject" placeholder="Creative project inquiry" required />
          </label>
          <label className="message-field">
            Message
            <textarea
              name="message"
              placeholder="Tell me about your design, editing, photography, or videography project."
              required
            />
          </label>
          <button className="primary-btn" type="submit">Send Inquiry</button>
        </form>

        <aside className="contact-cards">
          <article>
            <b>Email</b>
            <span>{emailAddress}</span>
            <a href={`mailto:${emailAddress}`}>Send Email</a>
          </article>
          <article>
            <b>Phone (WhatsApp)</b>
            <span>{phoneNumber}</span>
            <a href={`https://wa.me/${whatsappNumber.replace("+", "")}`} target="_blank" rel="noreferrer">
              Message on WhatsApp
            </a>
          </article>
          <article>
            <b>Location</b>
            <span>{locationLabel}</span>
            <a href={mapLink} target="_blank" rel="noreferrer">
              View on Map
            </a>
          </article>
          <article className="contact-social-card">
            <b>Follow Me</b>
            <span>Professional updates, recent work, and visual content highlights.</span>
            <div className="contact-social-links">
              <a href="https://www.linkedin.com/in/haseeb-ullah-640531253/" target="_blank" rel="noreferrer">
                LinkedIn
                <small>View Profile</small>
              </a>
              <a href="https://www.behance.net/haseebullahgraphicx" target="_blank" rel="noreferrer">
                Behance
                <small>View Profile</small>
              </a>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}
