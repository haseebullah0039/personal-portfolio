import graphicDesignImage from "@/assets/service-graphic-design-3d.png";
import videoEditingImage from "@/assets/service-video-editing-3d.png";
import photographyImage from "@/assets/service-photography-3d.png";
import videographyImage from "@/assets/service-videography-3d.png";
import aboutImage from "@/assets/about.png";
import heroProfileImage from "@/assets/hero-profile.png";
import profilePicture from "@/assets/profile-picture.png";

const restaurantCarousel1 = new URL(
  "../../Graphic Design/Branding Kit/Resturent Branding Kit/Carousels/1.png",
  import.meta.url
).href;
const restaurantCarousel2 = new URL(
  "../../Graphic Design/Branding Kit/Resturent Branding Kit/Carousels/2.png",
  import.meta.url
).href;
const restaurantCarousel3 = new URL(
  "../../Graphic Design/Branding Kit/Resturent Branding Kit/Carousels/3.png",
  import.meta.url
).href;
const restaurantCarousel4 = new URL(
  "../../Graphic Design/Branding Kit/Resturent Branding Kit/Carousels/4.png",
  import.meta.url
).href;
const restaurantCarousel5 = new URL(
  "../../Graphic Design/Branding Kit/Resturent Branding Kit/Carousels/5.png",
  import.meta.url
).href;
const restaurantPost1 = new URL(
  "../../Graphic Design/Branding Kit/Resturent Branding Kit/Posts/Red And White Modern Pizza Promotion Instagram Post (1).png",
  import.meta.url
).href;
const restaurantPost2 = new URL(
  "../../Graphic Design/Branding Kit/Resturent Branding Kit/Posts/Red Modern Minimal Pizza Delivery Facebook Post.png",
  import.meta.url
).href;
const restaurantPost3 = new URL(
  "../../Graphic Design/Branding Kit/Resturent Branding Kit/Posts/Red Pizza Package Instagram Post.png",
  import.meta.url
).href;
const restaurantPost4 = new URL(
  "../../Graphic Design/Branding Kit/Resturent Branding Kit/Posts/Red Yellow Simple Pizza Instagram Post (1).png",
  import.meta.url
).href;
const restaurantMenu = new URL(
  "../../Graphic Design/Branding Kit/Resturent Branding Kit/Menu/Red and Yellow Modern Seafood Menu Instagram Post (1).png",
  import.meta.url
).href;
const restaurantFlayer = new URL(
  "../../Graphic Design/Branding Kit/Resturent Branding Kit/Flayer/Red and Yellow Modern Seafood Menu Instagram Post (2).png",
  import.meta.url
).href;

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
  layout = "standard"
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
    layout
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
    slug: "restaurant-branding-system",
    title: "Restaurant Branding System",
    category: "Graphic Design",
    year: "2025",
    accent: "Branding",
    featured: true,
    image: restaurantPost1,
    gallery: [restaurantPost1, restaurantCarousel1, restaurantCarousel2, restaurantMenu],
    description: "A bold restaurant identity pack that unified menu design, promotional posts, and story-led campaign assets into one premium visual system.",
    summary: "Built for a fast-growing food brand that needed a consistent and appetizing presence across social media and in-store touchpoints.",
    purpose: "Create a high-recognition visual identity that makes offers, menu items, and seasonal promotions instantly memorable.",
    process: [
      "Researched competing food brands and mapped which visual cues drove appetite appeal and quick offer comprehension.",
      "Designed a warm orange-red palette, confident typography, and a modular social layout that could flex across posts, menus, and story assets.",
      "Prepared a reusable system so future campaign visuals can stay on-brand without slowing content production."
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Brand Strategy", "Social Media Design"],
    client: "Seafood and Pizza Restaurant Brand",
    deliverables: ["Instagram posts", "Carousel slides", "Story assets", "Menu creatives"],
    metrics: ["Unified 10+ branded assets", "Improved campaign consistency", "Built for repeatable launches"],
    layout: "tall"
  }),
  buildProject({
    slug: "social-ad-edit",
    title: "Social Media Ad Edit",
    category: "Video Editing",
    year: "2025",
    accent: "Editing",
    featured: true,
    image: videoEditingImage,
    gallery: [videoEditingImage, heroProfileImage, profilePicture],
    description: "Fast, retention-first ad edits crafted for mobile viewers with bold pacing, kinetic captions, and clean sound polish.",
    summary: "Short-form social campaign edit designed to hook quickly and move viewers toward a direct response action.",
    purpose: "Transform raw campaign clips into an ad sequence that feels premium while preserving clarity in the offer and brand voice.",
    process: [
      "Selected the strongest opening frames and structured the edit around quick-impact visual hooks.",
      "Added type hierarchy, sound design accents, and pacing adjustments to maintain attention through the full runtime.",
      "Exported platform-ready variations for reels, stories, and feed placements."
    ],
    tools: ["Adobe Premiere Pro", "After Effects", "Sound Cleanup", "Motion Typography"],
    client: "Direct Response Content Campaign",
    deliverables: ["Ad master edit", "Vertical cutdowns", "Captioned exports"],
    metrics: ["Optimized for 9:16", "Retention-focused pacing", "Multi-platform delivery"],
    layout: "wide"
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
    image: restaurantCarousel3,
    gallery: [restaurantCarousel3, restaurantCarousel4, restaurantCarousel5, restaurantFlayer],
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
    image: restaurantMenu,
    gallery: [restaurantMenu, restaurantFlayer, restaurantPost2],
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
    image: restaurantPost3,
    gallery: [restaurantPost3, restaurantPost4, restaurantPost2],
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
