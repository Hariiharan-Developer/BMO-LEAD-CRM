import React from 'react'
import { motion } from 'framer-motion'
import { UserPlus, CalendarCheck, BarChart3 } from 'lucide-react'
import './HowItWorks.css'

import leadImg from '../../assets/followup.png'
import timelineImg from '../../assets/timeline.png'
import reportImg from '../../assets/report.png'

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: <UserPlus size={22} />,
    title: 'Add Your Lead',
    description: 'Create and organize your lead information in one place.',
    image: leadImg,
  },
  {
    number: '02',
    icon: <CalendarCheck size={22} />,
    title: 'Track & Follow Up',
    description: 'Monitor activities and stay on top of important follow-ups.',
    image: timelineImg,
  },
  {
    number: '03',
    icon: <BarChart3 size={22} />,
    title: 'Review Performance',
    description: 'Use dashboards, reports, and timelines to understand progress.',
    image: reportImg,
  },
]

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="how-section">
      <div className="container">
        {/* Section Header */}
        <div className="how-heading">
          <span className="how-eyebrow">SIMPLE 3-STEP WORKFLOW</span>
          <h2>
            From Lead to <strong>Outcome.</strong>
          </h2>
          <p>
            A simple, focused workflow designed for small and growing teams.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="how-steps-grid">
          {steps.map((step, idx) => (
            <motion.div
              className="how-step-card"
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              {/* Top Row: Number & Icon */}
              <div className="step-card-top">
                <span className="step-badge">{step.number}</span>
                <div className="step-icon">{step.icon}</div>
              </div>

              {/* Title & Description */}
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>

              {/* Preview Image Card */}
              <div className="step-image-wrap">
                <img
                  src={step.image}
                  alt={`BMO Lead - ${step.title}`}
                  className="step-image"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* BMO Superhero Character Banner (Integrated from public/char3.png) */}
        <motion.div
          className="how-character-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="char-banner-content">
            <span className="char-banner-eyebrow">BMO LEAD EXPERIENCE</span>
            <h3>Your Team Deserves a Focused Lead Tool.</h3>
            <p>
              No complicated CRM setup. Centralized lead tracking, follow-ups, and
              performance insights for up to 10 users.
            </p>
          </div>
          <div className="char-banner-img-wrap">
            <img
              src="/char3.png"
              alt="BMO Lead Superhero on Laptop"
              className="char-banner-img"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks