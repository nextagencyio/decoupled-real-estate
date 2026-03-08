import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_NEIGHBORHOODS } from '@/lib/queries'
import { NeighborhoodsData } from '@/lib/types'
import Header from '../components/Header'
import NeighborhoodCard from '../components/NeighborhoodCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Neighborhood Guides | Crestview Realty',
  description: 'Explore local neighborhoods with median prices, walk scores, and lifestyle guides to find the right community for you.',
}

async function getNeighborhoods() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<NeighborhoodsData>({
      query: GET_NEIGHBORHOODS,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeNeighborhoods?.nodes || []
  } catch (error) {
    console.error('Error fetching neighborhoods:', error)
    return []
  }
}

export default async function NeighborhoodsPage() {
  const items = await getNeighborhoods()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display">
              Neighborhoods
            </h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto">
              Discover the character, amenities, and lifestyle of each area we serve.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Neighborhoods Yet</h2>
              <p className="text-gray-500">
                Neighborhoods will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <NeighborhoodCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
