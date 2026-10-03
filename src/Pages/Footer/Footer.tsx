import React from "react";
import "./Footer.css";

const footerLinks = [
  { label: "Home",         id: "home" },
  { label: "Problem",      id: "problem" },
  { label: "Features",     id: "features" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Compare",      id: "difference" },
  { label: "Who It's For", id: "who-its-for" },
  { label: "FAQ",          id: "faq" },
]

const Footer: React.FC = () => {
  const handleNavigation = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bmo-minimal-footer">
      <div className="footer-mini-container">
        {/* Top row */}
        <div className="footer-top-row">
          {/* Brand */}
          <div className="footer-brand-side">
            <button
              type="button"
              className="footer-mini-logo"
              onClick={() => handleNavigation("home")}
              aria-label="BMO Lead Home"
            >
              <img src="/icon-2.png" alt="BMO Lead Logo" className="footer-logo-img" />
              <span className="brand-text">
                <span className="brand-orange">BMO</span> LEAD
              </span>
            </button>
            <p className="footer-tagline">
              BMO Lead helps businesses organize their customer enquiries and
              follow-ups in one place. Replace Excel, notebooks and missed calls.
            </p>
          </div>

          {/* Navigation links */}
          <nav className="footer-nav-simple">
            <span className="footer-nav-heading">Navigate</span>
            {footerLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavigation(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Quick info */}
          <div className="footer-info-col">
            <span className="footer-nav-heading">Platform</span>
            <span>Lead Management</span>
            <span>Callback Tracking</span>
            <span>Follow-up Reminders</span>
            <span>Team Dashboard</span>
            <span>Lead Status & History</span>
          </div>
        </div>

        {/* Bottom line */}
        <div className="footer-bottom-row">
          <span className="footer-copyright">
            © 2026 BMO Lead. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
