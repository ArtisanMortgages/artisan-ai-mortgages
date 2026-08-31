export const SITE_URL = "https://artisanmortgages.ai";
export const SITE_NAME = "Artisan Mortgages AI";
export const SITE_TWITTER = "@artisanmrtgs";

type SeoInput = {
  title: string;
  description: string;
  path: string; // e.g. "/about"
  image?: string; // path or absolute URL
  type?: "website" | "article" | "profile";
  keywords?: string[];
};

export function seo({ title, description, path, image = "/og-image.jpg", type = "website", keywords }: SeoInput) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(keywords?.length ? [{ name: "keywords", content: keywords.join(", ") }] : []),
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "googlebot", content: "index, follow" },

      // Open Graph
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_CA" },
      { property: "og:image", content: imageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: SITE_TWITTER },
      { name: "twitter:creator", content: SITE_TWITTER },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: title },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

// Reusable JSON-LD blocks
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MortgageBroker",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "Artisan Mortgages",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
  description:
    "Canada's first AI-powered mortgage brokerage. Boutique mortgage services in Edmonton, AB led by Moses Lam.",
  telephone: "+1-780-952-4566",
  email: "moses@artisanmortgages.ca",
  priceRange: "$$$",
  areaServed: [
    { "@type": "City", name: "Edmonton" },
    { "@type": "AdministrativeArea", name: "Alberta" },
    { "@type": "Country", name: "Canada" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "2207 90B Street SW",
    addressLocality: "Edmonton",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.4525,
    longitude: -113.5872,
  },
  founder: {
    "@type": "Person",
    name: "Moses Lam",
    jobTitle: "Founder & Principal Mortgage Broker",
    email: "moses@artisanmortgages.ca",
    telephone: "+1-780-952-4566",
  },
  sameAs: [
    "https://www.instagram.com/artisan_mortgages/",
    "https://www.facebook.com/moses.lam.52",
    "https://twitter.com/artisanmrtgs",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: "Canada's first AI-powered mortgage brokerage.",
  inLanguage: "en-CA",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Moses Lam",
  jobTitle: "Founder & Principal Mortgage Broker",
  email: "moses@artisanmortgages.ca",
  telephone: "+1-780-952-4566",
  image: `${SITE_URL}/og-about.jpg`,
  url: `${SITE_URL}/about`,
  worksFor: { "@id": `${SITE_URL}/#organization` },
  address: {
    "@type": "PostalAddress",
    streetAddress: "2207 90B Street SW",
    addressLocality: "Edmonton",
    addressRegion: "AB",
    addressCountry: "CA",
  },
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}
