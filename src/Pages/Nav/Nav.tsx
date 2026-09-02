import { useState } from "react";
import { motion } from "framer-motion";
import "./Nav.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (id: string) => {
    setMenuOpen(false);

    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <motion.nav
      className="bmo-navbar"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <div className="navbar-container">
        {/* LOGO */}
        <button
          type="button"
          className="navbar-brand"
          onClick={() => handleNavigation("home")}
          aria-label="Go to home"
        >
          <span className="logo-bmo">BMO</span>
          <span className="logo-leads">LEADS</span>
        </button>

        {/* DESKTOP NAVIGATION */}
        <div className="bmo-nav-links">
          <button type="button" onClick={() => handleNavigation("home")}>
            Home
          </button>

          <button type="button" onClick={() => handleNavigation("features")}>
            Features
          </button>

          <button type="button" onClick={() => handleNavigation("live-demo")}>
            Live Showcase
          </button>

          <button
            type="button"
            onClick={() => handleNavigation("how-it-works")}
          >
            How It Works
          </button>

          <button type="button" onClick={() => handleNavigation("security")}>
            Security
          </button>

          <button type="button" onClick={() => handleNavigation("faq")}>
            FAQ
          </button>
        </div>

        {/* DESKTOP GET STARTED */}
        <div className="navbar-action">
          <button
            type="button"
            className="navbar-start-btn"
            onClick={() => handleNavigation("started")}
          >
            <span>Get Started</span>
            <span className="arrow">→</span>
          </button>
        </div>

        {/* HAMBURGER */}
        <button
          type="button"
          className={`hamburger-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        id="mobile-navigation"
        className="mobile-menu"
        initial={false}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-inner">
          <button type="button" onClick={() => handleNavigation("home")}>
            Home
          </button>

          <button type="button" onClick={() => handleNavigation("features")}>
            Features
          </button>

          <button type="button" onClick={() => handleNavigation("live-demo")}>
            Live Showcase
          </button>

          <button
            type="button"
            onClick={() => handleNavigation("how-it-works")}
          >
            How It Works
          </button>

          <button type="button" onClick={() => handleNavigation("security")}>
            Security
          </button>

          <button type="button" onClick={() => handleNavigation("faq")}>
            FAQ
          </button>

          <button
            type="button"
            className="mobile-start-btn"
            onClick={() => handleNavigation("started")}
          >
            <span>Get Started</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
