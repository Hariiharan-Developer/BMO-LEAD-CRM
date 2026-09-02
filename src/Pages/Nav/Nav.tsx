
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

         {/* Logo */}
         <a className="navbar-brand brand-logo" href="#">
          <span className="logo-bmo">BMO</span>
          <span className="logo-leads"> Leads</span>
        </a>


        {/* ================= NAVIGATION ================= */}

        <div className="bmo-nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#features">
            Features
          </a>

          <a href="#live-demo">
            Live Showcase
          </a>

          <a href="#how-it-works">
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

