import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  AlertCircle,
} from 'lucide-react'
import './Problem.css'

import excelImg from '../../assets/problems/problem_excel.png'
import notebookImg from '../../assets/problems/problem_notebook.png'
import calendarImg from '../../assets/problems/problem_calendar.png'
import callbackImg from '../../assets/problems/problem_callback.png'
import historyImg from '../../assets/problems/problem_history.png'
import pendingImg from '../../assets/problems/problem_pending.png'
import statusImg from '../../assets/problems/problem_status.png'
import chatImg from '../../assets/problems/problem_chat.png'
import visibilityImg from '../../assets/problems/problem_visibility.png'

export interface ProblemItem {
  id: string
  number: string
  badge: string
  tag: string
  title: string
  description: string
  image: string
}

const problems: ProblemItem[] = [
  {
    id: 'excel-scattered',
    number: '01',
    badge: 'EXCEL',
    tag: 'SPREADSHEET CHAOS',
    title: 'Leads scattered across Excel files',
    description: 'Lead information is spread across multiple Excel sheets and files.',
    image: excelImg,
  },
  {
    id: 'notebook-notes',
    number: '02',
    badge: 'PAPER',
    tag: 'HANDWRITTEN NOTES',
    title: 'Customer details written in notebooks',
    description: 'Important customer details can be difficult to find when they are stored on paper.',
    image: notebookImg,
  },
  {
    id: 'forgotten-dates',
    number: '03',
    badge: 'ALARM',
    tag: 'FORGOTTEN SCHEDULE',
    title: 'Forgetting follow-up dates',
    description: 'Without reminders, important follow-ups can easily be missed.',
    image: calendarImg,
  },
  {
    id: 'missing-callbacks',
    number: '04',
    badge: 'CALLS',
    tag: 'MISSED REVENUE',
    title: 'Missing callbacks',
    description: 'A missed callback can mean a missed business opportunity.',
    image: callbackImg,
  },
  {
    id: 'no-history',
    number: '05',
    badge: 'TIMELINE',
    tag: 'ZERO CONTEXT',
    title: 'No clear follow-up history',
    description: 'It is difficult to know what was discussed and what needs to happen next.',
    image: historyImg,
  },
  {
    id: 'pending-unknown',
    number: '06',
    badge: 'PENDING',
    tag: 'LOST INBOX',
    title: "Don't know which leads are pending",
    description: 'Pending leads can get lost when there is no central place to track them.',
    image: pendingImg,
  },
  {
    id: 'status-unclear',
    number: '07',
    badge: 'STATUS',
    tag: 'BLIND PIPELINE',
    title: 'Difficult to know current lead status',
    description: 'Difficult to quickly understand whether a lead is new, contacted, interested, or pending.',
    image: statusImg,
  },
  {
    id: 'chat-scattered',
    number: '08',
    badge: 'CHATS',
    tag: 'PERSONAL DEVICES',
    title: 'Customer chats spread across phones',
    description: 'Conversations on personal WhatsApp and SMS get buried without a central team record.',
    image: chatImg,
  },
  {
    id: 'team-visibility',
    number: '09',
    badge: 'VISIBILITY',
    tag: 'NO TEAM TRACKING',
    title: 'Zero sales team & deal visibility',
    description: 'Managers have no clear visibility into daily calls, active pipeline, or lost opportunities.',
    image: visibilityImg,
  },
]

