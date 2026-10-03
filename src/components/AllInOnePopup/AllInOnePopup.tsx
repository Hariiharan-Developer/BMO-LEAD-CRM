import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import './AllInOnePopup.css'

import xlImg from '../../assets/xl.png'
import callbackImg from '../../assets/callback.png'
import bellImg from '../../assets/bell.png'
import watchImg from '../../assets/watch.png'
import alarmImg from '../../assets/alarm.png'
import leadStatusImg from '../../assets/lead status.png'

interface AllInOnePopupProps {
  isOpen: boolean
  onClose: () => void
}

interface FeatureItem {
  id: string
  name: string
  shortLabel: string
  desc: string
  color: string
  bgSoft: string
  icon: React.ReactNode
}

const features: FeatureItem[] = [
  {
    id: 'excel-replacement',
    name: 'Lead Recording & Tracking',
    shortLabel: 'Replace Excel',
    desc: 'Record and track all leads professionally without manual spreadsheets.',
    color: '#10b981',
    bgSoft: '#ecfdf5',
    icon: <img src={xlImg} alt="Replace Excel" className="feat-app-img" />,
  },
  {
    id: 'call-alarm',
    name: 'Call-Back Alarm',
    shortLabel: 'Call Alarm',
    desc: 'Timely popup alarms so you never miss an urgent client call.',
    color: '#f59e0b',
    bgSoft: '#fffbeb',
    icon: <img src={callbackImg} alt="Call Alarm" className="feat-app-img" />,
  },
  {
    id: 'notification',
    name: 'Live Notifications',
    shortLabel: 'Notification',
    desc: 'Real-time alerts when leads are assigned or follow-ups are due.',
    color: '#2563eb',
    bgSoft: '#eff6ff',
    icon: <img src={bellImg} alt="Notification" className="feat-app-img" />,
  },
  {
    id: 'timeline',
    name: 'Activity Timeline',
    shortLabel: 'Timeline',
    desc: 'Complete chronological history of calls, notes, and stages.',
    color: '#8b5cf6',
    bgSoft: '#f5f3ff',
    icon: <img src={watchImg} alt="Timeline" className="feat-app-img" />,
  },
  {
    id: 'followup',
    name: 'Smart Follow-Up',
    shortLabel: 'Follow-Up',
    desc: 'Scheduled next actions to keep every conversation moving forward.',
    color: '#06b6d4',
    bgSoft: '#ecfeff',
    icon: <img src={alarmImg} alt="Follow-Up" className="feat-app-img" />,
  },
  {
    id: 'status',
    name: 'Pipeline Status',
    shortLabel: 'Lead Status',
    desc: 'Instant visual clarity from fresh inquiry to closed deal.',
    color: '#ff5900',
    bgSoft: '#fff7ed',
    icon: <img src={leadStatusImg} alt="Lead Status" className="feat-app-img" />,
  },
]

const AllInOnePopup: React.FC<AllInOnePopupProps> = ({ isOpen, onClose }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0)

  // Subtle auto-switch between features every 3s
  useEffect(() => {
    if (!isOpen) return
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % features.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [isOpen])

  // ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const activeFeature = features[activeIdx]

  const handleCta = () => {
    onClose()
    const target = document.getElementById('demo') || document.getElementById('features')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="aio-modal-overlay" role="dialog" aria-modal="true">
          <motion.div
            className="aio-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.div
            className="aio-modal-dialog"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="aio-modal-content">
              {/* Close Button */}
              <button
                className="aio-modal-close"
                type="button"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Header Badge with BMO Logo */}
              <div className="aio-badge-wrap">
                <span className="aio-badge">
                  <img
                    src="/icon-2.png"
                    alt="BMO Lead Logo"
                    className="aio-badge-logo"
                  />
                  <span className="aio-badge-brand">
                    <span className="badge-bmo">BMO</span>
                    <span className="badge-lead">LEAD</span>
                  </span>
                  <span className="aio-badge-divider">|</span>
                  <span className="aio-badge-subtitle">CRM All in One</span>
                </span>
              </div>

              {/* Title with High Impact "ALL IN ONE" Highlighting */}
              <div className="aio-header">
                <h3 className="aio-title">
                  Tired of Excel? Meet Your{' '}
                  <span className="aio-highlight">
                    ALL IN ONE
                  </span>{' '}
                  Workspace
                </h3>
                <p className="aio-desc">
                  Replace spreadsheets with built-in call alarms, live alerts, timelines & follow-ups.
                </p>
              </div>

              {/* Main Body: 2 Columns on Desktop, Clean Stack on Mobile */}
              <div className="aio-body-grid">
                {/* Left: Superhero Character in Web-App Stage */}
                <div className="aio-character-stage">
                  <div className="char-glow-circle" />

                  {/* Character image */}
                  <img
                    src="/char3-cropped.png"
                    alt="BMO Lead Character"
                    className="aio-hero-image"
                    onError={(e) => {
                      const target = e.currentTarget
                      if (target.src.includes('char3-cropped.png')) {
                        target.src = '/char3.png'
                      }
                    }}
                  />

                  {/* Clean web-app floating status pills */}
                  <div className="char-float-chip chip-top">
                    <span className="chip-indicator chip-alarm" />
                    <span className="chip-text">Call-Back Alarm</span>
                  </div>

                  <div className="char-float-chip chip-bottom">
                    <span className="chip-indicator chip-sync" />
                    <span className="chip-text">No More Spreadsheets</span>
                  </div>
                </div>

                {/* Right: Modern Feature Icon Grid (Reference 2 style) */}
                <div className="aio-features-panel">
                  <div className="features-grid">
                    {features.map((item, idx) => {
                      const isSelected = activeIdx === idx
                      return (
                        <button
                          key={item.id}
                          type="button"
                          className={`feature-app-box ${isSelected ? 'selected' : ''}`}
                          onClick={() => setActiveIdx(idx)}
                          aria-label={item.shortLabel}
                        >
                          <div
                            className="feature-ico-circle"
                            style={{
                              backgroundColor: item.bgSoft,
                              color: item.color,
                              borderColor: isSelected ? item.color : 'transparent',
                            }}
                          >
                            {item.icon}
                          </div>
                          <span className="feature-label">{item.shortLabel}</span>
                        </button>
                      )
                    })}
                  </div>

                  {/* Active Feature Detail Bar */}
                  <div
                    className="feature-preview-bar"
                    style={{
                      borderLeftColor: activeFeature.color,
                    }}
                  >
                    <div className="preview-top">
                      <span
                        className="preview-name"
                        style={{ color: activeFeature.color }}
                      >
                        {activeFeature.name}
                      </span>
                    </div>
                    <p className="preview-desc">{activeFeature.desc}</p>
                  </div>
                </div>
              </div>

              {/* Clean Footer Bar */}
              <div className="aio-footer">
                <div className="aio-footer-note">
                  <CheckCircle2 size={16} className="note-check" />
                  <span>Everything unified in one place. No manual tracking.</span>
                </div>

                <div className="aio-footer-buttons">
                  <button
                    type="button"
                    className="btn-modal-secondary"
                    onClick={onClose}
                  >
                    Got It
                  </button>
                  <button
                    type="button"
                    className="btn-modal-primary"
                    onClick={handleCta}
                  >
                    <span>Explore BmoLead</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default AllInOnePopup
