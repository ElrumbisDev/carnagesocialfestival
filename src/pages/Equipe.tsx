import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const EQUIPE = [
  { nom: 'Membre à venir', role: 'Rôle', photo: null as string | null },
  { nom: 'Membre à venir', role: 'Rôle', photo: null as string | null },
  { nom: 'Membre à venir', role: 'Rôle', photo: null as string | null },
  { nom: 'Membre à venir', role: 'Rôle', photo: null as string | null },
]

export default function Equipe() {
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
          <div style={{ position: 'absolute', top: '-80px', left: '-40px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,61,46,0.1) 0%, transparent 65%)', filter: 'blur(60px)' }} />
          <div style={{ position: 'absolute', bottom: '-60px', right: '5%', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 700, color: '#FF3D2E', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}>
              L'association Hole Right
            </p>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#F0EDE8', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '20px' }}>
              L'équipe
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#8885A0', maxWidth: '520px', lineHeight: 1.8 }}>
              Le Festival Carnage Social est porté par une équipe de passionné·es,
              réunis au sein de l'association Hole Right dans l'Orne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grille équipe */}
      <section style={{ padding: '80px 40px 120px', backgroundColor: '#08080f' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
            {EQUIPE.map((membre, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                style={{
                  backgroundColor: '#0f0f1e', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '18px', overflow: 'hidden',
                }}
              >
                {/* Photo */}
                <div style={{ height: '260px', backgroundColor: '#1a1a2e', position: 'relative', overflow: 'hidden' }}>
                  {membre.photo ? (
                    <img src={membre.photo} alt={membre.nom} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#2a2a40', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.8rem', color: '#5a5870' }}>
                          {membre.nom.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,15,30,0.7) 0%, transparent 60%)' }} />
                </div>
                {/* Infos */}
                <div style={{ padding: '20px 22px' }}>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#F0EDE8', marginBottom: '6px' }}>
                    {membre.nom}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#F5C518', fontWeight: 500 }}>
                    {membre.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
