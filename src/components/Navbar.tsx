import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Ticket } from 'lucide-react'

const NAV_LINKS = [
  { to: '/festival', label: 'Le Festival' },
  { to: '/archives', label: 'Archives' },
  { to: '/histoire', label: 'Notre Histoire' },
  { to: '/benevolat', label: 'Devenir Bénévole' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.4s ease, border-color 0.4s ease',
        backgroundColor: scrolled ? 'rgba(10,10,20,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #2a2a40' : '1px solid transparent',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.08, rotate: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400, damping: 18 }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/logo.jpg"
              alt="Hole Right"
              style={{ height: '44px', width: '44px', borderRadius: '8px', objectFit: 'cover', display: 'block' }}
            />
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          {NAV_LINKS.map(link => {
            const isActive = location.pathname === link.to
            return (
              <motion.div key={link.to} style={{ position: 'relative' }} whileHover="hover">
                <Link
                  to={link.to}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    color: isActive ? '#F5C518' : '#8885A0',
                    textDecoration: 'none',
                    display: 'block',
                    paddingBottom: '2px',
                  }}
                >
                  <motion.span
                    variants={{ hover: { color: '#F0EDE8' } }}
                    style={{ color: isActive ? '#F5C518' : '#8885A0', display: 'block' }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
                {/* Underline animée */}
                <motion.div
                  variants={{ hover: { scaleX: 1, opacity: 1 } }}
                  initial={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  style={{
                    position: 'absolute', bottom: '-2px', left: 0, right: 0, height: '1.5px',
                    background: 'linear-gradient(90deg, #F5C518, #FF8C00)',
                    borderRadius: '2px', transformOrigin: 'left',
                  }}
                />
              </motion.div>
            )
          })}

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <Link
              to="/festival#billetterie"
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #F5C518, #FF8C00)',
                color: '#0a0a14',
                fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 700,
                padding: '10px 20px', borderRadius: '999px',
                textDecoration: 'none', letterSpacing: '0.01em',
                boxShadow: '0 2px 16px rgba(245,197,24,0.25)',
              }}
            >
              <Ticket size={15} />
              Billetterie
            </Link>
          </motion.div>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#F0EDE8',
            cursor: 'pointer',
            padding: '4px',
          }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              overflow: 'hidden',
              backgroundColor: '#111124',
              borderBottom: '1px solid #2a2a40',
            }}
          >
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: location.pathname === link.to ? '#FF3D2E' : '#F0EDE8',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/festival#billetterie"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#FF3D2E',
                  color: '#fff',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  padding: '12px 24px',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  marginTop: '4px',
                  width: 'fit-content',
                }}
              >
                <Ticket size={15} />
                Billetterie
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.header>
  )
}
