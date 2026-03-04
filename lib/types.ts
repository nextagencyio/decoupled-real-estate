// Base node type
export interface DrupalNode {
  __typename?: string
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Listing
export interface DrupalListing extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  price?: string
  bedrooms?: number
  bathrooms?: number
  squareFeet?: string
  address?: string
  propertyType?: string
  listingType?: string
  image?: DrupalImage
}

export interface ListingsData {
  nodeListings: {
    nodes: DrupalListing[]
  }
}

// Agent
export interface DrupalAgent extends DrupalNode {
  body?: {
    processed: string
  }
  position?: string
  email?: string
  phone?: string
  licenseNumber?: string
  photo?: DrupalImage
}

export interface AgentsData {
  nodeAgents: {
    nodes: DrupalAgent[]
  }
}

// Neighborhood
export interface DrupalNeighborhood extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  medianPrice?: string
  walkScore?: number
  image?: DrupalImage
}

export interface NeighborhoodsData {
  nodeNeighborhoods: {
    nodes: DrupalNeighborhood[]
  }
}

// Blog Post
export interface DrupalBlogPost extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  postCategory?: string
  image?: DrupalImage
}

export interface BlogPostsData {
  nodeBlogPosts: {
    nodes: DrupalBlogPost[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: Array<{
    name: string
    url: string
    width: number
    height: number
  }>
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Legacy compatibility
export interface DrupalArticle extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
  tags?: DrupalTerm[]
}

export interface ArticleTeaserData {
  nodeArticles: {
    nodes: DrupalArticle[]
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
