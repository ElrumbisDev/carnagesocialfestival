import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const PRESSE = [
  {
    source: 'Source presse',
    titre: 'Titre article à venir',
    extrait: "L'article de presse sera affiché ici.",
    date: '2026',
    lien: '#',
  },
]

export default function OnParleDeNous() {
  return (
    <PageTransition>
      {/* Hero */}
      <section style={{
        minHeight: '360px', backgroundColor: '#08080f',
        display: 'flex', alignItems: 'flex-end',
        padding: '120px 40px 60px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-100px', right: '-60px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 700, color: '#F5C518', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Presse & Médias
            </p>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#F0EDE8', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '20px' }}>
              On parle<br />
              <span style={{ background: 'linear-gradient(90deg, #F5C518 0%, #FF8C00 50%, #FF3D2E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                de nous
              </span>
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#8885A0', maxWidth: '520px', lineHeight: 1.8 }}>
              Retrouvez ici les articles, interviews et mentions presse autour du Festival Carnage Social et de l'association Hole Right.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section style={{ padding: '80px 40px 120px', backgroundColor: '#08080f' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {PRESSE.map((item, i) => (
              <motion.a
                key={i}
                href={item.lien}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, borderColor: 'rgba(245,197,24,0.25)' }}
                style={{
                  display: 'block', textDecoration: 'none',
                  backgroundColor: '#0f0f1e', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '18px', padding: '32px 28px',
                  transition: 'border-color 0.2s',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 700, color: '#F5C518', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {item.source}
                  </span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#5a5870' }}>
                    {item.date}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#F0EDE8', marginBottom: '12px', lineHeight: 1.35 }}>
                  {item.titre}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#8885A0', lineHeight: 1.75 }}>
                  {item.extrait}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Message si vide */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            style={{
              marginTop: '60px', padding: '40px', borderRadius: '16px',
              backgroundColor: 'rgba(245,197,24,0.04)', border: '1px solid rgba(245,197,24,0.1)',
              textAlign: 'center',
            }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#5a5870' }}>
              D'autres articles à venir prochainement. Suivez-nous sur les réseaux !
            </p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
