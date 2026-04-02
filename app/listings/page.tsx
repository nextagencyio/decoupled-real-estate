import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_LISTINGS } from '@/lib/queries'
import { ListingsData } from '@/lib/types'
import Header from '../components/Header'
import ListingCard from '../components/ListingCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Property Listings | Crestview Realty',
  description: 'Browse homes for sale and rent in your area. From craftsman bungalows to luxury condos, find your perfect property with Crestview Realty.',
}

async function getListings() {
  try {
    const client = getClient()
    const data = await client.raw(GET_LISTINGS, { first: 50 })
    return data?.nodeListings?.nodes || []
  } catch (error) {
    console.error('Error fetching listings:', error)
    return []
  }
}

export default async function ListingsPage() {
  const items = await getListings()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display">
              Listings
            </h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto">
              Homes for sale and rent in your area. Find your next property today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Listings Yet</h2>
              <p className="text-gray-500">
                Listings will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: any) => (
                <ListingCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
