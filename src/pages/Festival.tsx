import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Ticket, MapPin, Calendar, Clock, Music, Info, ExternalLink, ChevronRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

type TabId = 'prog' | 'billetterie' | 'infos'
type SceneId = 'carnage' | 'turbo' | 'chill'

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: 'prog', label: "Programmation", icon: <Music size={16} /> },
  { id: 'billetterie', label: 'Billetterie', icon: <Ticket size={16} /> },
  { id: 'infos', label: 'Infos pratiques', icon: <Info size={16} /> },
]

type Artist = { name: string; genre: string; headliner?: boolean; photo?: string }
type Scene = { id: string; label: string; color: string; bg: string; gradient: string; artists: Artist[] }

const SCENES: Scene[] = [
  {
    id: 'carnage',
    label: 'Scène Carnage',
    color: '#FF3D2E',
    bg: 'rgba(255,61,46,0.12)',
    gradient: 'linear-gradient(135deg, rgba(255,61,46,0.2) 0%, rgba(255,80,20,0.08) 100%)',
    artists: [
      { name: '+++', genre: 'Rock', headliner: true, photo: '/images/artistes/plusplus.jpg' },
      { name: 'Evil Grimace', genre: 'Rock', photo: '/images/artistes/evil-grimace.jpg' },
      { name: 'JAEL', genre: 'Pop', photo: '/images/artistes/jael.jpg' },
      { name: 'Jasmine Not Jafar', genre: 'Indie', photo: '/images/artistes/jasmine-not-jafar.jpg' },
      { name: 'Marave', genre: 'Rock', photo: '/images/artistes/marave.jpg' },
      { name: 'Ravage Club', genre: 'Rock', photo: '/images/artistes/ravage-club.jpg' },
      { name: 'Spore', genre: 'Metal', photo: '/images/artistes/spore.jpg' },
    ],
  },
  {
    id: 'turbo',
    label: 'Scène Turbo',
    color: '#F5C518',
    bg: 'rgba(245,197,24,0.12)',
    gradient: 'linear-gradient(135deg, rgba(245,197,24,0.2) 0%, rgba(255,140,0,0.08) 100%)',
    artists: [
      { name: 'Aurore Mojo_', genre: 'Electronic', headliner: true, photo: '/images/artistes/aurore-mojo.jpg' },
      { name: 'Azhar Sistorms', genre: 'Techno' },
      { name: 'DJ Contest', genre: 'DJ Set' },
      { name: 'Douche', genre: 'Electronic', photo: '/images/artistes/douche.jpg' },
      { name: 'Dynamo', genre: 'Electronic', photo: '/images/artistes/dynamo.jpg' },
      { name: 'Kimia', genre: 'Electronic' },
      { name: 'La Trale_', genre: 'Electronic' },
      { name: 'MRTY', genre: 'DJ Set', photo: '/images/artistes/mrty.jpg' },
      { name: 'Malo [Hole Right]', genre: 'DJ Set' },
      { name: 'Méchante_', genre: 'Electronic' },
      { name: 'Synoptic_', genre: 'Techno' },
    ],
  },
  {
    id: 'chill',
    label: 'Coin Chill',
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.12)',
    gradient: 'linear-gradient(135deg, rgba(34,197,94,0.2) 0%, rgba(16,185,129,0.08) 100%)',
    artists: [
      { name: 'Le Médialab', genre: 'Ambient', photo: '/images/artistes/le-medialab.jpg' },
      { name: 'Michael Platas', genre: 'Acoustic', photo: '/images/artistes/michael-platas.jpg' },
    ],
  },
]

const HELLOASSO_URL = 'https://www.helloasso.com/associations/hole-right/evenements/festival-carnage-social-4'

