'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { Menu, X, Home, Phone } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Listings', href: '/listings' },
  { name: 'Agents', href: '/agents' },
  { name: 'Neighborhoods', href: '/neighborhoods' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bannerHeight, setBannerHeight] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => { setScrolled(window.scrollY > 10) }, [])

  useEffect(() => {
    const banner = document.querySelector('[class*="bg-amber-500"]')
    if (banner) {
      setBannerHeight(banner.getBoundingClientRect().height)
      const observer = new MutationObserver(() => {
        if (!document.querySelector('[class*="bg-amber-500"]')) setBannerHeight(0)
      })
      observer.observe(document.body, { childList: true, subtree: true })
      return () => { observer.disconnect(); window.removeEventListener('scroll', handleScroll) }
    }
  }, [handleScroll])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const getActiveTab = () => {
    if (pathname === '/') return 'Home'
    for (const item of navigationItems) {
      if (item.href !== '/' && pathname.startsWith(item.href)) return item.name
    }
    return null
  }

  const activeTab = getActiveTab()

  return (
    <header className={clsx('bg-primary-900 sticky z-50 transition-shadow duration-200', scrolled && 'shadow-lg shadow-primary-950/20')} style={{ top: bannerHeight + 'px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200">
            <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
              <Home className="w-6 h-6 text-accent-400" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-white leading-tight font-display">Compass Realty</span>
              <span className="block text-xs text-primary-300 font-medium -mt-0.5">Group</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link key={item.name} href={item.href} className={clsx('px-4 py-2 rounded-lg text-sm font-medium transition-colors', activeTab === item.name ? 'bg-white/15 text-white' : 'text-primary-100 hover:text-white hover:bg-white/10')}>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <a href="tel:5556789012" className="hidden md:flex items-center text-primary-200 hover:text-white text-sm transition-colors">
              <Phone className="w-4 h-4 mr-1.5" />(555) 678-9012
            </a>
            <Link href="/contact" className="hidden sm:inline-flex items-center bg-accent-500 text-white px-5 py-2 rounded-lg hover:bg-accent-600 transition-colors duration-200 font-bold text-sm">
              Find Your Home
            </Link>
            <button type="button" className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-primary-100 hover:text-white hover:bg-white/10" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">
            <nav className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className={clsx('px-4 py-3 rounded-lg text-sm font-medium transition-colors', activeTab === item.name ? 'bg-white/15 text-white' : 'text-primary-100 hover:text-white hover:bg-white/10')}>
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mx-4 mt-2 text-center bg-accent-500 text-white px-5 py-3 rounded-lg hover:bg-accent-600 transition-colors duration-200 font-bold text-sm">
                Find Your Home
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
