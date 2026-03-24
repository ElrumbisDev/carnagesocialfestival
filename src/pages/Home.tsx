import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Ticket, ArrowRight, Calendar, MapPin, Music, Users, ChevronDown } from 'lucide-react'
import PageTransition from '../components/PageTransition'

/* ─── ease partagé ─── */
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

const EVENTS = [
  {
    id: 1,
    title: 'Festival Carnage Social',
    date: '5 & 6 Juin 2026',
    location: 'Louge-sur-Maire, Orne (61)',
    genre: 'Pop · Rock · Techno',
    highlight: true,
    link: '/festival',
    image: '/images/carnage-social.jpeg',
  },
  {
    id: 2,
    title: 'Soirée Interlude',
    date: 'À venir',
    location: 'Orne (61)',
    genre: 'Electronic · Live',
    highlight: false,
    link: '/festival',
    image: '/images/interlude.jpeg',
  },
]

export default function Home() {
  return (
    <PageTransition>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section style={{
        minHeight: '100vh', backgroundColor: '#08080f',
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'stretch',
      }}>
        {/* Blobs couleurs affiche */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-160px', right: '-80px', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,197,24,0.18) 0%, transparent 65%)', filter: 'blur(60px)' }} />
          <div style={{ position: 'absolute', bottom: '-100px', left: '-60px', width: '460px', height: '460px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,94,0.14) 0%, transparent 65%)', filter: 'blur(60px)' }} />
          <div style={{ position: 'absolute', top: '30%', left: '10%', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,61,46,0.1) 0%, transparent 65%)', filter: 'blur(50px)' }} />
          <div style={{ position: 'absolute', bottom: '5%', right: '15%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 65%)', filter: 'blur(50px)' }} />
        </div>

        <div style={{
          maxWidth: '1320px', margin: '0 auto', width: '100%',
          padding: '120px 40px 80px',
          display: 'grid', gridTemplateColumns: '1fr 400px',
          gap: '80px', alignItems: 'center',
          position: 'relative', zIndex: 1,
        }} className="hero-grid">

          {/* ── Texte ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                border: '1px solid rgba(245,197,24,0.35)',
                backgroundColor: 'rgba(245,197,24,0.08)',
                borderRadius: '999px', padding: '7px 18px', marginBottom: '36px',
              }}
            >
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#F5C518', display: 'inline-block', boxShadow: '0 0 8px #F5C518' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#F5C518', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Festival plein air · 5 & 6 Juin 2026
              </span>
            </motion.div>

            {/* Titre gradient */}
            <div style={{ marginBottom: '24px', overflow: 'hidden' }}>
              <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.75, delay: 0.2, ease }}>
                <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(3rem, 6.5vw, 6rem)', lineHeight: 0.95, letterSpacing: '-0.04em', margin: 0 }}>
                  <span style={{ display: 'block', color: '#F0EDE8' }}>FESTIVAL</span>
                  <span style={{ display: 'block', background: 'linear-gradient(90deg, #F5C518 0%, #FF8C00 45%, #FF3D2E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>CARNAGE</span>
                  <span style={{ display: 'block', background: 'linear-gradient(90deg, #FF3D2E 0%, #F5C518 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>SOCIAL</span>
                </h1>
              </motion.div>
            </div>

            {/* Ligne asso */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingLeft: '4px' }}
            >
              <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #F5C518, #FF3D2E)', borderRadius: '2px', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: '#8885A0' }}>par l'association</span>
              <img src="/images/logo.jpg" alt="Hole Right" style={{ height: '28px', width: '28px', borderRadius: '6px', objectFit: 'cover' }} />
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#F0EDE8' }}>Hole Right</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.6 }}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#8885A0', lineHeight: 1.8, maxWidth: '460px', marginBottom: '44px' }}
            >
              Deux jours de concerts en plein air dans le bocage normand.
              Pop, Rock, Techno — une programmation éclectique portée par une équipe indépendante et passionnée.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '52px' }}
            >
              {/* Bouton principal — police corrigée */}
              <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                <Link
                  to="/festival#billetterie"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    background: 'linear-gradient(135deg, #F5C518 0%, #FF8C00 100%)',
                    color: '#0a0a14',
                    fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700,
                    letterSpacing: '0.01em',
                    padding: '15px 30px', borderRadius: '999px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 28px rgba(245,197,24,0.35)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Ticket size={17} />
                  Prendre mes billets
                </Link>
              </motion.div>

              {/* Bouton secondaire */}
              <motion.div whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,0.3)' }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                <Link
                  to="/festival"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    backgroundColor: 'transparent', color: '#F0EDE8',
                    fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 500,
                    padding: '15px 26px', borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    textDecoration: 'none',
                  }}
                >
                  Découvrir le festival <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Infos rapides — avec hover */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
            >
              {[
                { icon: <Calendar size={14} />, text: '5 & 6 Juin 2026', color: '#F5C518' },
                { icon: <MapPin size={14} />, text: 'Louge-sur-Maire, Orne', color: '#22C55E' },
                { icon: <Music size={14} />, text: 'Pop · Rock · Techno', color: '#60a5fa' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.04)' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '7px',
                    fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#8885A0',
                    padding: '6px 14px', borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    cursor: 'default',
                  }}
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                  {item.text}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Affiche ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            whileHover={{ y: -8, rotate: 0.5 }}
            className="hero-poster"
            style={{ position: 'relative', cursor: 'pointer' }}
          >
            <div aria-hidden style={{
              position: 'absolute', inset: '-20px', borderRadius: '28px',
              background: 'conic-gradient(from 180deg at 50% 50%, #F5C518 0deg, #FF3D2E 90deg, #22C55E 180deg, #60a5fa 270deg, #F5C518 360deg)',
              filter: 'blur(40px)', opacity: 0.25,
              transition: 'opacity 0.4s ease',
            }} className="poster-halo" />
            <motion.div
              whileHover={{ boxShadow: '0 32px 100px rgba(245,197,24,0.25), 0 12px 40px rgba(0,0,0,0.8)' }}
              style={{
                position: 'relative', borderRadius: '20px', overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 16px 60px rgba(0,0,0,0.6)',
              }}
            >
              <img src="/images/carnage-social.jpeg" alt="Affiche Festival Carnage Social 2026" style={{ width: '100%', display: 'block' }} />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
          style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: '#5a5870' }}
        >
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ChevronDown size={15} />
          </motion.div>
        </motion.div>

        <style>{`
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; padding: 100px 24px 60px !important; gap: 40px !important; }
            .hero-poster { max-width: 280px; margin: 0 auto; }
          }
          .hero-poster:hover .poster-halo { opacity: 0.5 !important; }
        `}</style>
      </section>

      {/* ══════════════════════════════
          ACTUALITÉS
      ══════════════════════════════ */}
      <section style={{ padding: '100px 0', backgroundColor: '#08080f' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <FadeUp>
            <div style={{ marginBottom: '52px' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 700, color: '#F5C518', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '10px' }}>À la une</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.9rem, 4vw, 3rem)', color: '#F0EDE8', letterSpacing: '-0.03em' }}>Actualités</h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <Link to="/festival" style={{ textDecoration: 'none', display: 'block' }}>
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(245,197,24,0.12)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                style={{
                  borderRadius: '24px', overflow: 'hidden',
                  display: 'grid', gridTemplateColumns: '1fr 1fr',
                  minHeight: '360px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  backgroundColor: '#0f0f1e', cursor: 'pointer',
                }}
                className="spotlight-card"
              >
                <div style={{ padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    background: 'linear-gradient(135deg, rgba(245,197,24,0.15), rgba(255,140,0,0.15))',
                    border: '1px solid rgba(245,197,24,0.3)', color: '#F5C518',
                    fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 700,
                    letterSpacing: '0.1em', padding: '5px 14px', borderRadius: '999px',
                    width: 'fit-content', marginBottom: '24px',
                  }}>★ ÉVÉNEMENT PHARE 2026</span>
                  <h3 style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 800,
                    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.03em',
                    background: 'linear-gradient(90deg, #F0EDE8, #c8c4c0)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    marginBottom: '14px',
                  }}>Festival Carnage Social 2026</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.92rem', color: '#8885A0', lineHeight: 1.75, marginBottom: '28px' }}>
                    Le grand rendez-vous de l'été revient pour une nouvelle édition en plein air dans le bocage normand.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '32px' }}>
                    {[
                      { icon: <Calendar size={13} />, text: '5 & 6 Juin 2026', color: '#F5C518' },
                      { icon: <MapPin size={13} />, text: 'Louge-sur-Maire, Orne (61)', color: '#22C55E' },
                      { icon: <Music size={13} />, text: 'Pop · Rock · Techno', color: '#60a5fa' },
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontFamily: 'Inter, sans-serif', fontSize: '0.84rem', color: '#8885A0' }}>
                        <span style={{ color: item.color }}>{item.icon}</span>{item.text}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <motion.span
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'linear-gradient(135deg, #F5C518, #FF8C00)',
                        color: '#0a0a14', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', fontWeight: 700,
                        padding: '11px 22px', borderRadius: '999px', cursor: 'pointer',
                      }}
                    >
                      <Ticket size={14} /> Billetterie
                    </motion.span>
                    <motion.span
                      whileHover={{ x: 4, color: '#F0EDE8' }}
                      style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#8885A0', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', cursor: 'pointer' }}
                    >
                      En savoir plus <ArrowRight size={13} />
                    </motion.span>
                  </div>
                </div>

                <div style={{ position: 'relative', overflow: 'hidden' }} className="spotlight-img">
                  <motion.img
                    src="/images/carnage-social.jpeg" alt="Festival Carnage Social"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0f0f1e 0%, rgba(15,15,30,0.2) 40%, transparent 100%)' }} />
                </div>
              </motion.div>
            </Link>
          </FadeUp>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .spotlight-card { grid-template-columns: 1fr !important; }
            .spotlight-img { display: none !important; }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════
          NOS ÉVÉNEMENTS
      ══════════════════════════════ */}
      <section style={{ padding: '80px 0', backgroundColor: '#06060d' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <FadeUp>
            <div style={{ marginBottom: '48px' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 700, color: '#22C55E', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '10px' }}>Programme</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.9rem, 4vw, 3rem)', color: '#F0EDE8', letterSpacing: '-0.03em' }}>Nos futurs événements</h2>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {EVENTS.map((event, i) => (
              <FadeUp key={event.id} delay={i * 0.12}>
                <Link to={event.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <motion.div
                    whileHover={{ y: -8, borderColor: 'rgba(245,197,24,0.25)', boxShadow: '0 16px 48px rgba(0,0,0,0.4)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    style={{
                      backgroundColor: '#0f0f1e',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: '18px', overflow: 'hidden', height: '100%',
                    }}
                  >
                    <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                      <motion.img
                        src={event.image} alt={event.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      />
                      {event.highlight && (
                        <div style={{
                          position: 'absolute', top: '12px', left: '12px',
                          background: 'linear-gradient(135deg, #F5C518, #FF8C00)',
                          color: '#0a0a14', fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 800,
                          padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.04em',
                        }}>PROCHAIN ÉVÈNEMENT</div>
                      )}
                    </div>
                    <div style={{ padding: '24px' }}>
                      <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#F0EDE8', marginBottom: '14px' }}>{event.title}</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '20px' }}>
                        {[
                          { icon: <Calendar size={12} />, text: event.date, color: '#F5C518' },
                          { icon: <MapPin size={12} />, text: event.location, color: '#22C55E' },
                          { icon: <Music size={12} />, text: event.genre, color: '#60a5fa' },
                        ].map((item, j) => (
                          <span key={j} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#8885A0' }}>
                            <span style={{ color: item.color }}>{item.icon}</span>{item.text}
                          </span>
                        ))}
                      </div>
                      <motion.span
                        whileHover={{ x: 4 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#F5C518', fontFamily: 'Inter, sans-serif', fontSize: '0.83rem', fontWeight: 600 }}
                      >
                        Voir l'événement <ArrowRight size={13} />
                      </motion.span>
                    </div>
                  </motion.div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA BILLETTERIE
      ══════════════════════════════ */}
      <section style={{ padding: '100px 40px', position: 'relative', overflow: 'hidden', backgroundColor: '#08080f' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(245,197,24,0.08) 0%, rgba(255,61,46,0.08) 40%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.3), rgba(255,61,46,0.3), rgba(34,197,94,0.3), transparent)' }} />

        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '20px', background: 'linear-gradient(90deg, #F5C518, #FF8C00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Billetterie ouverte
            </p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem, 5.5vw, 4.4rem)', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '24px', color: '#F0EDE8' }}>
              Ne ratez pas<br />
              <span style={{ background: 'linear-gradient(90deg, #F5C518 0%, #FF8C00 50%, #FF3D2E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                le Carnage Social
              </span>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#8885A0', maxWidth: '440px', margin: '0 auto 44px', lineHeight: 1.8 }}>
              Les places partent vite. Réservez dès maintenant pour vivre deux jours de festival inoubliables dans le bocage normand.
            </p>

            <motion.div
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              style={{ display: 'inline-block' }}
            >
              <Link
                to="/festival#billetterie"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '12px',
                  background: 'linear-gradient(135deg, #F5C518 0%, #FF8C00 60%, #FF3D2E 100%)',
                  color: '#0a0a14',
                  fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700,
                  letterSpacing: '0.01em',
                  padding: '18px 44px', borderRadius: '999px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 48px rgba(245,197,24,0.3)',
                  whiteSpace: 'nowrap',
                }}
              >
                <Ticket size={21} />
                Billetterie du prochain événement
              </Link>
            </motion.div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '28px' }}>
              <Users size={14} style={{ color: '#5a5870' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#5a5870' }}>Rejoignez des centaines de festivaliers</span>
            </div>
          </FadeUp>
        </div>
      </section>

    </PageTransition>
  )
}
