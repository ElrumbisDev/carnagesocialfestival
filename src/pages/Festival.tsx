import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Ticket, MapPin, Calendar, Clock, Music, Info, ExternalLink, ChevronRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

type TabId = 'prog' | 'billetterie' | 'infos'

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: 'prog', label: "Prog'", icon: <Music size={16} /> },
  { id: 'billetterie', label: 'Billetterie', icon: <Ticket size={16} /> },
  { id: 'infos', label: 'Infos pratiques', icon: <Info size={16} /> },
]

/* ─── Placeholder artists ─── */
const LINEUP = [
  { day: 'Vendredi 5 Juin', artists: [
    { name: 'Tête d\'affiche TBA', time: '22:00', genre: 'Rock', headliner: true },
    { name: 'Groupe local A', time: '20:00', genre: 'Pop', headliner: false },
    { name: 'Groupe local B', time: '18:30', genre: 'Indie', headliner: false },
    { name: 'Ouverture – DJ Set', time: '17:00', genre: 'Electronic', headliner: false },
  ]},
  { day: 'Samedi 6 Juin', artists: [
    { name: 'Tête d\'affiche TBA', time: '22:00', genre: 'Techno', headliner: true },
    { name: 'Artiste C', time: '20:30', genre: 'Rock', headliner: false },
    { name: 'Artiste D', time: '19:00', genre: 'Pop', headliner: false },
    { name: 'Artiste E', time: '17:30', genre: 'Electronic', headliner: false },
    { name: 'Artiste F', time: '16:00', genre: 'Indie', headliner: false },
  ]},
]

const TICKET_OPTIONS = [
  { name: 'Pass 1 Jour', price: 'À venir', desc: 'Accès au festival pour une journée au choix', available: false },
  { name: 'Pass 2 Jours', price: 'À venir', desc: 'Accès complet au festival vendredi et samedi', available: false, highlight: true },
  { name: 'Pass Camping', price: 'À venir', desc: 'Pass 2 jours + emplacement camping sur site', available: false },
]

const INFO_ITEMS = [
  {
    icon: <MapPin size={22} />,
    title: 'Lieu',
    content: 'Louge-sur-Maire, Orne (61)\nAccessible en voiture depuis Alençon, Le Mans et Caen.',
  },
  {
    icon: <Clock size={22} />,
    title: 'Horaires',
    content: 'Vendredi 5 Juin : Ouverture des portes à 16h00\nSamedi 6 Juin : Ouverture des portes à 15h00\nFin des concerts : environ 00h30',
  },
  {
    icon: <Calendar size={22} />,
    title: 'Camping',
    content: 'Un espace camping est disponible sur le site pour les festivaliers munis d\'un pass camping. Possibilité d\'arriver la veille (vendredi matin).',
  },
  {
    icon: <Info size={22} />,
    title: 'Sur place',
    content: 'Bars et restauration sur place. Accès PMR. Consignes bagages. Espace détente et associations partenaires.',
  },
]

