import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import AllInOnePopup from './components/AllInOnePopup/AllInOnePopup'
import Home from './Pages/Home/Home'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [showAdPopup, setShowAdPopup] = useState(false)

  useEffect(() => {
    // Simulated manual wait time (2.4 seconds) for frontend-only website
    const timer = setTimeout(() => {
      setLoading(false)
      // Open the All-In-One advertisement popup automatically when screen opens
      setTimeout(() => {
        setShowAdPopup(true)
      }, 350)
    }, 2400)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingSpinner key="bmo-loader" duration={2400} />}
      </AnimatePresence>

      <Home />

      {/* Screen Opening All-in-One Advertisement Pop-up */}
      <AllInOnePopup
        isOpen={showAdPopup}
        onClose={() => setShowAdPopup(false)}
      />

      {/* Persistent floating trigger so user can reopen and admire the popup anytime */}
      {!loading && !showAdPopup && (
        <button
          type="button"
          className="aio-reopen-trigger"
          onClick={() => setShowAdPopup(true)}
          title="Open All-in-One Features Showcase"
        >
          <img src="/icon-2.png" alt="BMO Logo" className="aio-trigger-bmo-logo" />
          <span>All-in-One CRM</span>
        </button>
      )}
    </>
  )
}

export default App

