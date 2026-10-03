import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import './Works.css'

import analyticImg    from '../../assets/analytic.png'
import dashboardImg   from '../../assets/dashboard.png'
import notificationImg from '../../assets/notification.png'
import followupImg    from '../../assets/followup.png'
import excelImg       from '../../assets/excel.png'
import reportImg      from '../../assets/report.png'

const slides = [
  { id: 'analytic',      src: analyticImg,     label: 'Analytic',      tag: 'ANALYTIC' },
  { id: 'dashboard',     src: dashboardImg,    label: 'Dashboard',     tag: 'DASHBOARD' },
  { id: 'notification',  src: notificationImg, label: 'Notification',  tag: 'NOTIFICATION' },
  { id: 'followup',      src: followupImg,     label: 'Follow-up',     tag: 'FOLLOW-UP' },
  { id: 'excel',         src: excelImg,        label: 'Excel',         tag: 'EXCEL' },
  { id: 'report',        src: reportImg,       label: 'Reports',       tag: 'REPORTS' },
]

const Works: React.FC = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setActive((p) => (p === 0 ? slides.length - 1 : p - 1))
  const next = () => setActive((p) => (p === slides.length - 1 ? 0 : p + 1))

  return (
    <section id="how-it-works" className="works-section">
      {/* TOP HEADER - Centered Normal Layout */}
      <div style={{ maxWidth: "1240px", margin: "0 auto 40px auto", padding: "0 24px", textAlign: "center" }}>
        <motion.div
          className="works-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="works-eyebrow">HOW IT WORKS</span>
          <h2 className="works-heading">
            Stop Losing Leads.{" "}
            <span className="orange">Start Managing Them.</span>
          </h2>
          <p className="works-sub">
            Replace Excel sheets, notebooks, scattered reminders, and missed callbacks.
            BMO Lead brings your entire lead process into one simple platform.
          </p>
        </motion.div>
      </div>
      <div className="works-container">

        {/* ========== LEFT: LAPTOP MOCKUP ========== */}
        <motion.div
          className="works-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="laptop-frame">
            {/* Ambient Screen Glow */}
            <div className="laptop-ambient-glow" />

            {/* Screen area */}
            <div className="laptop-screen">
              {/* Camera Notch */}
              <div className="laptop-notch">
                <span className="notch-camera" />
              </div>

              {/* Browser bar */}
              <div className="laptop-browser-bar">
                <div className="lb-dots">
                  <span className="lb-dot lb-red" />
                  <span className="lb-dot lb-yellow" />
                  <span className="lb-dot lb-green" />
                </div>
                <span className="lb-tag">{slides[active].tag}</span>
              </div>

              {/* Slide image */}
              <div className="laptop-screen-body">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={slides[active].id}
                    src={slides[active].src}
                    alt={slides[active].label}
                    className="laptop-slide-img"
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
                {/* Subtle glass reflection overlay */}
                <div className="laptop-glass-reflection" />
              </div>
            </div>

            {/* Modern MacBook Chiseled Base */}
            <div className="laptop-base-unibody">
              <div className="laptop-thumb-notch" />
            </div>
            <div className="laptop-table-shadow" />
          </div>

          {/* Slide dots + nav */}
          <div className="works-slide-controls">
            <button type="button" className="works-nav-btn" onClick={prev} aria-label="Previous">
              <ChevronLeft size={16} />
            </button>
            <div className="works-dots">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  className={`works-dot ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={s.label}
                />
              ))}
            </div>
            <button type="button" className="works-nav-btn" onClick={next} aria-label="Next">
              <ChevronRight size={16} />
            </button>
            <span className="works-slide-label">{slides[active].label}</span>
          </div>
        </motion.div>

        {/* ========== RIGHT: TEXT ========== */}
        <motion.div
          className="works-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >

          <div className="works-steps">
            {[
              { num: '01', title: 'Add your leads', desc: 'Log every customer enquiry the moment it comes in.' },
              { num: '02', title: 'Set follow-ups & reminders', desc: 'Schedule callbacks and get notified before anything is missed.' },
              { num: '03', title: 'Track status & history', desc: 'Know exactly where each lead stands and what happened last.' },
              { num: '04', title: 'Monitor your team', desc: 'See team activity, pipeline health and reports on your dashboard.' },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                className="works-step"
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              >
                <span className="works-step-num">{step.num}</span>
                <div className="works-step-text">
                  <strong>{step.title}</strong>
                  <span>{step.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            type="button"
            className="works-cta-btn"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore features
            <ArrowRight size={16} />
          </button>
        </motion.div>

      </div>
    </section>
  )
}

export default Works