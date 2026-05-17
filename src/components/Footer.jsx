const socialProfiles = {
  facebook: "",
  linkedin: "https://www.linkedin.com/in/haseeb-ullah-640531253/",
  x: "",
  behance: "https://www.behance.net/haseebullahgraphicx",
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
  behance: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.16 5.84h5.08c2.46 0 4.02 1.2 4.02 3.16 0 1.24-.58 2.1-1.72 2.58 1.5.42 2.26 1.44 2.26 3.02 0 2.26-1.72 3.56-4.36 3.56H4.16V5.84Zm4.74 4.9c1.02 0 1.62-.46 1.62-1.28 0-.8-.58-1.22-1.64-1.22H6.9v2.5h2Zm.22 4.98c1.2 0 1.88-.54 1.88-1.5 0-.92-.66-1.42-1.9-1.42H6.9v2.92h2.22Zm7.12-8.94h4.78v1.46h-4.78V6.78Zm2.5 11.62c-2.72 0-4.48-1.78-4.48-4.54 0-2.74 1.78-4.58 4.4-4.58 2.72 0 4.3 1.96 4.12 5.12h-5.86c.16 1.16.78 1.76 1.86 1.76.76 0 1.24-.26 1.54-.82h2.28c-.5 1.9-1.9 3.06-3.86 3.06Zm1.42-5.56c-.08-1-.62-1.56-1.54-1.56-.94 0-1.5.54-1.68 1.56h3.22Z" />
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
    { name: "Behance", key: "behance", href: socialProfiles.behance },
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