const TICKET_OPTIONS = [
  {
    name: 'Pass 1 Jour',
    subtitle: '« Pour toutes & tous »',
    price: '16,50€',
    desc: "Prix qui permet à toutes & tous de venir au festival sur 1 jour.",
    color: '#F5C518',
  },
  {
    name: 'Pass 1 Jour',
    subtitle: '« À l\'équilibre »',
    price: '19€',
    desc: "Prix qui nous permet de revenir à l'équilibre financièrement sur 1 jour.",
    color: '#FF8C00',
  },
  {
    name: 'Pass 1 Jour',
    subtitle: '« Coup de pouce »',
    price: '23€',
    desc: "Améliore l'accueil, les cachets des intermittents, l'accessibilité pour tous…",
    color: '#FF3D2E',
  },
  {
    name: 'Pass 2 Jours',
    subtitle: '« Pour toutes & tous »',
    price: '30€',
    desc: "Prix qui permet à toutes & tous de venir durant les 2 jours.",
    color: '#60a5fa',
    highlight: true,
  },
  {
    name: 'Pass 2 Jours',
    subtitle: '« À l\'équilibre »',
    price: '35€',
    desc: "Prix qui nous permet de revenir à l'équilibre sur les 2 jours.",
    color: '#a78bfa',
  },
  {
    name: 'Pass 2 Jours',
    subtitle: '« Coup de Pouce »',
    price: '40€',
    desc: "Améliore l'accueil, les cachets des intermittents, l'accessibilité pour tous…",
    color: '#22C55E',
  },
]

const INFO_ITEMS = [
  { icon: <MapPin size={22} />, title: 'Lieu', color: '#22C55E', content: 'Louge-sur-Maire, Orne (61)\nAccessible depuis Alençon, Le Mans et Caen.' },
  { icon: <Clock size={22} />, title: 'Horaires', color: '#F5C518', content: 'Vendredi 5 Juin : Ouverture à 16h00\nSamedi 6 Juin : Ouverture à 15h00\nFin des concerts : environ 00h30' },
  { icon: <Calendar size={22} />, title: 'Camping', color: '#60a5fa', content: "Un espace camping est disponible sur site pour les festivaliers munis d'un pass camping." },
  { icon: <Info size={22} />, title: 'Sur place', color: '#FF3D2E', content: 'Bars et restauration. Accès PMR. Consignes bagages. Espace détente et associations partenaires.' },
]

