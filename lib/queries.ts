// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Listings
export const GET_LISTINGS = gql`
  query GetListings($first: Int = 20) {
    nodeListings(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeListing {
          body {
            processed
            summary
          }
          price
          bedrooms
          bathrooms
          squareFeet
          address
          propertyType
          listingType
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_LISTING_BY_PATH = gql`
  query GetListingByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeListing {
            id
            title
            path
            body {
              processed
            }
            price
            bedrooms
            bathrooms
            squareFeet
            address
            propertyType
            listingType
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Agents
export const GET_AGENTS = gql`
  query GetAgents($first: Int = 50) {
    nodeAgents(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeAgent {
          body {
            processed
          }
          position
          email
          phone
          licenseNumber
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_AGENT_BY_PATH = gql`
  query GetAgentByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeAgent {
            id
            title
            path
            body {
              processed
            }
            position
            email
            phone
            licenseNumber
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Neighborhoods
export const GET_NEIGHBORHOODS = gql`
  query GetNeighborhoods($first: Int = 20) {
    nodeNeighborhoods(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeNeighborhood {
          body {
            processed
            summary
          }
          medianPrice
          walkScore
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_NEIGHBORHOOD_BY_PATH = gql`
  query GetNeighborhoodByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeNeighborhood {
            id
            title
            path
            body {
              processed
            }
            medianPrice
            walkScore
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Blog Posts
export const GET_BLOG_POSTS = gql`
  query GetBlogPosts($first: Int = 20) {
    nodeBlogPosts(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeBlogPost {
          body {
            processed
            summary
          }
          postCategory
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_BLOG_POST_BY_PATH = gql`
  query GetBlogPostByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeBlogPost {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            postCategory
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query for all content types
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeListing {
            id
            title
            path
            body {
              processed
            }
            price
            bedrooms
            bathrooms
            squareFeet
            address
            propertyType
            listingType
            image {
              url
              alt
            }
          }
          ... on NodeAgent {
            id
            title
            path
            body {
              processed
            }
            position
            email
            phone
            licenseNumber
            photo {
              url
              alt
            }
          }
          ... on NodeNeighborhood {
            id
            title
            path
            body {
              processed
            }
            medianPrice
            walkScore
            image {
              url
              alt
            }
          }
          ... on NodeBlogPost {
            id
            title
            path
            body {
              processed
            }
            postCategory
            image {
              url
              alt
            }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured listings for homepage
export const GET_FEATURED_LISTINGS = gql`
  query GetFeaturedListings {
    nodeListings(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeListing {
          price
          bedrooms
          bathrooms
          squareFeet
          propertyType
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured neighborhoods for homepage
export const GET_FEATURED_NEIGHBORHOODS = gql`
  query GetFeaturedNeighborhoods {
    nodeNeighborhoods(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeNeighborhood {
          medianPrice
          walkScore
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Recent blog posts for homepage
export const GET_RECENT_BLOG_POSTS = gql`
  query GetRecentBlogPosts {
    nodeBlogPosts(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeBlogPost {
          body {
            summary
          }
          postCategory
          image {
            url
            alt
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`
