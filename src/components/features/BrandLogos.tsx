const brands = [
  'Zara', 'H&M', 'Mango', 'ASOS', 'Topshop', 'Uniqlo', "Levi's", 'Calvin Klein',
]

export default function BrandLogos() {
  return (
    <section className="py-14 border-y border-[rgba(240,240,255,0.05)] overflow-hidden relative reveal">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-[rgba(240,240,255,0.25)] text-xs tracking-[0.25em] uppercase">
          Try on clothes from 180+ brands
        </p>
      </div>
      <div className="flex gap-0 w-full overflow-hidden">
        <div className="flex gap-16 items-center animate-[marquee_22s_linear_infinite] whitespace-nowrap min-w-max px-8">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="text-[rgba(240,240,255,0.18)] hover:text-[#7B2FFF] transition-colors font-display text-xl font-semibold tracking-wider cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
