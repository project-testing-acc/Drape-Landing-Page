const APP_STORE_URL = 'https://apps.apple.com/app/id000000000'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.drape.app'

export default function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(123,47,255,0.05)] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[rgba(255,45,120,0.07)] blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative reveal-scale">
        <div className="glass-panel-primary rounded-[2.5rem] p-12 md:p-20 text-center border border-[rgba(123,47,255,0.2)] glow-primary relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B2FFF]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(123,47,255,0.06)] via-transparent to-[rgba(255,45,120,0.06)] pointer-events-none rounded-[2.5rem]" />

          <p className="text-[rgba(123,47,255,0.8)] text-xs tracking-[0.3em] uppercase mb-5">Your wardrobe, reimagined</p>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-[#F0F0FF] leading-tight mb-6">
            Try on the future
            <br />
            <span className="animate-shimmer">of fashion.</span>
          </h2>

          <p className="text-[rgba(240,240,255,0.45)] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join over 500,000 style-conscious shoppers who never buy blind anymore.
            Download Drape and try your first outfit free today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#waitlist"
              className="gradient-cta text-white font-bold text-base px-10 py-4 rounded-full glow-cta hover:opacity-90 transition-all duration-200 active:scale-95 w-full sm:w-auto text-center"
            >
              Join Waitlist — Free
            </a>
            <a
              href="#features"
              className="glass-panel text-[rgba(240,240,255,0.7)] font-medium text-base px-8 py-4 rounded-full border border-[rgba(240,240,255,0.08)] hover:border-[rgba(123,47,255,0.3)] hover:text-[#A78BFA] transition-all duration-200 w-full sm:w-auto text-center"
            >
              Learn More
            </a>
          </div>

          {/* App store badges */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-xl px-5 py-3 flex items-center gap-3 hover:border-[rgba(123,47,255,0.35)] transition-all cursor-pointer group"
            >
              <svg className="w-6 h-6 text-[rgba(240,240,255,0.7)] group-hover:text-[#A78BFA] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-[rgba(240,240,255,0.35)] text-[10px]">Download on the</p>
                <p className="text-[#F0F0FF] font-semibold text-sm">App Store</p>
              </div>
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-xl px-5 py-3 flex items-center gap-3 hover:border-[rgba(123,47,255,0.35)] transition-all cursor-pointer group"
            >
              <svg className="w-6 h-6 text-[rgba(240,240,255,0.7)] group-hover:text-[#A78BFA] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.65.19.96.04L15.81 12 3.18.2c-.31-.15-.66-.13-.96.04C1.9.42 1.75.83 1.75 1.25v21.5c0 .42.15.83.43 1.01zM16.5 12l3.34 3.34-12.21 6.86L16.5 12zM7.63 2.8l12.21 6.86L16.5 12 7.63 2.8z" />
              </svg>
              <div className="text-left">
                <p className="text-[rgba(240,240,255,0.35)] text-[10px]">Get it on</p>
                <p className="text-[#F0F0FF] font-semibold text-sm">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
