import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import HomePage from './pages/HomePage'
import TracksPage from './pages/TracksPage'
import YogaPage from './pages/YogaPage'
import PracticePage from './pages/PracticePage'
import ChartsPage from './pages/ChartsPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tracks" element={<TracksPage />} />
            <Route path="/yoga" element={<YogaPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/charts" element={<ChartsPage />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  )
}

export default App