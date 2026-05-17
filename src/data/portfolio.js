import graphicDesignImage from "@/assets/service-graphic-design-3d.webp";
import videoEditingImage from "@/assets/service-video-editing-3d.webp";
import photographyImage from "@/assets/service-photography-3d.webp";
import videographyImage from "@/assets/service-videography-3d.webp";
import alAnsarAbayaLogo from "@/assets/al-ansar-abaya-logo.webp";
import alAnsarAbayaShowcase01 from "@/assets/al-ansar-abaya-showcase-01.webp";
import alAnsarAbayaShowcase02 from "@/assets/al-ansar-abaya-showcase-02.webp";
import alAnsarAbayaShowcase03 from "@/assets/al-ansar-abaya-showcase-03.webp";
import alAnsarAbayaShowcase04 from "@/assets/al-ansar-abaya-showcase-04.webp";
import amazonEbcGig01 from "@/assets/amazon-ebc-gig-01.webp";
import amazonEbc01 from "@/assets/amazon-ebc-01.webp";
import amazonEbc02 from "@/assets/amazon-ebc-02.webp";
import amazonEbc03 from "@/assets/amazon-ebc-03.webp";
import amazonEbc04 from "@/assets/amazon-ebc-04.webp";
import amazonEbc05 from "@/assets/amazon-ebc-05.webp";
import brandIdentityDesignPackages from "@/assets/brand-identity-design-packages.webp";
import digitalHujraBrochure01 from "@/assets/digital-hujra-brochure-01.webp";
import digitalPrintBrandDesignPackages from "@/assets/digital-print-brand-design-packages.png";
import ecommerceWebsitePackages from "@/assets/e-commerce-website-packages.png";
import aboutImage from "@/assets/about.webp";
import heroProfileImage from "@/assets/hero-profile.webp";
import hujraRestaurantMenuBreads from "@/assets/hujra-restaurant-menu-breads.png";
import hujraRestaurantMenuDrinks from "@/assets/hujra-restaurant-menu-drinks.png";
import hujraRestaurantMenuMain from "@/assets/hujra-restaurant-menu-main.png";
import hujraRestaurantMenuPeshawariTikka from "@/assets/hujra-restaurant-menu-peshawari-tikka.png";
import hujraRestaurantMenuRiceBiryani from "@/assets/hujra-restaurant-menu-rice-biryani.png";
import profilePicture from "@/assets/profile-picture.webp";
import krspozzFastFood01 from "@/assets/krspozz-fast-food-01.webp";
import krspozzFastFood02 from "@/assets/krspozz-fast-food-02.webp";
import krspozzFastFood03 from "@/assets/krspozz-fast-food-03.webp";
import krspozzFastFood04 from "@/assets/krspozz-fast-food-04.webp";
import krspozzFastFood05 from "@/assets/krspozz-fast-food-05.webp";
import pasbanConstruction01 from "@/assets/pasban-construction-01.webp";
import pasbanConstruction02 from "@/assets/pasban-construction-02.webp";
import pasbanConstruction03 from "@/assets/pasban-construction-03.webp";
import pasbanConstruction04 from "@/assets/pasban-construction-04.webp";
import pasbanConstruction05 from "@/assets/pasban-construction-05.webp";
import pasbanConstruction06 from "@/assets/pasban-construction-06.webp";
import pasbanConstruction07 from "@/assets/pasban-construction-07.webp";
import pasbanConstruction08 from "@/assets/pasban-construction-08.webp";
import pasbanConstruction09 from "@/assets/pasban-construction-09.webp";
import raazinaAvantus01 from "@/assets/raazina-avantus-01.webp";
import raazinaAvantus03 from "@/assets/raazina-avantus-03.webp";
import raazinaBluDeRaazina03 from "@/assets/raazina-blu-de-raazina-03.webp";
import raazinaBluDeRaazina05 from "@/assets/raazina-blu-de-raazina-05.webp";
import raazinaNomade02 from "@/assets/raazina-nomade-02.webp";
import raazinaNomade03 from "@/assets/raazina-nomade-03.webp";
import posSystemPackages from "@/assets/pos-system-packages.png";
import productPhotographyPackages from "@/assets/product-photography-packages.png";
import socialMediaManagementPackages from "@/assets/social-media-management-packages.png";
import cinematicShortsRaazinaVideo from "@/assets/cinematic-shorts-raazina.webm";
import certificateVideography from "@/assets/certificate-videography.webp";
import certificatePhotography from "@/assets/certificate-photography.webp";
import certificateGraphicDesign from "@/assets/certificate-graphic-design.webp";
import certificateVideoEditing from "@/assets/certificate-video-editing.webp";
import certificateInformationTechnology from "@/assets/certificate-information-technology.webp";

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
    client: "Ansar",
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
    slug: "krspozz-fast-food-social-campaign",
    title: "Krspozz Fast Food Social Campaign",
    category: "Graphic Design",
    typeLabel: "Social Media Campaign",
    year: "2025",
    accent: "Fast Food Campaign",
    featured: true,
    image: krspozzFastFood01,
    gallery: [
      krspozzFastFood01,
      krspozzFastFood02,
      krspozzFastFood03,
      krspozzFastFood04,
      krspozzFastFood05
    ],
    description: "A high-impact fast food social media campaign for Krspozz built around craveable product focus, bold offer headlines, and an energetic red-black brand look.",
    summary: "Designed as a promotional content series that helps Krspozz feel louder, fresher, and more memorable across food marketing posts.",
    purpose: "Create a strong set of social visuals that spotlight fries, burgers, combo meals, and delivery while keeping the brand identity consistent and instantly recognizable.",
    problemStatement: "Krspozz needed a coordinated post series that could promote multiple menu items without each design feeling disconnected or repetitive.",
    finalSolution: "The final campaign uses one clear visual system with fiery contrast, oversized type, premium food cutouts, and repeated brand cues so every post feels part of the same fast food promotion family.",
    process: [
      "Built each layout around a single hero product so the message stays immediate and visually appetizing while scrolling.",
      "Used bold headline hierarchy, red-orange highlights, and deep black contrast to match the fast food category and increase attention.",
      "Kept logo placement, promotional rhythm, and call-to-action styling consistent across all five creatives so the campaign feels unified."
    ],
    tools: ["Adobe Photoshop", "Social Media Design", "Food Advertising", "Campaign Art Direction"],
    client: "Amjad Ali",
    deliverables: ["5 campaign post designs", "Menu promotion visuals", "Offer-led social creatives"],
    metrics: ["Strong food visibility", "Consistent campaign identity", "Scroll-stopping promotional layout"],
    layout: "wide",
    colorPalette: [
      { name: "Flame Red", hex: "#f32612", use: "Main campaign energy, CTA strips, and brand heat" },
      { name: "Golden Crisp", hex: "#ffbf1f", use: "Food emphasis, highlights, and offer accents" },
      { name: "Charcoal Black", hex: "#090909", use: "Background depth and high contrast framing" }
    ],
    typography: [
      { label: "Display", family: "Bold Condensed Sans", detail: "Used for oversized campaign headlines that feel urgent and highly readable." },
      { label: "Support", family: "Heavy Promo Sans", detail: "Supports taglines, offers, and CTA elements with a fast-food advertising tone." }
    ],
    beforeAfter: {
      before: "The brand needed multiple promo posts for different menu messages, but without a unified system the campaign risked feeling visually inconsistent.",
      after: "The finished set gives Krspozz a sharp, repeatable campaign style where every post feels branded, appetizing, and built to sell quickly."
    },
    mockups: [
      krspozzFastFood02,
      krspozzFastFood03,
      krspozzFastFood04,
      krspozzFastFood05
    ],
    testimonial: {
      quote: "The campaign visuals made our food offers look more professional, more tempting, and much more ready for promotion on social media.",
      name: "Krspozz Team",
      company: "Krspozz Fast Food",
      rating: 5,
      avatar: createAvatar("Krspozz Team", "#f32612", "#ffbf1f")
    }
  }),
  buildProject({
    slug: "pasban-construction-branding-kit",
    title: "Pasban Construction Branding Kit",
    category: "Graphic Design",
    typeLabel: "Branding Kit",
    year: "2025",
    accent: "Construction Branding",
    image: pasbanConstruction01,
    gallery: [
      pasbanConstruction01,
      pasbanConstruction02,
      pasbanConstruction03,
      pasbanConstruction04,
      pasbanConstruction05,
      pasbanConstruction06,
      pasbanConstruction07,
      pasbanConstruction08,
      pasbanConstruction09
    ],
    description: "A complete branding kit for Pasban Construction Peshawar, combining logo usage, promotional posts, stationery, and corporate collateral into one consistent identity system.",
    summary: "Built to give Pasban Construction a polished, trustworthy visual language that feels premium, dependable, and ready for client-facing construction marketing.",
    purpose: "Create a unified brand system that works across social media, company presentation pieces, stationery, and day-to-day business communication.",
    problemStatement: "Pasban Construction needed more than a logo. The brand required a complete visual kit that could communicate trust, professionalism, and construction expertise across multiple touchpoints.",
    finalSolution: "The final kit uses a strong navy-and-gold identity, structured layouts, architectural imagery, and a shield-based symbol system to present Pasban as a modern and reliable construction brand.",
    process: [
      "Developed the brand around a shield-and-structure logo concept to visually express protection, reliability, and built-environment expertise.",
      "Extended the identity into promotional graphics, service posts, invoice design, letterhead, business cards, and company profile materials for full brand consistency.",
      "Used a clean editorial layout with construction photography, gold highlights, and structured spacing so the brand feels both premium and practical."
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Brand Identity", "Corporate Design"],
    client: "Pasban Construction Peshawar",
    deliverables: [
      "Primary logo system",
      "Social media post set",
      "Company profile cover",
      "Invoice layout",
      "Letterhead design",
      "Business card design"
    ],
    metrics: ["Multi-format brand consistency", "Professional construction positioning", "Stronger client-facing presentation"],
    layout: "wide",
    colorPalette: [
      { name: "Navy Blue", hex: "#0A1D3D", use: "Primary brand base and trust signal" },
      { name: "Gold", hex: "#D4AF37", use: "Premium accent, dividers, and emphasis details" },
      { name: "Charcoal", hex: "#111111", use: "Text support, contrast, and secondary grounding" },
      { name: "White", hex: "#FFFFFF", use: "Clean background and presentation balance" }
    ],
    typography: [
      { label: "Heading", family: "Cinzel Bold", detail: "Used for a formal, established construction identity with premium presence." },
      { label: "Body", family: "Montserrat", detail: "Supports readable business information, layouts, and supporting copy across the kit." }
    ],
    beforeAfter: {
      before: "The business needed a broader identity system that could look credible across company documents, social promotions, and client presentation materials.",
      after: "The completed branding kit gives Pasban Construction a cohesive visual language that looks dependable, premium, and ready for professional use."
    },
    mockups: [
      pasbanConstruction02,
      pasbanConstruction03,
      pasbanConstruction04,
      pasbanConstruction05,
      pasbanConstruction06,
      pasbanConstruction07,
      pasbanConstruction08,
      pasbanConstruction09
    ],
    testimonial: {
      quote: "The branding kit gave our construction business a far more professional image and made every client-facing design feel consistent and trustworthy.",
      name: "Ihsan Ullah",
      company: "Pasban Construction Peshawar",
      rating: 5,
      avatar: createAvatar("Ihsan Ullah", "#0A1D3D", "#D4AF37")
    }
  }),
  buildProject({
    slug: "raazina-essence-perfume-photoshoot",
    title: "Raazina Essence Perfume Product Photoshoot",
    category: "Photography",
    typeLabel: "Product Photography",
    year: "2026",
    accent: "Perfume Shoot",
    featured: true,
    image: raazinaBluDeRaazina03,
    gallery: [
      raazinaBluDeRaazina03,
      raazinaBluDeRaazina05,
      raazinaAvantus01,
      raazinaAvantus03,
      raazinaNomade02,
      raazinaNomade03
    ],
    description: "A premium perfume product photoshoot for Raazina Essence, crafted to present Blu de Raazina, Raazina Aventus, and Raazina Nomade with luxurious lighting, elegant props, and high-end commercial styling.",
    summary: "This shoot was designed to give Raazina Essence a polished visual campaign where each fragrance feels premium, gift-worthy, and ready for social media, e-commerce, and promotional use.",
    purpose: "Create a cohesive product photography series that highlights the bottle, packaging, and brand identity while giving each fragrance variant its own mood and visual story.",
    problemStatement: "Raazina Essence needed more than plain product pictures. The brand required luxury-focused visuals that could make the perfumes feel refined, memorable, and visually competitive across online promotions and customer-facing content.",
    finalSolution: "The final photoshoot combines warm cinematic lighting, glossy black packaging, carefully styled surfaces, and nature-inspired scenes to give the fragrance line a sophisticated, high-value presentation across multiple campaign-ready compositions.",
    process: [
      "Planned separate visual moods for Blu de Raazina, Avantus, and Nomade so each scent could feel distinct while still staying inside one consistent Raazina Essence brand language.",
      "Built every frame around premium product visibility by balancing bottle placement, packaging scale, reflections, and supporting props like marble plinths, roses, stone textures, and golden fabric.",
      "Refined the final images with commercial retouching and tonal control so the black bottles stayed crisp, the gold highlights felt rich, and the full set looked unified across portfolio and marketing use."
    ],
    tools: ["Adobe Photoshop", "Product Photography", "Lighting Direction", "Photo Retouching"],
    client: "Raazina Essence",
    deliverables: [
      "Hero product images",
      "Variant-specific styled compositions",
      "Packaging and bottle showcase visuals",
      "Campaign-ready product mockups"
    ],
    metrics: ["Luxury visual positioning", "Consistent multi-variant presentation", "High-end social and e-commerce readiness"],
    layout: "tall",
    colorPalette: [
      { name: "Perfume Black", hex: "#0D0C0C", use: "Bottle finish, packaging depth, and premium contrast" },
      { name: "Luxe Gold", hex: "#D6A23C", use: "Warm glow, reflective styling, and upscale atmosphere" },
      { name: "Soft Ivory", hex: "#F5E9D2", use: "Label balance, floral props, and clean highlight support" }
    ],
    typography: [
      { label: "Brand Display", family: "Elegant Serif", detail: "Used to reinforce the premium fragrance identity and ceremonial product feel." },
      { label: "Support", family: "Clean Modern Sans", detail: "Keeps packaging details and promotional copy easy to read beside rich visual styling." }
    ],
    beforeAfter: {
      before: "The fragrance line needed more elevated visuals to make the packaging and perfume bottles feel premium enough for modern social media promotion and product presentation.",
      after: "The finished shoot gives Raazina Essence a luxury-forward image library that feels cinematic, cohesive, and strong enough for portfolio, campaign, and product marketing use."
    },
    mockups: [
      raazinaBluDeRaazina05,
      raazinaAvantus03,
      raazinaNomade03,
      raazinaAvantus01,
      raazinaNomade02
    ],
    testimonial: {
      quote: "The final photos made our perfumes look premium, elegant, and much more ready for marketing. Every variant feels beautifully presented and true to the Raazina Essence brand.",
      name: "Raazina Essence Team",
      company: "Raazina Essence",
      rating: 5,
      avatar: createAvatar("Raazina Essence", "#D6A23C", "#0D0C0C")
    }
  }),
  buildProject({
    slug: "cinematic-shorts-video-editing",
    title: "Cinematic Shorts Video Edit",
    category: "Video Editing",
    typeLabel: "Cinematic Shorts",
    year: "2026",
    accent: "Short-Form Film",
    featured: true,
    image: {
      type: "video",
      src: cinematicShortsRaazinaVideo,
      poster: raazinaBluDeRaazina05,
      alt: "Cinematic shorts video preview"
    },
    gallery: [
      {
        type: "video",
        src: cinematicShortsRaazinaVideo,
        poster: raazinaBluDeRaazina05,
        alt: "Cinematic shorts video final export"
      }
    ],
    description: "A cinematic shorts edit built around premium perfume visuals, smooth pacing, and luxury-focused motion to create a polished short-form video for modern social media presentation.",
    summary: "This project turns product visuals into a short-form cinematic piece that feels elegant, immersive, and platform-ready for reels, ads, and brand storytelling.",
    purpose: "Create a visually rich short video that combines atmosphere, product focus, and editorial pacing so the brand can present its fragrances with more emotion and premium appeal.",
    problemStatement: "The brand needed more than static visuals alone. It required a cinematic short-form edit that could quickly capture attention, communicate luxury, and make the perfume line feel more alive on social media and promotional platforms.",
    finalSolution: "The final edit uses controlled pacing, smooth transitions, glow-rich highlights, and perfume-focused composition to transform the source footage into a refined cinematic short that feels premium, modern, and campaign-ready.",
    process: [
      "Selected the strongest visual moments from the perfume footage and organized them into a short sequence that builds mood quickly without losing product clarity.",
      "Shaped the pacing with smooth cuts, cinematic timing, and visual flow so the short feels elegant and engaging from the first seconds to the closing frame.",
      "Finished the piece with color polish, contrast balancing, and a luxury-oriented tone so the final export feels cohesive, polished, and suitable for social promotion."
    ],
    tools: ["Adobe Premiere Pro", "Cinematic Editing", "Color Grading", "Short-Form Content"],
    client: "Raazina Essence",
    deliverables: ["Cinematic shorts edit", "Social-ready vertical export", "Luxury product promo sequence"],
    metrics: ["Premium visual storytelling", "Short-form viewer engagement", "High-end social media presentation"],
    layout: "wide",
    colorPalette: [
      { name: "Midnight Black", hex: "#0F0B0B", use: "Scene depth, contrast, and premium cinematic grounding" },
      { name: "Golden Amber", hex: "#D99A2B", use: "Highlight glow, warmth, and luxury tone shaping" },
      { name: "Soft Cream", hex: "#F6E7CA", use: "Balance for reflections, labels, and refined visual separation" }
    ],
    typography: [
      { label: "Title Style", family: "Cinematic Serif", detail: "Supports a premium and elegant tone for short-form luxury storytelling." },
      { label: "Support", family: "Modern Sans", detail: "Keeps captions and promotional messaging clean and readable in motion formats." }
    ],
    beforeAfter: {
      before: "The product visuals needed a stronger motion-led presentation to feel more dynamic and emotionally engaging in short-form marketing spaces.",
      after: "The completed edit gives the fragrance brand a cinematic short that feels polished, luxurious, and ready to capture attention across reels and promotional feeds."
    },
    mockups: [
      {
        type: "video",
        src: cinematicShortsRaazinaVideo,
        poster: raazinaBluDeRaazina05,
        alt: "Cinematic shorts video showcase"
      }
    ],
    testimonial: {
      quote: "The video gave our perfume visuals a much more premium feel. It looks cinematic, smooth, and perfectly suited for social media promotion.",
      name: "Raazina Essence Team",
      company: "Raazina Essence",
      rating: 5,
      avatar: createAvatar("Raazina Essence", "#D99A2B", "#0F0B0B")
    }
  }),
  buildProject({
    slug: "amazon-ebc-listing-design",
    title: "Amazon EBC Listing Images Design",
    category: "Graphic Design",
    typeLabel: "Amazon EBC Design",
    year: "2026",
    accent: "E-commerce Listing",
    featured: true,
    image: amazonEbcGig01,
    gallery: [
      amazonEbc01,
      amazonEbc02,
      amazonEbc03,
      amazonEbc04,
      amazonEbc05
    ],
    description: "A full Amazon EBC and listing image design project for a mineral mud shower gel, focused on product benefits, lifestyle presentation, ingredient clarity, and conversion-ready visual hierarchy.",
    summary: "This project was created to help an Amazon product listing feel cleaner, more premium, and easier to understand through branded EBC visuals that explain benefits quickly and support purchase confidence.",
    purpose: "Design a cohesive set of Amazon listing and enhanced brand content images that present the product clearly, communicate key benefits fast, and make the listing visually stronger in a competitive skincare category.",
    problemStatement: "The product needed more persuasive listing visuals than simple catalog images. It required premium Amazon EBC graphics that could explain ingredients, demonstrate use, highlight benefits, and create stronger trust for shoppers scanning the page quickly.",
    finalSolution: "The final listing system combines a bright spa-inspired visual style, clean typography, product-focused compositions, ingredient callouts, and lifestyle scenes to create a polished Amazon EBC set that is informative, soft, and conversion-oriented.",
    process: [
      "Built the image sequence around the way Amazon shoppers process information by starting with a strong hero visual, then moving into benefits, usage context, ingredient highlights, and feature explanation panels.",
      "Used a soft skincare-inspired palette, spacious layouts, and clean iconography so each image feels premium while still staying easy to scan on both desktop and mobile Amazon views.",
      "Balanced product visibility with educational messaging by pairing the bottle with callouts, spa props, and lifestyle imagery that support trust, comfort, and product understanding."
    ],
    tools: ["Adobe Photoshop", "Amazon EBC Design", "Listing Image Design", "E-commerce Branding"],
    client: "Amazon Skincare Product Listing",
    deliverables: [
      "Amazon hero gig visual",
      "5 enhanced brand content images",
      "Benefits-focused listing graphics",
      "Lifestyle and ingredient explanation panels"
    ],
    metrics: ["Clear shopper communication", "Premium Amazon-ready presentation", "Stronger product trust and readability"],
    layout: "standard",
    colorPalette: [
      { name: "Clean Ivory", hex: "#F5F1E8", use: "Main listing background and soft skincare atmosphere" },
      { name: "Mineral Gold", hex: "#D8B56A", use: "Product label accent and premium warmth" },
      { name: "Botanical Green", hex: "#0D7A42", use: "Benefit icons, ingredient signals, and natural product cues" }
    ],
    typography: [
      { label: "Headline", family: "Elegant Serif", detail: "Used to give the Amazon listing a refined beauty and wellness feel in major image headings." },
      { label: "Support", family: "Modern Sans", detail: "Keeps benefits, feature labels, and EBC copy easy to scan inside marketplace layouts." }
    ],
    beforeAfter: {
      before: "The listing needed more informative and premium visuals to help shoppers understand the product benefits, ingredients, and use case at a glance.",
      after: "The finished Amazon EBC set gives the product a softer, more trustworthy, and more conversion-ready presentation with clearer benefit storytelling."
    },
    mockups: [
      amazonEbcGig01,
      amazonEbc03,
      amazonEbc05,
      amazonEbc04,
      amazonEbc02
    ],
    testimonial: {
      quote: "The listing images gave our product a far more professional Amazon presence. The benefits are clearer, the visuals feel premium, and the full set looks much more market-ready.",
      name: "Amazon Listing Client",
      company: "Amazon Skincare Product Listing",
      rating: 5,
      avatar: createAvatar("Amazon Listing Client", "#D8B56A", "#0D7A42")
    }
  })
];