function ProgContent() {
  const [activeScene, setActiveScene] = useState<SceneId>('carnage')
  const scene = SCENES.find(s => s.id === activeScene)!

  return (
    <div>
      {/* Onglets scènes */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
        {SCENES.map(s => {
          const active = activeScene === s.id
          return (
            <motion.button
              key={s.id}
              onClick={() => setActiveScene(s.id as SceneId)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '11px 24px', borderRadius: '999px',
                border: `2px solid ${active ? s.color : 'rgba(255,255,255,0.08)'}`,
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 700,
                background: active ? s.color : 'transparent',
                color: active ? (s.id === 'turbo' ? '#0a0a14' : '#fff') : '#8885A0',
                transition: 'all 0.2s ease',
                boxShadow: active ? `0 4px 20px ${s.color}50` : 'none',
                letterSpacing: '0.02em',
              }}
            >
              {s.label}
            </motion.button>
          )
        })}
      </div>

      {/* Headliner mis en avant */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeScene}
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
        >
          {/* Headliner */}
          {scene.artists.filter(a => a.headliner).map((artist, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 }}
              style={{
                marginBottom: '32px', borderRadius: '20px', overflow: 'hidden',
                background: scene.gradient,
                border: `1px solid ${scene.color}40`,
                display: 'grid', gridTemplateColumns: '280px 1fr',
                minHeight: '200px',
                boxShadow: `0 8px 40px ${scene.color}20`,
              }}
              className="headliner-card"
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                {artist.photo ? (
                  <img src={artist.photo} alt={artist.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: scene.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '4rem', color: scene.color }}>{artist.name.charAt(0)}</span>
                  </div>
                )}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, rgba(9,9,26,0.8) 100%)' }} />
              </div>
              <div style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{
                  display: 'inline-block', marginBottom: '12px', width: 'fit-content',
                  background: scene.color, color: scene.id === 'turbo' ? '#0a0a14' : '#fff',
                  fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 800,
                  padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.1em',
                }}>★ TÊTE D'AFFICHE</span>
                <h3 style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 800,
                  fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', letterSpacing: '-0.03em',
                  color: '#F0EDE8', marginBottom: '8px', lineHeight: 1.1,
                }}>{artist.name}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: scene.color, fontWeight: 600 }}>{artist.genre} · {scene.label}</p>
              </div>
            </motion.div>
          ))}

          {/* Grille autres artistes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '14px' }}>
            {scene.artists.filter(a => !a.headliner).map((artist, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.04 }}
                whileHover={{ y: -5, boxShadow: `0 12px 32px ${scene.color}25` }}
                style={{
                  background: scene.bg,
                  border: `1px solid ${scene.color}25`,
                  borderRadius: '16px', overflow: 'hidden',
                }}
              >
                <div style={{ height: '160px', backgroundColor: '#111', overflow: 'hidden', position: 'relative' }}>
                  {artist.photo ? (
                    <motion.img
                      src={artist.photo} alt={artist.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                      whileHover={{ scale: 1.07 }} transition={{ duration: 0.4 }}
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `radial-gradient(circle, ${scene.color}20 0%, transparent 70%)` }}>
                      <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: scene.color + '90' }}>{artist.name.charAt(0)}</span>
                    </div>
                  )}
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${scene.id === 'carnage' ? 'rgba(40,8,4,0.85)' : scene.id === 'turbo' ? 'rgba(30,25,0,0.85)' : 'rgba(4,20,10,0.85)'} 0%, transparent 55%)` }} />
                </div>
                <div style={{ padding: '12px 14px' }}>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#F0EDE8', marginBottom: '3px' }}>{artist.name}</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: scene.color, fontWeight: 600, letterSpacing: '0.04em' }}>{artist.genre}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .headliner-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

function TabContent({ id }: { id: TabId }) {
  if (id === 'prog') return <ProgContent />

  if (id === 'billetterie') {
    return (
      <div id="billetterie">
        {/* CTA Hello Asso */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          style={{
            marginBottom: '48px', padding: '36px 40px', borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(245,197,24,0.12), rgba(255,61,46,0.08))',
            border: '1px solid rgba(245,197,24,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '24px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', display: 'inline-block', boxShadow: '0 0 8px #22C55E' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 700, color: '#22C55E', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Billetterie ouverte</span>
            </div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#F0EDE8', marginBottom: '6px', letterSpacing: '-0.02em' }}>
              Prenez vos billets dès maintenant
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#8885A0' }}>
              Via Hello Asso — paiement sécurisé, plusieurs tarifs disponibles
            </p>
          </div>
          <motion.a
            href={HELLOASSO_URL}
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'linear-gradient(135deg, #F5C518, #FF8C00)',
              color: '#0a0a14', fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 800,
              padding: '16px 36px', borderRadius: '999px', textDecoration: 'none',
              boxShadow: '0 6px 32px rgba(245,197,24,0.4)', whiteSpace: 'nowrap',
              letterSpacing: '0.01em',
            }}
          >
            <Ticket size={18} /> Acheter sur Hello Asso
          </motion.a>
        </motion.div>

        {/* 1 Jour */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#F5C518', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#F5C518', borderRadius: '2px' }} />
            Pass 1 Jour
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
            {TICKET_OPTIONS.filter(t => t.name === 'Pass 1 Jour').map((ticket, i) => (
              <motion.a
                key={i} href={HELLOASSO_URL} target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -5, boxShadow: `0 16px 40px ${ticket.color}30` }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                style={{
                  display: 'block', textDecoration: 'none',
                  background: `linear-gradient(135deg, ${ticket.color}12, ${ticket.color}05)`,
                  border: `1px solid ${ticket.color}30`,
                  borderRadius: '16px', padding: '28px 22px',
                }}
              >
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: ticket.color, marginBottom: '4px' }}>{ticket.subtitle}</p>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#F0EDE8', marginBottom: '10px', letterSpacing: '-0.03em' }}>{ticket.price}</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#8885A0', lineHeight: 1.6 }}>{ticket.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>

        {/* 2 Jours */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#60a5fa', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#60a5fa', borderRadius: '2px' }} />
            Pass 2 Jours
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
            {TICKET_OPTIONS.filter(t => t.name === 'Pass 2 Jours').map((ticket, i) => (
              <motion.a
                key={i} href={HELLOASSO_URL} target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -5, boxShadow: `0 16px 40px ${ticket.color}30` }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                style={{
                  display: 'block', textDecoration: 'none',
                  background: `linear-gradient(135deg, ${ticket.color}12, ${ticket.color}05)`,
                  border: `1px solid ${ticket.color}${ticket.highlight ? '50' : '30'}`,
                  borderRadius: '16px', padding: '28px 22px',
                  position: 'relative',
                }}
              >
                {ticket.highlight && (
                  <span style={{
                    position: 'absolute', top: '-12px', left: '20px',
                    background: ticket.color, color: '#fff',
                    fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 800,
                    padding: '3px 14px', borderRadius: '999px', letterSpacing: '0.08em',
                  }}>POPULAIRE</span>
                )}
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: ticket.color, marginBottom: '4px' }}>{ticket.subtitle}</p>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#F0EDE8', marginBottom: '10px', letterSpacing: '-0.03em' }}>{ticket.price}</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#8885A0', lineHeight: 1.6 }}>{ticket.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          style={{
            padding: '20px 24px', borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(34,197,94,0.08), transparent)',
            border: '1px solid rgba(34,197,94,0.2)',
            display: 'flex', alignItems: 'center', gap: '14px',
          }}>
          <ExternalLink size={16} style={{ color: '#22C55E', flexShrink: 0 }} />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#8885A0' }}>
            Paiement sécurisé via <strong style={{ color: '#F0EDE8' }}>Hello Asso</strong>. Les billets sont nominatifs.
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: '#a0a0c0', marginBottom: '40px', lineHeight: 1.75 }}>
        Tout ce que vous devez savoir pour préparer votre venue au Festival Carnage Social 2026.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {INFO_ITEMS.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, boxShadow: `0 12px 40px ${item.color}20` }}
            style={{
              background: `linear-gradient(135deg, ${item.color}10, ${item.color}04)`,
              border: `1px solid ${item.color}30`,
              borderRadius: '18px', padding: '28px',
            }}
          >
            <div style={{
              width: '44px', height: '44px', borderRadius: '12px',
              background: `${item.color}20`, border: `1px solid ${item.color}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: item.color, marginBottom: '18px',
            }}>{item.icon}</div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#F0EDE8', marginBottom: '10px' }}>
              {item.title}
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#8885A0', lineHeight: 1.75, whiteSpace: 'pre-line' }}>
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Festival() {
  const [activeTab, setActiveTab] = useState<TabId>('prog')

  return (
    <PageTransition>

      {/* ══════════════════════
          HERO — affiche plein cadre
      ══════════════════════ */}
      <section style={{ position: 'relative', height: '620px', overflow: 'hidden' }}>
        <img
          src="/images/carnage-social.jpeg"
          alt="Affiche Festival Carnage Social 2026"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
        />
        {/* Gradient multi-couche pour rendre le texte lisible */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(9,9,26,0.25) 0%, rgba(9,9,26,0.1) 40%, rgba(9,9,26,0.92) 100%)',
        }} />
        {/* Halo couleur bas */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px',
          background: 'linear-gradient(to top, rgba(255,61,46,0.15), transparent)',
        }} />

        {/* Contenu */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end', padding: '52px 48px',
          maxWidth: '1280px', margin: '0 auto', left: 0, right: 0,
        }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              {['FESTIVAL PLEIN AIR', '5 & 6 JUIN 2026', 'LOUGE-SUR-MAIRE'].map((tag, i) => (
                <span key={i} style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.12em', padding: '5px 14px', borderRadius: '999px',
                  background: i === 0 ? 'linear-gradient(135deg, #FF3D2E, #FF8C00)' : 'rgba(255,255,255,0.12)',
                  border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                }}>{tag}</span>
              ))}
            </div>
            <h1 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
              letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: '16px',
            }}>
              <span style={{ display: 'block', color: '#F0EDE8' }}>Festival</span>
              <span style={{ display: 'block', background: 'linear-gradient(90deg, #F5C518 0%, #FF8C00 40%, #FF3D2E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Carnage Social
              </span>
            </h1>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link to="#billetterie" onClick={() => {}} style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #F5C518, #FF8C00)',
                color: '#0a0a14', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 700,
                padding: '12px 26px', borderRadius: '999px', textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(245,197,24,0.4)',
              }}>
                <Ticket size={16} /> Billetterie
              </Link>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'rgba(240,237,232,0.7)' }}>
                Pop · Rock · Techno · Electronic
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════
          BANDE COULEUR INFO
      ══════════════════════ */}
      <div style={{
        background: 'linear-gradient(90deg, #FF3D2E 0%, #FF8C00 33%, #F5C518 66%, #22C55E 100%)',
        padding: '3px 0',
      }} />
      <div style={{
        background: 'linear-gradient(135deg, #0f0a1e 0%, #09091a 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '24px 40px',
          display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'center',
        }} className="info-band">
          {[
            { icon: <Calendar size={16} />, text: '5 & 6 Juin 2026', color: '#F5C518' },
            { icon: <MapPin size={16} />, text: 'Louge-sur-Maire, Orne (61)', color: '#22C55E' },
            { icon: <Music size={16} />, text: 'Pop · Rock · Techno · Electronic', color: '#60a5fa' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#c0bdd8' }}>
              <span style={{ color: item.color }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════
          DESCRIPTION
      ══════════════════════ */}
      <section style={{
        padding: '72px 40px 56px',
        background: 'linear-gradient(180deg, #09091a 0%, #0d0920 50%, #09091a 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div aria-hidden style={{ position: 'absolute', top: '-120px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '400px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,61,46,0.08) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#b0adc8', lineHeight: 1.9, textAlign: 'center' }}
          >
            Le <strong style={{ color: '#F0EDE8', fontWeight: 700 }}>Festival Carnage Social</strong> est l'événement phare de l'association Hole Right.
            Chaque année, nous rassemblons artistes locaux et nationaux dans un cadre champêtre normand pour deux jours
            de concerts, de convivialité et de découvertes musicales.{' '}
            <span style={{ background: 'linear-gradient(90deg, #F5C518, #FF8C00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 }}>
              Pop, Rock, Techno
            </span>{' '}
            — un programme éclectique pour tous les goûts.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════
          TABS
      ══════════════════════ */}
      <section style={{
        padding: '0 40px 100px',
        background: 'linear-gradient(180deg, #09091a 0%, #080815 100%)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Tab bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: 'flex', gap: '6px', marginBottom: '52px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px', padding: '6px', width: 'fit-content',
            }}
          >
            {TABS.map((tab, i) => {
              const colors = ['#FF3D2E', '#F5C518', '#22C55E']
              const active = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '11px 24px', borderRadius: '12px', border: 'none', cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 700,
                    transition: 'all 0.25s ease',
                    background: active ? `linear-gradient(135deg, ${colors[i]}, ${colors[i]}cc)` : 'transparent',
                    color: active ? (i === 1 ? '#0a0a14' : '#fff') : '#6a6888',
                    boxShadow: active ? `0 4px 16px ${colors[i]}40` : 'none',
                  }}
                >
                  {tab.icon} {tab.label}
                </button>
              )
            })}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <TabContent id={activeTab} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

{/* ══════════════════════
          CTA FINAL
      ══════════════════════ */}
      <section style={{
        padding: '72px 40px',
        background: 'linear-gradient(135deg, rgba(255,61,46,0.1) 0%, rgba(245,197,24,0.08) 50%, rgba(34,197,94,0.06) 100%)',
        borderTop: '1px solid rgba(255,61,46,0.15)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,61,46,0.06), transparent)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: '#8885A0', marginBottom: '28px' }}>
            Des questions ? Envie de rejoindre l'aventure ?
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href="mailto:contact@holeright.fr"
              whileHover={{ scale: 1.04, y: -2 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'transparent', color: '#F0EDE8',
                fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 500,
                padding: '13px 28px', borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.15)', textDecoration: 'none',
              }}
            >
              Nous contacter
            </motion.a>
            <motion.a
              href="/benevolat"
              whileHover={{ scale: 1.04, y: -2 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #FF3D2E, #FF8C00)',
                color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 700,
                padding: '13px 28px', borderRadius: '999px', textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(255,61,46,0.35)',
              }}
            >
              Devenir bénévole <ChevronRight size={15} />
            </motion.a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .info-band { gap: 16px !important; padding: 20px 24px !important; }
        }
      `}</style>
    </PageTransition>
  )
}
