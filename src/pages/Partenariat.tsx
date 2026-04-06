import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const OFFRES = [
  {
    titre: 'Partenaire Principal',
    desc: "Visibilité maximale : logo sur l'affiche, présence scène, stand sur le site, mentions réseaux sociaux.",
    color: '#F5C518',
  },
  {
    titre: 'Partenaire Associé',
    desc: "Logo sur les supports de communication, mentions sur nos réseaux, présence lors de l'événement.",
    color: '#FF8C00',
    highlight: true,
  },
  {
    titre: 'Partenaire Local',
    desc: 'Mention sur nos supports digitaux et présence dans le programme du festival.',
    color: '#22C55E',
  },
]

export default function Partenariat() {
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
          <div style={{ position: 'absolute', top: '-100px', left: '-60px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 700, color: '#22C55E', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Nous soutenir
            </p>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#F0EDE8', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '20px' }}>
              Partenariat
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#8885A0', maxWidth: '520px', lineHeight: 1.8 }}>
              Vous souhaitez soutenir le Festival Carnage Social et l'association Hole Right ?
              Plusieurs formules de partenariat sont disponibles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offres */}
      <section style={{ padding: '80px 40px', backgroundColor: '#08080f' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', marginBottom: '80px' }}>
            {OFFRES.map((offre, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                style={{
                  backgroundColor: offre.highlight ? 'rgba(255,140,0,0.06)' : '#0f0f1e',
                  border: `1px solid ${offre.highlight ? 'rgba(255,140,0,0.25)' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: '18px', padding: '36px 28px',
                  position: 'relative',
                }}
              >
                {offre.highlight && (
                  <span style={{
                    position: 'absolute', top: '-12px', left: '28px',
                    background: 'linear-gradient(135deg, #F5C518, #FF8C00)',
                    color: '#0a0a14', fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 800,
                    padding: '4px 14px', borderRadius: '999px', letterSpacing: '0.06em',
                  }}>POPULAIRE</span>
                )}
                <div style={{ width: '36px', height: '3px', borderRadius: '3px', backgroundColor: offre.color, marginBottom: '24px' }} />
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#F0EDE8', marginBottom: '14px' }}>
                  {offre.titre}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#8885A0', lineHeight: 1.75 }}>
                  {offre.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              padding: '48px', borderRadius: '20px', textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(245,197,24,0.06), rgba(255,61,46,0.06))',
              border: '1px solid rgba(245,197,24,0.12)',
            }}
          >
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#F0EDE8', marginBottom: '16px', letterSpacing: '-0.03em' }}>
              Intéressé·e ?
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: '#8885A0', maxWidth: '480px', margin: '0 auto 32px', lineHeight: 1.8 }}>
              Contactez-nous pour discuter d'un partenariat adapté à vos besoins et à vos valeurs.
            </p>
            <motion.a
              href="mailto:contact@holeright.fr"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'linear-gradient(135deg, #F5C518 0%, #FF8C00 100%)',
                color: '#0a0a14', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700,
                padding: '15px 32px', borderRadius: '999px', textDecoration: 'none',
                boxShadow: '0 4px 28px rgba(245,197,24,0.25)',
              }}
            >
              Nous écrire <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
