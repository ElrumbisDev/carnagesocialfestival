import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Heart, Users, Wrench, Smile, CheckCircle } from 'lucide-react'
import PageTransition from '../components/PageTransition'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

const ROLES = [
  { icon: <Wrench size={22} />, title: 'Technique', desc: 'Son, lumière, scène — si tu sais manier un câble ou une console, on a besoin de toi.' },
  { icon: <Users size={22} />, title: 'Accueil & Sécurité', desc: 'Accueil du public, gestion des entrées, orientation sur le site. Le sourire est obligatoire.' },
  { icon: <Heart size={22} />, title: 'Bars & Restauration', desc: 'Préparer et servir. Le cœur battant du festival, là où les gens se retrouvent.' },
  { icon: <Smile size={22} />, title: 'Communication', desc: 'Photos, vidéos, réseaux sociaux. Immortalise les moments et fais rayonner l\'événement.' },
]

const PERKS = [
  'Entrée gratuite au festival',
  'Repas et boissons pris en charge',
  'T-shirt bénévole exclusif',
  'Ambiance et équipe soudée',
  'Expérience événementielle valorisable',
  'Bonne humeur garantie',
]

export default function Benevolat() {
  const [formData, setFormData] = useState({
    nom: '', prenom: '', email: '', role: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder: in production, send to backend or email service
    setSubmitted(true)
  }

  return (
    <PageTransition>
      {/* ─── Hero ─── */}
      <section style={{
        paddingTop: '140px', paddingBottom: '80px',
        paddingLeft: '24px', paddingRight: '24px',
        backgroundColor: '#0a0a14',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#22C55E', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Rejoins l'aventure
            </p>
            <h1 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              letterSpacing: '-0.04em', color: '#F0EDE8',
              lineHeight: 1.05, marginBottom: '24px',
            }}>
              Devenir<br /><span style={{ color: '#22C55E' }}>Bénévole</span>
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', color: '#8885A0', lineHeight: 1.85 }}>
              Le Festival Carnage Social ne serait rien sans ses bénévoles. Chaque édition, des dizaines de personnes
              donnent de leur temps pour créer quelque chose d'unique. Si tu veux vivre le festival de l'intérieur,
              rencontrer des gens géniaux et faire partie d'une aventure humaine — cette page est pour toi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Photo bénévoles ─── */}
      <section style={{ padding: '0 24px 80px', backgroundColor: '#0a0a14' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ borderRadius: '20px', overflow: 'hidden', height: '340px', border: '1px solid #1a1a2e', position: 'relative' }}>
              <img
                src="/images/benevoles.jpg"
                alt="Les bénévoles du festival"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,20,0.8) 0%, transparent 60%)' }} />
              <p style={{
                position: 'absolute', bottom: '28px', left: '32px',
                fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#F0EDE8',
              }}>
                Les bénévoles du Carnage Social
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Roles ─── */}
      <section style={{ padding: '0 24px 80px', backgroundColor: '#0a0a14' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#F0EDE8', letterSpacing: '-0.03em', marginBottom: '40px' }}>
              Les rôles disponibles
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
            {ROLES.map((role, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -7, borderColor: '#22C55E', boxShadow: '0 16px 40px rgba(34,197,94,0.12)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  style={{ backgroundColor: '#111124', border: '1px solid #2a2a40', borderRadius: '16px', padding: '28px' }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -6 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    style={{ color: '#22C55E', marginBottom: '16px', display: 'inline-block' }}
                  >{role.icon}</motion.div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#F0EDE8', marginBottom: '10px' }}>{role.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#8885A0', lineHeight: 1.75 }}>{role.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Perks ─── */}
      <section style={{ padding: '64px 24px', backgroundColor: '#07070f', borderTop: '1px solid #2a2a40', borderBottom: '1px solid #2a2a40' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#F0EDE8', letterSpacing: '-0.03em', marginBottom: '32px', textAlign: 'center' }}>
              Ce que tu y gagnes
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px' }}>
              {PERKS.map((perk, i) => (
                <motion.div key={i}
                  whileHover={{ x: 6, borderColor: 'rgba(34,197,94,0.4)', backgroundColor: 'rgba(34,197,94,0.04)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    backgroundColor: '#111124', border: '1px solid #2a2a40',
                    borderRadius: '12px', padding: '16px 20px',
                  }}
                >
                  <CheckCircle size={18} style={{ color: '#22C55E', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#F0EDE8' }}>{perk}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Form ─── */}
      <section style={{ padding: '80px 24px 96px', backgroundColor: '#0a0a14' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#F0EDE8', letterSpacing: '-0.03em', marginBottom: '8px' }}>
              Je veux m'inscrire
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#8885A0', marginBottom: '40px' }}>
              Remplis ce formulaire et on revient vers toi rapidement.
            </p>
          </FadeIn>

          {submitted ? (
            <FadeIn>
              <div style={{
                backgroundColor: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.25)',
                borderRadius: '16px', padding: '48px', textAlign: 'center',
              }}>
                <CheckCircle size={48} style={{ color: '#22C55E', margin: '0 auto 20px' }} />
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: '#F0EDE8', marginBottom: '12px' }}>
                  Candidature reçue !
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#8885A0', lineHeight: 1.75 }}>
                  Merci pour ton intérêt. On reviendra vers toi par email très prochainement.
                  Bienvenue dans l'équipe Hole Right !
                </p>
              </div>
            </FadeIn>
          ) : (
            <FadeIn delay={0.15}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-grid">
                  {[
                    { name: 'prenom', label: 'Prénom', type: 'text', placeholder: 'Prénom' },
                    { name: 'nom', label: 'Nom', type: 'text', placeholder: 'Nom' },
                  ].map(field => (
                    <div key={field.name}>
                      <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: '#8885A0', letterSpacing: '0.04em', marginBottom: '8px' }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        style={inputStyle}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#22C55E'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#2a2a40'}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={labelStyle}>Adresse email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ton@email.fr"
                    required
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#22C55E'}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#2a2a40'}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Rôle souhaité</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => (e.target as HTMLSelectElement).style.borderColor = '#22C55E'}
                    onBlur={e => (e.target as HTMLSelectElement).style.borderColor = '#2a2a40'}
                  >
                    <option value="" disabled>Choisir un rôle...</option>
                    {ROLES.map(r => <option key={r.title} value={r.title}>{r.title}</option>)}
                    <option value="autre">Peu importe / autre</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Message (optionnel)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Parle-nous un peu de toi, de ta motivation, de tes disponibilités..."
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = '#22C55E'}
                    onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = '#2a2a40'}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    backgroundColor: '#22C55E', color: '#0a0a14',
                    fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 700,
                    padding: '16px 32px', borderRadius: '999px', border: 'none',
                    cursor: 'pointer', transition: 'background 0.2s, transform 0.15s',
                    boxShadow: '0 4px 24px rgba(34,197,94,0.3)',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#16a34a'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#22C55E'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
                >
                  <Send size={18} />
                  Envoyer ma candidature
                </button>
              </form>
            </FadeIn>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageTransition>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#111124',
  border: '1px solid #2a2a40',
  borderRadius: '10px',
  padding: '14px 16px',
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.9rem',
  color: '#F0EDE8',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.8rem',
  fontWeight: 600,
  color: '#8885A0',
  letterSpacing: '0.04em',
  marginBottom: '8px',
}
