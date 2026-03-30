/** Hero + alternating section images per service slug (live Webflow assets, optimized WebP). */
export const SERVICE_PAGE_MEDIA: Record<
  string,
  { hero: string; sections: [string, string, string] }
> = {
  "residential-service": {
    hero: "/images/residential-hero.webp",
    sections: [
      "/images/residential-family.webp",
      "/images/residential-lights-detail.webp",
      "/images/detail-roofline.webp",
    ],
  },
  "commercial-service": {
    hero: "/images/commercial-icicle-roofline.webp",
    sections: [
      "/images/commercial-wreath-display.webp",
      "/images/commercial-trees.webp",
      "/images/commercial-icicle-roofline.webp",
    ],
  },
  "single-story-homes": {
    hero: "/images/single-story-column.webp",
    sections: [
      "/images/single-story-column.webp",
      "/images/residential-lights-detail.webp",
      "/images/detail-tree-wrap.webp",
    ],
  },
  "multi-story-homes": {
    hero: "/images/multi-story-lifestyle.webp",
    sections: [
      "/images/multi-story-lifestyle.webp",
      "/images/detail-roofline.webp",
      "/images/detail-entryway.webp",
    ],
  },
  estates: {
    hero: "/images/estates-fence.webp",
    sections: [
      "/images/estate-night-display.webp",
      "/images/estates-fence.webp",
      "/images/detail-sb-estate.webp",
    ],
  },
  ranch: {
    hero: "/images/ranch-sequoia-48.webp",
    sections: [
      "/images/ranch-sequoia-48.webp",
      "/images/gallery-sequoia-lifestyle.webp",
      "/images/gallery-trunk-wrap.webp",
    ],
  },
  restaurants: {
    hero: "/images/restaurant-interior.webp",
    sections: [
      "/images/restaurant-interior.webp",
      "/images/commercial-wreath-display.webp",
      "/images/commercial-trees.webp",
    ],
  },
};
