import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

const surfaceThemes = {
  dark: {
    shell: "bg-[#201020] text-[#fff7ee]",
    veil: "bg-[radial-gradient(circle_at_top,rgba(243,114,33,0.16),transparent_26%),linear-gradient(180deg,rgba(40,21,42,0.96),rgba(32,16,32,0.99))]",
    panel: "border-[rgba(243,114,33,0.18)] bg-[rgba(50,26,52,0.82)]",
    soft: "text-[rgba(255,247,238,0.78)]",
    softer: "text-[rgba(199,174,190,0.86)]",
    imagePanel: "bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]",
    swatchRing: "ring-[rgba(255,255,255,0.08)]",
    card: "bg-[rgba(255,255,255,0.04)]",
    button: "bg-[rgba(255,255,255,0.06)] text-[#fff7ee] hover:bg-[rgba(243,114,33,0.16)]"
  }
};

const easing = [0.22, 1, 0.36, 1];

function getMediaItem(item) {
  if (typeof item === "string") {
    return { type: "image", src: item };
  }

  return {
    type: item?.type ?? "image",
    src: item?.src ?? "",
    poster: item?.poster,
    alt: item?.alt
  };
}

function createAvatarDataUri(name, accentA = "#f59e0b", accentB = "#7c3aed") {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${accentA}" />
          <stop offset="100%" stop-color="${accentB}" />
        </linearGradient>
      </defs>
      <rect width="160" height="160" rx="48" fill="#0f0d17" />
      <circle cx="80" cy="80" r="58" fill="url(#g)" opacity="0.96" />
      <text x="80" y="96" text-anchor="middle" fill="#fff8f0" font-family="Segoe UI, Arial, sans-serif" font-size="50" font-weight="700">${initials}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getProjectChallenge(project) {
  return project.problemStatement ?? project.challenge ?? project.purpose;
}

function getProjectOverview(project) {
  return project.overview ?? project.summary ?? project.description;
}

function getProjectSolution(project) {
  return project.finalSolution ?? project.solution ?? project.summary;
}

function getProjectResults(project) {
  return project.results ?? project.metrics ?? [];
}

function getProjectPalette(project) {
  if (project.colorPalette?.length) {
    return project.colorPalette;
  }

  if (project.slug === "al-ansar-abaya-logo-design") {
    return [
      { name: "Forest Gold", hex: "#dca43a", use: "Elegant accent and frame detail" },
      { name: "Abaya Green", hex: "#0f5130", use: "Primary identity tone" },
      { name: "Soft Ivory", hex: "#f6f1e8", use: "Premium clean background" }
    ];
  }

  if (project.slug === "brand-identity-design-packages") {
    return [
      { name: "Signal Blue", hex: "#0ea5ff", use: "Highlight headlines and icons" },
      { name: "Neon Amber", hex: "#ff9f1a", use: "Price and CTA emphasis" },
      { name: "Midnight Navy", hex: "#07142a", use: "Poster base and depth" }
    ];
  }

  return [
    { name: "Accent", hex: "#f37221", use: "Primary highlight" },
    { name: "Deep Ink", hex: "#140c18", use: "Panel and contrast base" },
    { name: "Warm Mist", hex: "#f7f3ed", use: "Readable light balance" }
  ];
}

function getProjectTypography(project) {
  if (project.typography?.length) {
    return project.typography;
  }

  if (project.slug === "brand-identity-design-packages") {
    return [
      { label: "Headline", family: "Modern Sans", detail: "Bold package hierarchy and pricing emphasis" },
      { label: "Support", family: "Clean UI Sans", detail: "Readable feature lists and supporting notes" }
    ];
  }

  if (project.slug === "al-ansar-abaya-logo-design") {
    return [
      { label: "Wordmark", family: "Classic Serif", detail: "Luxury retail tone with graceful letterforms" },
      { label: "Support", family: "Geometric Sans", detail: "Clean pairing for brand collateral" }
    ];
  }

  return [
    { label: "Display", family: "Aptos Display", detail: "Used for prominent headings and section anchors" },
    { label: "Body", family: "Aptos", detail: "Supports clean reading across case study content" }
  ];
}

function getBeforeAfter(project) {
  if (project.beforeAfter) {
    return project.beforeAfter;
  }

  return {
    before: `The project needed clearer hierarchy, stronger differentiation, and a more premium presentation for ${project.client}.`,
    after: `The final direction gives ${project.client} a polished visual system that is easier to understand, more memorable, and more attractive to potential clients.`
  };
}

function getMockups(project) {
  return project.mockups?.length ? project.mockups : project.gallery.slice(0, 3);
}

function getTestimonial(project) {
  if (project.testimonial) {
    return project.testimonial;
  }

  return {
    quote: `Haseeb delivered outstanding creative work with incredible attention to detail. The final presentation for ${project.client} felt polished, premium, and perfectly aligned with our goals.`,
    name: "Sarah Rahman",
    company: project.client,
    rating: 5,
    avatar: createAvatarDataUri("Sarah Rahman")
  };
}

function Reveal({ children, className = "", delay = 0, y = 28 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easing, delay }}
    >
      {children}
    </motion.div>
  );
}

