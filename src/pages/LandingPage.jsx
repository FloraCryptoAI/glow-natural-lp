import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Check, Sparkles, Leaf, Calendar, BarChart3,
  Search, Star, ChevronRight, Zap,
} from 'lucide-react';

// ── Brand colors ──────────────────────────────────────────────────────────────
const C = {
  primary:   '#3FAF84',
  dark:      '#2D8B68',
  light:     '#EFFBF6',
  light2:    '#D9F6EA',
  accent:    '#3FDEA1',
};

const LOGO = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b5eac4d8895bcbf9f1446e/5439b0e9c_Frame96.png';

// ── Email Capture Component ───────────────────────────────────────────────────

function EmailCapture({ dark = false, size = 'md' }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) { setError('Por favor, insira um e-mail válido.'); return; }
    setError('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 px-6 py-4 rounded-2xl"
        style={{ background: dark ? 'rgba(255,255,255,0.15)' : C.light2, border: dark ? 'none' : `1px solid ${C.accent}` }}
      >
        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: dark ? '#fff' : C.primary }}>
          <Check className="w-4 h-4" style={{ color: dark ? C.primary : '#fff' }} />
        </div>
        <p className={`font-semibold text-sm ${dark ? 'text-white' : 'text-stone-700'}`}>
          Obrigada! Te avisaremos quando lançarmos. 🌿
        </p>
      </motion.div>
    );
  }

  const py = size === 'lg' ? 'py-4' : 'py-3.5';

  return (
    <form onSubmit={submit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="seu@email.com"
          className={`flex-1 px-5 ${py} rounded-full text-sm text-stone-800 outline-none border-2 transition-colors`}
          style={{
            background: dark ? 'rgba(255,255,255,0.95)' : '#fff',
            borderColor: 'transparent',
            boxShadow: dark ? 'none' : '0 1px 4px rgba(0,0,0,0.08)',
          }}
          onFocus={e => e.target.style.borderColor = C.primary}
          onBlur={e => e.target.style.borderColor = 'transparent'}
        />
        <button
          type="submit"
          className={`flex items-center justify-center gap-2 px-6 ${py} rounded-full text-white font-bold text-sm whitespace-nowrap transition-all hover:opacity-90 active:scale-95`}
          style={{ background: dark ? 'rgba(255,255,255,0.25)' : C.primary, boxShadow: dark ? 'none' : `0 4px 16px ${C.primary}55` }}
        >
          Quero ser avisada <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      {error && <p className="text-red-400 text-xs mt-2 ml-4">{error}</p>}
    </form>
  );
}

