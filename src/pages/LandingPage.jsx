import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Leaf, Calendar, BarChart3, Search, Zap } from 'lucide-react';

// ── Brand — pink palette ──────────────────────────────────────────────────────
const P   = '#FB45A9';   // primary pink
const PD  = '#E03594';   // darker pink
const PL  = '#FFF5FA';   // light bg
const PL2 = '#FFE4F2';   // light accent

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
      setError('Digite um e-mail válido.');
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
          Incrível! Você será a primeira a saber quando lançarmos. 🌸
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit}>
      <div
        className="flex flex-col sm:flex-row gap-1.5 p-1.5 rounded-full"
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
          placeholder="Digite seu melhor e-mail"
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
          Quero ser avisada <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      {error && <p className="text-red-400 text-xs mt-2 ml-6">{error}</p>}
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
            href="#waitlist"
            className="flex items-center gap-1.5 text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all hover:opacity-90 active:scale-95"
            style={{ background: `linear-gradient(135deg, ${P}, ${PD})` }}
          >
            Entrar na lista <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* ══ HERO ════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Blob bg */}
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
              🌸 Lista de espera aberta
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl lg:text-[3.75rem] font-extrabold text-stone-900 leading-[1.1] tracking-tight mb-6"
            >
              Seu cabelo merece
              <br />uma rotina que
              <br /><span style={{ color: P }}>realmente funciona.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.13, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-stone-500 leading-relaxed mb-9 max-w-lg"
            >
              O NatGlow analisa seus hábitos e cria uma rotina capilar personalizada
              com receitas naturais que realmente funcionam — sem químicas, sem achismos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.19, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-md"
            >
              <EmailCapture />
              <p className="text-xs text-stone-400 mt-3 ml-6">
                Sem spam. Só um aviso quando lançarmos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-8 mt-12"
            >
              {[
                { num: '2.000+',  label: 'na lista de espera' },
                { num: '100%',    label: 'natural e sem química' },
                { num: '21 dias', label: 'para ver resultados' },
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
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 32px 80px rgba(251,69,169,0.18)' }}
            >
              <img
                src={HERO}
                alt="Cabelo saudável"
                className="w-full object-cover object-top"
                style={{ height: '560px' }}
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
              className="absolute -left-12 top-12 bg-white rounded-2xl px-5 py-4 flex items-center gap-3"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10)', border: '1px solid rgba(0,0,0,0.05)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: PL }}>
                <Search className="w-5 h-5" style={{ color: P }} />
              </div>
              <div>
                <p className="text-[11px] text-stone-400 font-medium">Diagnóstico</p>
                <p className="font-bold text-stone-800 text-sm">Personalizado</p>
              </div>
            </motion.div>

            {/* Floating card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 24, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -right-10 bottom-16 bg-white rounded-2xl px-5 py-4 flex items-center gap-3"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10)', border: '1px solid rgba(0,0,0,0.05)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: PL }}>
                <Leaf className="w-5 h-5" style={{ color: P }} />
              </div>
              <div>
                <p className="text-[11px] text-stone-400 font-medium">Ingredientes</p>
                <p className="font-bold text-stone-800 text-sm">100% naturais</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ══ PROBLEMA — dark ══════════════════════════════════════════════════ */}
      <section className="py-28 bg-stone-950">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: P }}>O problema</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-2xl">
              Você provavelmente está
              cuidando do cabelo do jeito errado.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { emoji: '🌀', title: 'Frizz que não vai embora', desc: 'Mesmo usando condicionador caro, o frizz persiste. O problema não é o produto — é a rotina.' },
              { emoji: '💔', title: 'Ressecamento profundo',    desc: 'Cabelo quebradiço e sem brilho são sinais de dano acumulado que nenhum shampoo comum resolve.' },
              { emoji: '⚠️', title: 'Queda mais intensa',       desc: 'Cuidados incorretos no dia a dia podem acelerar a queda sem que você perceba.' },
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
              A boa notícia: tudo isso é reversível com a rotina certa.
              É exatamente para isso que o NatGlow foi criado.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══ FEATURES ════════════════════════════════════════════════════════ */}
      <section className="py-28 px-6" style={{ background: PL }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: P }}>A solução</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-stone-900 mb-4 tracking-tight">
              Tudo que você precisa,<br />em um só lugar.
            </h2>
            <p className="text-stone-500 max-w-md mx-auto">
              Diagnóstico, receitas, plano e acompanhamento. Simples assim.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Search,    title: 'Diagnóstico capilar', desc: 'Identifica o que está prejudicando seu cabelo em menos de 60 segundos.' },
              { icon: Leaf,      title: 'Receitas naturais',   desc: 'Tratamentos caseiros com ingredientes simples e eficazes.' },
              { icon: Calendar,  title: 'Plano de 21 dias',    desc: 'Rotina estruturada dia por dia, sem precisar pensar.' },
              { icon: BarChart3, title: 'Evolução visível',    desc: 'Acompanhe a transformação do seu cabelo ao longo do tempo.' },
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

      {/* ══ COMO FUNCIONA ════════════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: P }}>Como funciona</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
              Três passos. Resultado real.
            </h2>
          </FadeIn>

          <div>
            {[
              { n: '01', icon: Search, title: 'Faça o diagnóstico',  desc: 'Responda 5 perguntas sobre seus hábitos. Rápido, sem enrolação — menos de 1 minuto.' },
              { n: '02', icon: Zap,    title: 'Receba seu plano',     desc: 'Você recebe uma rotina 100% personalizada com receitas para o seu tipo de cabelo.' },
              { n: '03', icon: Leaf,   title: 'Veja a transformação', desc: 'Siga o plano de 21 dias. Menos frizz, mais brilho e cabelo saudável de verdade.' },
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

      {/* ══ CTA FINAL ════════════════════════════════════════════════════════ */}
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
              🌸 Acesso antecipado
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight tracking-tight">
              Entre na lista VIP<br />antes do lançamento.
            </h2>

            <p className="text-pink-100 text-lg mb-10 leading-relaxed">
              Seja uma das primeiras a experimentar o NatGlow.<br />
              Zero spam. Apenas um aviso quando estiver pronto.
            </p>

            <div className="max-w-lg mx-auto mb-8">
              <EmailCapture dark />
            </div>

            <div className="flex items-center justify-center gap-8 text-pink-200 text-sm">
              {['Gratuito', 'Sem cartão', 'Cancele quando quiser'].map((item, i) => (
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
            © {new Date().getFullYear()} NatGlow. Todos os direitos reservados.
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