function MetaPill({ label, value, theme }) {
  return (
    <div className={`rounded-full border px-4 py-2 text-sm backdrop-blur-xl ${theme.panel}`}>
      <span className={`mr-2 text-[11px] uppercase tracking-[0.24em] ${theme.softer}`}>{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function GalleryControlButton({ direction, onClick, theme, label }) {
  const positionClass = direction === "left" ? "left-4 md:left-6" : "right-4 md:right-6";

  return (
    <button
      className={`absolute ${positionClass} top-1/2 z-[10000] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-xl transition md:h-14 md:w-14 ${theme.panel} ${theme.button}`}
      type="button"
      aria-label={label}
      onClick={onClick}
    >
      <span className="text-2xl leading-none">{direction === "left" ? "‹" : "›"}</span>
    </button>
  );
}

function LightboxGallery({
  activeMedia,
  activeIndex,
  totalImages,
  theme,
  onClose,
  onNext,
  onPrevious
}) {
  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[9999] h-screen w-screen bg-black/88 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: easing }}
      onClick={onClose}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center px-4 py-6 md:px-8"
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.985 }}
        transition={{ duration: 0.35, ease: easing }}
        onClick={(event) => event.stopPropagation()}
      >
        {totalImages > 1 ? (
          <GalleryControlButton direction="left" label="Previous image" theme={theme} onClick={onPrevious} />
        ) : null}

        <button
          className={`absolute right-4 top-4 z-[10000] inline-flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-xl transition md:right-6 md:top-6 ${theme.panel} ${theme.button}`}
          type="button"
          aria-label="Close image preview"
          onClick={onClose}
        >
          <span className="absolute h-px w-5 rotate-45 bg-current" />
          <span className="absolute h-px w-5 -rotate-45 bg-current" />
        </button>

        <figure className="relative m-0 flex h-full w-full max-w-[min(1600px,100vw)] items-center justify-center overflow-hidden">
          {activeMedia.type === "video" ? (
            <motion.video
              key={`lightbox-${activeIndex}`}
              src={activeMedia.src}
              poster={activeMedia.poster}
              className="max-h-[calc(100vh-3rem)] w-auto max-w-full select-none object-contain md:max-h-[calc(100vh-4rem)]"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.35, ease: easing }}
              autoPlay
              controls
              loop
              playsInline
            />
          ) : (
            <motion.img
              key={`lightbox-${activeIndex}`}
              src={activeMedia.src}
              alt={activeMedia.alt ?? "Portfolio image preview"}
              className="max-h-[calc(100vh-3rem)] w-auto max-w-full select-none object-contain md:max-h-[calc(100vh-4rem)]"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.35, ease: easing }}
            />
          )}
        </figure>

        {totalImages > 1 ? (
          <GalleryControlButton direction="right" label="Next image" theme={theme} onClick={onNext} />
        ) : null}
      </motion.div>
    </motion.div>,
    document.body
  );
}

