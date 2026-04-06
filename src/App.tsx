import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Festival from './pages/Festival'
import Archives from './pages/Archives'
import Histoire from './pages/Histoire'
import Benevolat from './pages/Benevolat'
import OnParleDeNous from './pages/OnParleDeNous'
import Partenariat from './pages/Partenariat'
import Contact from './pages/Contact'
import Equipe from './pages/Equipe'
import MentionsLegales from './pages/MentionsLegales'
import './App.css'

export default function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/festival" element={<Festival />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/histoire" element={<Histoire />} />
            <Route path="/benevolat" element={<Benevolat />} />
            <Route path="/on-parle-de-nous" element={<OnParleDeNous />} />
            <Route path="/partenariat" element={<Partenariat />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
