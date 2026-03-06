'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps { homepageContent: DrupalHomepage | null | undefined }

const defaultStats = [{"id":"stat-1","value":"$2B+","label":"Sales Volume"},{"id":"stat-2","value":"5,000+","label":"Homes Sold"},{"id":"stat-3","value":"97%","label":"Client Satisfaction"},{"id":"stat-4","value":"20","label":"Years of Service"}]

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []
  const displayStats = stats.length > 0 ? stats : defaultStats

  return (
    <section className="bg-primary-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {displayStats.map((stat: any, i: number) => (
            <div key={stat.id || i} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white">{stat.value || stat.number || stat.statValue || stat.number}</div>
              <div className="text-primary-200 mt-1 text-sm font-medium">{stat.label || stat.statLabel || stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
