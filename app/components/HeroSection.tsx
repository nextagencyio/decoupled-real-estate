'use client'

import { DrupalHomepage } from '@/lib/types'
import Link from 'next/link'
import Image from 'next/image'
import { Home, Users } from 'lucide-react'

interface HeroSectionProps { homepageContent: DrupalHomepage | null | undefined }

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Compass Realty Group'
  const subtitle = (homepageContent as any)?.heroSubtitle || 'Full-service real estate solutions for buyers, sellers, and investors with local expertise and personalized service.'
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="bg-gray-50 pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="inline-block bg-primary-100 text-primary-800 px-4 py-1 rounded-full text-sm font-medium mb-6">Your Trusted Real Estate Partner Since 2005</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-950 mb-6 leading-tight font-display">{title}</h1>
            {subtitle && <p className="text-xl text-gray-600 mb-4 max-w-xl leading-relaxed">{subtitle}</p>}
            {description && <div className="text-lg text-gray-500 mb-8 max-w-xl" dangerouslySetInnerHTML={{ __html: description }} />}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/listings" className="inline-flex items-center px-8 py-4 bg-primary-800 text-white rounded-lg hover:bg-primary-900 transition-colors font-bold text-base shadow-lg shadow-primary-800/25">
                <Home className="w-5 h-5 mr-2" />Browse Listings
              </Link>
              <Link href="/agents" className="inline-flex items-center px-8 py-4 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors font-bold text-base shadow-lg shadow-accent-500/25">
                <Users className="w-5 h-5 mr-2" />Find an Agent
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary-200 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-100 rounded-2xl" />
            <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fit=crop" alt="Compass Realty Group luxury property" width={800} height={600} className="relative rounded-2xl shadow-xl object-cover w-full" priority unoptimized />
          </div>
        </div>
      </div>
    </section>
  )
}
