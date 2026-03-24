import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PageTransition from '../components/PageTransition'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

const MILESTONES = [
  {
    year: '2020',
    title: 'La naissance',
    text: 'Un groupe d\'amis passionnés de musique décide de ne plus attendre que les événements viennent à eux. Dans un salon, autour d\'une table, l\'idée de créer une association événementielle prend forme. Hole Right est né.',
  },
  {
    year: '2021',
    title: 'Les premiers pas',
    text: 'Premiers concerts organisés dans des salles locales. L\'équipe apprend sur le terrain, se trompe, recommence, et construit une première communauté de festivaliers fidèles. L\'association structure ses statuts et accueille ses premiers bénévoles.',
  },
  {
    year: '2022',
    title: 'Le tournant : Carnage Social',
    text: 'La grande étape. Pour la première fois, Hole Right organise le Festival Carnage Social en plein air. Une édition inaugurale marquée par l\'énergie, l\'improvisation joyeuse et une complicité rare entre artistes, bénévoles et public.',
  },
  {
    year: '2023–2024',
    title: 'La consolidation',
    text: 'Fort du succès des premières éditions, Hole Right structure son fonctionnement, diversifie son programme avec des soirées comme Interlude, et renforce ses partenariats locaux. La famille grandit.',
  },
  {
    year: '2026',
    title: 'Le futur',
    text: 'Une nouvelle édition du Festival Carnage Social se prépare. Plus ambitieuse, plus fédératrice. Avec toujours la même conviction : la culture et la musique appartiennent à ceux qui les vivent.',
  },
]

export default function Histoire() {
  return (
    <PageTransition>
      {/* ─── Header ─── */}
      <section style={{
        paddingTop: '140px', paddingBottom: '80px',
        paddingLeft: '24px', paddingRight: '24px',
        backgroundColor: '#0a0a14',
      }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#22C55E', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Notre identité
            </p>
            <h1 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              letterSpacing: '-0.04em', color: '#F0EDE8',
              lineHeight: 1.05, marginBottom: '32px',
            }}>
              Notre<br /><span style={{ color: '#FF3D2E' }}>Histoire</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: '1.15rem', color: '#8885A0',
              lineHeight: 1.85,
            }}
          >
            Hole Right, c'est l'histoire d'une poignée de passionnés qui ont décidé que la meilleure façon
            d'aimer la musique, c'était encore de la partager. Une association indépendante, ancrée dans
            l'Orne, avec une envie simple : créer des moments qui restent.
          </motion.p>
        </div>
      </section>

      {/* ─── Photo + intro ─── */}
      <section style={{ padding: '0 24px 80px', backgroundColor: '#0a0a14' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{
              borderRadius: '20px', overflow: 'hidden',
              position: 'relative', height: '380px',
              border: '1px solid #1a1a2e',
            }}>
              <img
                src="/images/photo-groupe.jpg"
                alt="L'équipe Hole Right"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,20,0.7) 0%, transparent 60%)',
              }} />
              <p style={{
                position: 'absolute', bottom: '28px', left: '32px',
                fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem',
                color: '#F0EDE8',
              }}>
                L'équipe Hole Right
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section style={{ padding: '0 24px 96px', backgroundColor: '#0a0a14' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              color: '#F0EDE8', letterSpacing: '-0.03em',
              marginBottom: '64px',
            }}>
              De l'idée au festival
            </h2>
          </FadeIn>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: '28px', top: 0, bottom: 0,
              width: '1px', backgroundColor: '#2a2a40',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
              {MILESTONES.map((m, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', cursor: 'default' }}
                  >
                    {/* Year bubble */}
                    <motion.div
                      whileHover={{ scale: 1.12, boxShadow: '0 0 20px rgba(245,197,24,0.3)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      style={{
                      flexShrink: 0,
                      width: '56px', height: '56px',
                      borderRadius: '50%',
                      backgroundColor: i === MILESTONES.length - 1 ? '#FF3D2E' : '#111124',
                      border: `1px solid ${i === MILESTONES.length - 1 ? '#FF3D2E' : '#2a2a40'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      position: 'relative', zIndex: 1,
                    }}>
                      <span style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: '0.65rem', fontWeight: 700,
                        color: i === MILESTONES.length - 1 ? '#fff' : '#8885A0',
                        letterSpacing: '-0.02em',
                        textAlign: 'center',
                        lineHeight: 1.1,
                      }}>
                        {m.year}
                      </span>
                    </motion.div>

                    {/* Content */}
                    <div style={{ paddingTop: '12px' }}>
                      <h3 style={{
                        fontFamily: 'Syne, sans-serif', fontWeight: 700,
                        fontSize: '1.2rem', color: '#F0EDE8',
                        letterSpacing: '-0.02em', marginBottom: '12px',
                      }}>
                        {m.title}
                      </h3>
                      <p style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '0.95rem',
                        color: '#8885A0', lineHeight: 1.85,
                      }}>
                        {m.text}
                      </p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section style={{ padding: '80px 24px', backgroundColor: '#07070f', borderTop: '1px solid #2a2a40' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              color: '#F0EDE8', letterSpacing: '-0.03em',
              marginBottom: '48px', textAlign: 'center',
            }}>
              Ce en quoi on croit
            </h2>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { emoji: '🎵', title: 'La musique avant tout', text: 'Artistes locaux, scènes émergentes — on mise sur le talent plutôt que la notoriété.', accent: '#F5C518' },
              { emoji: '🌿', title: 'Ancrage local', text: 'Organisé dans l\'Orne par des Normands pour des gens de partout. La proximité, c\'est notre force.', accent: '#22C55E' },
              { emoji: '🤝', title: 'L\'humain d\'abord', text: 'Bénévoles, artistes, public — tout le monde compte. On fait ça ensemble ou on ne le fait pas.', accent: '#60a5fa' },
              { emoji: '🔥', title: 'L\'indépendance', text: 'Pas de subvention d\'état, pas de sponsor dominant. Une liberté totale de programmer ce qu\'on aime.', accent: '#FF3D2E' },
            ].map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, borderColor: v.accent, boxShadow: `0 16px 40px ${v.accent}18` }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  style={{
                    backgroundColor: '#111124', border: '1px solid #2a2a40',
                    borderRadius: '16px', padding: '32px 24px',
                  }}
                >
                  <motion.span
                    whileHover={{ scale: 1.25, rotate: 8 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    style={{ fontSize: '2rem', display: 'inline-block', marginBottom: '16px', cursor: 'default' }}
                  >{v.emoji}</motion.span>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#F0EDE8', marginBottom: '10px' }}>{v.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#8885A0', lineHeight: 1.75 }}>{v.text}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Orga photo ─── */}
      <section style={{ padding: '80px 24px 96px', backgroundColor: '#07070f' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{
              borderRadius: '20px', overflow: 'hidden',
              border: '1px solid #1a1a2e', position: 'relative',
            }}>
              <img
                src="/images/orga.jpg"
                alt="L'organisation"
                style={{ width: '100%', height: '320px', objectFit: 'cover', objectPosition: 'center' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,20,0.8) 0%, transparent 50%)',
              }} />
              <div style={{
                position: 'absolute', bottom: '28px', left: '32px', right: '32px',
                fontFamily: 'Syne, sans-serif',
              }}>
                <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FF3D2E', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  En coulisses
                </p>
                <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F0EDE8' }}>
                  Derrière chaque concert, une équipe qui s'y consacre à 100%.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}
