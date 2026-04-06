import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Ticket, ChevronDown } from 'lucide-react'

type NavItem =
  | { type: 'link'; to: string; label: string }
  | { type: 'dropdown'; label: string; items: { to: string; label: string; desc?: string }[] }

const NAV_ITEMS: NavItem[] = [
  { type: 'link', to: '/festival', label: 'Le Festival' },
  {
    type: 'dropdown', label: 'À propos',
    items: [
      { to: '/histoire', label: 'Notre Histoire', desc: "L'association Hole Right" },
      { to: '/equipe', label: "L'équipe", desc: 'Les gens derrière le festival' },
      { to: '/on-parle-de-nous', label: 'On parle de nous', desc: 'Presse & médias' },
    ],
  },
  {
    type: 'dropdown', label: 'Participer',
    items: [
      { to: '/benevolat', label: 'Devenir Bénévole', desc: 'Rejoindre la team' },
      { to: '/partenariat', label: 'Partenariat', desc: 'Nous soutenir' },
    ],
  },
  { type: 'link', to: '/contact', label: 'Contact' },
  { type: 'link', to: '/archives', label: 'Archives' },
]

function DropdownMenu({ items, onClose }: { items: { to: string; label: string; desc?: string }[]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'absolute', top: 'calc(100% + 12px)', left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#111124',
        border: '1px solid #2a2a40',
        borderRadius: '14px',
        padding: '8px',
        minWidth: '220px',
        boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
        zIndex: 200,
      }}
    >
      {items.map(item => (
        <Link
          key={item.to}
          to={item.to}
          onClick={onClose}
          style={{ textDecoration: 'none', display: 'block' }}
        >
          <motion.div
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', x: 3 }}
            style={{ padding: '10px 14px', borderRadius: '8px' }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: '#F0EDE8', marginBottom: item.desc ? '2px' : 0 }}>
              {item.label}
            </p>
            {item.desc && (
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#5a5870' }}>{item.desc}</p>
            )}
          </motion.div>
        </Link>
      ))}
    </motion.div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const location = useLocation()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
    setOpenMobileDropdown(null)
  }, [location.pathname])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 120)
  }

  const isDropdownActive = (items: { to: string }[]) =>
    items.some(item => location.pathname === item.to)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background 0.4s ease, border-color 0.4s ease',
        backgroundColor: scrolled ? 'rgba(10,10,20,0.92)' : 'rgba(10,10,20,0.4)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid #2a2a40' : '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '0 24px',
        height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400, damping: 18 }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/logo.jpg"
              alt="Hole Right"
              style={{ height: '44px', width: '44px', borderRadius: '8px', objectFit: 'cover', display: 'block' }}
            />
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
          {NAV_ITEMS.map(item => {
            if (item.type === 'link') {
              const isActive = location.pathname === item.to
              return (
                <motion.div key={item.to} style={{ position: 'relative' }} whileHover="hover">
                  <Link
                    to={item.to}
                    style={{
                      display: 'block', padding: '8px 14px',
                      fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 500,
                      color: isActive ? '#F5C518' : '#8885A0',
                      textDecoration: 'none', borderRadius: '8px',
                    }}
                  >
                    <motion.span variants={{ hover: { color: '#F0EDE8' } }} style={{ color: isActive ? '#F5C518' : '#8885A0', display: 'block' }}>
                      {item.label}
                    </motion.span>
                  </Link>
                  <motion.div
                    variants={{ hover: { scaleX: 1, opacity: 1 } }}
                    initial={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    style={{
                      position: 'absolute', bottom: '2px', left: '14px', right: '14px', height: '1.5px',
                      background: 'linear-gradient(90deg, #F5C518, #FF8C00)',
                      borderRadius: '2px', transformOrigin: 'left',
                    }}
                  />
                </motion.div>
              )
            }

            // Dropdown
            const active = isDropdownActive(item.items)
            const isOpen = openDropdown === item.label
            return (
              <div
                key={item.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    padding: '8px 14px', background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 500,
                    color: active ? '#F5C518' : isOpen ? '#F0EDE8' : '#8885A0',
                    borderRadius: '8px',
                    transition: 'color 0.2s',
                  }}
                >
                  {item.label}
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={13} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <DropdownMenu items={item.items} onClose={() => setOpenDropdown(null)} />
                  )}
                </AnimatePresence>
              </div>
            )
          })}

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            style={{ marginLeft: '8px' }}
          >
            <Link
              to="/festival#billetterie"
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #F5C518, #FF8C00)',
                color: '#0a0a14', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 700,
                padding: '10px 20px', borderRadius: '999px', textDecoration: 'none',
                boxShadow: '0 2px 16px rgba(245,197,24,0.25)',
              }}
            >
              <Ticket size={15} /> Billetterie
            </Link>
          </motion.div>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          style={{ display: 'none', background: 'none', border: 'none', color: '#F0EDE8', cursor: 'pointer', padding: '4px' }}
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
            style={{ overflow: 'hidden', backgroundColor: '#111124', borderBottom: '1px solid #2a2a40' }}
          >
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {NAV_ITEMS.map((item, i) => {
                if (item.type === 'link') {
                  return (
                    <motion.div key={item.to} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                      <Link
                        to={item.to}
                        style={{
                          display: 'block', padding: '12px 8px',
                          fontFamily: 'Syne, sans-serif', fontSize: '1.05rem', fontWeight: 600,
                          color: location.pathname === item.to ? '#F5C518' : '#F0EDE8', textDecoration: 'none',
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                }
                const isOpen = openMobileDropdown === item.label
                return (
                  <motion.div key={item.label} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                    <button
                      onClick={() => setOpenMobileDropdown(isOpen ? null : item.label)}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        width: '100%', padding: '12px 8px', background: 'none', border: 'none', cursor: 'pointer',
                        fontFamily: 'Syne, sans-serif', fontSize: '1.05rem', fontWeight: 600,
                        color: isDropdownActive(item.items) ? '#F5C518' : '#F0EDE8',
                        textAlign: 'left',
                      }}
                    >
                      {item.label}
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }}><ChevronDown size={16} /></motion.span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                          style={{ overflow: 'hidden', paddingLeft: '16px' }}
                        >
                          {item.items.map(sub => (
                            <Link key={sub.to} to={sub.to} style={{ display: 'block', padding: '10px 8px', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#8885A0', textDecoration: 'none' }}>
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
              <Link
                to="/festival#billetterie"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'linear-gradient(135deg, #F5C518, #FF8C00)',
                  color: '#0a0a14', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 700,
                  padding: '12px 24px', borderRadius: '999px', textDecoration: 'none',
                  marginTop: '12px', width: 'fit-content',
                }}
              >
                <Ticket size={15} /> Billetterie
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.header>
  )
}
