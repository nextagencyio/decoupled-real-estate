import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_AGENTS } from '@/lib/queries'
import { AgentsData } from '@/lib/types'
import Header from '../components/Header'
import AgentCard from '../components/AgentCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Our Agents | Crestview Realty',
  description: 'Meet our licensed real estate agents and brokers. Experienced professionals ready to help you buy, sell, or invest.',
}

async function getAgents() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<AgentsData>({
      query: GET_AGENTS,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeAgents?.nodes || []
  } catch (error) {
    console.error('Error fetching agents:', error)
    return []
  }
}

export default async function AgentsPage() {
  const items = await getAgents()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display">
              Agents
            </h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto">
              Licensed professionals with deep local market knowledge, ready to guide you home.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Agents Yet</h2>
              <p className="text-gray-500">
                Agents will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <AgentCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
