import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || "#home");
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMenuOpen);

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const updateActiveHash = () => {
      setActiveHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", updateActiveHash);
    updateActiveHash();

    return () => window.removeEventListener("hashchange", updateActiveHash);
  }, []);

  const isActive = (hash) => {
    if (hash === "#portfolio") {
      return activeHash.startsWith("#portfolio");
    }

    return activeHash === hash;
  };

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Haseeb Ullah home" onClick={closeMenu}>
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
        <a className={isActive("#home") ? "is-active" : ""} href="#home" onClick={closeMenu}>Home</a>
        <a className={isActive("#about") ? "is-active" : ""} href="#about" onClick={closeMenu}>About</a>
        <a className={isActive("#services") ? "is-active" : ""} href="#services" onClick={closeMenu}>Services</a>
        <a className={isActive("#portfolio") ? "is-active" : ""} href="#portfolio" onClick={closeMenu}>Portfolio</a>
        <a className={`mobile-contact-link ${isActive("#contact") ? "is-active" : ""}`} href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
      <a className={`nav-cta ${isActive("#contact") ? "is-active" : ""}`} href="#contact" onClick={closeMenu}>Start a Project</a>
    </header>
  );
}
