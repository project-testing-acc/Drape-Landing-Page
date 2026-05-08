import featureImg from '@/assets/feature-tryon.jpg'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Your Photo, Your Fit',
    desc: 'Upload a single full-body photo and let Drape create a precise digital twin that matches your proportions perfectly.',
    accent: 'text-[#A78BFA]',
    bg: 'bg-[rgba(123,47,255,0.12)]',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'AI Draping Engine',
    desc: 'Photorealistic fabric simulation understands drape, wrinkle, and fit — no awkward digital mannequin stiffness.',
    accent: 'text-[#FF2D78]',
    bg: 'bg-[rgba(255,45,120,0.12)]',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: 'Shop Directly',
    desc: "Loved the look? One tap takes you straight to checkout on the brand's site — already knowing your size.",
    accent: 'text-[#00F0A0]',
    bg: 'bg-[rgba(0,240,160,0.12)]',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
    title: 'Share Your Style',
    desc: 'Save looks and share your virtual outfits with friends before you commit to anything real.',
    accent: 'text-[#A78BFA]',
    bg: 'bg-[rgba(123,47,255,0.12)]',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    title: 'AI Stylist',
    desc: "An AI stylist learns your taste and proactively suggests outfits you'll actually love from 180+ brands.",
    accent: 'text-[#FF2D78]',
    bg: 'bg-[rgba(255,45,120,0.12)]',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Private & Secure',
    desc: 'Your photos are processed on-device and never stored without your explicit permission.',
    accent: 'text-[#00F0A0]',
    bg: 'bg-[rgba(0,240,160,0.12)]',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgba(123,47,255,0.04)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          <div className="flex-1 reveal-left">
            <p className="text-[#7B2FFF] text-xs tracking-[0.25em] uppercase mb-4">Why Drape</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0F0FF] leading-tight">
              Fashion tech that feels{' '}
              <em className="not-italic gradient-text-hero">like magic.</em>
            </h2>
          </div>
          <div className="flex-1 max-w-md reveal-right">
            <p className="text-[rgba(240,240,255,0.45)] text-lg leading-relaxed">
              We combined computer vision, generative AI, and deep knowledge of
              fabric physics to create try-ons that are genuinely believable.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-10 h-px bg-[rgba(123,47,255,0.5)]" />
              <span className="text-[rgba(123,47,255,0.7)] text-sm italic font-display">No filters, just you.</span>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className={`reveal delay-${Math.min(i * 100, 500)} glass-panel rounded-2xl p-7 group hover:border-[rgba(123,47,255,0.25)] hover:bg-[rgba(123,47,255,0.03)] transition-all duration-300 cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center ${f.accent} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <h3 className={`font-display text-lg font-semibold text-[#F0F0FF] mb-2 group-hover:${f.accent} transition-colors duration-300`}>{f.title}</h3>
              <p className="text-[rgba(240,240,255,0.45)] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Feature image */}
        <div className="mt-20 relative rounded-3xl overflow-hidden glass-panel border border-[rgba(240,240,255,0.06)] group reveal-scale">
          <img
            src={featureImg}
            alt="Drape AI try-on feature"
            className="w-full h-72 md:h-96 object-cover object-center brightness-50 group-hover:brightness-60 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07070F]/90 via-[#07070F]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(123,47,255,0.15)] to-transparent" />
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div>
              <p className="text-[rgba(123,47,255,0.8)] text-xs tracking-widest uppercase mb-3">Powered by</p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-[#F0F0FF] mb-4">
                Drape Vision AI™
              </h3>
              <p className="text-[rgba(240,240,255,0.55)] max-w-sm text-base leading-relaxed">
                Our proprietary model trained on 40 million garment images understands
                fabric, fit, and body geometry like no other.
              </p>
            </div>
          </div>
          {/* Stat pills */}
          <div className="absolute bottom-6 right-6 flex gap-3">
            <div className="glass-panel-primary rounded-full px-4 py-2">
              <span className="text-[#A78BFA] text-sm font-semibold">98.4% accuracy</span>
            </div>
            <div className="glass-panel rounded-full px-4 py-2">
              <span className="text-[rgba(240,240,255,0.6)] text-sm">&lt;2s generation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
