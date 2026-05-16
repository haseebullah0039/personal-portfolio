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
import aboutImage from "@/assets/about.webp";
import heroProfileImage from "@/assets/hero-profile.webp";
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
    client: "Krspozz Fast Food",
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
