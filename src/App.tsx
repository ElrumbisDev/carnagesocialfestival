import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Festival from './pages/Festival'
import Archives from './pages/Archives'
import Histoire from './pages/Histoire'
import Benevolat from './pages/Benevolat'
import './App.css'

export default function App() {
  const location = useLocation()

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0a0a14' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/festival" element={<Festival />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/histoire" element={<Histoire />} />
            <Route path="/benevolat" element={<Benevolat />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
