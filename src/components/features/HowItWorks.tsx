const steps = [
  {
    number: '01',
    title: 'Upload Your Photo',
    desc: "Take or upload a full-body photo. Drape's AI scans your proportions, skin tone, and pose in seconds.",
    tag: 'Takes 3 seconds',
    color: 'text-[#A78BFA]',
    tagBg: 'bg-[rgba(123,47,255,0.12)]',
    dot: 'bg-[#7B2FFF]',
    borderColor: 'border-[rgba(123,47,255,0.3)]',
    glowClass: 'glass-panel-primary',
  },
  {
    number: '02',
    title: 'Pick Your Outfit',
    desc: 'Browse thousands of real items from top brands, or paste a product URL from any retailer.',
    tag: '180+ brands',
    color: 'text-[#FF6B9D]',
    tagBg: 'bg-[rgba(255,45,120,0.12)]',
    dot: 'bg-[#FF2D78]',
    borderColor: 'border-[rgba(255,45,120,0.3)]',
    glowClass: 'glass-panel-cta',
  },
  {
    number: '03',
    title: 'See Yourself in It',
    desc: 'Watch the AI drape the garment on your body with realistic fabric physics — lighting, shadows and all.',
    tag: 'Photorealistic',
    color: 'text-[#00F0A0]',
    tagBg: 'bg-[rgba(0,240,160,0.12)]',
    dot: 'bg-[#00F0A0]',
    borderColor: 'border-[rgba(0,240,160,0.3)]',
    glowClass: 'glass-panel',
  },
  {
    number: '04',
    title: 'Buy with Confidence',
    desc: 'Know exactly how it fits before you spend a penny. One tap to checkout or save it to your wishlist.',
    tag: 'Zero returns',
    color: 'text-[#A78BFA]',
    tagBg: 'bg-[rgba(123,47,255,0.12)]',
    dot: 'bg-[#7B2FFF]',
    borderColor: 'border-[rgba(123,47,255,0.3)]',
    glowClass: 'glass-panel-primary',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(123,47,255,0.02)] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[rgba(255,45,120,0.05)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto reveal">
          <p className="text-[#7B2FFF] text-xs tracking-[0.25em] uppercase mb-4">How It Works</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0F0FF] leading-tight mb-5">
            Four steps to your{' '}
            <span className="gradient-text-hero">perfect wardrobe.</span>
          </h2>
          <p className="text-[rgba(240,240,255,0.45)] text-lg">
            From photo to full outfit in under 10 seconds. No measurements needed.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="hidden lg:block absolute left-[calc(50%-0.5px)] top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-[rgba(123,47,255,0.3)] to-transparent" />

          <div className="flex flex-col gap-6 lg:gap-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 1
              return (
                <div
                  key={i}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Card */}
                  <div className={`w-full lg:w-[calc(50%-60px)] ${isEven ? 'lg:pl-12' : 'lg:pr-12'} reveal${isEven ? '-right' : '-left'} delay-${i * 100}`}>
                    <div className="glass-panel rounded-2xl p-8 border border-[rgba(240,240,255,0.06)] hover:border-[rgba(123,47,255,0.2)] transition-all duration-300 group">
                      <div className={`inline-flex items-center gap-1.5 ${step.tagBg} rounded-full px-3 py-1 mb-5`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${step.dot}`} />
                        <span className={`${step.color} text-xs font-medium`}>{step.tag}</span>
                      </div>
                      <h3 className={`font-display text-2xl font-bold text-[#F0F0FF] mb-3 group-hover:${step.color} transition-colors duration-300`}>
                        {step.title}
                      </h3>
                      <p className="text-[rgba(240,240,255,0.45)] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex w-[120px] justify-center flex-shrink-0">
                    <div className={`w-14 h-14 rounded-full ${step.glowClass} border-2 ${step.borderColor} flex items-center justify-center`}>
                      <span className={`font-display ${step.color} font-bold text-sm`}>{step.number}</span>
                    </div>
                  </div>

                  {/* Mobile number badge */}
                  <div className="lg:hidden flex items-center gap-3 self-start">
                    <div className={`w-10 h-10 rounded-full ${step.glowClass} border ${step.borderColor} flex items-center justify-center`}>
                      <span className={`font-display ${step.color} font-bold text-xs`}>{step.number}</span>
                    </div>
                  </div>

                  <div className="hidden lg:block w-[calc(50%-60px)]" />
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-16 reveal">
          <a
            href="#waitlist"
            className="gradient-cta text-white font-semibold text-base px-8 py-4 rounded-full glow-cta hover:opacity-90 transition-all duration-200 inline-block active:scale-95"
          >
            Start Trying On Now
          </a>
        </div>
      </div>
    </section>
  )
}