export default function ProjectShowcaseModal({
  project,
  onClose,
  isPageView = false,
  backHref = "#portfolio-more"
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const shellRef = useRef(null);
  const galleryItems = useMemo(
    () => (project?.gallery ?? []).map(getMediaItem),
    [project]
  );
  const activeMedia = galleryItems[activeSlide] ?? getMediaItem(project?.image);
  const activeTheme = surfaceThemes.dark;
  const { scrollYProgress } = useScroll({ container: shellRef });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const heroScale = useTransform(scrollYProgress, [0, 0.45], [1, 1.05]);

  const challenge = useMemo(() => (project ? getProjectChallenge(project) : ""), [project]);
  const overview = useMemo(() => (project ? getProjectOverview(project) : ""), [project]);
  const solution = useMemo(() => (project ? getProjectSolution(project) : ""), [project]);
  const results = useMemo(() => (project ? getProjectResults(project) : []), [project]);
  const palette = useMemo(() => (project ? getProjectPalette(project) : []), [project]);
  const typography = useMemo(() => (project ? getProjectTypography(project) : []), [project]);
  const beforeAfter = useMemo(() => (project ? getBeforeAfter(project) : null), [project]);
  const mockups = useMemo(() => (project ? getMockups(project) : []), [project]);
  const testimonial = useMemo(() => (project ? getTestimonial(project) : null), [project]);
  const goToNextSlide = () => setActiveSlide((index) => (index + 1) % galleryItems.length);
  const goToPreviousSlide = () => setActiveSlide((index) => (index - 1 + galleryItems.length) % galleryItems.length);

  useEffect(() => {
    setActiveSlide(0);
    setIsPreviewOpen(false);
  }, [project]);

  useEffect(() => {
    if (typeof document === "undefined" || !isPreviewOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("lightbox-open");

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("lightbox-open");
    };
  }, [isPreviewOpen]);

  useEffect(() => {
    if (!project || isPageView || typeof document === "undefined") {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (isPreviewOpen) {
          setIsPreviewOpen(false);
        } else {
          onClose();
        }
      }

      if (isPreviewOpen && event.key === "ArrowRight" && galleryItems.length > 1) {
        goToNextSlide();
      }

      if (isPreviewOpen && event.key === "ArrowLeft" && galleryItems.length > 1) {
        goToPreviousSlide();
      }

    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.addEventListener;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryItems.length, goToNextSlide, goToPreviousSlide, isPreviewOpen, onClose, project, isPageView]);

  if (!project) {
    return null;
  }

  const rootClassName = isPageView
    ? `relative isolate min-h-screen ${activeTheme.shell}`
    : `fixed inset-0 z-[120] overflow-hidden ${activeTheme.shell}`;

  const shellClassName = isPageView
    ? "relative min-h-screen px-4 pb-24 pt-24 md:px-6 md:pt-28"
    : "relative h-full overflow-y-auto scroll-smooth px-4 pb-24 pt-20 md:px-6 md:pt-24";

  return (
    <motion.div
      className={rootClassName}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: easing }}
      role={isPageView ? undefined : "dialog"}
      aria-modal={isPageView ? undefined : "true"}
      aria-labelledby="case-study-title"
    >
      <motion.div
        className={`absolute inset-0 ${activeTheme.veil}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-3 p-4 md:p-6">
        {isPageView ? (
          <a
            className={`pointer-events-auto inline-flex min-h-12 items-center rounded-full border px-5 text-sm font-semibold backdrop-blur-2xl transition ${activeTheme.panel} ${activeTheme.button}`}
            href={backHref}
          >
            Back to Portfolio
          </a>
        ) : <span />}
        {!isPageView ? (
          <button
            className={`pointer-events-auto relative inline-flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-2xl transition ${activeTheme.panel} ${activeTheme.button}`}
            type="button"
            aria-label="Close case study"
            onClick={onClose}
          >
            <span className="absolute h-px w-5 rotate-45 bg-current" />
            <span className="absolute h-px w-5 -rotate-45 bg-current" />
          </button>
        ) : null}
      </div>

      <motion.div
        ref={shellRef}
        className={shellClassName}
        initial={{ y: 28, scale: 0.992 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 24, scale: 0.992 }}
        transition={{ duration: 0.6, ease: easing }}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 md:gap-10">
          <Reveal>
            <section className={`relative overflow-hidden rounded-[2rem] border ${activeTheme.panel} shadow-glow backdrop-blur-2xl`}>
              <div className="grid gap-8 p-5 md:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] md:p-8 xl:p-10">
                <motion.div style={{ y: heroY, scale: heroScale }} className="space-y-6">
                  <div className="flex flex-wrap gap-3">
                    <MetaPill label="Case Study" value={project.typeLabel ?? project.category} theme={activeTheme} />
                    <MetaPill label="Client" value={project.client} theme={activeTheme} />
                    <MetaPill label="Year" value={project.year} theme={activeTheme} />
                  </div>

                  <div className="space-y-5">
                    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] ${activeTheme.panel}`}>
                      <span className="inline-flex h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.7)]" />
                      Case Study Overview
                    </span>
                    <h2 id="case-study-title" className="max-w-3xl font-display text-4xl font-semibold leading-[0.95] md:text-6xl">
                      {project.title}
                    </h2>
                    <p className={`max-w-2xl text-base leading-7 md:text-lg ${activeTheme.soft}`}>
                      {overview}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className={`rounded-3xl border p-4 ${activeTheme.panel}`}>
                      <p className={`text-[11px] uppercase tracking-[0.25em] ${activeTheme.softer}`}>Category</p>
                      <p className="mt-3 text-lg font-semibold">{project.category}</p>
                    </div>
                    <div className={`rounded-3xl border p-4 ${activeTheme.panel}`}>
                      <p className={`text-[11px] uppercase tracking-[0.25em] ${activeTheme.softer}`}>Tools</p>
                      <p className="mt-3 text-lg font-semibold">{project.tools.slice(0, 2).join(" · ")}</p>
                    </div>
                    <div className={`rounded-3xl border p-4 ${activeTheme.panel}`}>
                      <p className={`text-[11px] uppercase tracking-[0.25em] ${activeTheme.softer}`}>Outcome</p>
                      <p className="mt-3 text-lg font-semibold">{results[0] ?? "Premium presentation system"}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.button
                  type="button"
                  onClick={() => setIsPreviewOpen(true)}
                  className={`group relative overflow-hidden rounded-[1.8rem] border ${activeTheme.panel} ${activeTheme.imagePanel} shadow-glass`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: easing }}
                >
                  {activeMedia.type === "video" ? (
                    <motion.video
                      src={activeMedia.src}
                      poster={activeMedia.poster}
                      className="h-full w-full object-contain p-4 md:p-6"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, ease: easing }}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <motion.img
                      src={activeMedia.src}
                      alt={activeMedia.alt ?? `${project.title} hero showcase`}
                      className="h-full w-full object-contain p-4 md:p-6"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, ease: easing }}
                    />
                  )}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent p-5 text-left text-white">
                    <span className="inline-flex rounded-full border border-white/16 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] backdrop-blur-xl">
                      View image
                    </span>
                  </div>
                </motion.button>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section className="grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]">
              <div className={`rounded-[1.8rem] border p-6 md:p-8 ${activeTheme.panel}`}>
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <p className={`text-[11px] uppercase tracking-[0.28em] ${activeTheme.softer}`}>Project Gallery</p>
                    <h3 className="mt-3 text-2xl font-semibold md:text-3xl">Full Visual Story</h3>
                  </div>
                  <p className={`max-w-sm text-right text-sm leading-6 ${activeTheme.soft}`}>
                    A focused gallery view keeps the work clear, organized, and consistent with the rest of the website.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {galleryItems.map((media, index) => (
                    <motion.button
                      type="button"
                      key={`${project.slug}-gallery-${index}`}
                      onClick={() => {
                        setActiveSlide(index);
                        setIsPreviewOpen(true);
                      }}
                      className={`group relative overflow-hidden rounded-[1.5rem] border ${activeTheme.panel} ${index === 0 ? "md:col-span-2" : ""}`}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.18 }}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.6, ease: easing, delay: index * 0.06 }}
                    >
                      <div className={`relative h-full min-h-[240px] ${activeTheme.imagePanel}`}>
                        {media.type === "video" ? (
                          <motion.video
                            src={media.src}
                            poster={media.poster}
                            aria-label={media.alt ?? `${project.title} gallery ${index + 1}`}
                            className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                          />
                        ) : (
                          <motion.img
                            src={media.src}
                            alt={media.alt ?? `${project.title} gallery ${index + 1}`}
                            className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
                            loading="lazy"
                          />
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div className={`rounded-[1.8rem] border p-6 ${activeTheme.panel}`}>
                  <p className={`text-[11px] uppercase tracking-[0.28em] ${activeTheme.softer}`}>Short Overview</p>
                  <p className={`mt-4 text-base leading-7 ${activeTheme.soft}`}>{project.description}</p>
                </div>
                <div className={`rounded-[1.8rem] border p-6 ${activeTheme.panel}`}>
                  <p className={`text-[11px] uppercase tracking-[0.28em] ${activeTheme.softer}`}>Tools Used</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {project.tools.map((tool) => (
                      <span key={tool} className={`rounded-full border px-4 py-2 text-sm ${activeTheme.panel}`}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`rounded-[1.8rem] border p-6 ${activeTheme.panel}`}>
                  <p className={`text-[11px] uppercase tracking-[0.28em] ${activeTheme.softer}`}>Results Snapshot</p>
                  <div className="mt-4 grid gap-3">
                    {results.map((result) => (
                      <div key={result} className={`rounded-2xl border px-4 py-3 text-sm ${activeTheme.panel}`}>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.08}>
            <section className="grid gap-4 xl:grid-cols-3">
              <article className={`rounded-[1.8rem] border p-6 md:p-7 ${activeTheme.panel}`}>
                <p className={`text-[11px] uppercase tracking-[0.28em] ${activeTheme.softer}`}>Problem Statement</p>
                <h3 className="mt-4 text-2xl font-semibold">What needed solving</h3>
                <p className={`mt-4 text-base leading-7 ${activeTheme.soft}`}>{challenge}</p>
              </article>

              <article className={`rounded-[1.8rem] border p-6 md:p-7 ${activeTheme.panel}`}>
                <p className={`text-[11px] uppercase tracking-[0.28em] ${activeTheme.softer}`}>Design Process</p>
                <h3 className="mt-4 text-2xl font-semibold">How the direction evolved</h3>
                <ol className={`mt-5 grid gap-4 text-base leading-7 ${activeTheme.soft}`}>
                  {project.process.map((step, index) => (
                    <li key={step} className="flex gap-4">
                        <span className="mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[rgba(243,114,33,0.24)] bg-[rgba(243,114,33,0.12)] text-xs font-semibold text-[#f7a56f]">
                          {index + 1}
                        </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </article>

              <article className={`rounded-[1.8rem] border p-6 md:p-7 ${activeTheme.panel}`}>
                <p className={`text-[11px] uppercase tracking-[0.28em] ${activeTheme.softer}`}>Final Solution</p>
                <h3 className="mt-4 text-2xl font-semibold">The finished creative system</h3>
                <p className={`mt-4 text-base leading-7 ${activeTheme.soft}`}>{solution}</p>
              </article>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <article className={`rounded-[1.8rem] border p-6 md:p-8 ${activeTheme.panel}`}>
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <p className={`text-[11px] uppercase tracking-[0.28em] ${activeTheme.softer}`}>Color Palette</p>
                    <h3 className="mt-3 text-2xl font-semibold md:text-3xl">Theme colors and balance</h3>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {palette.map((color) => (
                    <div key={color.hex} className={`rounded-[1.4rem] border p-3 ${activeTheme.panel}`}>
                      <div className={`h-28 rounded-[1.1rem] ring-1 ${activeTheme.swatchRing}`} style={{ backgroundColor: color.hex }} />
                      <div className="mt-4">
                        <p className="font-semibold">{color.name}</p>
                        <p className={`mt-1 text-sm ${activeTheme.softer}`}>{color.hex}</p>
                        <p className={`mt-3 text-sm leading-6 ${activeTheme.soft}`}>{color.use}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className={`rounded-[1.8rem] border p-6 md:p-8 ${activeTheme.panel}`}>
                <p className={`text-[11px] uppercase tracking-[0.28em] ${activeTheme.softer}`}>Typography</p>
                <h3 className="mt-3 text-2xl font-semibold md:text-3xl">Clean and readable typography</h3>
                <div className="mt-6 grid gap-4">
                  {typography.map((typeSpec) => (
                    <div key={typeSpec.label} className={`rounded-[1.4rem] border border-white/10 p-5 ${activeTheme.card}`}>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className={`text-[11px] uppercase tracking-[0.24em] ${activeTheme.softer}`}>{typeSpec.label}</p>
                          <p className="mt-2 text-2xl font-semibold">{typeSpec.family}</p>
                        </div>
                        <span className={`rounded-full border px-3 py-1 text-xs ${activeTheme.panel}`}>Aa</span>
                      </div>
                      <p className={`mt-4 text-sm leading-6 ${activeTheme.soft}`}>{typeSpec.detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            </section>
          </Reveal>

          <Reveal delay={0.12}>
            <section className={`rounded-[1.8rem] border p-6 md:p-8 ${activeTheme.panel}`}>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className={`text-[11px] uppercase tracking-[0.28em] ${activeTheme.softer}`}>Mockup Showcase</p>
                  <h3 className="mt-3 text-2xl font-semibold md:text-3xl">Presentation in context</h3>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {mockups.map((item, index) => {
                  const media = getMediaItem(item);

                  return (
                  <motion.button
                    type="button"
                    key={`${project.slug}-mockup-${index}`}
                    className={`group relative overflow-hidden rounded-[1.5rem] border ${activeTheme.panel} ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                    onClick={() => {
                      const galleryIndex = project.gallery.indexOf(item);
                      setActiveSlide(galleryIndex >= 0 ? galleryIndex : 0);
                      setIsPreviewOpen(true);
                    }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.35, ease: easing }}
                  >
                    <div className={`h-full min-h-[240px] ${activeTheme.imagePanel}`}>
                      {media.type === "video" ? (
                        <video
                          src={media.src}
                          poster={media.poster}
                          aria-label={media.alt ?? `${project.title} mockup ${index + 1}`}
                          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        />
                      ) : (
                        <img
                          src={media.src}
                          alt={media.alt ?? `${project.title} mockup ${index + 1}`}
                          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      )}
                    </div>
                  </motion.button>
                  );
                })}
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.14}>
            <section className="grid gap-4 lg:grid-cols-2">
              <article className={`rounded-[1.8rem] border p-6 md:p-8 ${activeTheme.panel}`}>
                <p className={`text-[11px] uppercase tracking-[0.28em] ${activeTheme.softer}`}>Before vs After</p>
                <h3 className="mt-3 text-2xl font-semibold md:text-3xl">Measured creative shift</h3>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className={`rounded-[1.4rem] border border-white/10 p-5 ${activeTheme.card}`}>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-300">Before</p>
                    <p className={`mt-4 text-base leading-7 ${activeTheme.soft}`}>{beforeAfter.before}</p>
                  </div>
                  <div className={`rounded-[1.4rem] border border-white/10 p-5 ${activeTheme.card}`}>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">After</p>
                    <p className={`mt-4 text-base leading-7 ${activeTheme.soft}`}>{beforeAfter.after}</p>
                  </div>
                </div>
              </article>

              <article className={`rounded-[1.8rem] border p-6 md:p-8 ${activeTheme.panel}`}>
                <p className={`text-[11px] uppercase tracking-[0.28em] ${activeTheme.softer}`}>Client Review</p>
                <h3 className="mt-3 text-2xl font-semibold md:text-3xl">What the client felt</h3>
                <div className={`mt-6 rounded-[1.4rem] border border-white/10 p-5 ${activeTheme.card}`}>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-14 w-14 rounded-2xl object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className={`text-sm ${activeTheme.softer}`}>{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-1.5 text-amber-300">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <motion.span
                        key={`${testimonial.name}-star-${index}`}
                        className="text-xl"
                        initial={{ opacity: 0, scale: 0.7, y: 8 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.08 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>

                  <p className={`mt-5 text-lg leading-8 ${activeTheme.soft}`}>
                    "{testimonial.quote}"
                  </p>
                </div>
              </article>
            </section>
          </Reveal>
        </div>
      </motion.div>

      <AnimatePresence>
        {isPreviewOpen ? (
          <LightboxGallery
            activeMedia={activeMedia}
            activeIndex={activeSlide}
            totalImages={galleryItems.length}
            theme={activeTheme}
            onClose={() => setIsPreviewOpen(false)}
            onNext={goToNextSlide}
            onPrevious={goToPreviousSlide}
          />
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
