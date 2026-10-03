import { motion } from 'framer-motion'
import {
  ArrowRight,
  Users,
  Target,
  Bell,
  CheckCircle2,
} from 'lucide-react'
import { Container } from 'react-bootstrap'

import './Hero.css'
import './AnimatedHero.css'

const Hero = () => {
  const handleExplore = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section id="home" className="hero-section">
      {/* Background Subtle Ambient Glows */}
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />
      <div className="hero-grid" />

      <Container className="hero-container">
        <div className="hero-row">
          {/* =========================================
              LEFT SIDE: BMO SUPERHERO WITH 3D ANIMATED BG
              (Always on Left across Desktop, Tablet & Mobile)
          ========================================= */}
          <div className="hero-character-col">
            <motion.div
              className="hero-3d-scene"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {/* 3D Holographic Backdrop Screen (Inspired by poster) */}
              <div className="holo-screen-backdrop">
                <div className="holo-screen-header">
                  <div className="holo-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="holo-title">BMO CRM • 3D</span>
                </div>
                <div className="holo-screen-body">
                  <div className="holo-chart-bars">
                    <div className="holo-bar bar-1" />
                    <div className="holo-bar bar-2" />
                    <div className="holo-bar bar-3" />
                    <div className="holo-bar bar-4" />
                    <div className="holo-bar bar-5" />
                    <div className="holo-bar bar-6" />
                  </div>
                  <div className="holo-lead-pill">
                    <span className="pill-dot" />
                    <span>85% Conv</span>
                  </div>
                </div>
              </div>

              {/* 3D Floor Pedestal / Glowing Concentric Rings */}
              <div className="pedestal-wrap">
                <div className="pedestal-disk" />
                <div className="pedestal-ring ring-1" />
                <div className="pedestal-ring ring-2" />
                <div className="pedestal-ring ring-3" />
              </div>

              {/* BMO Superhero Character with Levitation Float */}
              <motion.div
                className="hero-character-avatar"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img
                  src="/char2-cropped.png"
                  alt="BMO Superhero Lead Manager"
                  className="hero-character-img"
                />
              </motion.div>

              {/* 3D Floating Badges (Visible on Desktop/Tablet, Hidden on Mobile to avoid covering the icon) */}
              {/* Badge 1: Team Access (Top Left) */}
              <motion.div
                className="hero-3d-badge badge-team"
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  delay: 0.3,
                  ease: 'easeInOut',
                }}
              >
                <div className="badge-icon">
                  <Users size={15} />
                </div>
                <div className="badge-info">
                  <small>TEAM ACCESS</small>
                  <strong>Up to 10 Users</strong>
                </div>
              </motion.div>

              {/* Badge 2: Follow-up Alert (Bottom Left) */}
              <motion.div
                className="hero-3d-badge badge-alert"
                animate={{ y: [0, 7, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  delay: 0.8,
                  ease: 'easeInOut',
                }}
              >
                <div className="badge-icon">
                  <Bell size={15} />
                </div>
                <div className="badge-info">
                  <small>FOLLOW-UP</small>
                  <strong>On Track</strong>
                </div>
              </motion.div>

              {/* Badge 3: Lead Tracking (Right side, where finger points) */}
              <motion.div
                className="hero-3d-badge badge-tracking"
                animate={{ y: [0, -6, 0], scale: [1, 1.03, 1] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: 'easeInOut',
                }}
              >
                <div className="badge-icon">
                  <Target size={15} />
                </div>
                <div className="badge-info">
                  <small>LEAD PIPELINE</small>
                  <strong>Active & Organized</strong>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* =========================================
              RIGHT SIDE: TIRED OF TRACKING LEADS... TEXT & CTA
              (Always on Right across Desktop, Tablet & Mobile)
          ========================================= */}
          <div className="hero-text-col">
            <motion.div
              className="hero-content-wrap"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h1 className="hero-title">
                Tired of Tracking
                <br />
                <span>Leads Everywhere?</span>
              </h1>

              <p className="hero-description">
                BMO Lead helps businesses organize their customer enquiries and follow-ups in one place.
                We built BMO Lead to solve a common problem faced by growing businesses — managing leads
                across Excel sheets, notebooks, phone calls, alarms, and scattered information.
              </p>

              {/* Single Explore CTA */}
              <div className="hero-action-row">
                <button
                  className="hero-explore-btn"
                  type="button"
                  onClick={handleExplore}
                >
                  <span>Explore</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Value Pillars */}
              <div className="hero-core-pillars">
                <span>
                  <CheckCircle2 size={14} className="pillar-check" />
                  Lead Tracking
                </span>
                <span className="pillar-dot">•</span>
                <span>
                  <CheckCircle2 size={14} className="pillar-check" />
                  Follow-up Alerts
                </span>
                <span className="pillar-dot">•</span>
                <span>
                  <CheckCircle2 size={14} className="pillar-check" />
                  Centralized View
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero