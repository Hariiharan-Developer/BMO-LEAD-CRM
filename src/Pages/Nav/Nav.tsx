
import { motion } from 'framer-motion'
import './Nav.css'

const Navbar = () => {
  return (
    <motion.nav
      className="bmo-navbar"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
    >
      <div className="navbar-container">

        {/* ================= LOGO ================= */}

        <a href="#home" className="bmo-logo">
          <div className="logo-mark">
            B
          </div>

          <div className="logo-text">
            <span className="logo-title">
              BMO
            </span>

            <span className="logo-subtitle">
              LEADS
            </span>
          </div>
        </a>


        {/* ================= NAVIGATION ================= */}

        <div className="bmo-nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#features">
            Features
          </a>

          <a href="#liveShowCase">
            Live Showcase
          </a>

          <a href="#works">
            How It Works
          </a>

          <a href="#security">
            Security
          </a>

          <a href="#faq">
            FAQ
          </a>

        </div>


        {/* ================= ACTION ================= */}

        <div className="navbar-action">

          <button className="login-btn">
            Login
          </button>

          <a
            href="#started"
            className="navbar-start-btn"
          >
            Get Started
            <span>→</span>
          </a>

        </div>

      </div>
    </motion.nav>
  )
}

export default Navbar

