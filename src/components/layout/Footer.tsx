const footerLinks = {
  Product: ['Features', 'How It Works', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press Kit', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  Support: ['Help Center', 'Community', 'Status Page', 'API Docs'],
}

const APP_STORE_URL = 'https://apps.apple.com/app/id000000000'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.drape.app'

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(240,240,255,0.05)] pt-20 pb-10 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(123,47,255,0.3)] to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center glow-primary-sm">
                <span className="text-white font-bold text-sm font-display">D</span>
              </div>
              <span className="text-[#F0F0FF] font-display font-bold text-xl">Drape</span>
            </a>
            <p className="text-[rgba(240,240,255,0.3)] text-sm leading-relaxed mb-6">
              The AI virtual try-on app that makes fashion personal again.
            </p>
            {/* Store badges */}
            <div className="flex flex-col gap-2 mb-6">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass-panel rounded-lg px-3 py-2 hover:border-[rgba(123,47,255,0.3)] transition-all group w-fit"
              >
                <svg className="w-4 h-4 text-[rgba(240,240,255,0.5)] group-hover:text-[#A78BFA] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-[rgba(240,240,255,0.5)] group-hover:text-[#F0F0FF] text-xs transition-colors">App Store</span>
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass-panel rounded-lg px-3 py-2 hover:border-[rgba(123,47,255,0.3)] transition-all group w-fit"
              >
                <svg className="w-4 h-4 text-[rgba(240,240,255,0.5)] group-hover:text-[#A78BFA] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.65.19.96.04L15.81 12 3.18.2c-.31-.15-.66-.13-.96.04C1.9.42 1.75.83 1.75 1.25v21.5c0 .42.15.83.43 1.01zM16.5 12l3.34 3.34-12.21 6.86L16.5 12zM7.63 2.8l12.21 6.86L16.5 12 7.63 2.8z" />
                </svg>
                <span className="text-[rgba(240,240,255,0.5)] group-hover:text-[#F0F0FF] text-xs transition-colors">Google Play</span>
              </a>
            </div>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: 'T', name: 'Twitter' },
                { label: 'I', name: 'Instagram' },
                { label: 'K', name: 'TikTok' },
              ].map((s) => (
                <a
                  key={s.name}
                  href="#"
                  className="w-9 h-9 glass-panel rounded-full flex items-center justify-center hover:border-[rgba(123,47,255,0.35)] hover:text-[#7B2FFF] text-[rgba(240,240,255,0.35)] transition-all"
                  aria-label={s.name}
                >
                  <span className="text-xs font-bold">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-[#F0F0FF] font-semibold text-sm mb-5 tracking-wide">{category}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[rgba(240,240,255,0.3)] hover:text-[#7B2FFF] text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[rgba(240,240,255,0.05)]">
          <p className="text-[rgba(240,240,255,0.2)] text-sm">
            © 2026 Drape Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F0A0] animate-pulse" />
            <span className="text-[rgba(240,240,255,0.2)] text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
