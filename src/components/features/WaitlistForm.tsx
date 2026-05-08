import { useState } from 'react'
import { supabase } from '@/lib/supabase'

type Status = 'idle' | 'loading' | 'success' | 'error' | 'duplicate'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [platform, setPlatform] = useState<'ios' | 'android' | ''>('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    setErrorMsg('')

    const { error } = await supabase.from('waitlist').insert({
      email: email.trim().toLowerCase(),
      name: name.trim() || null,
      platform: platform || null,
    })

    if (error) {
      if (error.code === '23505') {
        setStatus('duplicate')
      } else {
        setStatus('error')
        setErrorMsg('Something went wrong. Please try again.')
      }
      return
    }

    setStatus('success')
    setEmail('')
    setName('')
    setPlatform('')
  }

  return (
    <section id="waitlist" className="py-28 px-6 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(123,47,255,0.04)] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[rgba(255,45,120,0.06)] blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative reveal">
        {/* Card */}
        <div className="glass-panel rounded-[2rem] p-10 md:p-14 border border-[rgba(240,240,255,0.08)] glow-primary relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B2FFF]/60 to-transparent" />

          {status === 'success' ? (
            <div className="text-center py-8 reveal-scale visible">
              {/* Success ring */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-[rgba(0,240,160,0.15)] animate-pulse-ring" />
                <div className="w-20 h-20 rounded-full bg-[rgba(0,240,160,0.15)] border border-[#00F0A0]/40 flex items-center justify-center mx-auto">
                  <svg className="w-9 h-9 text-[#00F0A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="font-display text-3xl font-bold text-[#F0F0FF] mb-3">You're on the list!</h3>
              <p className="text-[rgba(240,240,255,0.5)] leading-relaxed">
                We'll notify you the moment Drape launches. Get ready to dress smarter.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm text-[rgba(240,240,255,0.4)] hover:text-[#7B2FFF] transition-colors"
              >
                Add another email →
              </button>
            </div>
          ) : (
            <>
              <p className="text-[#7B2FFF] text-xs tracking-[0.25em] uppercase mb-4">Early Access</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F0F0FF] leading-tight mb-3">
                Be first to try{' '}
                <span className="animate-shimmer">Drape.</span>
              </h2>
              <p className="text-[rgba(240,240,255,0.5)] mb-8 leading-relaxed">
                Join the waitlist and get exclusive early access + a free month of Drape Style when we launch.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="waitlist-name" className="block text-xs text-[rgba(240,240,255,0.4)] mb-2 tracking-wide">
                    Your Name (optional)
                  </label>
                  <input
                    id="waitlist-name"
                    type="text"
                    placeholder="Alex Johnson"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[rgba(16,16,28,0.8)] border border-[rgba(240,240,255,0.08)] rounded-xl px-4 py-3 text-[#F0F0FF] placeholder-[rgba(240,240,255,0.2)] text-sm focus:outline-none focus:border-[#7B2FFF]/60 focus:ring-1 focus:ring-[#7B2FFF]/30 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="waitlist-email" className="block text-xs text-[rgba(240,240,255,0.4)] mb-2 tracking-wide">
                    Email Address <span className="text-[#FF2D78]">*</span>
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[rgba(16,16,28,0.8)] border border-[rgba(240,240,255,0.08)] rounded-xl px-4 py-3 text-[#F0F0FF] placeholder-[rgba(240,240,255,0.2)] text-sm focus:outline-none focus:border-[#7B2FFF]/60 focus:ring-1 focus:ring-[#7B2FFF]/30 transition-all"
                  />
                </div>

                {/* Platform */}
                <div>
                  <label className="block text-xs text-[rgba(240,240,255,0.4)] mb-2 tracking-wide">
                    Preferred platform
                  </label>
                  <div className="flex gap-3">
                    {[
                      { value: 'ios', label: 'iOS', icon: (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                      )},
                      { value: 'android', label: 'Android', icon: (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0012 1.5c-.96 0-1.86.23-2.66.63L7.88.65c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 006 8h12a5.983 5.983 0 00-2.47-5.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
                        </svg>
                      )},
                    ].map((p) => (
                      <button
                        key={p.value}
                        type="button"
                        onClick={() => setPlatform(platform === p.value as 'ios' | 'android' ? '' : p.value as 'ios' | 'android')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
                          platform === p.value
                            ? 'bg-[rgba(123,47,255,0.2)] border-[#7B2FFF]/50 text-[#A78BFA]'
                            : 'bg-[rgba(16,16,28,0.8)] border-[rgba(240,240,255,0.08)] text-[rgba(240,240,255,0.4)] hover:border-[rgba(240,240,255,0.2)]'
                        }`}
                      >
                        {p.icon}
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Error messages */}
                {status === 'duplicate' && (
                  <p className="text-[#FF2D78] text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    You're already on the list! We'll be in touch.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-[#FF2D78] text-sm">{errorMsg}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl font-bold text-base text-white gradient-cta glow-cta-sm hover:opacity-90 transition-all duration-200 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Joining…
                    </>
                  ) : (
                    'Join the Waitlist — Free'
                  )}
                </button>

                <p className="text-center text-[rgba(240,240,255,0.25)] text-xs">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </div>

        {/* Social proof */}
        <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
          <div className="flex -space-x-2">
            {['?w=32&h=32&q=1','?w=32&h=32&q=2','?w=32&h=32&q=3','?w=32&h=32&q=4'].map((q,i) => (
              <img
                key={i}
                src={`https://images.unsplash.com/photo-${['1494790108377-be9c29b29330','1507003211169-0a1dd7228f2d','1517841905240-472988babdf9','1534528741775-53994a69daeb'][i]}${q}&fit=crop`}
                alt="member"
                className="w-8 h-8 rounded-full border-2 border-[#07070F] object-cover"
              />
            ))}
          </div>
          <span className="text-[rgba(240,240,255,0.4)] text-sm">
            <span className="text-[#F0F0FF] font-semibold">12,400+</span> people already joined
          </span>
        </div>
      </div>
    </section>
  )
}
