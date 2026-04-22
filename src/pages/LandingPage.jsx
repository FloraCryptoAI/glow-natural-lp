import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Leaf, Calendar, BarChart3, Search, Zap } from 'lucide-react';

// ── Brand — pink palette ──────────────────────────────────────────────────────
const P   = '#FB45A9';
const PD  = '#E03594';
const PL  = '#FFF5FA';
const PL2 = '#FFE4F2';

const LOGO = '/logo.png';
const HERO = '/hero.jpg';

// ── Email Capture ─────────────────────────────────────────────────────────────
function EmailCapture({ dark = false }) {
  const [email, setEmail]         = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email.');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="flex items-center gap-3 px-6 py-4 rounded-2xl"
        style={{
          background: dark ? 'rgba(255,255,255,0.12)' : PL2,
          border: `1px solid ${dark ? 'rgba(255,255,255,0.2)' : PL2}`,
        }}
      >
        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: dark ? '#fff' : P }}>
          <Check className="w-4 h-4" style={{ color: dark ? P : '#fff' }} />
        </div>
        <p className={`font-semibold text-sm ${dark ? 'text-white' : 'text-stone-700'}`}>
          Amazing! You'll be the first to know when we launch. 🌸
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="w-full">
      {/* ── Mobile: stacked elements ── */}
      <div className="flex flex-col gap-3 sm:hidden">
        <input
          type="email"
          value={email}
          onChange={e => { setEmail(e.target.value); setError(''); }}
          placeholder="Enter your best email"
          className="w-full px-5 py-4 rounded-full text-sm outline-none"
          style={{
            background: dark ? 'rgba(255,255,255,0.15)' : '#fff',
            border: dark ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(0,0,0,0.10)',
            color: dark ? '#fff' : '#1c1c1c',
            caretColor: P,
          }}
        />
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-bold transition-all hover:opacity-90 active:scale-[0.98]"
          style={{
            background: dark ? '#fff' : `linear-gradient(135deg, ${P}, ${PD})`,
            color: dark ? P : '#fff',
            boxShadow: dark ? 'none' : `0 2px 16px ${P}66`,
          }}
        >
          Notify me <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* ── Desktop: pill ── */}
      <div
        className="hidden sm:flex gap-1.5 p-1.5 rounded-full"
        style={{
          background: dark ? 'rgba(255,255,255,0.12)' : '#fff',
          boxShadow: dark ? 'none' : '0 4px 24px rgba(0,0,0,0.08)',
          border: dark ? '1px solid rgba(255,255,255,0.18)' : '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <input
          type="email"
          value={email}
          onChange={e => { setEmail(e.target.value); setError(''); }}
          placeholder="Enter your best email"
          className="flex-1 px-5 py-3.5 bg-transparent text-sm outline-none rounded-full"
          style={{ color: dark ? '#fff' : '#1c1c1c', caretColor: P }}
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold whitespace-nowrap transition-all hover:opacity-90 active:scale-[0.98]"
          style={{
            background: dark ? '#fff' : `linear-gradient(135deg, ${P}, ${PD})`,
            color: dark ? P : '#fff',
            boxShadow: dark ? 'none' : `0 2px 16px ${P}66`,
          }}
        >
          Notify me <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {error && <p className="text-red-400 text-xs mt-2 ml-2">{error}</p>}
    </form>
  );
}

