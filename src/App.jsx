import './App.css'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './app/Home'
import About from './app/About'
import Service from './app/Service'
import Contact from './app/Contact'
import Footer from './components/Footer'
import Website from './app/Website'
import Customweb from './app/Customweb'
import { LanguageProvider } from './context/LanguageContext'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/servicem" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/website" element={<Website /> } />
          <Route path="/customweb" element={<Customweb />} />
          <Route path="/cutsomweb" element={<Customweb />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  )
}

export default App
