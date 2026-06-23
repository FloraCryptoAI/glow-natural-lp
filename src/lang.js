// Project is 100% Spanish (LATAM neutral). EN strings removed.

const LANG_ES = {
  header: {
    login: 'Iniciar sesión',
  },
  hero: {
    // Badge — was 'Lista de espera abierta'. Product is now live.
    badge: '🌿 Disponible ahora',
    h1_1: 'Tu cabello merece',
    h1_2: 'una rutina que',
    h1_3: 'de verdad funcione.',
    sub: 'NatGlow analiza tus hábitos y arma una rutina capilar personalizada con recetas naturales que sí funcionan — sin químicos agresivos, sin adivinar.',
    cta: 'Hacer mi diagnóstico',
    helper: 'Gratis · Toma menos de 60 segundos',
    stats: [
      { num: '+12.480', label: 'mujeres ya cuidan su cabello con NatGlow' },
      { num: '100%',    label: 'natural y sin químicos' },
      { num: '21 días', label: 'para ver resultados reales' },
    ],
    card1: { label: 'Diagnóstico',  value: 'Personalizado' },
    card2: { label: 'Ingredientes', value: '100% natural' },
  },
  problem: {
    tag: 'El problema',
    h2: 'Probablemente estás cuidando tu cabello de la forma equivocada.',
    cards: [
      { emoji: '🌀', title: 'Frizz que no se va',            desc: 'Aunque uses acondicionador costoso, el frizz vuelve. El problema no es el producto — es la rutina.' },
      { emoji: '💔', title: 'Resequedad profunda',           desc: 'El cabello quebradizo y sin brillo es señal de daño acumulado que ningún champú común puede reparar solo.' },
      { emoji: '⚠️', title: 'Caída excesiva del cabello',    desc: 'Los hábitos diarios incorrectos pueden acelerar la caída sin que lo notes.' },
    ],
    quote: 'La buena noticia: todo esto se puede revertir con la rutina correcta. Para eso fue creado NatGlow.',
  },
  features: {
    tag: 'La solución',
    h2_1: 'Todo lo que necesitas,',
    h2_2: 'en un solo lugar.',
    sub: 'Diagnóstico, recetas, plan y seguimiento. Así de simple.',
    items: [
      { title: 'Diagnóstico capilar', desc: 'Identifica qué está dañando tu cabello en menos de 60 segundos.' },
      { title: 'Recetas naturales',   desc: 'Tratamientos caseros con ingredientes simples y comprobados.' },
      { title: 'Plan de 21 días',     desc: 'Una rutina día a día que puedes seguir sin complicaciones.' },
      { title: 'Progreso visible',    desc: 'Mira la transformación de tu cabello con el tiempo.' },
    ],
  },
  how: {
    tag: 'Cómo funciona',
    h2: 'Tres pasos. Resultados reales.',
    steps: [
      { title: 'Haz el diagnóstico',   desc: 'Responde algunas preguntas rápidas sobre tus hábitos. Sencillo — toma menos de 1 minuto.' },
      { title: 'Recibe tu plan',       desc: 'Vas a recibir una rutina 100% personalizada con recetas adaptadas a tu tipo de cabello.' },
      { title: 'Mira la transformación', desc: 'Sigue el plan de 21 días. Menos frizz, más brillo y cabello realmente saludable.' },
    ],
  },
  cta: {
    badge: '🌿 Acceso inmediato',
    h2_1: 'Empieza tu rutina',
    h2_2: 'personalizada hoy.',
    sub1: 'Descubre tu plan de cuidado capilar en menos de 60 segundos.',
    sub2: 'Diagnóstico gratis. Sin tarjeta de crédito.',
    button: 'Hacer mi diagnóstico gratis',
    items: ['Gratis', 'Sin tarjeta', 'Acceso inmediato'],
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} NatGlow. Todos los derechos reservados.`,
  },
}

export function useLang() {
  return LANG_ES
}