const Problem: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const trackRef = useRef<HTMLDivElement>(null)

  const activeProblem = problems[activeCardIndex]

  const handlePrev = () => {
    setActiveCardIndex((prev) => (prev === 0 ? problems.length - 1 : prev - 1))
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -240, behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    setActiveCardIndex((prev) => (prev === problems.length - 1 ? 0 : prev + 1))
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 240, behavior: 'smooth' })
    }
  }

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index % problems.length)
    setIsPaused((prev) => !prev)
  }

  return (
    <section id="problem" className="bmo-problem-section">
      <div className="problem-container">
        {/* =====================================================
            SINGLE ROW LAYOUT:
            Left: Problem Heading, Quote & Transition Statement
            Right: Floating Mobile & Infinite Scrolling Ribbon
        ===================================================== */}
        <div className="problem-single-row">
          {/* ================= LEFT SIDE ================= */}
          <div className="problem-left-col">
            <motion.div
              className="problem-label-wrap"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <span className="problem-section-label">
                <span className="problem-label-dot" />
                THE PROBLEM
              </span>
            </motion.div>

            {/* Single Line Main Heading with Black & Orange Combination */}
            <motion.h2
              className="problem-main-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.06 }}
            >
              <span className="heading-dark">Losing Track of Leads Between </span>
              <span className="heading-orange">Excel, Notebooks & Phone Calls?</span>
            </motion.h2>

            {/* Memory Quote — plain heading, no card */}
            <motion.div
              className="problem-quote-block"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 }}
            >
              <h3 className="statement-main">
                "Your leads shouldn't depend on someone's memory."
              </h3>
              <p className="statement-sub">
                Every lead deserves a clear record, a timely follow-up, and a visible status.
              </p>
            </motion.div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="problem-right-col">
            {/* Top Navigation & Status */}
            <div className="stage-controls-mini">
              <div className="mini-status-indicator">
                <span className="mini-pulse-dot" />
                {isPaused && (
                  <span className="mini-status-text">
                    Paused on <strong>Issue #{activeProblem.number}</strong>
                  </span>
                )}
              </div>
              <div className="mini-nav-arrows">
                <button
                  type="button"
                  className="mini-nav-btn"
                  onClick={handlePrev}
                  aria-label="Previous problem"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  className="mini-nav-btn"
                  onClick={handleNext}
                  aria-label="Next problem"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Stage with Scrolling Track and Centered Floating Phone */}
            <div className="stage-carousel-wrapper">
              <div className="stage-track-overflow">
                <div
                  ref={trackRef}
                  className={`stage-infinite-track ${isPaused ? 'paused' : ''}`}
                >
                  {/* Tripled cards array for seamless infinite looping */}
                  {[...problems, ...problems, ...problems].map((item, idx) => {
                    const isSelected = activeCardIndex === (idx % problems.length)
                    return (
                      <div
                        key={`slider-${item.id}-${idx}`}
                        className={`stage-slider-card ${isSelected ? 'active-slider-card' : ''}`}
                        onClick={() => handleCardClick(idx)}
                      >
                        {/* Red Danger Text Highlighting */}
                        <div className="slider-card-top-tag">
                          <span className="problem-danger-pill">
                            <span className="danger-dot" />
                            Problem-{item.number}
                          </span>
                          <span className="tag-badge">{item.badge}</span>
                        </div>

                        <div className="slider-card-img-wrap">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="slider-card-img"
                            loading="lazy"
                          />
                        </div>

                        <div className="slider-card-info-box">
                          <h4 className="card-box-title">{item.title}</h4>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Edge Faders */}
                <div className="stage-fader fader-left" />
                <div className="stage-fader fader-right" />
              </div>

              {/* Centered Floating Modern Smartphone */}
              <div className="stage-floating-phone">
                <motion.div
                  className="phone-device-frame"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="phone-notch">
                    <span className="notch-camera" />
                    <span className="notch-speaker" />
                  </div>

                  <div className="phone-screen">
                    <div className="phone-status-bar">
                      <span>9:41</span>
                      <div className="status-icons">
                        <span className="signal-dot" />
                        <span className="battery-pill" />
                      </div>
                    </div>

                    <div className="phone-app-header">
                      <div className="app-brand-pill">
                        <img src="/icon-2.png" alt="BMO" className="app-mini-logo" />
                        <span>BMO AUDIT</span>
                      </div>
                      <span className="app-danger-counter">Problem #{activeProblem.number}</span>
                    </div>

                    {/* Active Spotlight Card */}
                    <div className="phone-card-spotlight">
                      <div className="phone-img-container">
                        <img
                          src={activeProblem.image}
                          alt={activeProblem.title}
                          className="phone-featured-img"
                        />
                        <span className="phone-danger-tag">Problem-{activeProblem.number}</span>
                      </div>

                      <div className="phone-details-card">
                        <h5 className="phone-card-title">{activeProblem.title}</h5>
                        <p className="phone-card-desc">{activeProblem.description}</p>
                        <div className="phone-card-status">
                          <AlertCircle size={13} className="phone-warn-icon" />
                          <span>Lost Opportunity Risk</span>
                        </div>
                      </div>
                    </div>

                    <div className="phone-home-indicator" />
                  </div>

                  <div className="phone-glass-glare" />
                </motion.div>
                <div className="phone-floating-shadow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem

