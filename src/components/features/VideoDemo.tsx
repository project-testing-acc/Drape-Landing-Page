import { useState } from 'react'

export default function VideoDemo() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(123,47,255,0.03)] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto reveal">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-[#7B2FFF] text-xs tracking-[0.25em] uppercase mb-4">See It Live</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F0F0FF] leading-tight">
            Watch Drape in{' '}
            <span className="gradient-text-hero">30 seconds.</span>
          </h2>
        </div>

        {/* Video frame */}
        <div className="relative rounded-2xl overflow-hidden glass-panel border border-[rgba(240,240,255,0.08)] glow-primary reveal-scale">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B2FFF]/50 to-transparent" />
          
          {!playing ? (
            <div className="relative aspect-video bg-[#10101C] cursor-pointer group" onClick={() => setPlaying(true)}>
              {/* Thumbnail */}
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop&q=80"
                alt="Drape app demo preview"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-300"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070F]/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[rgba(123,47,255,0.15)]" />

              {/* Play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#7B2FFF]/30 animate-ping scale-150" />
                  <div className="relative w-20 h-20 rounded-full bg-[#7B2FFF] flex items-center justify-center glow-primary group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[#F0F0FF] font-semibold text-base">Watch the demo</p>
                  <p className="text-[rgba(240,240,255,0.4)] text-sm">30 seconds · No sound required</p>
                </div>
              </div>

              {/* Corner tags */}
              <div className="absolute top-4 left-4">
                <span className="glass-panel-primary rounded-full px-3 py-1 text-xs text-[#A78BFA] font-medium border border-[rgba(123,47,255,0.3)]">
                  ● LIVE DEMO
                </span>
              </div>
            </div>
          ) : (
            <div className="aspect-video bg-black flex items-center justify-center">
              {/* Embed a real YouTube/Vimeo video here. Using placeholder for demo. */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                title="Drape App Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* Bottom bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#10101C]/80 border-t border-[rgba(240,240,255,0.06)]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[rgba(123,47,255,0.2)] flex items-center justify-center">
                <span className="text-[#7B2FFF] font-bold text-xs font-display">D</span>
              </div>
              <div>
                <p className="text-[#F0F0FF] text-sm font-semibold">Drape — Virtual Try-On</p>
                <p className="text-[rgba(240,240,255,0.35)] text-xs">Official product demo · 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[rgba(240,240,255,0.3)] text-xs">Share</span>
              <div className="flex gap-1.5">
                {['T','I','L'].map((s) => (
                  <button key={s} className="w-7 h-7 glass-panel rounded-full text-[rgba(240,240,255,0.4)] hover:text-[#7B2FFF] text-[10px] font-bold transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats below video */}
        <div className="mt-8 grid grid-cols-3 gap-4 reveal delay-200">
          {[
            { value: '< 2s', label: 'Generation time' },
            { value: '98.4%', label: 'Accuracy rate' },
            { value: '40M+', label: 'Training images' },
          ].map((s) => (
            <div key={s.label} className="glass-panel rounded-2xl p-5 text-center border border-[rgba(240,240,255,0.06)] hover:border-[rgba(123,47,255,0.2)] transition-all">
              <p className="font-display text-2xl font-bold gradient-text-primary">{s.value}</p>
              <p className="text-[rgba(240,240,255,0.4)] text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
