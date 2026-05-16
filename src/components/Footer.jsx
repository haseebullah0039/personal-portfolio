const socialProfiles = {
  facebook: "",
  linkedin: "https://www.linkedin.com/in/haseebullahgraphicdesigner/",
  x: "",
  instagram: "https://www.instagram.com/haseebullahdesigns/",
  tiktok: ""
};

const socialIcons = {
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.36-2.81H13.5V9.4c0-.81.22-1.37 1.39-1.37H16.5V5.52c-.78-.08-1.56-.12-2.34-.12-2.32 0-3.91 1.41-3.91 4.01v1.78H7.9V14h2.35v7Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.98H3.78V20h3.16V8.98ZM7.16 5.58c0-1-.77-1.76-1.79-1.76-1.04 0-1.82.76-1.82 1.76 0 .98.76 1.76 1.78 1.76h.02c1.04 0 1.81-.78 1.81-1.76ZM20.45 13.67c0-3.02-1.61-4.43-3.76-4.43-1.74 0-2.52.96-2.95 1.63V8.98h-3.15c.04 1.03 0 11.02 0 11.02h3.15v-6.16c0-.33.02-.66.12-.9.26-.66.84-1.34 1.83-1.34 1.29 0 1.8 1.01 1.8 2.48V20h3.15l-.19-6.33Z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.18 3H20l-6.16 7.04L21 21h-5.64l-4.42-6.7L5.07 21H2.25l6.59-7.53L2 3h5.78l4 6.12Zm-.99 16.24h1.56L6.93 4.68H5.26Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7Zm9.45 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.35A4.65 4.65 0 1 1 7.35 12 4.65 4.65 0 0 1 12 7.35Zm0 1.8A2.85 2.85 0 1 0 14.85 12 2.85 2.85 0 0 0 12 9.15Z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.6 3c.2 1.66 1.17 3.15 2.6 4.03.86.54 1.84.84 2.85.87v2.68a8.02 8.02 0 0 1-3.9-1.03v5.25c0 3.26-2.64 5.9-5.9 5.9a5.9 5.9 0 0 1 0-11.8c.31 0 .62.03.92.08v2.77a3.2 3.2 0 1 0 2.43 3.1V3Z" />
    </svg>
  )
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const emailAddress = "info@haseebullahdesigns.com";
  const phoneNumber = "+92 3461365547";
  const whatsappNumber = "+923461365547";
  const locationLabel = "Thana Batkhela, Malakand, Pakistan";
  const mapLink = "https://www.google.com/maps/search/?api=1&query=Thana%20Batkhela%2C%20Malakand%2C%20Pakistan";
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
  ];
  const socialLinks = [
    { name: "Facebook", key: "facebook", href: socialProfiles.facebook },
    { name: "LinkedIn", key: "linkedin", href: socialProfiles.linkedin },
    { name: "X", key: "x", href: socialProfiles.x },
    { name: "Instagram", key: "instagram", href: socialProfiles.instagram },
    { name: "TikTok", key: "tiktok", href: socialProfiles.tiktok }
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <span className="footer-kicker">Creative Portfolio</span>
          <h3>Haseeb Ullah</h3>
          <p className="footer-summary">
            Professional design, editing, photography, and videography for brands
            that want clean visuals and strong presentation.
          </p>
          <div className="footer-cta-row">
            <a className="footer-primary-link" href="#contact">Start a Project</a>
            <a className="footer-secondary-link" href="#portfolio">View Work</a>
          </div>
        </div>

        <nav className="footer-column" aria-label="Quick links">
          <h4>Navigation</h4>
          {quickLinks.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="footer-column footer-contact-column">
          <h4>Contact</h4>
          <a className="footer-contact-line" href={`mailto:${emailAddress}`}>{emailAddress}</a>
          <a className="footer-contact-line" href={`https://wa.me/${whatsappNumber.replace("+", "")}`} target="_blank" rel="noreferrer">
            {phoneNumber}
          </a>
          <a className="footer-contact-line" href={mapLink} target="_blank" rel="noreferrer">
            {locationLabel}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-socials" aria-label="Social media links">
          {socialLinks.map((item) => (
            item.href ? (
              <a
                key={item.name}
                className="footer-social-link"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                title={item.name}
              >
                {socialIcons[item.key]}
              </a>
            ) : null
          ))}
        </div>
        <p>&copy; {currentYear} Haseeb Ullah. All rights reserved.</p>
      </div>
    </footer>
  );
}
