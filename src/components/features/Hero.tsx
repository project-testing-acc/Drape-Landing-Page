import heroBg from '@/assets/hero-bg.jpg'
import phoneMockup from '@/assets/phone-mockup.png'

// Replace with your actual store URLs
const APP_STORE_URL = 'https://apps.apple.com/app/id000000000'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.drape.app'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Drape hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07070F] via-[#07070F]/90 to-[#07070F]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070F]/40 via-transparent to-[#07070F]" />
        {/* Purple tint overlay */}
        <div className="absolute inset-0 bg-[rgba(123,47,255,0.08)]" />
      </div>

      {/* Decorative circles — Drape purple */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full border border-[rgba(123,47,255,0.08)] animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full border border-[rgba(123,47,255,0.12)] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-[rgba(123,47,255,0.06)] blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-[rgba(255,45,120,0.06)] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div className="flex flex-col gap-6 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-panel-primary rounded-full px-4 py-2 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0A0] animate-pulse" />
              <span className="text-[#A78BFA] text-xs font-medium tracking-widest uppercase">
                AI-Powered Virtual Try-On
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-[#F0F0FF]">
              Wear It Before{' '}
              <span className="gradient-text-hero">You Buy It.</span>
            </h1>

            {/* Sub */}
            <p className="text-[rgba(240,240,255,0.55)] text-lg leading-relaxed max-w-md">
              Upload your photo, pick any outfit. Drape's AI places the clothes
              on <em>you</em> — your body, your style, your confidence.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8 py-2">
              {[
                { value: '2M+', label: 'Outfits tried', color: 'text-[#A78BFA]' },
                { value: '4.9★', label: 'App rating', color: 'text-[#FF2D78]' },
                { value: '180+', label: 'Brand partners', color: 'text-[#00F0A0]' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className={`font-display text-2xl font-bold ${s.color}`}>{s.value}</span>
                  <span className="text-[rgba(240,240,255,0.35)] text-xs tracking-wide">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#waitlist"
                className="gradient-cta text-white font-semibold text-base px-7 py-3.5 rounded-full glow-cta hover:opacity-90 transition-all duration-200 active:scale-95"
              >
                Join Waitlist — Free
              </a>
              <a
                href="#how-it-works"
                className="group flex items-center gap-2 text-[rgba(240,240,255,0.6)] hover:text-[#F0F0FF] transition-colors text-base font-medium"
              >
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center group-hover:border-[rgba(123,47,255,0.4)] transition-colors">
                  <svg className="w-4 h-4 text-[#7B2FFF] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                Watch demo
              </a>
            </div>

            {/* Download badges */}
            <div className="flex items-center gap-3 pt-2 flex-wrap">
              <span className="text-[rgba(240,240,255,0.3)] text-sm">Download on</span>
              <div className="flex gap-2">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel rounded-lg px-3 py-2 flex items-center gap-1.5 hover:border-[rgba(123,47,255,0.4)] transition-all group"
                >
                  <svg className="w-4 h-4 text-[rgba(240,240,255,0.6)] group-hover:text-[#A78BFA] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span className="text-[rgba(240,240,255,0.6)] group-hover:text-[#F0F0FF] text-xs transition-colors">App Store</span>
                </a>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel rounded-lg px-3 py-2 flex items-center gap-1.5 hover:border-[rgba(123,47,255,0.4)] transition-all group"
                >
                  <svg className="w-4 h-4 text-[rgba(240,240,255,0.6)] group-hover:text-[#A78BFA] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.3.17.65.19.96.04L15.81 12 3.18.2c-.31-.15-.66-.13-.96.04C1.9.42 1.75.83 1.75 1.25v21.5c0 .42.15.83.43 1.01zM16.5 12l3.34 3.34-12.21 6.86L16.5 12zM7.63 2.8l12.21 6.86L16.5 12 7.63 2.8z" />
                  </svg>
                  <span className="text-[rgba(240,240,255,0.6)] group-hover:text-[#F0F0FF] text-xs transition-colors">Google Play</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right — phone mockup */}
          <div className="relative flex justify-center lg:justify-end items-center">
            <div className="absolute w-80 h-80 rounded-full bg-[rgba(123,47,255,0.12)] blur-3xl" />
            <div className="absolute w-60 h-60 rounded-full bg-[rgba(255,45,120,0.08)] blur-2xl translate-x-16 translate-y-16" />

            <div className="relative animate-float z-10">
              <img
                src={phoneMockup}
                alt="Drape app interface"
                className="w-64 md:w-72 lg:w-80 drop-shadow-2xl"
              />
              {/* Floating card — top left */}
              <div className="absolute -left-8 top-16 glass-panel-primary rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl border border-[rgba(123,47,255,0.25)]">
                <div className="w-9 h-9 rounded-full bg-[rgba(0,240,160,0.15)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#00F0A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#F0F0FF] text-xs font-semibold">Perfect Fit!</p>
                  <p className="text-[rgba(240,240,255,0.5)] text-xs">AI matched your size</p>
                </div>
              </div>
              {/* Floating card — bottom right */}
              <div className="absolute -right-6 bottom-24 glass-panel rounded-2xl px-4 py-3 shadow-xl border border-[rgba(240,240,255,0.08)]">
                <p className="text-[rgba(240,240,255,0.4)] text-[10px] mb-1 tracking-wide uppercase">Try-ons today</p>
                <div className="flex items-end gap-1">
                  <span className="font-display text-2xl font-bold text-[#A78BFA]">48K</span>
                  <span className="text-[#00F0A0] text-xs mb-1">+12%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07070F] to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[rgba(240,240,255,0.2)] text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[rgba(123,47,255,0.5)] to-transparent" />
      </div>
    </section>
  )
}