// ── Fade-in on scroll wrapper ─────────────────────────────────────────────────

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-stone-50">

      {/* ══════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-lg border-b border-stone-200/60">
        <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={LOGO} alt="Glow Natural" className="w-9 h-9 rounded-xl" />
            <span className="font-bold text-stone-800">Glow Natural</span>
          </div>
          <a
            href="#waitlist"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ background: C.primary }}
          >
            Entrar na lista <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Background blob */}
        <div
          className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: C.primary }}
        />

        <div className="max-w-5xl mx-auto px-5 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold border"
              style={{ background: C.light, borderColor: C.light2, color: C.dark }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: C.primary }} />
              Em breve
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight"
            >
              Transforme seu cabelo com cuidados{' '}
              <span style={{ color: C.primary }}>100% naturais</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="text-stone-500 text-lg leading-relaxed"
            >
              Chega de produtos caros e cheios de química. O Glow Natural cria sua rotina
              personalizada com receitas caseiras que realmente funcionam para o seu tipo de cabelo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              <EmailCapture size="lg" />
              <div className="flex items-center gap-2 ml-1">
                <div className="flex -space-x-2">
                  {['Ana', 'Bea', 'Lia'].map((n, i) => (
                    <img
                      key={i}
                      src={`https://ui-avatars.com/api/?name=${n}&background=3FAF84&color=fff&size=32`}
                      alt={n}
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <p className="text-xs text-stone-500 font-medium">
                  <span className="font-bold text-stone-700">+2.000 pessoas</span> já na lista de espera
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative hidden md:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80"
                alt="Cabelo saudável e natural"
                className="w-full h-[440px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-4 -left-6 bg-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: C.light }}>
                <Leaf className="w-5 h-5" style={{ color: C.primary }} />
              </div>
              <div>
                <p className="font-bold text-stone-800 text-sm">Sem química</p>
                <p className="text-xs text-stone-400">Receitas 100% naturais</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROBLEMA
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-100 mb-4">
              ⚠️ Você sabia?
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">
              Você pode estar destruindo seu cabelo<br className="hidden md:block" /> sem perceber
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              A maioria das pessoas com cabelo seco, com frizz ou caindo não tem falta de produto.
              O problema é que está cuidando do jeito errado.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=70',
                label: 'Frizz constante',
                desc: 'Mesmo usando condicionador caro, o frizz não some. É sinal de que a rotina está errada.',
              },
              {
                img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=70',
                label: 'Ressecamento profundo',
                desc: 'Cabelo quebradiço e sem brilho indica dano acumulado que nenhum shampoo comum resolve.',
              },
              {
                img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=70',
                label: 'Queda excessiva',
                desc: 'Perder mais cabelo do que o normal é um alerta. Pode piorar com o cuidado errado.',
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden border border-stone-100 shadow-sm bg-stone-50 hover:shadow-md transition-shadow">
                  <img src={item.img} alt={item.label} className="w-full h-44 object-cover" />
                  <div className="p-5">
                    <p className="font-bold text-stone-800 mb-1.5">{item.label}</p>
                    <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURES
      ══════════════════════════════════════════ */}
      <section className="py-20" style={{ background: C.light }}>
        <div className="max-w-5xl mx-auto px-5">
          <FadeIn className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4"
              style={{ background: C.light2, color: C.dark }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: C.primary }} /> A solução
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">
              O que o Glow Natural oferece
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Um app completo para transformar seu cabelo de dentro para fora,
              com ciência e ingredientes naturais.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                title: 'Diagnóstico personalizado',
                desc: 'Identifica exatamente o que está prejudicando seu cabelo com base nos seus hábitos.',
              },
              {
                icon: Leaf,
                title: 'Receitas naturais',
                desc: 'Máscaras, óleos e tratamentos caseiros com ingredientes simples que você já tem em casa.',
              },
              {
                icon: Calendar,
                title: 'Plano de 21 dias',
                desc: 'Rotina passo a passo organizada por dia para você seguir sem complicação.',
              },
              {
                icon: BarChart3,
                title: 'Acompanhamento',
                desc: 'Veja a evolução do seu cabelo ao longo do tempo e ajuste o plano conforme necessário.',
              },
            ].map((f, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-white hover:shadow-md transition-shadow h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: C.light2 }}
                  >
                    <f.icon className="w-6 h-6" style={{ color: C.primary }} />
                  </div>
                  <p className="font-bold text-stone-800 mb-2">{f.title}</p>
                  <p className="text-sm text-stone-500 leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMO FUNCIONA
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">
              Como funciona
            </h2>
            <p className="text-stone-500">Simples, rápido e 100% personalizado para você.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-stone-100" />

            {[
              {
                step: '01',
                icon: Search,
                title: 'Faça o diagnóstico',
                desc: 'Responda 5 perguntas rápidas sobre seus hábitos e o estado do seu cabelo hoje.',
              },
              {
                step: '02',
                icon: Zap,
                title: 'Receba seu plano',
                desc: 'Em segundos, você recebe um plano personalizado com receitas e rotina para o seu tipo.',
              },
              {
                step: '03',
                icon: Sparkles,
                title: 'Veja os resultados',
                desc: 'Siga o plano por 21 dias e observe a transformação. Cabelo mais saudável, sem química.',
              },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.12} className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm"
                    style={{ background: C.light }}
                  >
                    <s.icon className="w-9 h-9" style={{ color: C.primary }} />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-xs font-extrabold flex items-center justify-center text-white shadow"
                    style={{ background: C.primary }}
                  >
                    {s.step}
                  </span>
                </div>
                <p className="font-bold text-stone-800 text-lg mb-2">{s.title}</p>
                <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DEPOIMENTOS
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-5xl mx-auto px-5">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-stone-900 mb-3">
              Quem já está animado
            </h2>
            <p className="text-stone-500 text-sm">Pessoas que já estão na lista de espera compartilharam sua expectativa</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Mariana S.',
                location: 'São Paulo, SP',
                avatar: 'Mariana+S',
                rating: 5,
                text: 'Finalmente um app que entende que nem todo cabelo é igual! Estou super ansiosa para começar minha rotina personalizada. A ideia das receitas caseiras é incrível.',
              },
              {
                name: 'Camila R.',
                location: 'Belo Horizonte, MG',
                avatar: 'Camila+R',
                rating: 5,
                text: 'Gasto uma fortuna em produtos e nunca vejo resultado. O conceito do Glow Natural faz todo sentido — vou parar de atirar no escuro e ter uma rotina de verdade.',
              },
              {
                name: 'Juliana M.',
                location: 'Rio de Janeiro, RJ',
                avatar: 'Juliana+M',
                rating: 5,
                text: 'Tenho cabelo crespo com muito frizz e nunca encontrei nada personalizado pra mim. Esse app parece ser exatamente o que eu precisava. Mal posso esperar!',
              },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://ui-avatars.com/api/?name=${t.avatar}&background=3FAF84&color=fff&size=40`}
                      alt={t.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-stone-800 text-sm">{t.name}</p>
                      <p className="text-xs text-stone-400">{t.location}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════ */}
      <section id="waitlist" className="py-20" style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.dark})` }}>
        <div className="max-w-2xl mx-auto px-5 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold text-white mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Lançamento em breve
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Seja a primeira a saber<br /> quando lançarmos
            </h2>
            <p className="text-emerald-100 mb-8 leading-relaxed">
              Entre na lista VIP e ganhe acesso antecipado ao Glow Natural.
              Sem spam. Apenas um aviso quando estiver pronto.
            </p>

            <div className="max-w-md mx-auto mb-8">
              <EmailCapture dark size="lg" />
            </div>

            <div className="flex items-center justify-center gap-6 text-emerald-100 text-sm">
              {['100% gratuito', 'Sem cartão', 'Cancele quando quiser'].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="bg-stone-900 py-10">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src={LOGO} alt="Glow Natural" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-white">Glow Natural</span>
          </div>
          <p className="text-stone-500 text-xs">
            © {new Date().getFullYear()} Glow Natural. Todos os direitos reservados.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-white transition-colors text-xs"
          >
            @glownatural
          </a>
        </div>
      </footer>

    </div>
  );
}