// ── Scroll reveal ─────────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-72px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ══ HEADER ══════════════════════════════════════════════════════════ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="NatGlow" className="w-11 h-11 rounded-2xl object-cover" />
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              color: '#535353',
              fontSize: '16px',
              letterSpacing: '-0.01em',
            }}>
              NatGlow
            </span>
          </div>

          <a
            href="https://app.natglow.app/Landing"
            className="flex items-center gap-1.5 text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all hover:opacity-90 active:scale-95"
            style={{ background: `linear-gradient(135deg, ${P}, ${PD})` }}
          >
            Get started <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* ══ HERO ════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-160px', right: '-160px',
            width: '640px', height: '640px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${PL2} 0%, transparent 70%)`,
            opacity: 0.8,
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-7"
              style={{ background: PL, color: PD, border: `1px solid ${PL2}` }}
            >
              🌸 Waitlist now open
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl lg:text-[3.75rem] font-extrabold text-stone-900 leading-[1.1] tracking-tight mb-6"
            >
              Your hair deserves
              <br />a routine that
              <br /><span style={{ color: P }}>actually works.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.13, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-stone-500 leading-relaxed mb-9 max-w-lg"
            >
              NatGlow analyzes your habits and builds a personalized hair care routine
              with natural recipes that truly work — no harsh chemicals, no guesswork.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.19, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="https://app.natglow.app/Landing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-base font-bold transition-all hover:opacity-90 active:scale-[0.98]"
                style={{ background: `linear-gradient(135deg, ${P}, ${PD})`, boxShadow: `0 4px 24px ${P}55` }}
              >
                Start my diagnosis <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-xs text-stone-400 mt-4">Free · Takes less than 60 seconds</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-8 mt-12"
            >
              {[
                { num: '2,000+',  label: 'already on the waitlist' },
                { num: '100%',    label: 'natural & chemical-free' },
                { num: '21 days', label: 'to see real results' },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-extrabold" style={{ color: i === 0 ? P : '#1c1c1c' }}>{s.num}</p>
                  <p className="text-xs text-stone-400 mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — hero image */}
          <motion.div
            initial={{ opacity: 0, x: 0, y: 24 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 32px 80px rgba(251,69,169,0.18)' }}
            >
              <img
                src={HERO}
                alt="Healthy hair"
                className="w-full object-cover object-top h-72 lg:h-[560px]"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(251,69,169,0.08) 0%, transparent 50%)' }}
              />
            </div>

            {/* Floating card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -24, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="hidden lg:flex absolute -left-12 top-12 bg-white rounded-2xl px-5 py-4 items-center gap-3"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10)', border: '1px solid rgba(0,0,0,0.05)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: PL }}>
                <Search className="w-5 h-5" style={{ color: P }} />
              </div>
              <div>
                <p className="text-[11px] text-stone-400 font-medium">Diagnosis</p>
                <p className="font-bold text-stone-800 text-sm">Personalized</p>
              </div>
            </motion.div>

            {/* Floating card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 24, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="hidden lg:flex absolute -right-10 bottom-16 bg-white rounded-2xl px-5 py-4 items-center gap-3"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10)', border: '1px solid rgba(0,0,0,0.05)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: PL }}>
                <Leaf className="w-5 h-5" style={{ color: P }} />
              </div>
              <div>
                <p className="text-[11px] text-stone-400 font-medium">Ingredients</p>
                <p className="font-bold text-stone-800 text-sm">100% natural</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ══ PROBLEM — dark ═══════════════════════════════════════════════════ */}
      <section className="py-28 bg-stone-950">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: P }}>The problem</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-2xl">
              You're probably taking care of your hair the wrong way.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { emoji: '🌀', title: 'Frizz that won\'t quit',  desc: 'Even with expensive conditioner, frizz keeps coming back. The problem isn\'t the product — it\'s the routine.' },
              { emoji: '💔', title: 'Deep dryness',             desc: 'Brittle, dull hair is a sign of accumulated damage that no regular shampoo can fix on its own.' },
              { emoji: '⚠️', title: 'Excessive hair loss',      desc: 'Incorrect daily habits can accelerate shedding without you even noticing.' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-8 h-full transition-colors"
                  style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
                >
                  <div className="text-4xl mb-5">{item.emoji}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-10">
            <p
              className="text-stone-400 text-sm pl-5 leading-relaxed max-w-lg"
              style={{ borderLeft: `2px solid ${P}` }}
            >
              The good news: all of this is reversible with the right routine.
              That's exactly what NatGlow was built for.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══ FEATURES ════════════════════════════════════════════════════════ */}
      <section className="py-28 px-6" style={{ background: PL }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: P }}>The solution</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-stone-900 mb-4 tracking-tight">
              Everything you need,<br />in one place.
            </h2>
            <p className="text-stone-500 max-w-md mx-auto">
              Diagnosis, recipes, plan and progress tracking. That simple.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Search,    title: 'Hair diagnosis',      desc: 'Pinpoints what\'s damaging your hair in under 60 seconds.' },
              { icon: Leaf,      title: 'Natural recipes',     desc: 'Homemade treatments with simple, effective ingredients.' },
              { icon: Calendar,  title: '21-day plan',         desc: 'A day-by-day structured routine you can follow without overthinking.' },
              { icon: BarChart3, title: 'Visible progress',    desc: 'Track your hair\'s transformation over time.' },
            ].map((f, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  className="bg-white rounded-2xl p-7 h-full transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6" style={{ background: PL2 }}>
                    <f.icon className="w-5 h-5" style={{ color: P }} />
                  </div>
                  <h3 className="font-bold text-stone-800 mb-2">{f.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ════════════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: P }}>How it works</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
              Three steps. Real results.
            </h2>
          </FadeIn>

          <div>
            {[
              { n: '01', icon: Search, title: 'Take the diagnosis',     desc: 'Answer 5 quick questions about your habits. Straightforward — takes less than 1 minute.' },
              { n: '02', icon: Zap,    title: 'Get your plan',          desc: 'You\'ll receive a 100% personalized routine with recipes tailored to your hair type.' },
              { n: '03', icon: Leaf,   title: 'See the transformation', desc: 'Follow the 21-day plan. Less frizz, more shine and truly healthy hair.' },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="flex items-start gap-8 py-10"
                  style={{ borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}
                >
                  <span
                    className="text-7xl font-black leading-none flex-shrink-0 hidden sm:block"
                    style={{ color: PL2, lineHeight: 1, marginTop: '-4px' }}
                  >
                    {s.n}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: PL }}>
                        <s.icon className="w-4 h-4" style={{ color: P }} />
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase sm:hidden" style={{ color: P }}>{s.n}</span>
                      <h3 className="text-xl font-bold text-stone-900">{s.title}</h3>
                    </div>
                    <p className="text-stone-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═══════════════════════════════════════════════════════ */}
      <section
        id="waitlist"
        className="py-32 px-6 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${P} 0%, ${PD} 100%)` }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 75% 40%, rgba(255,255,255,0.18), transparent 60%)' }}
        />
        <div className="relative max-w-2xl mx-auto text-center">
          <FadeIn>
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold text-white px-4 py-1.5 rounded-full mb-8"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              🌸 Early access
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight tracking-tight">
              Join the VIP list<br />before we launch.
            </h2>

            <p className="text-pink-100 text-lg mb-10 leading-relaxed">
              Get your personalized hair care plan in under 60 seconds.<br />
              Free diagnosis. No credit card required.
            </p>

            <a
              href="https://app.natglow.app/Landing"
              className="inline-flex items-center gap-2 bg-white font-bold text-base px-10 py-4 rounded-full transition-all hover:opacity-90 active:scale-[0.98] mb-6"
              style={{ color: P, boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
            >
              Start my free diagnosis <ArrowRight className="w-5 h-5" />
            </a>

            <div className="flex items-center justify-center gap-8 text-pink-200 text-sm">
              {['Free', 'No credit card', 'Cancel anytime'].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════════════════════ */}
      <footer className="bg-stone-950 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src={LOGO} alt="NatGlow" className="w-8 h-8 rounded-xl object-cover" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: '#535353', fontSize: '14px' }}>
              NatGlow
            </span>
          </div>
          <p className="text-stone-600 text-xs">
            © {new Date().getFullYear()} NatGlow. All rights reserved.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 hover:text-stone-400 text-xs transition-colors"
          >
            @natglow.app
          </a>
        </div>
      </footer>

    </div>
  );
}
