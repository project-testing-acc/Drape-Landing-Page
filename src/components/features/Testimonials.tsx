import t1 from '@/assets/testimonial-1.jpg'
import t2 from '@/assets/testimonial-2.jpg'
import t3 from '@/assets/testimonial-3.jpg'

const testimonials = [
  {
    name: 'Sophia Adler',
    role: 'Fashion Blogger',
    avatar: t1,
    quote: "I used to return 40% of my online orders. Since Drape, I haven't returned a single item. The try-on is genuinely photorealistic — I can't tell it's AI.",
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Creative Director',
    avatar: t2,
    quote: "Finally an app that gets menswear right. The fabric drape on hoodies, structured blazers — it's accurate in a way I didn't think was possible on a phone.",
    rating: 5,
  },
  {
    name: 'Isabelle Moreau',
    role: 'Personal Stylist',
    avatar: t3,
    quote: 'I recommend Drape to every client. Being able to build entire virtual looks before a single purchase saves hours of fitting sessions and real money.',
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#FF2D78]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[rgba(123,47,255,0.04)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto reveal">
          <p className="text-[#7B2FFF] text-xs tracking-[0.25em] uppercase mb-4">What People Say</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0F0FF] leading-tight">
            Loved by style-forward{' '}
            <span className="gradient-text-hero">shoppers worldwide.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal delay-${i * 150} glass-panel rounded-3xl p-8 border border-[rgba(240,240,255,0.06)] hover:border-[rgba(123,47,255,0.2)] transition-all duration-300 flex flex-col ${
                i === 1 ? 'md:-translate-y-4 border-[rgba(123,47,255,0.2)] glow-primary' : ''
              }`}
            >
              <span className="font-display text-6xl text-[rgba(123,47,255,0.2)] leading-none mb-4 select-none">"</span>
              <p className="text-[rgba(240,240,255,0.7)] leading-relaxed text-[15px] flex-1 mb-6">
                {t.quote}
              </p>
              <div className="pt-6 border-t border-[rgba(240,240,255,0.06)] flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[rgba(123,47,255,0.3)]"
                />
                <div className="flex-1">
                  <p className="text-[#F0F0FF] font-semibold text-sm">{t.name}</p>
                  <p className="text-[rgba(240,240,255,0.35)] text-xs">{t.role}</p>
                </div>
                <Stars count={t.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 glass-panel rounded-2xl p-8 border border-[rgba(240,240,255,0.06)] flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-center reveal-scale">
          {[
            { value: '4.9', sub: 'App Store Rating' },
            { value: '2M+', sub: 'Virtual try-ons completed' },
            { value: '94%', sub: 'Would recommend Drape' },
            { value: '73%', sub: 'Reduction in returns' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <span className="font-display text-5xl font-bold gradient-text-primary">{s.value}</span>
              {i === 0 && (
                <div className="flex justify-center mt-2">
                  <Stars count={5} />
                </div>
              )}
              <p className="text-[rgba(240,240,255,0.35)] text-xs mt-2">{s.sub}</p>
              {i < 3 && <div className="w-px h-12 bg-[rgba(240,240,255,0.06)] mx-auto mt-4 hidden md:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
