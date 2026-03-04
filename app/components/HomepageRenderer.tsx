'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Home, Key, MapPin, TrendingUp, Shield, Users, ArrowRight, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface HomepageRendererProps { homepageContent: DrupalHomepage | null | undefined }

const commitmentItems = [
  { icon: Home, title: 'Expert Property Search', description: 'Advanced search tools and local market knowledge to find your perfect property match.' },
  { icon: Key, title: 'Seamless Transactions', description: 'End-to-end transaction management ensuring a smooth buying or selling experience.' },
  { icon: MapPin, title: 'Local Market Expertise', description: 'Deep knowledge of neighborhoods, schools, and community dynamics in every market we serve.' },
  { icon: TrendingUp, title: 'Market Analysis', description: 'Data-driven market insights and pricing strategies to maximize your investment returns.' },
  { icon: Shield, title: 'Trusted Advisory', description: 'Transparent, ethical guidance through every step of your real estate journey.' },
  { icon: Users, title: 'Dedicated Agents', description: 'Experienced, full-time agents committed to delivering exceptional personalized service.' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&fit=crop', alt: 'Modern home exterior' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&fit=crop', alt: 'Luxury interior' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&fit=crop', alt: 'Property listing' },
  { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80&fit=crop', alt: 'Beautiful neighborhood' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ErrorBoundary><HeroSection homepageContent={homepageContent} /></ErrorBoundary>
      <ErrorBoundary><StatsSection homepageContent={homepageContent} /></ErrorBoundary>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-950 mb-4 font-display">Why Choose Compass Realty</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We combine deep local expertise with modern technology to deliver an exceptional real estate experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitmentItems.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0"><item.icon className="w-6 h-6 text-primary-700" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-950 mb-4 font-display">Featured Properties</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Browse our portfolio of distinctive homes and investment properties.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary><CTASection homepageContent={homepageContent} /></ErrorBoundary>

      <footer className="bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20"><Home className="w-5 h-5 text-accent-400" /></div>
                <span className="text-lg font-bold text-white font-display">Compass Realty</span>
              </div>
              <p className="text-primary-300 text-sm mb-4 leading-relaxed">Your trusted real estate partner delivering exceptional results since 2005.</p>
              <div className="space-y-2 text-sm text-primary-300">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 flex-shrink-0" /><span>350 Market Street, Suite 200<br />San Francisco, CA 94105</span></div>
                <div className="flex items-center gap-2"><Phone className="w-4 h-4 flex-shrink-0" /><span>(555) 678-9012</span></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Properties</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/listings" className="hover:text-white transition-colors">All Listings</Link></li>
                <li><Link href="/listings" className="hover:text-white transition-colors">For Sale</Link></li>
                <li><Link href="/listings" className="hover:text-white transition-colors">For Rent</Link></li>
                <li><Link href="/listings" className="hover:text-white transition-colors">New Construction</Link></li>
                <li><Link href="/listings" className="hover:text-white transition-colors">Investment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Areas</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/neighborhoods" className="hover:text-white transition-colors">Neighborhoods</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Market Reports</Link></li>
                <li><Link href="/neighborhoods" className="hover:text-white transition-colors">School Districts</Link></li>
                <li><Link href="/neighborhoods" className="hover:text-white transition-colors">Community Guide</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Relocation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/agents" className="hover:text-white transition-colors">Our Agents</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Schedule Showing</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Free Valuation</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div><h4 className="text-white font-bold mb-1">Market Updates</h4><p className="text-primary-300 text-sm">Get property listings, market trends, and real estate tips delivered to your inbox.</p></div>
              <NewsletterForm />
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-400">
            <p>&copy; {new Date().getFullYear()} Compass Realty Group. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/about" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/about" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="/about" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="px-4 py-2.5 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-primary-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 w-full md:w-64" />
      <button type="submit" className="px-6 py-2.5 bg-primary-600 text-white rounded-r-lg hover:bg-primary-500 transition-colors font-bold text-sm whitespace-nowrap">Subscribe</button>
    </form>
  )
}
