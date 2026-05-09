import graphicDesignImage from "@/assets/service-graphic-design-3d.png";
import videoEditingImage from "@/assets/service-video-editing-3d.png";
import photographyImage from "@/assets/service-photography-3d.png";
import videographyImage from "@/assets/service-videography-3d.png";

export const services = [
  {
    title: "Graphic Design",
    image: graphicDesignImage,
    imageAlt: "Graphic design and branding visuals",
    description: "Strategic visuals that give your brand a sharper identity, stronger recognition, and a polished presence across every channel.",
    features: ["Logo Design", "Branding", "Social Media Design"]
  },
  {
    title: "Video Editing",
    image: videoEditingImage,
    imageAlt: "Video editing timeline and preview visuals",
    description: "Clean, high-retention edits with purposeful pacing, refined sound, and platform-ready structure for ads, reels, and long-form content.",
    features: ["Reels & Shorts Editing", "Ads Creative", "YouTube Editing"]
  },
  {
    title: "Photography",
    image: photographyImage,
    imageAlt: "Photography camera and studio setup",
    description: "Premium product and lifestyle imagery with thoughtful lighting, clean composition, and visuals built for campaigns and online stores.",
    features: ["Product Photography", "Brand Shoot", "Lifestyle Shots"]
  },
  {
    title: "Videography",
    image: videographyImage,
    imageAlt: "Videography camera and shooting setup",
    description: "Cinematic brand films, product videos, and promotional content shaped with smooth motion, clear messaging, and a premium finish.",
    features: ["Product Shoot", "Professional Videos", "Social Video Packages"]
  }
];

export const projects = [
  {
    title: "Brand Identity System",
    category: "Graphic Design",
    year: "2025",
    description: "Logo, color direction, and social identity visuals designed for a sharper and more recognizable brand presence.",
    tags: ["Logo", "Branding", "Social"],
    accent: "Design"
  },
  {
    title: "Social Media Ad Edit",
    category: "Video Editing",
    year: "2025",
    description: "Fast-paced promotional edit with clean cuts, motion text, sound polish, and platform-ready pacing.",
    tags: ["Reels", "Ads", "Motion"],
    accent: "Edit",
    featured: true
  },
  {
    title: "Product Photography Set",
    category: "Photography",
    year: "2025",
    description: "Clean product images with controlled lighting, premium framing, and detail-focused commercial presentation.",
    tags: ["Product", "Lighting", "Studio"],
    accent: "Photo"
  },
  {
    title: "Brand Promo Video",
    category: "Videography",
    year: "2025",
    description: "Promotional video direction with smooth motion, strong visuals, and a confident story-driven structure.",
    tags: ["Promo", "Camera", "Story"],
    accent: "Video"
  },
  {
    title: "Campaign Visual Kit",
    category: "Graphic Design",
    year: "2025",
    description: "A complete campaign pack with banners, post layouts, and ad creatives prepared for consistent online marketing.",
    tags: ["Campaign", "Posts", "Ads"],
    accent: "Visual"
  },
  {
    title: "Creator Content Package",
    category: "Video Editing",
    year: "2025",
    description: "Short-form content package built for hooks, retention, subtitles, and a polished creator brand experience.",
    tags: ["Shorts", "Captions", "Growth"],
    accent: "Creator"
  }
];

export const allProjects = [
  ...projects,
  {
    title: "Restaurant Menu Campaign",
    category: "Graphic Design",
    year: "2025",
    description: "Menu boards, food posters, and offer creatives designed for a clean and premium restaurant presentation.",
    tags: ["Menu", "Poster", "Food"],
    accent: "Menu"
  },
  {
    title: "Fashion Reel Series",
    category: "Video Editing",
    year: "2025",
    description: "A short-form reel series with sharp cuts, beat-matched pacing, titles, and color-polished social delivery.",
    tags: ["Fashion", "Reels", "Color"],
    accent: "Reel"
  },
  {
    title: "Lifestyle Brand Shoot",
    category: "Photography",
    year: "2025",
    description: "Lifestyle photography built around natural detail, brand mood, and clean commercial framing.",
    tags: ["Lifestyle", "Brand", "Shoot"],
    accent: "Life"
  },
  {
    title: "Product Launch Film",
    category: "Videography",
    year: "2025",
    description: "Launch video with cinematic product shots, clean movement, and a confident visual structure.",
    tags: ["Launch", "Film", "Product"],
    accent: "Launch"
  },
  {
    title: "Business Social Kit",
    category: "Graphic Design",
    year: "2025",
    description: "A repeatable social media design system for announcements, offers, testimonials, and brand updates.",
    tags: ["Business", "Social", "Kit"],
    accent: "Kit"
  },
  {
    title: "YouTube Editing Package",
    category: "Video Editing",
    year: "2025",
    description: "Long-form YouTube edit package with intro structure, jump cuts, captions, pacing, and clean audio.",
    tags: ["YouTube", "Audio", "Cuts"],
    accent: "Tube"
  }
];

export const skillBars = [
  ["Graphic Design", "95%"],
  ["Video Editing", "90%"],
  ["Photography", "98%"],
  ["Videography", "95%"]
];

export const trustCards = ["Fiverr", "Upwork", "Behance", "Dribbble"];
