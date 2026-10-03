import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X, Menu } from "lucide-react";
import "./Nav.css";

const navLinks = [
  { label: "Home",        id: "home" },
  { label: "Problem",     id: "problem" },
  { label: "Features",    id: "features" },
  { label: "How It Works",id: "how-it-works" },
  { label: "Compare",     id: "difference" },
  { label: "Who It's For",id: "who-its-for" },
  { label: "FAQ",         id: "faq" },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        const navHeight = 76;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 80);
  };

  return (
    <motion.nav
      className="bmo-navbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="navbar-container">
        {/* LOGO */}
        <button
          type="button"
          className="navbar-brand"
          onClick={() => handleNavigation("home")}
          aria-label="BMO Lead Home"
        >
          <img src="/icon-2.png" alt="BMO Lead Logo" className="navbar-logo-img" />
          <div className="navbar-brand-text">
            <span className="logo-bmo">BMO</span>
            <span className="logo-lead">LEAD</span>
          </div>
        </button>

        {/* DESKTOP NAVIGATION */}
        <div className="bmo-nav-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavigation(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* GET STARTED CTA */}
        <div className="navbar-action">
          <button
            type="button"
            className="navbar-explore-btn"
            onClick={() => handleNavigation("cta")}
          >
            <span>Get Started</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* HAMBURGER */}
        <button
          type="button"
          className={`hamburger-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        id="mobile-navigation"
        className="mobile-menu"
        initial={false}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-inner">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavigation(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            className="mobile-explore-btn"
            onClick={() => handleNavigation("cta")}
          >
            <span>Get Started</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
