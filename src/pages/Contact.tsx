import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:contact@holeright.fr?subject=${encodeURIComponent(form.sujet || 'Contact site')}&body=${encodeURIComponent(`Nom: ${form.nom}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', boxSizing: 'border-box',
    backgroundColor: '#111124', border: '1px solid #2a2a40', borderRadius: '12px',
    padding: '14px 18px', color: '#F0EDE8',
    fontFamily: 'Inter, sans-serif', fontSize: '0.9rem',
    outline: 'none', transition: 'border-color 0.2s',
  }

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
          <div style={{ position: 'absolute', bottom: '-80px', right: '-40px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 700, color: '#60a5fa', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Nous rejoindre
            </p>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#F0EDE8', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '20px' }}>
              Contact
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#8885A0', maxWidth: '520px', lineHeight: 1.8 }}>
              Une question, une idée, un projet ? N'hésitez pas à nous écrire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenu */}
      <section style={{ padding: '80px 40px 120px', backgroundColor: '#08080f' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 400px', gap: '60px', alignItems: 'start' }} className="contact-grid">

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <div style={{ padding: '48px', backgroundColor: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '18px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: '#22C55E', marginBottom: '12px' }}>Message envoyé !</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#8885A0' }}>Votre client mail s'est ouvert. On vous répond rapidement.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <div>
                    <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#8885A0', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Nom</label>
                    <input
                      type="text" placeholder="Votre nom"
                      value={form.nom} onChange={e => setForm(f => ({ ...f, nom: e.target.value }))}
                      style={inputStyle}
                      onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#F5C518'}
                      onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#2a2a40'}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#8885A0', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Email</label>
                    <input
                      type="email" placeholder="votre@email.fr"
                      value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      style={inputStyle}
                      onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#F5C518'}
                      onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#2a2a40'}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#8885A0', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Sujet</label>
                  <input
                    type="text" placeholder="Objet de votre message"
                    value={form.sujet} onChange={e => setForm(f => ({ ...f, sujet: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#F5C518'}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#2a2a40'}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#8885A0', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Message</label>
                  <textarea
                    placeholder="Votre message..."
                    rows={6}
                    value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' } as React.CSSProperties}
                    onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = '#F5C518'}
                    onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = '#2a2a40'}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    alignSelf: 'flex-start',
                    background: 'linear-gradient(135deg, #F5C518 0%, #FF8C00 100%)',
                    color: '#0a0a14', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700,
                    padding: '15px 36px', borderRadius: '999px', border: 'none', cursor: 'pointer',
                    boxShadow: '0 4px 28px rgba(245,197,24,0.25)',
                  }}
                >
                  Envoyer le message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Infos contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {[
              { icon: <Mail size={20} />, titre: 'Email', contenu: 'contact@holeright.fr', href: 'mailto:contact@holeright.fr', color: '#F5C518' },
              { icon: <MapPin size={20} />, titre: 'Localisation', contenu: 'Orne (61), Normandie', href: undefined, color: '#22C55E' },
              { icon: <Mail size={20} />, titre: 'Instagram', contenu: '@carnagesocial', href: 'https://instagram.com/carnagesocial', color: '#FF3D2E' },
              { icon: <Mail size={20} />, titre: 'Facebook', contenu: 'Festival Carnage Social', href: 'https://facebook.com', color: '#60a5fa' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '16px',
                  padding: '20px 22px', backgroundColor: '#0f0f1e',
                  border: '1px solid rgba(255,255,255,0.05)', borderRadius: '14px',
                }}
              >
                <span style={{ color: item.color, marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#5a5870', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>{item.titre}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#F0EDE8', textDecoration: 'none' }}>
                      {item.contenu}
                    </a>
                  ) : (
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#F0EDE8' }}>{item.contenu}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageTransition>
  )
}
