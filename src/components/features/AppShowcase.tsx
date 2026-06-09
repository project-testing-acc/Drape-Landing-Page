import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Placeholder screenshots — replace with real app screenshots by uploading image1.png–image5.png to src/assets/
const images = [
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=560&h=1216&fit=crop&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=560&h=1216&fit=crop&q=80',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=560&h=1216&fit=crop&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=560&h=1216&fit=crop&q=80',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=560&h=1216&fit=crop&q=80',
]

export default function AppShowcase() {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-82%'])

  return (
    <section id="app-showcase" ref={targetRef} className="relative h-[250vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full">
          <div className="text-center mb-16 max-w-7xl mx-auto px-6 reveal">
            <p className="label-tag mb-4">Inside the App</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight text-white mb-4">
              A premium <span className="gradient-text-hero">wardrobe experience.</span>
            </h2>
            <p className="text-[#8A8F98] text-lg max-w-2xl mx-auto">
              Explore our intuitive interface designed to make virtual styling effortless and beautiful.
            </p>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 w-12 md:w-48 bg-gradient-to-r from-[#050506] to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-12 md:w-48 bg-gradient-to-l from-[#050506] to-transparent z-20 pointer-events-none" />

            <div className="px-[calc(50%-130px)] md:px-[calc(50%-140px)]">
              <motion.div style={{ x, gap: '8px' }} className="flex pt-4 pb-10 w-max">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="relative flex-none w-[260px] md:w-[280px] aspect-[9/19.5] rounded-[2rem] overflow-hidden border border-white/[0.08] transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.2] z-10"
                    style={{
                      boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5), 0 0 40px rgba(123,47,255,0.1)',
                      background: 'rgba(255,255,255,0.02)',
                    }}
                  >
                    <img
                      src={img}
                      alt={`App screenshot ${i + 1}`}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
