import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import './Features.css'

import xlImg from '../../assets/xl.png'
import alarmImg from '../../assets/alarm.png'
import bellImg from '../../assets/bell.png'
import callbackImg from '../../assets/callback.png'
import leadStatusImg from '../../assets/lead status.png'
import watchImg from '../../assets/watch.png'
import dashboardImg from '../../assets/dashboard.png'
import analyticImg from '../../assets/analytic.png'
import googleSheetImg from '../../assets/googlesheet.png'

/* -------------------------------------------------------
   Arc icon data â€” 9 icons spread across a diagonal arc
------------------------------------------------------- */
const arcIcons = [
  { src: xlImg, label: 'Excel Tracking', color: '#1d7045' },
  { src: googleSheetImg, label: 'Google Sheets', color: '#0f9d58' },
  { src: callbackImg, label: 'Callback Management', color: '#e64a19' },
  { src: alarmImg, label: 'Follow-up Reminders', color: '#f4511e' },
  { src: bellImg, label: 'Notifications', color: '#9c27b0' },
  { src: leadStatusImg, label: 'Lead Status', color: '#1565c0' },
  { src: watchImg, label: 'Follow-up History', color: '#00695c' },

]

/* -------------------------------------------------------
   Bullet points shown on the left side
------------------------------------------------------- */
const bullets = [
  'Lead Management & Callback Tracking',
  'Follow-up Reminders & Notifications',
  'Team Management up to 10 members',
  'Lead Status & Full History',
  'Dashboard & Analytics Reports',
]

const Features: React.FC = () => {
  return (
    <section className="features-section" id="features">
      {/* subtle grid overlay */}
      <div className="feat-grid-overlay" aria-hidden="true" />

      <div className="features-container">

        {/* ==================== LEFT: TEXT, BULLETS & CTA ==================== */}
        <div className="feat-left">

          {/* Eyebrow */}
          <div className="feat-eyebrow">
            <Sparkles size={13} className="feat-eyebrow-icon" />
            CORE FEATURES
          </div>

          {/* Headline */}
          <motion.h2
            className="feat-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Manage all your leads,{' '}
            <span className="feat-heading-orange">in one place.</span>
          </motion.h2>

          {/* Sub */}
          <motion.p
            className="feat-sub"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.14 }}
          >
            Replace Excel sheets, notebooks, scattered alarms and missed callbacks.
            BMO Lead brings every feature your team needs into one simple platform.
          </motion.p>

          {/* Bullet list */}
          <motion.ul
            className="feat-bullets"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            {bullets.map((b) => (
              <li key={b} className="feat-bullet">
                <CheckCircle2 size={15} className="feat-bullet-icon" />
                {b}
              </li>
            ))}
          </motion.ul>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            <button
              type="button"
              className="feat-cta-btn"
              onClick={() => {
                document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              See how it works
              <ArrowRight size={16} />
            </button>
          </motion.div>

        </div>

        {/* ==================== RIGHT: ARC OF ICONS (desktop) ==================== */}
        <div className="feat-right" aria-hidden="true">
          <div className="feat-arc-wrapper">
            {arcIcons.map((icon, i) => (
              <motion.div
                key={icon.label}
                className="feat-arc-icon"
                style={{ '--arc-index': i, '--arc-bg': icon.color } as React.CSSProperties}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.06 + i * 0.07, ease: 'easeOut' }}
                whileHover={{ scale: 1.12, zIndex: 20 }}
              >
                <img src={icon.src} alt={icon.label} className="feat-arc-icon-img" />
                <span className="feat-arc-tooltip">{icon.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ==================== MOBILE FEATURE GRID (mobile only) ==================== */}
        <div className="feat-mobile-grid">
          {arcIcons.map((icon) => (
            <div key={icon.label} className="feat-mobile-pill"
              style={{ '--arc-bg': icon.color } as React.CSSProperties}>
              <span style={{
                background: icon.color,
                borderRadius: 8,
                width: 32, height: 32,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0
              }}>
                <img src={icon.src} alt={icon.label} style={{ width: 20, height: 20, objectFit: 'contain', filter: 'brightness(10)' }} />
              </span>
              {icon.label}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features

