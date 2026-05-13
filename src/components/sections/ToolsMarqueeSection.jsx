const toolItems = [
  { label: "Photoshop", type: "photoshop" },
  { label: "Illustrator", type: "illustrator" },
  { label: "After Effects", type: "aftereffects" },
  { label: "Premiere Pro", type: "premiere" },
  { label: "CapCut", type: "capcut" },
  { label: "Canva", type: "canva" },
  { label: "Figma", type: "figma" },
  { label: "DaVinci Resolve", type: "davinci" },
  { label: "Camera", type: "camera" },
  { label: "Drone", type: "drone" },
  { label: "Film Reel", type: "film" },
  { label: "Lens", type: "lens" },
  { label: "Videography", type: "video" },
  { label: "Photography", type: "photo" },
  { label: "4K Delivery", type: "fourk" },
  { label: "Editing Suite", type: "edit" }
];

function ToolIcon({ item }) {
  if (item.type === "photoshop") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4.2" fill="#001e36" />
        <path d="M8 16.7V7.3h4.2c2.2 0 3.7 1.2 3.7 3.2 0 2.1-1.5 3.3-3.8 3.3H10v2.9H8Zm2-4.6h1.8c1.2 0 1.9-.5 1.9-1.5s-.7-1.5-1.9-1.5H10v3Zm7 4.6c-.7 0-1.4-.2-1.8-.5v-1.8c.6.5 1.2.7 1.8.7.8 0 1.1-.3 1.1-.7 0-.5-.4-.7-1.4-1.1-1.2-.4-1.9-1-1.9-2.2 0-1.4 1.1-2.3 2.8-2.3.7 0 1.2.1 1.7.3v1.7a3 3 0 0 0-1.6-.5c-.7 0-1 .3-1 .7 0 .5.4.6 1.3 1 1.4.5 2 1.1 2 2.3 0 1.5-1.1 2.4-3 2.4Z" fill="#31a8ff" />
      </svg>
    );
  }

  if (item.type === "illustrator") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4.2" fill="#261300" />
        <path d="m10.2 16.7-.6-1.9H6.3l-.6 1.9H3.6l3.3-9.4h2.4l3.3 9.4h-2.4Zm-1.1-3.6-.5-1.6-.6-2.1-.6 2-.5 1.7h2.2Zm5.6-4.6c-.4 0-.8-.3-.8-.8s.4-.8.8-.8c.5 0 .8.3.8.8s-.3.8-.8.8Zm-1 8.2V9.5h2v7.2h-2Z" fill="#ff9a00" />
      </svg>
    );
  }

  if (item.type === "aftereffects") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4.2" fill="#1b1238" />
        <path d="m9.5 16.7-.6-1.7H6l-.6 1.7H3.3l3.2-9.4h2.2l3.2 9.4H9.5Zm-1.2-3.4-.4-1.2-.8-2.4-.8 2.4-.4 1.2h2.4Zm7.2 3.6c-1 0-1.8-.4-2.3-1.2-.5-.7-.8-1.7-.8-2.8 0-1.2.3-2.1.9-2.8.6-.7 1.4-1.1 2.4-1.1.7 0 1.3.1 1.8.4v1.7a2.8 2.8 0 0 0-1.5-.4c-1 0-1.6.5-1.7 1.5h3.5v1.4h-3.5c.1 1.1.7 1.6 1.8 1.6.6 0 1.1-.1 1.6-.4v1.7c-.5.3-1.3.4-2.2.4Z" fill="#cf96fd" />
      </svg>
    );
  }

  if (item.type === "premiere") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4.2" fill="#1b1238" />
        <path d="M8 16.7V7.3h4.1c2.3 0 3.8 1.2 3.8 3.2s-1.5 3.3-3.9 3.3H10v2.9H8Zm2-4.6h1.6c1.3 0 2-.5 2-1.6 0-1-.7-1.5-1.9-1.5H10v3.1Zm6.9 4.6V9.5h2v1c.5-.8 1.2-1.2 2.2-1.2v2c-.2-.1-.5-.1-.9-.1-.7 0-1.3.2-1.8.7v4.8h-1.5Z" fill="#df7bff" />
      </svg>
    );
  }

  if (item.type === "capcut") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 7.2h7.6l2.7 2.1 2.7-2.1H21v2.3h-4.2l-1.5 1.1 1.5 1.2H21v2.3h-5.9l-3.1-2.4L8.9 14H3v-2.3h4.2l1.5-1.2-1.5-1.1H3V7.2Zm0 7.7h7.6l2.7 2.1 2.7-2.1H21v2.3h-4.2l-1.5 1.1 1.5 1.2H21v2.3h-5.9l-3.1-2.4-3.1 2.4H3v-2.3h4.2l1.5-1.2-1.5-1.1H3v-2.3Z" />
      </svg>
    );
  }

  if (item.type === "canva") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.2c4.9 0 8.8 3.8 8.8 8.8s-3.9 8.8-8.8 8.8S3.2 16.9 3.2 12 7.1 3.2 12 3.2Zm3.6 11.2c-.6.9-1.7 1.5-3 1.5-1.9 0-3.3-1.4-3.3-3.7s1.4-3.8 3.4-3.8c1.2 0 2.1.5 2.7 1.4l1.6-1.2c-.9-1.3-2.4-2.1-4.3-2.1-3.2 0-5.6 2.3-5.6 5.7s2.3 5.6 5.4 5.6c2 0 3.7-.9 4.6-2.4l-1.5-1Z" />
      </svg>
    );
  }

  if (item.type === "figma") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 2.5a3.5 3.5 0 1 0 0 7h3v-7H9Z" fill="#f24e1e" />
        <path d="M9 11.5a3.5 3.5 0 1 0 0 7H12v-7H9Z" fill="#0acf83" />
        <path d="M12 2.5h4a3.5 3.5 0 1 1 0 7h-4v-7Z" fill="#ff7262" />
        <path d="M12 11.5h4a3.5 3.5 0 1 1 0 7h-4v-7Z" fill="#a259ff" />
        <path d="M12 9.5h.5a3.5 3.5 0 1 1-3.5 3.5A3.5 3.5 0 0 1 12 9.5Z" fill="#1abcfe" />
      </svg>
    );
  }

  if (item.type === "davinci") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4.2c1.6 0 2.7 1.1 3.2 3.1l.1.4.4-.1c1.9-.4 3.3.3 4 1.6.8 1.4.5 3-.8 4.3l-.3.3.3.3c1.3 1.3 1.6 2.9.8 4.3-.8 1.3-2.2 1.9-4 1.6l-.4-.1-.1.4c-.5 2-1.6 3.1-3.2 3.1s-2.7-1.1-3.2-3.1l-.1-.4-.4.1c-1.9.4-3.3-.3-4-1.6-.8-1.4-.5-3 .8-4.3l.3-.3-.3-.3C3.9 12 3.6 10.4 4.4 9c.8-1.3 2.2-1.9 4-1.6l.4.1.1-.4c.5-2 1.6-3.1 3.2-3.1Z" fill="#fff" />
        <path d="M12 6.6c.8 0 1.4.8 1.7 2.3.2.7.4 1.2.8 1.6.4.4.9.6 1.6.8 1.5.3 2.3.9 2.3 1.7 0 .7-.8 1.4-2.3 1.7-.7.1-1.2.4-1.6.8-.4.4-.6.9-.8 1.6-.3 1.5-.9 2.3-1.7 2.3-.7 0-1.4-.8-1.7-2.3-.2-.7-.4-1.2-.8-1.6-.4-.4-.9-.7-1.6-.8-1.5-.3-2.3-1-2.3-1.7 0-.8.8-1.4 2.3-1.7.7-.2 1.2-.4 1.6-.8.4-.4.6-.9.8-1.6.3-1.5 1-2.3 1.7-2.3Z" fill="#0b1020" />
        <circle cx="8.2" cy="10.3" r="1.8" fill="#4fc3f7" />
        <circle cx="15.8" cy="10.3" r="1.8" fill="#ffd54f" />
        <circle cx="12" cy="16.2" r="1.8" fill="#ef5350" />
      </svg>
    );
  }

  if (item.type === "camera") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.5 5 10 3h4l1.5 2H18a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h2.5Zm3.5 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
      </svg>
    );
  }

  if (item.type === "drone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4.5A2.5 2.5 0 1 0 9.5 7H11v2H9.5A2.5 2.5 0 1 0 7 11.5c.95 0 1.78-.53 2.2-1.3H11v3.6a2.8 2.8 0 1 0 2 0v-3.6h1.8A2.5 2.5 0 1 0 17 9h-1.8V7H17a2.5 2.5 0 1 0-2.2-1.5H13V4.2a2.8 2.8 0 1 0-2 0v1.3H9.2A2.5 2.5 0 0 0 7 4.5Z" />
      </svg>
    );
  }

  if (item.type === "film") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm1 2v3h2V5H6Zm0 5v4h2v-4H6Zm0 6v3h2v-3H6Zm10-11v3h2V5h-2Zm0 5v4h2v-4h-2Zm0 6v3h2v-3h-2ZM10 7h4v10h-4V7Z" />
      </svg>
    );
  }

  if (item.type === "lens") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm0 2.3A5.7 5.7 0 1 1 6.3 12 5.7 5.7 0 0 1 12 6.3Zm0 2.7A3 3 0 1 0 15 12 3 3 0 0 0 12 9Zm0-7a1 1 0 0 1 1 1v1.1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM3 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h1Zm20 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1Z" />
      </svg>
    );
  }

  if (item.type === "video") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h8A2.5 2.5 0 0 1 17 6.5v1.1l3.4-2a1 1 0 0 1 1.5.86v11.06a1 1 0 0 1-1.5.86l-3.4-2v1.1A2.5 2.5 0 0 1 14.5 20h-8A2.5 2.5 0 0 1 4 17.5v-11ZM10 9.2v5.6L14.6 12 10 9.2Z" />
      </svg>
    );
  }

  if (item.type === "photo") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 5h3l1.2-1.6A2 2 0 0 1 11.8 2h.4a2 2 0 0 1 1.6.8L15 5h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm6 3.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2Zm0 2A2.8 2.8 0 1 1 9.2 13 2.8 2.8 0 0 1 12 10.2Z" />
      </svg>
    );
  }

  if (item.type === "fourk") {
    return <span className="tool-glyph tool-glyph-outline">4K</span>;
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.2 3.5 20.5 9.8 18 12.3l-1.4-1.4-3.7 3.7 1.4 1.4-2.5 2.5-6.3-6.3 2.5-2.5 1.4 1.4 3.7-3.7-1.4-1.4 2.5-2.5Zm-8.7 14 2 2L4.8 22a1 1 0 0 1-1.4-1.4l2.1-2.1Zm11-11 2-2 2.1 2.1a1 1 0 1 1-1.4 1.4L16.5 6.5Z" />
    </svg>
  );
}

function ToolMarqueeRow({ ariaHidden = false }) {
  return (
    <div className="tools-marquee-group" aria-hidden={ariaHidden}>
      {toolItems.map((item) => (
        <article
          className={`tool-chip tool-chip-${item.type}`}
          key={`${item.label}-${ariaHidden ? "copy" : "main"}`}
          aria-label={item.label}
          title={item.label}
        >
          <span className={`tool-chip-icon tool-chip-icon-${item.type}`}>
            <ToolIcon item={item} />
          </span>
          <span className="tool-chip-label">{item.label}</span>
        </article>
      ))}
    </div>
  );
}

export default function ToolsMarqueeSection() {
  return (
    <section className="tools-marquee-section" aria-label="Creative workflow tools">
      <div className="tools-marquee-shell">
        <div className="tools-marquee-window">
          <div className="tools-marquee-track">
            <ToolMarqueeRow />
            <ToolMarqueeRow ariaHidden />
          </div>
        </div>
      </div>
      <div className="section-flow-line" aria-hidden="true" />
    </section>
  );
}
