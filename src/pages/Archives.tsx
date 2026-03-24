import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import PageTransition from '../components/PageTransition'

interface Photo {
  src: string
  alt: string
  category: string
  span?: 'wide' | 'tall' | 'normal'
}

const PHOTOS: Photo[] = [

  { src: '/images/la-boule.jpg',          alt: 'Fosse du festival',        category: 'Public',    span: 'wide'   },
  { src: '/images/artistes.jpg',           alt: 'Artistes sur scène',       category: 'Scène'                    },
  { src: '/images/photo-groupe.jpg',       alt: 'Photo de groupe',          category: 'Équipe',    span: 'tall'   },
  { src: '/images/carnage-social-2022.jpg',alt: 'Carnage Social 2022',      category: 'Archive'                  },
  { src: '/images/orga.jpg',               alt: "L'équipe d'organisation",  category: 'Équipe'                   },
  { src: '/images/benevoles.jpg',          alt: 'Les bénévoles',            category: 'Équipe',    span: 'wide'   },
  { src: '/images/merch.jpg',              alt: 'Stand merchandising',      category: 'Festival'                 },
  { src: '/images/techniques.jpg',         alt: 'Équipe technique',         category: 'Backstage', span: 'tall'   },
  { src: '/images/odc-1.jpg',              alt: 'ODC 1',                    category: 'Scène'                    },
  { src: '/images/odc-2.jpeg',             alt: 'ODC 2',                    category: 'Scène',     span: 'wide'   },
  { src: '/images/benevole-pause.jpg',     alt: 'Bénévole en pause',        category: 'Backstage'                },
  { src: '/images/interlude.jpeg',         alt: 'Soirée Interlude',         category: 'Festival'                 },
  { src: '/images/interlude-affiche.jpg',  alt: 'Affiche Interlude',        category: 'Archive',   span: 'tall'   },
  { src: '/images/prog-2022.jpg',          alt: 'Programme 2022',           category: 'Archive'                  },
  { src: '/images/benevoles2.jpg',         alt: 'Équipe bénévoles',         category: 'Équipe',    span: 'wide'   },
  { src: '/images/logo.jpg',               alt: 'Logo Hole Right',          category: 'Archive'                  },
]

const CATEGORIES = ['Tout', ...Array.from(new Set(PHOTOS.map(p => p.category)))]

export default function Archives() {
  const [activeCategory, setActiveCategory] = useState('Tout')
  const [lightbox, setLightbox] = useState<Photo | null>(null)

  const filtered = activeCategory === 'Tout'
    ? PHOTOS
    : PHOTOS.filter(p => p.category === activeCategory)

  return (
    <PageTransition>
      {/* ─── Header ─── */}
      <section style={{
        paddingTop: '140px', paddingBottom: '64px',
        paddingLeft: '24px', paddingRight: '24px',
        backgroundColor: '#0a0a14',
        textAlign: 'center',
      }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#F5C518', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Mémoire
          </p>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#F0EDE8', letterSpacing: '-0.04em', marginBottom: '16px' }}>
            Photos & Récap
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#8885A0', maxWidth: '480px', margin: '0 auto' }}>
            Revivez les meilleurs moments de nos éditions passées en images.
          </p>
        </motion.div>
      </section>

      {/* ─── Filter chips ─── */}
      <section style={{ padding: '0 24px 48px', backgroundColor: '#0a0a14' }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '999px',
                border: activeCategory === cat ? '1px solid #FF3D2E' : '1px solid #2a2a40',
                backgroundColor: activeCategory === cat ? 'rgba(255,61,46,0.12)' : 'transparent',
                color: activeCategory === cat ? '#FF3D2E' : '#8885A0',
                fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ─── Masonry grid ─── */}
      <section style={{ padding: '0 24px 96px', backgroundColor: '#0a0a14' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div
            layout
            style={{
              columns: '3 280px',
              gap: '12px',
            }}
          >
            <AnimatePresence>
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  style={{
                    breakInside: 'avoid',
                    marginBottom: '12px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'zoom-in',
                    border: '1px solid #1a1a2e',
                  }}
                  onClick={() => setLightbox(photo)}
                  className="photo-item"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    style={{
                      width: '100%',
                      display: 'block',
                      transition: 'transform 0.45s ease',
                    }}
                    loading="lazy"
                    className="photo-img"
                  />
                  {/* Hover overlay */}
                  <div className="photo-overlay" style={{
                    position: 'absolute', inset: 0,
                    backgroundColor: 'rgba(10,10,20,0)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.3s ease',
                  }}>
                    <ZoomIn size={28} color="#fff" style={{ opacity: 0, transition: 'opacity 0.3s' }} className="zoom-icon" />
                  </div>
                  {/* Category badge */}
                  <span style={{
                    position: 'absolute', bottom: '10px', left: '10px',
                    backgroundColor: 'rgba(10,10,20,0.7)',
                    backdropFilter: 'blur(8px)',
                    color: '#8885A0', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem',
                    fontWeight: 500, padding: '3px 10px', borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}>
                    {photo.category}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              backgroundColor: 'rgba(0,0,0,0.92)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '24px',
              backdropFilter: 'blur(8px)',
            }}
          >
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute', top: '24px', right: '24px',
                background: 'rgba(255,255,255,0.08)', border: 'none', borderRadius: '50%',
                width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#F0EDE8',
              }}
            >
              <X size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              style={{ maxWidth: '90vw', maxHeight: '85vh' }}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                style={{
                  maxWidth: '100%', maxHeight: '80vh',
                  borderRadius: '12px',
                  objectFit: 'contain',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.8)',
                }}
              />
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
                color: '#8885A0', textAlign: 'center', marginTop: '16px',
              }}>
                {lightbox.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover styles via CSS */}
      <style>{`
        .photo-item:hover .photo-img { transform: scale(1.06); }
        .photo-item:hover .photo-overlay { background-color: rgba(10,10,20,0.45) !important; }
        .photo-item:hover .zoom-icon { opacity: 1 !important; }
      `}</style>
    </PageTransition>
  )
}
