import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const handleNavigation = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleProductRedirect = () => {
    window.location.href = "https://your-product-url.com";
  };

  return (
    <footer className="bmo-footer">
      <div className="footer-container">
        {/* =================================================
            PRODUCT BANNER
        ================================================= */}

        <motion.div
          className="footer-product-banner"
          onClick={handleProductRedirect}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="product-banner-text">
            <span>BMO Leads</span>

            <h3>Take control of your leads.</h3>

            <p>Start managing your leads with BMO Leads.</p>
          </div>

          <button type="button" className="product-banner-button">
            Get Started
            <span>→</span>
          </button>
        </motion.div>

        {/* =================================================
            ABOUT + NAVLINKS
        ================================================= */}

        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          {/* =================================================
              ABOUT BMO SOFTWARE
          ================================================= */}

          <div className="footer-about">
            <button
              type="button"
              className="footer-logo"
              onClick={() => handleNavigation("home")}
            >
              <span>BMO</span> Leads
            </button>

            {/* <h3>About BMO Software</h3> */}

            <p>
              BMO Software helps businesses manage, track, and convert leads
              through a simple and efficient lead management platform.
            </p>
          </div>

          {/* =================================================
              NAVLINKS
          ================================================= */}

          <div className="footer-navigation">
            <h3>NavLinks</h3>

            <nav className="footer-nav-links">
              <button type="button" onClick={() => handleNavigation("home")}>
                Home
              </button>

              <button
                type="button"
                onClick={() => handleNavigation("features")}
              >
                Features
              </button>

              <button
                type="button"
                onClick={() => handleNavigation("live-demo")}
              >
                Live Showcase
              </button>

              <button
                type="button"
                onClick={() => handleNavigation("how-it-works")}
              >
                How It Works
              </button>

              <button
                type="button"
                onClick={() => handleNavigation("security")}
              >
                Security
              </button>

              <button type="button" onClick={() => handleNavigation("faq")}>
                FAQ
              </button>
            </nav>
          </div>
        </motion.div>

        {/* =================================================
            FOOTER BOTTOM
        ================================================= */}

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} BMO Software</span>

          <span>BMO Leads</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