export const allProjects = [
  ...projects,
  buildProject({
    slug: "digital-hujra-brochure-design",
    title: "Digital Hujra Brochure Design",
    category: "Graphic Design",
    typeLabel: "Brochure Design",
    year: "2026",
    accent: "Corporate Brochure",
    image: digitalHujraBrochure01,
    gallery: [digitalHujraBrochure01],
    description: "A bold tri-fold brochure design for Digital Hujra, created to present services, business value, and contact information in a polished print-ready marketing format.",
    summary: "This brochure was designed as a complete offline promotional piece that helps Digital Hujra explain its digital services with stronger structure, better clarity, and a more professional visual identity.",
    purpose: "Create a brochure that introduces the business, highlights core services, builds trust through key selling points, and gives potential clients one clear promotional piece they can read and keep.",
    problemStatement: "Digital Hujra needed a brochure that could represent the business professionally in meetings, local promotions, and client presentations. The design had to communicate multiple services clearly without looking crowded or outdated.",
    finalSolution: "The final brochure uses a blue-orange brand palette, structured panel layout, strong service blocks, trust-building benefit sections, and a clear contact area to give Digital Hujra a modern, business-ready print asset.",
    process: [
      "Organized the brochure across distinct panels so the front cover, service overview, company introduction, and value proposition each had a clear place in the reading flow.",
      "Used bold headings, contrast-rich shapes, and service cards to make each offering easy to scan while keeping the overall look energetic and professional.",
      "Balanced visual storytelling with practical brochure content by combining mockups, office imagery, icons, and contact details into one cohesive marketing layout."
    ],
    tools: ["Adobe Photoshop", "Brochure Design", "Print Layout", "Brand Presentation"],
    client: "Osama Ghaffar",
    deliverables: ["Tri-fold brochure design", "Service showcase layout", "Print-ready marketing brochure"],
    metrics: ["Clear service communication", "Professional business presentation", "Stronger print marketing identity"],
    layout: "tall",
    colorPalette: [
      { name: "Deep Corporate Blue", hex: "#0D2B67", use: "Primary brochure base, headings, and brand structure" },
      { name: "Signal Orange", hex: "#F59A1B", use: "Accent bars, highlights, and call-to-action emphasis" },
      { name: "Clean White", hex: "#F7F7F7", use: "Readability, panel balance, and contrast support" }
    ],
    typography: [
      { label: "Headline", family: "Bold Geometric Sans", detail: "Used for strong section titles that stay readable across brochure panels." },
      { label: "Support", family: "Clean Corporate Sans", detail: "Supports service descriptions, contact details, and smaller brochure content with clarity." }
    ],
    beforeAfter: {
      before: "The business needed a more structured and visually convincing brochure to present its services professionally in print and local marketing contexts.",
      after: "The finished brochure gives Digital Hujra a stronger offline marketing piece that feels modern, informative, and ready for business promotion."
    },
    mockups: [digitalHujraBrochure01],
    testimonial: {
      quote: "The brochure made our business presentation look much more polished and professional. It explains our services clearly and gives clients a better first impression.",
      name: "Digital Hujra Team",
      company: "Digital Hujra",
      rating: 5,
      avatar: createAvatar("Digital Hujra", "#0D2B67", "#F59A1B")
    }
  }),
  buildProject({
    slug: "brand-identity-design-packages",
    title: "Digital Hujra Packages Design Series",
    category: "Graphic Design",
    typeLabel: "Package Design Series",
    year: "2026",
    accent: "Service Packages",
    image: brandIdentityDesignPackages,
    gallery: [
      brandIdentityDesignPackages,
      digitalPrintBrandDesignPackages,
      ecommerceWebsitePackages,
      posSystemPackages,
      productPhotographyPackages,
      socialMediaManagementPackages
    ],
    description: "A six-poster package design series for Digital Hujra created to present service pricing, package tiers, and core benefits in a bold, consistent, high-contrast sales format.",
    summary: "This package set was built to help Digital Hujra explain multiple service offers clearly while keeping every poster inside one recognizable visual system.",
    purpose: "Design a complete package presentation for branding, print, e-commerce, POS, photography, and social media services so potential clients can compare options quickly and trust the offer instantly.",
    problemStatement: "Digital Hujra needed more structured service posters that could communicate pricing, package differences, and business value without feeling crowded or visually inconsistent from one service to the next.",
    finalSolution: "The final series uses one shared neon-tech direction with deep navy backgrounds, blue-orange contrast, glowing iconography, and tier-based pricing cards so each service looks distinct while still belonging to the same campaign family.",
    process: [
      "Built a repeatable poster framework around a clear top hierarchy, central service headline, and three-card pricing layout so every package stays easy to scan.",
      "Tailored the supporting illustrations, feature lists, and CTA emphasis for each service category while preserving consistent spacing, color rhythm, and branding cues.",
      "Refined the full set into a cohesive sales-ready collection that works for portfolio presentation, social posting, and direct client pitching."
    ],
    tools: ["Adobe Photoshop", "Package Design", "Offer Design", "Marketing Visual Systems"],
    client: "Osama Ghaffar",
    deliverables: [
      "Brand identity package poster",
      "Digital print and brand design package poster",
      "E-commerce website package poster",
      "POS system package poster",
      "Product photography package poster",
      "Social media management package poster"
    ],
    metrics: ["Clear package comparison", "Consistent sales-focused design system", "Stronger service presentation"],
    layout: "wide",
    colorPalette: [
      { name: "Electric Blue", hex: "#1697ff", use: "Primary highlights, icons, and tier headings" },
      { name: "Vibrant Orange", hex: "#ff9f1a", use: "Premium card emphasis, pricing contrast, and CTA focus" },
      { name: "Midnight Navy", hex: "#07142a", use: "Background depth and campaign consistency" }
    ],
    typography: [
      { label: "Headline", family: "Bold Display Sans", detail: "Used for loud service headlines and price hierarchy across the package set." },
      { label: "Support", family: "Clean UI Sans", detail: "Keeps package features, best-for notes, and CTA copy readable inside dense layouts." }
    ],
    beforeAfter: {
      before: "The service offers needed a more polished and consistent visual format so clients could understand pricing and package tiers faster.",
      after: "The finished package series gives Digital Hujra a stronger sales presentation with clearer comparisons, sharper branding, and a much more professional offer deck."
    },
    mockups: [
      brandIdentityDesignPackages,
      digitalPrintBrandDesignPackages,
      ecommerceWebsitePackages,
      posSystemPackages,
      productPhotographyPackages,
      socialMediaManagementPackages
    ],
    testimonial: {
      quote: "This package series made our services look more structured, more professional, and much easier for clients to understand at a glance.",
      name: "Digital Hujra Team",
      company: "Digital Hujra",
      rating: 5,
      avatar: createAvatar("Digital Hujra", "#1697ff", "#ff9f1a")
    }
  }),
  buildProject({
    slug: "hujra-restaurant-menu-design",
    title: "Hujra Restaurant Menu Design Series",
    category: "Graphic Design",
    typeLabel: "Restaurant Menu Design",
    year: "2026",
    accent: "Food Menu Design",
    image: hujraRestaurantMenuMain,
    gallery: [
      hujraRestaurantMenuMain,
      hujraRestaurantMenuBreads,
      hujraRestaurantMenuRiceBiryani,
      hujraRestaurantMenuPeshawariTikka,
      hujraRestaurantMenuDrinks
    ],
    description: "A premium menu design series for Hujra Restaurant, created to showcase traditional dishes with strong category hierarchy, rich food presentation, and a warm heritage-inspired visual identity.",
    summary: "This project was designed to give Hujra Restaurant a complete menu system that feels authentic, appetizing, and visually memorable while helping customers scan categories and prices quickly.",
    purpose: "Build a menu design set that introduces the restaurant brand, organizes major food categories clearly, and turns core dishes like tikka, biryani, breads, and drinks into attractive sales-focused visuals.",
    problemStatement: "Hujra Restaurant needed a more refined menu presentation that could communicate traditional flavor, restaurant identity, and pricing clearly without feeling generic or cluttered. The menu had to feel premium while still being easy to read for everyday customers.",
    finalSolution: "The final menu series combines dark textured backgrounds, warm gold detailing, category-based layouts, bold serif headlines, and large appetizing food visuals to create a menu system that feels traditional, premium, and highly readable across both single-category posters and the complete main menu composition.",
    process: [
      "Built the main menu around clearly separated food categories so customers can understand the restaurant offering at a glance while still feeling the full Hujra brand atmosphere.",
      "Designed dedicated category posters for breads, rice and biryani, Peshawari tikka, and drinks, using consistent decorative framing, logo treatment, and pricing alignment to keep the full set visually unified.",
      "Used rich food imagery, warm contrast, and traditional visual cues to make the menu feel more premium and culturally rooted while maintaining strong readability for names, prices, and contact details."
    ],
    tools: ["Adobe Photoshop", "Menu Design", "Food Advertising", "Print-Ready Layout"],
    client: "Hujra Restaurant",
    deliverables: [
      "Main restaurant menu poster",
      "Breads category menu",
      "Rice and biryani menu",
      "Peshawari tikka menu",
      "Drinks menu"
    ],
    metrics: ["Clear category organization", "Stronger restaurant branding", "More appetizing menu presentation"],
    layout: "wide",
    colorPalette: [
      { name: "Heritage Gold", hex: "#dca12c", use: "Headlines, borders, prices, and premium detail accents" },
      { name: "Smoky Charcoal", hex: "#12100d", use: "Main background depth and restaurant atmosphere" },
      { name: "Warm Copper", hex: "#9e5d23", use: "Food warmth, supporting accents, and richness in presentation" },
      { name: "Cool Aqua", hex: "#6ed4ff", use: "Drinks category highlights and contrast accents" }
    ],
    typography: [
      { label: "Headline", family: "Classic Display Serif", detail: "Used for large menu category titles to create a traditional, premium restaurant feel." },
      { label: "Support", family: "Readable Editorial Serif", detail: "Keeps food names, prices, and location details clear while preserving the elegant menu tone." }
    ],
    beforeAfter: {
      before: "The restaurant needed a menu presentation that could feel more premium, more organized, and more aligned with its traditional dining identity.",
      after: "The completed menu series gives Hujra Restaurant a stronger branded presentation where categories are easier to browse and each dish feels more appealing and professionally showcased."
    },
    mockups: [
      hujraRestaurantMenuMain,
      hujraRestaurantMenuBreads,
      hujraRestaurantMenuRiceBiryani,
      hujraRestaurantMenuPeshawariTikka,
      hujraRestaurantMenuDrinks
    ],
    testimonial: {
      quote: "The new menu designs made our restaurant look much more premium and organized. Customers can now understand our categories more easily, and the food presentation feels far more attractive.",
      name: "Hujra Restaurant Team",
      company: "Hujra Restaurant",
      rating: 5,
      avatar: createAvatar("Hujra Restaurant", "#dca12c", "#12100d")
    }
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
    slug: "graphic-design-training-qualification",
    title: "Graphic Design Training Qualification",
    issuer: "University of Engineering & Technology Peshawar",
    date: "2025",
    image: certificateGraphicDesign
  },
  {
    slug: "adobe-premiere-pro-video-editing",
    title: "Adobe Premiere Pro Professional Video Editing",
    issuer: "Adobe",
    date: "23 June 2022",
    image: certificateVideoEditing
  },
  {
    slug: "professional-photography",
    title: "Professional Photography",
    issuer: "Professional Creative Academy",
    date: "11 April 2024",
    image: certificatePhotography
  },
  {
    slug: "advanced-videography",
    title: "Advanced Videography",
    issuer: "International Creative Media Institute",
    date: "25 May 2025",
    image: certificateVideography
  },
  {
    slug: "diploma-in-information-technology",
    title: "Diploma in Information Technology",
    issuer: "Khyber Pakhtunkhwa Board of Technical & Commerce Education",
    date: "25 July 2025",
    image: certificateInformationTechnology
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

export const testimonials = allProjects
  .filter((project) => project.testimonial)
  .map((project) => ({
    name: project.testimonial.name,
    role: project.testimonial.company,
    text: project.testimonial.quote,
    rating: project.testimonial.rating ?? 5,
    avatar: project.testimonial.avatar,
    projectTitle: project.title
  }));

export const trustCards = [
  { name: "Fiverr", note: "Top Rated", accent: "Marketplace Success" },
  { name: "Upwork", note: "Rising Creative", accent: "Trusted Delivery" },
  { name: "Behance", note: "Case Study Ready", accent: "Visual Showcase" },
  { name: "Dribbble", note: "Creative Presence", accent: "Design Community" }
];
