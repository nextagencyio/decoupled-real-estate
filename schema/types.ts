// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeAgent {
  id: string;
  body: { value: string; summary?: string };
  email: string;
  licenseNumber: string;
  path: string;
  phone: string;
  photo: { url: string; alt: string; width: number; height: number };
  position: string;
  title: string;
}

export interface NodeBlogPost {
  id: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  postCategory: string;
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeListing {
  id: string;
  address: string;
  bathrooms: number;
  bedrooms: number;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  listingType: string;
  path: string;
  price: string;
  propertyType: string;
  squareFeet: string;
  title: string;
}

export interface NodeNeighborhood {
  id: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  medianPrice: string;
  path: string;
  title: string;
  walkScore: number;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}
