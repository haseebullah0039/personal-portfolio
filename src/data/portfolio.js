import graphicDesignImage from "@/assets/service-graphic-design-3d.webp";
import videoEditingImage from "@/assets/service-video-editing-3d.webp";
import photographyImage from "@/assets/service-photography-3d.webp";
import videographyImage from "@/assets/service-videography-3d.webp";
import alAnsarAbayaLogo from "@/assets/al-ansar-abaya-logo.webp";
import alAnsarAbayaShowcase01 from "@/assets/al-ansar-abaya-showcase-01.png";
import alAnsarAbayaShowcase02 from "@/assets/al-ansar-abaya-showcase-02.png";
import alAnsarAbayaShowcase03 from "@/assets/al-ansar-abaya-showcase-03.png";
import alAnsarAbayaShowcase04 from "@/assets/al-ansar-abaya-showcase-04.png";
import brandIdentityDesignPackages from "@/assets/brand-identity-design-packages.webp";
import aboutImage from "@/assets/about.webp";
import heroProfileImage from "@/assets/hero-profile.webp";
import profilePicture from "@/assets/profile-picture.webp";

function createCertificateImage({ title, issuer, accentA, accentB, code }) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${accentA}" />
          <stop offset="100%" stop-color="${accentB}" />
        </linearGradient>
        <linearGradient id="paper" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fff9f0" />
          <stop offset="100%" stop-color="#f0dfca" />
        </linearGradient>
        <radialGradient id="halo" cx="84%" cy="16%" r="60%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.88)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </radialGradient>
        <radialGradient id="corner" cx="10%" cy="12%" r="48%">
          <stop offset="0%" stop-color="rgba(243,114,33,0.24)" />
          <stop offset="100%" stop-color="rgba(243,114,33,0)" />
        </radialGradient>
      </defs>
      <rect width="1200" height="900" rx="44" fill="#140c18"/>
      <rect x="28" y="28" width="1144" height="844" rx="36" fill="url(#bg)" opacity="0.3"/>
      <rect x="58" y="58" width="1084" height="784" rx="30" fill="url(#paper)"/>
      <rect x="58" y="58" width="1084" height="784" rx="30" fill="url(#halo)" opacity="0.9"/>
      <rect x="58" y="58" width="1084" height="784" rx="30" fill="url(#corner)" opacity="1"/>
      <rect x="84" y="84" width="1032" height="732" rx="24" fill="none" stroke="rgba(78,44,55,0.18)" stroke-width="2"/>
      <path d="M126 148h182" stroke="${accentA}" stroke-width="8" stroke-linecap="round"/>
      <text x="126" y="126" fill="#9b4e26" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="800" letter-spacing="8">CERTIFIED CREATIVE</text>
      <text x="126" y="220" fill="#2d1d1f" font-family="Georgia, Times New Roman, serif" font-size="74" font-weight="700">${title}</text>
      <text x="126" y="282" fill="#715d59" font-family="Segoe UI, Arial, sans-serif" font-size="28">Awarded to recognize strong creative execution, presentation quality, and modern digital craft.</text>
      <text x="126" y="372" fill="#8d694f" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="6">ISSUED BY</text>
      <text x="126" y="414" fill="#2d1d1f" font-family="Segoe UI, Arial, sans-serif" font-size="42" font-weight="700">${issuer}</text>
      <rect x="126" y="498" width="398" height="164" rx="28" fill="#fff5e8" stroke="rgba(243,114,33,0.32)" stroke-width="2"/>
      <text x="158" y="552" fill="#8d694f" font-family="Segoe UI, Arial, sans-serif" font-size="20" font-weight="800" letter-spacing="4">CREDENTIAL ID</text>
      <text x="158" y="612" fill="#2d1d1f" font-family="Consolas, monospace" font-size="38" font-weight="700">${code}</text>
      <text x="158" y="644" fill="#9b4e26" font-family="Segoe UI, Arial, sans-serif" font-size="18">Verified portfolio training record</text>
      <circle cx="916" cy="336" r="122" fill="rgba(243,114,33,0.08)" stroke="rgba(243,114,33,0.24)" stroke-width="2"/>
      <circle cx="916" cy="336" r="92" fill="none" stroke="${accentA}" stroke-opacity="0.48" stroke-width="3"/>
      <circle cx="916" cy="336" r="70" fill="#fffaf2" stroke="rgba(45,29,31,0.08)" stroke-width="4"/>
      <path d="M875 336l28 28 58-66" fill="none" stroke="${accentA}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="852" y="470" fill="#8d694f" font-family="Segoe UI, Arial, sans-serif" font-size="18" font-weight="800" letter-spacing="4">CERTIFIED</text>
      <path d="M788 594c56-46 125-62 206-48" fill="none" stroke="rgba(45,29,31,0.14)" stroke-width="2"/>
      <text x="770" y="654" fill="#2d1d1f" font-family="'Brush Script MT', cursive" font-size="58">Haseeb Ullah</text>
      <text x="772" y="686" fill="#8d694f" font-family="Segoe UI, Arial, sans-serif" font-size="18" letter-spacing="4">CREATIVE PORTFOLIO DIRECTOR</text>
      <text x="126" y="754" fill="#715d59" font-family="Segoe UI, Arial, sans-serif" font-size="22">Date of recognition</text>
      <text x="126" y="788" fill="#2d1d1f" font-family="Segoe UI, Arial, sans-serif" font-size="34" font-weight="700">${code.split("-")[1]}</text>
      <text x="850" y="788" fill="#8d694f" font-family="Segoe UI, Arial, sans-serif" font-size="22">Creative Portfolio Certification</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createAvatar(name, accentA, accentB) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
      <defs>
        <linearGradient id="avatar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${accentA}" />
          <stop offset="100%" stop-color="${accentB}" />
        </linearGradient>
      </defs>
      <rect width="256" height="256" rx="80" fill="#201020"/>
      <circle cx="128" cy="128" r="96" fill="url(#avatar)" opacity="0.88"/>
      <circle cx="128" cy="112" r="42" fill="rgba(255,247,238,0.9)"/>
      <path d="M64 214c12-38 38-58 64-58s52 20 64 58" fill="rgba(255,247,238,0.9)"/>
      <text x="128" y="238" text-anchor="middle" fill="#fff7ee" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="700">${initials}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function buildProject({
  slug,
  title,
  category,
  typeLabel,
  year,
  accent,
  featured = false,
  image,
  gallery,
  description,
  summary,
  purpose,
  process,
  tools,
  client,
  deliverables,
  metrics,
  layout = "standard",
  ...rest
}) {
  return {
    slug,
    title,
    category,
    typeLabel: typeLabel ?? accent ?? category,
    year,
    accent,
    featured,
    image,
    gallery,
    description,
    summary,
    purpose,
    process,
    tools,
    client,
    deliverables,
    metrics,
    layout,
    ...rest
  };
}

