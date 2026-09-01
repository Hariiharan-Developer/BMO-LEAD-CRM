
import { ArrowUpRight } from 'lucide-react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="bmo-footer">
      <div className="footer-container">

        {/* ================= TOP ================= */}

        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">

            <div className="footer-logo">

              <div className="footer-logo-mark">
                B
              </div>

              <div>
                <span className="footer-logo-title">
                  BMO
                </span>

                <span className="footer-logo-subtitle">
                  LEAD
                </span>
              </div>

            </div>

            <p>
              Smart lead management
              <br />
              for modern sales teams.
            </p>

            {/* SOCIAL LINKS */}
            <div className="footer-socials">

              <a href="#" aria-label="GitHub">
                <FaGithub size={15} />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedin size={15} />
              </a>

              <a href="#" aria-label="Twitter">
                <FaTwitter size={15} />
              </a>

            </div>

          </div>


          {/* PRODUCT */}
          <div className="footer-column">

            <h4>Product</h4>

            <a href="#features">
              Features
            </a>

            <a href="#how-it-works">
              How It Works
            </a>

            <a href="#live-demo">
              Live Demo
            </a>

            <a href="#security">
              Security
            </a>

          </div>


          {/* COMPANY */}
          <div className="footer-column">

            <h4>Company</h4>

            <a href="#home">
              About
            </a>

            <a href="#faq">
              FAQ
            </a>

            <a href="#home">
              Contact
            </a>

            <a href="#home">
              Support
            </a>

          </div>


          {/* CTA */}
          <div className="footer-column footer-action">

            <h4>
              Ready to grow?
            </h4>

            <p>
              Start managing your leads
              smarter today.
            </p>

            <a
              href="#home"
              className="footer-start-btn"
            >
              Get Started
              <ArrowUpRight size={14} />
            </a>

          </div>

        </div>


        {/* ================= BOTTOM ================= */}

        <div className="footer-bottom">

          <span>
            © 2026 BMO Lead. All rights reserved.
          </span>

          <div className="footer-bottom-links">

            <a href="#">
              Privacy
            </a>

            <a href="#">
              Terms
            </a>

            <a href="#">
              Cookies
            </a>

            <button
              onClick={scrollToTop}
              className="back-top"
            >
              Back to top ↑
            </button>

          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer

