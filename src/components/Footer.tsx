import { Link } from 'react-router-dom'
import { Mail, Globe, Share2, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#07070f',
      borderTop: '1px solid #2a2a40',
      paddingTop: '64px',
      paddingBottom: '32px',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <img
              src="/images/logo.jpg"
              alt="Hole Right"
              style={{ height: '56px', width: '56px', borderRadius: '10px', objectFit: 'cover', marginBottom: '16px', display: 'block' }}
            />
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.85rem',
              color: '#8885A0',
              lineHeight: 1.7,
              maxWidth: '260px',
            }}>
              Association événementielle indépendante basée dans l'Orne (61). Organisatrice du Festival Carnage Social et d'autres événements culturels.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#F0EDE8',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>Navigation</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { to: '/', label: 'Accueil' },
                { to: '/festival', label: 'Le Festival' },
                { to: '/archives', label: 'Archives' },
                { to: '/histoire', label: 'Notre Histoire' },
                { to: '/benevolat', label: 'Devenir Bénévole' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      color: '#8885A0',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = '#F0EDE8'}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = '#8885A0'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Légal */}
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#F0EDE8',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>Contact & Légal</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a
                  href="mailto:contact@holeright.fr"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: '#8885A0',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#F0EDE8'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#8885A0'}
                >
                  <Mail size={14} />
                  contact@holeright.fr
                </a>
              </li>
              <li>
                <Link
                  to="/mentions-legales"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#8885A0', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#F0EDE8'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = '#8885A0'}
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  to="/membres"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#8885A0', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#F0EDE8'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = '#8885A0'}
                >
                  Les membres de l'association
                </Link>
              </li>
            </ul>

            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <a
                href="#"
                style={{ color: '#5a5870', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FF3D2E'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#5a5870'}
                aria-label="Instagram"
              >
                <Globe size={20} />
              </a>
              <a
                href="#"
                style={{ color: '#5a5870', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FF3D2E'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#5a5870'}
                aria-label="Réseaux sociaux"
              >
                <Share2 size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid #2a2a40',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#5a5870' }}>
            © {new Date().getFullYear()} Hole Right. Tous droits réservés.
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            color: '#5a5870',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            Fait avec <Heart size={11} style={{ color: '#FF3D2E' }} fill="#FF3D2E" /> dans l'Orne
          </p>
        </div>
      </div>
    </footer>
  )
}