export const services = [
  {
    title: "Graphic Design",
    image: graphicDesignImage,
    imageAlt: "Graphic design and branding visuals",
    description: "Strategic visuals that give your brand a sharper identity, stronger recognition, and a polished presence across every channel.",
    features: ["Logo Design", "Branding", "Social Media Design"],
    icon: "spark"
  },
  {
    title: "Video Editing",
    image: videoEditingImage,
    imageAlt: "Video editing timeline and preview visuals",
    description: "Clean, high-retention edits with purposeful pacing, refined sound, and platform-ready structure for ads, reels, and long-form content.",
    features: ["Reels & Shorts Editing", "Ads Creative", "YouTube Editing"],
    icon: "play"
  },
  {
    title: "Photography",
    image: photographyImage,
    imageAlt: "Photography camera and studio setup",
    description: "Premium product and lifestyle imagery with thoughtful lighting, clean composition, and visuals built for campaigns and online stores.",
    features: ["Product Photography", "Brand Shoot", "Lifestyle Shots"],
    icon: "lens"
  },
  {
    title: "Videography",
    image: videographyImage,
    imageAlt: "Videography camera and shooting setup",
    description: "Cinematic brand films, product videos, and promotional content shaped with smooth motion, clear messaging, and a premium finish.",
    features: ["Product Shoot", "Professional Videos", "Social Video Packages"],
    icon: "wave"
  }
];

