import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const SECTIONS = [
  {
    titre: 'Éditeur du site',
    contenu: [
      'Le site carnagesocial.fr est édité par l\'association **Hole Right**.',
      'Association loi 1901 — siège social dans l\'Orne (61), France.',
      'Email : contact@holeright.fr',
    ],
  },
  {
    titre: 'Directeur de la publication',
    contenu: [
      'Le directeur de la publication est le président de l\'association Hole Right.',
    ],
  },
  {
    titre: 'Hébergement',
    contenu: [
      'Le site est hébergé par un prestataire tiers.',
      'Pour toute question relative à l\'hébergement, contactez-nous à contact@holeright.fr',
    ],
  },
  {
    titre: 'Propriété intellectuelle',
    contenu: [
      'L\'ensemble des contenus présents sur ce site (textes, images, logos, illustrations) sont la propriété exclusive de l\'association Hole Right ou de leurs auteurs respectifs.',
      'Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, est strictement interdite sans l\'accord préalable écrit de Hole Right.',
      'Les photographies des artistes sont la propriété de leurs auteurs respectifs et sont utilisées avec leur autorisation.',
    ],
  },
  {
    titre: 'Données personnelles',
    contenu: [
      'Ce site ne collecte aucune donnée personnelle à des fins commerciales.',
      'Les informations transmises via le formulaire de contact sont utilisées uniquement pour répondre à votre demande et ne sont pas conservées au-delà du nécessaire.',
      'Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d\'un droit d\'accès, de rectification, d\'opposition et de suppression de vos données. Pour exercer ce droit, contactez-nous à contact@holeright.fr.',
    ],
  },
  {
    titre: 'Cookies',
    contenu: [
      'Ce site utilise des cookies strictement nécessaires à son fonctionnement technique.',
      'Le lecteur vidéo YouTube intégré sur la page d\'accueil peut déposer des cookies tiers conformément à la politique de confidentialité de Google/YouTube.',
    ],
  },
  {
    titre: 'Liens hypertextes',
    contenu: [
      'Le site peut contenir des liens vers des sites tiers (Hello Asso, réseaux sociaux). Hole Right ne peut être tenu responsable du contenu de ces sites externes.',
    ],
  },
  {
    titre: 'Limitation de responsabilité',
    contenu: [
      'Hole Right s\'efforce de maintenir les informations publiées sur ce site à jour et exactes. Toutefois, l\'association ne peut garantir l\'exactitude, la complétude ou l\'actualité des informations diffusées.',
      'En cas d\'erreur ou d\'omission, merci de nous contacter à contact@holeright.fr.',
    ],
  },
  {
    titre: 'Droit applicable',
    contenu: [
      'Le présent site est soumis au droit français. Tout litige relatif à son utilisation sera soumis à la compétence exclusive des tribunaux français.',
    ],
  },
]

function renderText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/)
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} style={{ color: '#F0EDE8', fontWeight: 600 }}>{part}</strong>
      : part
  )
}

export default function MentionsLegales() {
  return (
    <PageTransition>
      {/* Hero */}
      <section style={{
        minHeight: '280px', backgroundColor: '#09091a',
        display: 'flex', alignItems: 'flex-end',
        padding: '100px 40px 52px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 700, color: '#5a5870', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Légal
            </p>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#F0EDE8', letterSpacing: '-0.04em' }}>
              Mentions légales
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contenu */}
      <section style={{ padding: '72px 40px 120px', backgroundColor: '#09091a' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#5a5870', marginBottom: '56px', lineHeight: 1.7 }}
          >
            Dernière mise à jour : Avril 2026
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {SECTIONS.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
              >
                <h2 style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  fontSize: '1.1rem', color: '#F5C518',
                  marginBottom: '16px', paddingBottom: '12px',
                  borderBottom: '1px solid rgba(245,197,24,0.15)',
                  letterSpacing: '-0.01em',
                }}>
                  {section.titre}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {section.contenu.map((para, j) => (
                    <p key={j} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#8885A0', lineHeight: 1.8 }}>
                      {renderText(para)}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              marginTop: '64px', padding: '32px', borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(245,197,24,0.06), rgba(255,61,46,0.04))',
              border: '1px solid rgba(245,197,24,0.12)',
            }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#8885A0', lineHeight: 1.8 }}>
              Pour toute question relative aux mentions légales ou à la protection des données :{' '}
              <a href="mailto:contact@holeright.fr" style={{ color: '#F5C518', textDecoration: 'none', fontWeight: 600 }}>
                contact@holeright.fr
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
