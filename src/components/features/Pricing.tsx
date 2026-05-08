import { useState } from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    tagline: 'Try before you commit',
    features: [
      '10 try-ons per month',
      'Access to 20+ brands',
      'Basic AI draping',
      'Save up to 5 looks',
      'Standard resolution',
    ],
    cta: 'Get Started Free',
    highlight: false,
    accentColor: 'text-[rgba(240,240,255,0.5)]',
    checkBg: 'bg-[rgba(240,240,255,0.06)]',
    checkColor: 'text-[rgba(240,240,255,0.4)]',
  },
  {
    name: 'Style',
    price: { monthly: 9.99, yearly: 7.99 },
    tagline: 'For the fashion-forward',
    features: [
      'Unlimited try-ons',
      'All 180+ brands',
      'Premium AI draping',
      'Unlimited saved looks',
      'HD & shareable renders',
      'AI stylist recommendations',
      'Priority processing',
    ],
    cta: 'Start Free Trial',
    highlight: true,
    accentColor: 'text-[#A78BFA]',
    checkBg: 'bg-[rgba(123,47,255,0.15)]',
    checkColor: 'text-[#A78BFA]',
  },
  {
    name: 'Pro',
    price: { monthly: 24.99, yearly: 19.99 },
    tagline: 'For stylists & creators',
    features: [
      'Everything in Style',
      'Batch try-on (10 at once)',
      'Brand API access',
      'White-label renders',
      'Advanced analytics',
      'Custom brand partnerships',
      'Dedicated support',
    ],
    cta: 'Contact Sales',
    highlight: false,
    accentColor: 'text-[rgba(240,240,255,0.5)]',
    checkBg: 'bg-[rgba(240,240,255,0.06)]',
    checkColor: 'text-[rgba(240,240,255,0.4)]',
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[rgba(255,45,120,0.04)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto reveal">
          <p className="text-[#7B2FFF] text-xs tracking-[0.25em] uppercase mb-4">Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0F0FF] leading-tight mb-5">
            Simple plans,{' '}
            <span className="gradient-text-hero">real value.</span>
          </h2>
          <p className="text-[rgba(240,240,255,0.45)] text-lg mb-8">
            Start free. Upgrade when you love it. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center glass-panel rounded-full p-1 gap-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !yearly ? 'gradient-primary text-white' : 'text-[rgba(240,240,255,0.45)] hover:text-[#F0F0FF]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                yearly ? 'gradient-primary text-white' : 'text-[rgba(240,240,255,0.45)] hover:text-[#F0F0FF]'
              }`}
            >
              Yearly
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${yearly ? 'bg-white/20 text-white' : 'bg-green-500/20 text-green-400'}`}>
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal delay-${i * 150} rounded-3xl p-8 flex flex-col relative overflow-hidden transition-all duration-300 ${
                plan.highlight
                  ? 'glass-panel-primary border border-[rgba(123,47,255,0.3)] glow-primary md:-mt-4 md:-mb-4'
                  : 'glass-panel border border-[rgba(240,240,255,0.06)] hover:border-[rgba(123,47,255,0.15)]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B2FFF]/70 to-transparent" />
              )}
              {plan.highlight && (
                <div className="absolute top-4 right-6">
                  <span className="gradient-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs tracking-widest uppercase mb-1 ${plan.highlight ? 'text-[#A78BFA]' : 'text-[rgba(240,240,255,0.4)]'}`}>{plan.name}</p>
                <p className="text-[rgba(240,240,255,0.35)] text-sm">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span className="font-display text-5xl font-bold text-[#F0F0FF]">
                    ${yearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-[rgba(240,240,255,0.35)] text-sm mb-2">/month</span>
                  )}
                </div>
                {plan.price.monthly === 0 && (
                  <span className="text-[rgba(240,240,255,0.3)] text-sm">Forever free</span>
                )}
                {yearly && plan.price.monthly > 0 && (
                  <p className="text-green-400 text-xs mt-1">
                    Save ${((plan.price.monthly - plan.price.yearly) * 12).toFixed(0)}/year
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.checkBg}`}>
                      <Check className={`w-3 h-3 ${plan.checkColor}`} />
                    </div>
                    <span className="text-[rgba(240,240,255,0.6)] text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-200 active:scale-95 ${
                  plan.highlight
                    ? 'gradient-cta text-white glow-cta-sm hover:opacity-90'
                    : 'glass-panel border border-[rgba(240,240,255,0.08)] text-[rgba(240,240,255,0.7)] hover:border-[rgba(123,47,255,0.3)] hover:text-[#A78BFA]'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-[rgba(240,240,255,0.25)] text-sm mt-10 reveal">
          All plans include a 14-day free trial · No credit card required
        </p>
      </div>
    </section>
  )
}