export const projects = [
  buildProject({
    slug: "al-ansar-abaya-logo-design",
    title: "Al Ansar Abaya Store Logo Design",
    category: "Graphic Design",
    typeLabel: "Logo Design",
    year: "2026",
    accent: "Logo Design",
    featured: true,
    image: alAnsarAbayaLogo,
    gallery: [
      alAnsarAbayaLogo,
      alAnsarAbayaShowcase01,
      alAnsarAbayaShowcase02,
      alAnsarAbayaShowcase03,
      alAnsarAbayaShowcase04
    ],
    description: "A refined logo concept for Al Ansar Abaya Store, designed to express modest fashion, elegance, and a premium retail identity through a distinctive monogram mark.",
    summary: "Created as a signature brand mark for an abaya store that needed a graceful, memorable identity balancing luxury styling with clear cultural relevance.",
    purpose: "Develop a logo system that feels sophisticated and trustworthy for fashion packaging, storefront branding, social media, and digital promotions.",
    problemStatement: "Al Ansar Abaya Store needed a logo that could feel modest, premium, and culturally aligned while still being clear enough to scale across packaging, signage, and digital branding.",
    finalSolution: "The final identity combines an elegant AA monogram, a graceful abaya silhouette, and a gold-framed composition that gives the store a premium and memorable retail presence.",
    process: [
      "Explored logo directions built around the initials, abaya silhouette, and ornamental circular framing to create an instantly recognizable fashion mark.",
      "Combined deep green and gold tones to communicate elegance, trust, and a premium boutique feel that suits the target audience.",
      "Refined the composition so the logo remains clear across signage, packaging, profile images, and promotional layouts."
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Logo Design", "Brand Identity"],
    client: "Al Ansar Abaya Store",
    deliverables: ["Primary logo", "Monogram mark", "Retail-ready brand asset", "Social profile visual"],
    metrics: ["Luxury-inspired visual tone", "High logo clarity", "Built for multi-platform branding"],
    layout: "standard",
    colorPalette: [
      { name: "Abaya Green", hex: "#0f5130", use: "Primary identity tone" },
      { name: "Luxury Gold", hex: "#dca43a", use: "Premium highlight and framing" },
      { name: "Soft Ivory", hex: "#f6f1e8", use: "Clean brand presentation background" }
    ],
    typography: [
      { label: "Wordmark", family: "Classic Serif", detail: "Used to create elegance and retail sophistication." },
      { label: "Support", family: "Refined Sans", detail: "Supports clean captions, packaging notes, and brand collateral." }
    ],
    beforeAfter: {
      before: "The brand lacked a clear identity that could instantly communicate modest fashion with a premium retail feel.",
      after: "The finished mark gives the store a polished boutique presence that feels trustworthy, elegant, and easy to recognize."
    },
    mockups: [
      alAnsarAbayaShowcase01,
      alAnsarAbayaShowcase02,
      alAnsarAbayaShowcase03,
      alAnsarAbayaShowcase04,
      alAnsarAbayaLogo
    ],
    testimonial: {
      quote: "Haseeb translated our vision into a logo that feels elegant, premium, and perfectly suited to our abaya brand.",
      name: "Noor Fatima",
      company: "Al Ansar Abaya Store",
      rating: 5,
      avatar: createAvatar("Noor Fatima", "#dca43a", "#0f5130")
    }
  }),
  buildProject({
    slug: "brand-identity-design-packages",
    title: "Brand Identity Design Packages",
    category: "Graphic Design",
    typeLabel: "Brand Identity",
    year: "2026",
    accent: "Brand Identity",
    featured: true,
    image: brandIdentityDesignPackages,
    gallery: [brandIdentityDesignPackages],
    description: "A full pricing and package presentation for Digital Hujra that clearly explains starter, standard, and premium brand identity offers in one polished visual.",
    summary: "Designed as a conversion-focused brand services poster that helps clients instantly understand package options, value, and positioning.",
    purpose: "Present brand identity packages in a way that feels premium, trustworthy, and easy to scan for potential clients.",
    problemStatement: "Digital Hujra needed a single sales visual that could explain multiple service tiers clearly without feeling crowded or generic.",
    finalSolution: "The final poster organizes pricing, deliverables, and package differentiation into a neon-styled premium layout that is instantly scannable and highly promotional.",
    process: [
      "Structured the package tiers to create a clear visual hierarchy from headline to pricing, features, and call-to-action buttons.",
      "Used a neon-inspired dark theme to make the service categories feel modern, bold, and highly visible on social platforms.",
      "Balanced detail and readability so the full package sheet stays understandable without sacrificing visual appeal."
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Layout Design", "Brand Communication"],
    client: "Digital Hujra",
    deliverables: ["Package pricing poster", "Service tier layout", "Promotional design asset"],
    metrics: ["Full offer visibility", "Clear service comparison", "Client-friendly visual hierarchy"],
    layout: "wide",
    colorPalette: [
      { name: "Signal Blue", hex: "#149dff", use: "Headlines, icons, and visual guidance" },
      { name: "Neon Orange", hex: "#ff9c13", use: "CTA emphasis and premium tier highlight" },
      { name: "Midnight Navy", hex: "#07142a", use: "Main background and contrast base" }
    ],
    typography: [
      { label: "Display", family: "Bold Modern Sans", detail: "Large pricing and offer hierarchy built for fast scanning." },
      { label: "Support", family: "Readable UI Sans", detail: "Clean package details and comparison points." }
    ],
    beforeAfter: {
      before: "Package information felt difficult to compare quickly, which reduced clarity for first-time clients evaluating services.",
      after: "The new layout turns service tiers into an eye-catching, premium comparison sheet that explains the offer in seconds."
    },
    mockups: [brandIdentityDesignPackages],
    testimonial: {
      quote: "The package design made our services look far more premium and helped clients understand the value of each tier immediately.",
      name: "Tariq Ahmad",
      company: "Digital Hujra",
      rating: 5,
      avatar: createAvatar("Tariq Ahmad", "#149dff", "#ff9c13")
    }
  }),
  buildProject({
    slug: "product-photography-set",
    title: "Product Photography Set",
    category: "Photography",
    year: "2025",
    accent: "Photography",
    image: photographyImage,
    gallery: [photographyImage, aboutImage, profilePicture],
    description: "A polished commercial product set with careful lighting, clean staging, and close-up detail frames built for marketing use.",
    summary: "Created to help product listings and social promotions feel premium, trustworthy, and conversion-ready.",
    purpose: "Capture products with enough clarity and atmosphere to support online store listings, paid campaigns, and launch assets.",
    process: [
      "Planned shot lists for hero angles, texture close-ups, and contextual lifestyle framing.",
      "Used clean light control and post-production refinement to preserve material detail and color consistency.",
      "Delivered a flexible image set covering catalog use, social crops, and promotional banners."
    ],
    tools: ["Studio Lighting", "Adobe Lightroom", "Retouching", "Shot Planning"],
    client: "Consumer Product Brand",
    deliverables: ["Hero product shots", "Detail photography", "Lifestyle crops"],
    metrics: ["Multiple aspect ratios", "Commercial-ready retouching", "Consistent visual tone"],
    layout: "standard"
  }),
  buildProject({
    slug: "brand-promo-film",
    title: "Brand Promo Video",
    category: "Videography",
    year: "2025",
    accent: "Film",
    image: videographyImage,
    gallery: [videographyImage, heroProfileImage, aboutImage],
    description: "A cinematic promo piece combining product motion, atmospheric framing, and clean narrative structure for brand storytelling.",
    summary: "Developed as a hero video asset that could introduce the brand with clarity, texture, and a premium visual rhythm.",
    purpose: "Showcase the brand through movement, lighting, and detail-led shots that feel confident and high value.",
    process: [
      "Built a scene plan around product reveal moments, ambient detail shots, and brand-value messaging beats.",
      "Captured footage with smooth camera motion and lighting setups designed for a modern premium look.",
      "Finished the edit with color shaping and pacing refinements for web, social, and pitch-ready delivery."
    ],
    tools: ["Direction", "Camera Operation", "Color Finishing", "Storyboarding"],
    client: "Lifestyle and Product Brand",
    deliverables: ["Promo film", "Social cutdowns", "Thumbnail stills"],
    metrics: ["Story-driven structure", "Cross-channel exports", "Cinematic brand presentation"],
    layout: "tall"
  }),
  buildProject({
    slug: "campaign-visual-kit",
    title: "Campaign Visual Kit",
    category: "Graphic Design",
    year: "2025",
    accent: "Campaign",
    image: graphicDesignImage,
    gallery: [graphicDesignImage, alAnsarAbayaLogo, aboutImage, heroProfileImage],
    description: "A launch-ready campaign toolkit with promotional layouts, social variations, and repeatable creative templates.",
    summary: "Designed for brands that need fast campaign rollout without sacrificing visual consistency or polish.",
    purpose: "Create a flexible set of marketing assets that support repeated promotions while keeping the brand presentation cohesive.",
    process: [
      "Defined core campaign modules for offer-led posts, carousel storytelling, and supporting print-style assets.",
      "Balanced bold messaging with premium spacing so the visuals feel energetic without looking crowded.",
      "Prepared reusable structures for future campaigns to reduce production time."
    ],
    tools: ["Layout Design", "Campaign Systems", "Adobe Photoshop", "Art Direction"],
    client: "Promotion-Focused Brand Campaign",
    deliverables: ["Static ads", "Carousel layouts", "Flyer concept"],
    metrics: ["Repeatable design system", "Fast adaptation", "Consistent campaign voice"],
    layout: "wide"
  }),
  buildProject({
    slug: "creator-content-package",
    title: "Creator Content Package",
    category: "Video Editing",
    year: "2025",
    accent: "Creator",
    image: heroProfileImage,
    gallery: [heroProfileImage, videoEditingImage, profilePicture],
    description: "A short-form creator package focused on hooks, captions, pacing, and a recognizable editorial style across episodes.",
    summary: "Built for creators who need polished recurring content that still feels personal, fast, and platform-native.",
    purpose: "Shape a repeatable edit language that supports growth, retention, and stronger brand recognition.",
    process: [
      "Defined intro rhythm, caption behavior, and motion patterns that could repeat consistently across uploads.",
      "Refined clip selection and transitions for clearer momentum and stronger audience retention.",
      "Delivered reusable styling directions to keep future videos cohesive."
    ],
    tools: ["Premiere Pro", "Template Styling", "Caption Design", "Retention Editing"],
    client: "Personal Brand Creator",
    deliverables: ["Recurring reel edits", "Caption style system", "Short-form exports"],
    metrics: ["Repeatable format", "Platform-ready visuals", "Brand consistency"],
    layout: "standard"
  })
];

export const allProjects = [
  ...projects,
  buildProject({
    slug: "restaurant-menu-campaign",
    title: "Restaurant Menu Campaign",
    category: "Graphic Design",
    year: "2025",
    accent: "Menu",
    image: alAnsarAbayaLogo,
    gallery: [alAnsarAbayaLogo, graphicDesignImage, aboutImage],
    description: "A menu-centered campaign system designed to make pricing, featured dishes, and promotional offers easy to scan and visually appealing.",
    summary: "Focused on turning menu communication into a branded campaign experience instead of a plain information layout.",
    purpose: "Help restaurant promotions stand out with a cleaner visual hierarchy and stronger appetite appeal.",
    process: [
      "Structured menu information for fast readability on social and print-inspired layouts.",
      "Used high-contrast warm accents and spacing rhythm to keep the content inviting and legible.",
      "Extended the design language across supporting promotional pieces."
    ],
    tools: ["Menu Design", "Typography", "Offer Messaging"],
    client: "Restaurant Promotion Campaign",
    deliverables: ["Menu post", "Offer graphic", "Campaign support art"],
    metrics: ["Readable on mobile", "Offer-first structure", "Premium food presentation"],
    layout: "tall"
  }),
  buildProject({
    slug: "fashion-reel-series",
    title: "Fashion Reel Series",
    category: "Video Editing",
    year: "2025",
    accent: "Reels",
    image: videoEditingImage,
    gallery: [videoEditingImage, heroProfileImage, aboutImage],
    description: "A stylish reel sequence with beat-led cuts, polish, and movement tuned for fashion and lifestyle presentation.",
    summary: "Designed to make short-form fashion content feel sharper, more editorial, and easier to binge.",
    purpose: "Create a social-ready reel format that highlights styling, motion, and product detail with minimal friction.",
    process: [
      "Matched edit cadence to music and body movement for a more fashion-led rhythm.",
      "Applied punchy cut timing and clean title overlays to keep the content elevated.",
      "Packaged consistent exports for recurring campaign use."
    ],
    tools: ["Beat Editing", "Color Polish", "Social Formatting"],
    client: "Fashion Content Creator",
    deliverables: ["Reel series", "Vertical exports", "Motion styling"],
    metrics: ["Editorial feel", "Repeatable series format", "Fast social delivery"],
    layout: "standard"
  }),
  buildProject({
    slug: "lifestyle-brand-shoot",
    title: "Lifestyle Brand Shoot",
    category: "Photography",
    year: "2025",
    accent: "Lifestyle",
    image: aboutImage,
    gallery: [aboutImage, photographyImage, heroProfileImage],
    description: "Lifestyle-led photography built around brand mood, natural storytelling, and commercial cleanliness.",
    summary: "Created to bridge the gap between polished campaign visuals and authentic, usable everyday brand imagery.",
    purpose: "Capture a brand personality that feels warm, modern, and versatile across marketing channels.",
    process: [
      "Planned framing around real use moments and supporting textures rather than isolated product-only shots.",
      "Balanced natural atmosphere with commercial discipline in composition and color cleanup.",
      "Delivered a broad mix of hero, portrait, and supporting images for campaign flexibility."
    ],
    tools: ["Art Direction", "Lifestyle Photography", "Color Correction"],
    client: "Lifestyle Brand",
    deliverables: ["Brand photos", "Web crops", "Campaign stills"],
    metrics: ["Multi-use imagery", "Natural premium mood", "Consistent color treatment"],
    layout: "wide"
  }),
  buildProject({
    slug: "product-launch-film",
    title: "Product Launch Film",
    category: "Videography",
    year: "2025",
    accent: "Launch",
    image: heroProfileImage,
    gallery: [heroProfileImage, videographyImage, profilePicture],
    description: "A launch film focused on premium reveal pacing, feature storytelling, and cinematic detail shots.",
    summary: "Built to support a launch moment with visuals that feel premium enough for teasers, web banners, and ads.",
    purpose: "Generate anticipation and trust by presenting product features through motion-led storytelling.",
    process: [
      "Mapped the product story from teaser to reveal to ensure the strongest visuals landed at the right moments.",
      "Used movement, angle changes, and lighting accents to increase perceived quality.",
      "Prepared short and long deliverables so the same production could power multiple launch touchpoints."
    ],
    tools: ["Shot Design", "Cinematic Capture", "Editing", "Color Finish"],
    client: "Product Launch Campaign",
    deliverables: ["Hero launch film", "Short teasers", "Campaign stills"],
    metrics: ["Launch-ready master", "Social teaser set", "Premium reveal structure"],
    layout: "tall"
  }),
  buildProject({
    slug: "business-social-kit",
    title: "Business Social Kit",
    category: "Graphic Design",
    year: "2025",
    accent: "Social",
    image: graphicDesignImage,
    gallery: [graphicDesignImage, aboutImage, alAnsarAbayaLogo],
    description: "A repeatable social design toolkit that helps brands publish faster while preserving a premium identity.",
    summary: "Ideal for businesses that need a dependable content system for announcements, promos, and everyday brand communication.",
    purpose: "Reduce inconsistency across posts while keeping social design expressive, clean, and adaptable.",
    process: [
      "Built modular layouts for testimonials, launches, offers, and simple educational posts.",
      "Defined spacing, accent, and typography rules that keep day-to-day content on-brand.",
      "Prepared assets for quick content refreshes without full redesign work."
    ],
    tools: ["Template Systems", "Branding", "Social Content Design"],
    client: "Service and Local Businesses",
    deliverables: ["Template kit", "Post variations", "Campaign layouts"],
    metrics: ["Faster content production", "Visual consistency", "Scalable brand system"],
    layout: "wide"
  }),
  buildProject({
    slug: "youtube-editing-package",
    title: "YouTube Editing Package",
    category: "Video Editing",
    year: "2025",
    accent: "YouTube",
    image: profilePicture,
    gallery: [profilePicture, videoEditingImage, heroProfileImage],
    description: "A long-form edit package with pacing cleanup, structured storytelling, captions, and audio polish for stronger watchability.",
    summary: "Designed for creators and businesses who want professional, repeatable long-form content without losing personality.",
    purpose: "Make longer videos feel smoother and more engaging from intro to close while maintaining brand voice.",
    process: [
      "Trimmed pacing dead space and reorganized narrative beats to increase clarity.",
      "Added supporting titles, jump-cut rhythm, and cleanup for a more watchable final edit.",
      "Delivered a repeatable workflow that can scale across an ongoing content calendar."
    ],
    tools: ["Long-form Editing", "Audio Cleanup", "Story Structure"],
    client: "YouTube Creator and Brand Channels",
    deliverables: ["Episode edits", "Thumbnail stills", "Highlight snippets"],
    metrics: ["Cleaner pacing", "Improved clarity", "Scalable production workflow"],
    layout: "standard"
  })
];

export const certificates = [
  {
    title: "Graphic Design Mastery",
    issuer: "Adobe Creative Training",
    date: "March 2025",
    image: createCertificateImage({
      title: "Graphic Design Mastery",
      issuer: "Adobe Creative Training",
      accentA: "#f37221",
      accentB: "#6f2d46",
      code: "GD-2025-014"
    })
  },
  {
    title: "Advanced Video Editing",
    issuer: "Motion Academy",
    date: "January 2025",
    image: createCertificateImage({
      title: "Advanced Video Editing",
      issuer: "Motion Academy",
      accentA: "#f37221",
      accentB: "#3b1f3b",
      code: "VE-2025-027"
    })
  },
  {
    title: "Commercial Product Photography",
    issuer: "Creative Visual Institute",
    date: "November 2024",
    image: createCertificateImage({
      title: "Commercial Product Photography",
      issuer: "Creative Visual Institute",
      accentA: "#d35b1c",
      accentB: "#2b415d",
      code: "PH-2024-093"
    })
  },
  {
    title: "Brand Story Videography",
    issuer: "Cinematic Skills Lab",
    date: "September 2024",
    image: createCertificateImage({
      title: "Brand Story Videography",
      issuer: "Cinematic Skills Lab",
      accentA: "#f37221",
      accentB: "#51284d",
      code: "VG-2024-051"
    })
  }
];

export const portfolioStats = [
  { label: "Projects Completed", value: 200, suffix: "+", icon: "briefcase" },
  { label: "Happy Clients", value: 150, suffix: "+", icon: "users" },
  { label: "Years Experience", value: 5, suffix: "+", icon: "clock" },
  { label: "Ratings & Awards", value: 49, suffix: "+", icon: "star" }
];

export const skillBars = [
  ["Graphic Design", "95%"],
  ["Video Editing", "90%"],
  ["Photography", "98%"],
  ["Videography", "95%"]
];

export const reviewMetrics = [
  { label: "Creative Direction", value: 96 },
  { label: "Communication", value: 94 },
  { label: "On-Time Delivery", value: 98 },
  { label: "Client Satisfaction", value: 97 }
];

export const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Founder, Bloom & Co",
    text: "The branding work felt polished from the first concept. Every visual looked premium, and the final kit made our launch feel genuinely professional.",
    avatar: createAvatar("Ayesha Khan", "#f37221", "#6f2d46")
  },
  {
    name: "Usman Tariq",
    role: "Marketing Lead, Novara",
    text: "Fast turnaround, sharp design thinking, and a calm process. Haseeb translated our campaign ideas into visuals that looked far more expensive than expected.",
    avatar: createAvatar("Usman Tariq", "#f37221", "#3b1f3b")
  },
  {
    name: "Sana Malik",
    role: "Content Creator",
    text: "The edit pacing was excellent. Hooks, captions, and sound all felt deliberate, and the content performed better because it finally looked cohesive.",
    avatar: createAvatar("Sana Malik", "#ef7f2d", "#47214a")
  },
  {
    name: "Bilal Rauf",
    role: "E-commerce Owner",
    text: "The product images immediately elevated our listings. Clean detail shots, premium lighting, and consistent color made the whole catalog look stronger.",
    avatar: createAvatar("Bilal Rauf", "#f37221", "#2b415d")
  },
  {
    name: "Hina Arshad",
    role: "Brand Strategist",
    text: "One of the best creative collaborators I have worked with. Thoughtful, responsive, and very good at keeping the output aligned with strategy.",
    avatar: createAvatar("Hina Arshad", "#f37221", "#5e2940")
  },
  {
    name: "Adeel Abbas",
    role: "Restaurant Owner",
    text: "Our campaign posts finally looked organized and appetizing. The system was easy to reuse and made our promotions feel more consistent week after week.",
    avatar: createAvatar("Adeel Abbas", "#f37221", "#4a2738")
  },
  {
    name: "Maham Ali",
    role: "Social Media Manager",
    text: "Strong communication and even stronger design instincts. Files were delivered cleanly, and the visuals fit our audience perfectly.",
    avatar: createAvatar("Maham Ali", "#f37221", "#304760")
  },
  {
    name: "Talha Saeed",
    role: "Founder, T-Supply",
    text: "The promo video felt cinematic without losing the product message. It gave us a hero asset we could use across multiple campaign touchpoints.",
    avatar: createAvatar("Talha Saeed", "#f37221", "#51284d")
  },
  {
    name: "Iqra Noor",
    role: "Beauty Creator",
    text: "My content now feels like a real brand. The editing style is smooth, premium, and consistent enough that followers instantly recognize it.",
    avatar: createAvatar("Iqra Noor", "#f37221", "#6a2f52")
  },
  {
    name: "Hamza Fareed",
    role: "Startup Co-Founder",
    text: "Designs were not just attractive. They were useful, clear, and built with the audience in mind. That balance is difficult to find.",
    avatar: createAvatar("Hamza Fareed", "#f37221", "#3b1f3b")
  },
  {
    name: "Nimra Shah",
    role: "Campaign Manager",
    text: "Reliable, tasteful, and detail-oriented. Even under a tight deadline the final presentation looked refined and agency-level.",
    avatar: createAvatar("Nimra Shah", "#f37221", "#5c3440")
  },
  {
    name: "Farhan Ahmed",
    role: "Amazon Seller",
    text: "The photography and listing visuals made our product feel much more trustworthy. We noticed stronger confidence in the presentation immediately.",
    avatar: createAvatar("Farhan Ahmed", "#f37221", "#2f465a")
  },
  {
    name: "Sara Javed",
    role: "Creative Producer",
    text: "Smooth delivery, sharp eye for composition, and a premium finish across both static and motion work. Easy to recommend.",
    avatar: createAvatar("Sara Javed", "#f37221", "#6f2d46")
  },
  {
    name: "Danish Irfan",
    role: "Agency Partner",
    text: "The turnaround was efficient and the files were production-ready. Strong visual judgment and no unnecessary revision cycles.",
    avatar: createAvatar("Danish Irfan", "#f37221", "#40456b")
  },
  {
    name: "Komal Yousaf",
    role: "Founder, K Atelier",
    text: "A very tasteful sense of layout and motion. The final campaign assets felt premium, modern, and aligned with our audience from day one.",
    avatar: createAvatar("Komal Yousaf", "#f37221", "#593047")
  },
  {
    name: "Zeeshan Riaz",
    role: "Product Marketer",
    text: "The creative process was smooth and well organized. We had clarity on direction early, and the final assets were strong across every format.",
    avatar: createAvatar("Zeeshan Riaz", "#f37221", "#33445f")
  }
];

export const trustCards = [
  { name: "Fiverr", note: "Top Rated", accent: "Marketplace Success" },
  { name: "Upwork", note: "Rising Creative", accent: "Trusted Delivery" },
  { name: "Behance", note: "Case Study Ready", accent: "Visual Showcase" },
  { name: "Dribbble", note: "Creative Presence", accent: "Design Community" }
];
