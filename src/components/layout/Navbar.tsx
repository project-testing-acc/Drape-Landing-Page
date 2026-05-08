import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Waitlist', href: '#waitlist' },
]

// Deep links — update with real store URLs when published
const APP_STORE_URL = 'https://apps.apple.com/app/id000000000'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.drape.app'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-panel border-b border-[rgba(240,240,255,0.05)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center glow-primary-sm">
            <span className="text-white font-bold text-sm font-display">D</span>
          </div>
          <span className="text-[#F0F0FF] font-display font-bold text-xl tracking-wide">
            Drape
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[rgba(240,240,255,0.55)] hover:text-[#7B2FFF] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[rgba(240,240,255,0.55)] hover:text-[#F0F0FF] transition-colors px-4 py-2"
          >
            Download App
          </a>
          <a
            href="#waitlist"
            className="gradient-cta text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-all duration-200 glow-cta-sm"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[rgba(240,240,255,0.7)] hover:text-[#F0F0FF] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-panel border-t border-[rgba(240,240,255,0.05)] mt-2 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[rgba(240,240,255,0.6)] hover:text-[#7B2FFF] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 mt-2">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex-1 glass-panel text-[rgba(240,240,255,0.7)] text-sm font-medium px-4 py-2.5 rounded-full text-center border border-[rgba(240,240,255,0.08)] hover:border-[rgba(123,47,255,0.3)]"
            >
              App Store
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex-1 gradient-cta text-white font-semibold px-4 py-2.5 rounded-full text-center text-sm"
            >
              Google Play
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
