/**
 * Demo Mode Module
 *
 * This file contains ALL demo/mock mode functionality.
 * To remove demo mode from a real project:
 * 1. Delete this file (lib/demo-mode.ts)
 * 2. Delete the data/mock/ directory
 * 3. Delete app/components/DemoModeBanner.tsx
 * 4. Remove DemoModeBanner from app/layout.tsx
 * 5. Remove the demo mode check from app/api/graphql/route.ts
 */

import homepageData from '@/data/mock/homepage.json'
import listingsData from '@/data/mock/listings.json'
import agentsData from '@/data/mock/agents.json'
import neighborhoodsData from '@/data/mock/neighborhoods.json'
import blogPostsData from '@/data/mock/blog.json'
import routesData from '@/data/mock/routes.json'

export function isDemoMode(): boolean {
  return process.env.NEXT_PUBLIC_DEMO_MODE !== 'false'
}

const mockDataMap: Record<string, any> = {
  'homepage.json': homepageData,
  'listings.json': listingsData,
  'agents.json': agentsData,
  'neighborhoods.json': neighborhoodsData,
  'blog.json': blogPostsData,
  'routes.json': routesData,
}

function loadMockData(filename: string): any {
  return mockDataMap[filename] || null
}

export function handleMockQuery(body: string): any {
  try {
    const { query, variables } = JSON.parse(body)

    if (variables?.path) {
      const routePath = variables.path
      const routes = loadMockData('routes.json')
      if (routes && routes[routePath]) {
        return routes[routePath]
      }
    }

    if (query.includes('GetHomepageData') || query.includes('nodeHomepages')) {
      return loadMockData('homepage.json')
    }

    if (query.includes('GetListings') || query.includes('nodeListings')) {
      return loadMockData('listings.json')
    }

    if (query.includes('GetAgents') || query.includes('nodeAgents')) {
      return loadMockData('agents.json')
    }

    if (query.includes('GetNeighborhoods') || query.includes('nodeNeighborhoods')) {
      return loadMockData('neighborhoods.json')
    }

    if (query.includes('GetBlogPosts') || query.includes('nodeBlogPosts')) {
      return loadMockData('blog.json')
    }

    return { data: {} }
  } catch (error) {
    console.error('Mock query error:', error)
    return { data: {}, errors: [{ message: 'Mock data error' }] }
  }
}
