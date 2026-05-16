import { useEffect, useState } from "react";
import logo from "@/assets/logo.webp";

export default function Navbar({
  activeHash = "#home",
  onNavigate = null
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMenuOpen);

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMenuOpen]);

  const isActive = (hash) => {
    if (hash === "#portfolio") {
      return activeHash.startsWith("#portfolio") || activeHash.startsWith("#case-study-");
    }

    return activeHash === hash;
  };

  const handleNavigation = (event, hash) => {
    closeMenu();

    if (!onNavigate) {
      return;
    }

    event.preventDefault();
    onNavigate(hash);
  };

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Haseeb Ullah home" onClick={(event) => handleNavigation(event, "#home")}>
        <span className="brand-logo-frame">
          <img
            className="brand-logo"
            src={logo}
            alt=""
            width={92}
            height={92}
          />
        </span>
        <span className="brand-text">
          <strong className="brand-name">
            Haseeb <b>Ullah</b>
          </strong>
          <small className="brand-role">
            <span></span>
            Creative Designer
            <span></span>
          </small>
        </span>
      </a>
      <button
        className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`}
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((value) => !value)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <button
        className={`menu-backdrop ${isMenuOpen ? "is-open" : ""}`}
        type="button"
        aria-label="Close menu"
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={closeMenu}
      ></button>
      <nav
        id="primary-navigation"
        className={`nav-links ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Primary navigation"
      >
        <a className={isActive("#home") ? "is-active" : ""} href="#home" onClick={(event) => handleNavigation(event, "#home")}>Home</a>
        <a className={isActive("#about") ? "is-active" : ""} href="#about" onClick={(event) => handleNavigation(event, "#about")}>About</a>
        <a className={isActive("#services") ? "is-active" : ""} href="#services" onClick={(event) => handleNavigation(event, "#services")}>Services</a>
        <a className={isActive("#portfolio") ? "is-active" : ""} href="#portfolio" onClick={(event) => handleNavigation(event, "#portfolio")}>Portfolio</a>
        <a className={isActive("#contact") ? "is-active" : ""} href="#contact" onClick={(event) => handleNavigation(event, "#contact")}>Contact</a>
      </nav>
      <a className={`nav-cta ${isActive("#contact") ? "is-active" : ""}`} href="#contact" onClick={(event) => handleNavigation(event, "#contact")}>Start a Project</a>
    </header>
  );
}