function TabContent({ id }: { id: TabId }) {
  if (id === 'prog') {
    return (
      <div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#8885A0', marginBottom: '40px', lineHeight: 1.7 }}>
          La programmation complète sera dévoilée prochainement. En attendant, voici l'ossature du programme.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {LINEUP.map(day => (
            <div key={day.day}>
              <h3 style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem',
                color: '#F5C518', letterSpacing: '0.05em', textTransform: 'uppercase',
                marginBottom: '16px', paddingBottom: '12px',
                borderBottom: '1px solid #2a2a40',
              }}>
                {day.day}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {day.artists.map((artist, i) => (
                  <motion.div key={i}
                    whileHover={{ x: artist.headliner ? 0 : 6, backgroundColor: artist.headliner ? 'rgba(255,61,46,0.09)' : 'rgba(255,255,255,0.04)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    style={{
                      display: 'flex', alignItems: 'center',
                      padding: '14px 16px', borderRadius: '10px', gap: '16px',
                      backgroundColor: artist.headliner ? 'rgba(255,61,46,0.06)' : 'transparent',
                      border: artist.headliner ? '1px solid rgba(255,61,46,0.15)' : '1px solid transparent',
                    }}
                  >
                    <span style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#5a5870',
                      minWidth: '48px', fontWeight: 500,
                    }}>{artist.time}</span>
                    <div style={{ flex: 1 }}>
                      <span style={{
                        fontFamily: artist.headliner ? 'Syne, sans-serif' : 'Inter, sans-serif',
                        fontWeight: artist.headliner ? 700 : 400,
                        fontSize: artist.headliner ? '1.1rem' : '0.95rem',
                        color: artist.headliner ? '#F0EDE8' : '#8885A0',
                      }}>{artist.name}</span>
                    </div>
                    <span style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 500,
                      color: artist.headliner ? '#FF3D2E' : '#5a5870',
                      backgroundColor: artist.headliner ? 'rgba(255,61,46,0.1)' : 'rgba(255,255,255,0.04)',
                      padding: '3px 10px', borderRadius: '999px',
                    }}>{artist.genre}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: '40px', padding: '20px', borderRadius: '12px',
          backgroundColor: 'rgba(245,197,24,0.06)', border: '1px solid rgba(245,197,24,0.15)',
          fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#8885A0',
        }}>
          🎵 Programmation complète à venir. Suivez nos réseaux sociaux pour les annonces.
        </div>
      </div>
    )
  }

  if (id === 'billetterie') {
    return (
      <div id="billetterie">
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#8885A0', marginBottom: '40px', lineHeight: 1.7 }}>
          Les billets seront disponibles très prochainement. Restez connectés pour ne pas manquer l'ouverture de la billetterie.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {TICKET_OPTIONS.map((ticket, i) => (
            <motion.div key={i}
              whileHover={{ y: -6, boxShadow: ticket.highlight ? '0 16px 40px rgba(255,61,46,0.2)' : '0 16px 40px rgba(245,197,24,0.1)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              style={{
                backgroundColor: ticket.highlight ? 'rgba(255,61,46,0.06)' : '#1a1a2e',
                border: ticket.highlight ? '1px solid rgba(255,61,46,0.3)' : '1px solid #2a2a40',
                borderRadius: '16px', padding: '32px 24px',
                position: 'relative', textAlign: 'center',
              }}>
              {ticket.highlight && (
                <span style={{
                  position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                  backgroundColor: '#FF3D2E', color: '#fff',
                  fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600,
                  padding: '4px 16px', borderRadius: '999px', whiteSpace: 'nowrap',
                }}>RECOMMANDÉ</span>
              )}
              <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#F0EDE8', marginBottom: '8px' }}>
                {ticket.name}
              </p>
              <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: ticket.highlight ? '#FF3D2E' : '#F5C518', marginBottom: '12px' }}>
                {ticket.price}
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#8885A0', lineHeight: 1.6, marginBottom: '24px' }}>
                {ticket.desc}
              </p>
              <div style={{
                backgroundColor: '#2a2a40',
                color: '#5a5870',
                fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', fontWeight: 500,
                padding: '12px', borderRadius: '10px',
              }}>
                Disponible prochainement
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{
          padding: '24px', borderRadius: '14px',
          backgroundColor: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)',
          display: 'flex', alignItems: 'flex-start', gap: '16px',
        }}>
          <ExternalLink size={18} style={{ color: '#22C55E', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: '#F0EDE8', marginBottom: '4px' }}>
              Notification de mise en vente
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#8885A0' }}>
              Suivez-nous sur Instagram et Facebook pour être alerté·e dès l'ouverture de la billetterie.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#8885A0', marginBottom: '40px', lineHeight: 1.7 }}>
        Tout ce que vous devez savoir pour préparer votre venue au Festival Carnage Social 2026.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {INFO_ITEMS.map((item, i) => (
          <div key={i} style={{
            backgroundColor: '#1a1a2e', border: '1px solid #2a2a40',
            borderRadius: '16px', padding: '28px',
          }}>
            <div style={{ color: '#FF3D2E', marginBottom: '16px' }}>{item.icon}</div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#F0EDE8', marginBottom: '12px' }}>
              {item.title}
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#8885A0', lineHeight: 1.75, whiteSpace: 'pre-line' }}>
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Festival() {
  const [activeTab, setActiveTab] = useState<TabId>('prog')

  return (
    <PageTransition>
      {/* ─── Hero banner ─── */}
      <section style={{
        position: 'relative',
        height: '420px',
        overflow: 'hidden',
        backgroundColor: '#0a0a14',
      }}>
        <img
          src="/images/la-boule.jpg"
          alt="Festival Carnage Social"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,10,20,0.3) 0%, rgba(10,10,20,0.85) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end', padding: '48px',
          maxWidth: '1280px', margin: '0 auto', left: 0, right: 0,
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              display: 'inline-block',
              backgroundColor: 'rgba(255,61,46,0.15)', border: '1px solid rgba(255,61,46,0.3)',
              color: '#FF3D2E', fontFamily: 'Inter, sans-serif', fontSize: '0.72rem',
              fontWeight: 600, letterSpacing: '0.1em', padding: '4px 14px', borderRadius: '999px',
              marginBottom: '16px',
            }}>
              FESTIVAL PLEIN AIR
            </span>
            <h1 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              letterSpacing: '-0.04em', color: '#F0EDE8', lineHeight: 1.0, marginBottom: '12px',
            }}>
              Festival Carnage Social
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#8885A0' }}>
              5 & 6 Juin 2026 · Louge-sur-Maire, Orne (61)
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Description ─── */}
      <section style={{ padding: '64px 24px 48px', backgroundColor: '#0a0a14' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#8885A0',
              lineHeight: 1.85, textAlign: 'center',
            }}
          >
            Le Festival Carnage Social est l'événement phare de l'association Hole Right.
            Chaque année, nous rassemblons artistes locaux et nationaux dans un cadre champêtre pour deux jours
            de concerts, de convivialité et de découvertes musicales. Pop, Rock, Techno — un programme éclectique
            pour tous les goûts.
          </motion.p>
        </div>
      </section>

      {/* ─── Tabs ─── */}
      <section style={{ padding: '0 24px 96px', backgroundColor: '#0a0a14' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>

          {/* Tab bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: 'flex',
              gap: '4px',
              backgroundColor: '#111124',
              border: '1px solid #2a2a40',
              borderRadius: '14px',
              padding: '6px',
              marginBottom: '48px',
              width: 'fit-content',
            }}
          >
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '10px 22px',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600,
                  transition: 'all 0.25s ease',
                  backgroundColor: activeTab === tab.id ? '#FF3D2E' : 'transparent',
                  color: activeTab === tab.id ? '#fff' : '#8885A0',
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Tab content with framer-motion transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <TabContent id={activeTab} />
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ─── Photo strip ─── */}
      <section style={{ padding: '0 0 80px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '12px', paddingLeft: '24px' }}>
          {['/images/artistes.jpg', '/images/la-boule.jpg', '/images/photo-groupe.jpg', '/images/orga.jpg', '/images/merch.jpg'].map((src, i) => (
            <div key={i} style={{
              width: '220px', height: '150px', flexShrink: 0, borderRadius: '12px', overflow: 'hidden',
            }}>
              <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{
        backgroundColor: '#07070f', borderTop: '1px solid #2a2a40',
        padding: '64px 24px', textAlign: 'center',
      }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#8885A0', marginBottom: '24px' }}>
          Des questions ? Envie de rejoindre l'aventure ?
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:contact@holeright.fr"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'transparent', color: '#F0EDE8',
              fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 500,
              padding: '12px 24px', borderRadius: '999px', border: '1px solid #2a2a40',
              textDecoration: 'none', transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = '#5a5870'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = '#2a2a40'}
          >
            Nous contacter
          </a>
          <a
            href="/benevolat"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: '#FF3D2E', color: '#fff',
              fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600,
              padding: '12px 24px', borderRadius: '999px',
              textDecoration: 'none', transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#cc2e22'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#FF3D2E'}
          >
            Devenir bénévole <ChevronRight size={15} />
          </a>
        </div>
      </section>
    </PageTransition>
  )
}
