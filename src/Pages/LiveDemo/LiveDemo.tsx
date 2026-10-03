import { motion } from 'framer-motion'
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Phone,
  UserPlus,
  Bell,
  Target,
  BarChart2,
  Clock,
} from 'lucide-react'
import './LiveDemo.css'

const LiveDemo = () => {
  const handleExplore = () => {
    const section = document.getElementById('how-it-works')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="live-demo" className="live-demo-section">
      <div className="live-demo-container">
        {/* =====================================================
            LEFT - LEAD JOURNEY TIMELINE VISUAL
        ====================================================== */}
        <motion.div
          className="live-demo-visual"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Subtle Background Orbit */}
          <div className="journey-orbit journey-orbit-one" />

          {/* Floating Live Badge */}
          <motion.div
            className="journey-live-badge"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="journey-live-dot" />
            TIMELINE WORKFLOW
          </motion.div>

          {/* Mobile-Style Timeline Container */}
          <motion.div
            className="mobile-journey-cover"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Top Header */}
            <div className="cover-header">
              <div className="cover-brand">
                <div className="cover-brand-icon">B</div>
                <div>
                  <span>BMO LEAD</span>
                  <strong>Lead Timeline</strong>
                </div>
              </div>

              <div className="cover-live-status">
                <span />
                ACTIVE
              </div>
            </div>

            {/* Divider */}
            <div className="cover-divider" />

            {/* Title */}
            <div className="cover-title">
              <div>
                <span>TIMELINE STAGES</span>
                <h3>Lead Activity Flow</h3>
              </div>
            </div>

            {/* =================================================
                4 REAL BMO LEAD STAGES
            ================================================== */}
            <div className="lead-journey">
              {/* Connecting Line */}
              <div className="journey-line">
                <motion.span
                  className="journey-line-progress"
                  initial={{ height: '0%' }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.8,
                    delay: 0.3,
                    ease: 'easeInOut',
                  }}
                />
              </div>

              {/* 1. NEW LEAD */}
              <motion.div
                className="journey-step"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="journey-node">
                  <UserPlus size={16} />
                </div>
                <div className="journey-card">
                  <div className="journey-card-top">
                    <div>
                      <span className="journey-card-label">NEW LEAD</span>
                      <h4>Rajesh Enterprises</h4>
                    </div>
                    <span className="journey-status new-status">Lead added</span>
                  </div>
                </div>
              </motion.div>

              {/* 2. FOLLOW-UP */}
              <motion.div
                className="journey-step"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="journey-node follow-node">
                  <CalendarClock size={16} />
                </div>
                <div className="journey-card">
                  <div className="journey-card-top">
                    <div>
                      <span className="journey-card-label">FOLLOW-UP</span>
                      <h4>Customer follow-up</h4>
                    </div>
                    <span className="journey-status follow-status">Scheduled</span>
                  </div>
                </div>
              </motion.div>

              {/* 3. ACTIVITY */}
              <motion.div
                className="journey-step"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="journey-node activity-node">
                  <Phone size={16} />
                </div>
                <div className="journey-card">
                  <div className="journey-card-top">
                    <div>
                      <span className="journey-card-label">ACTIVITY</span>
                      <h4>Customer contacted</h4>
                    </div>
                    <span className="journey-status activity-status">Updated</span>
                  </div>
                </div>
              </motion.div>

              {/* 4. OUTCOME */}
              <motion.div
                className="journey-step"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <div className="journey-node converted-node">
                  <CheckCircle2 size={16} />
                </div>
                <div className="journey-card converted-card">
                  <div className="journey-card-top">
                    <div>
                      <span className="journey-card-label">OUTCOME</span>
                      <h4>Lead status updated</h4>
                    </div>
                    <span className="journey-status converted-status">Completed</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Cover Footer: Real Status */}
            <div className="cover-footer">
              <div className="cover-footer-icon">
                <Clock size={15} />
              </div>
              <div>
                <span>STATUS TRACKING</span>
                <strong>Full History Recorded</strong>
              </div>
            </div>
          </motion.div>

          {/* Floating Card: FOLLOW-UP ALERT - Stay on track */}
          <motion.div
            className="journey-notification"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="notification-icon">
              <Bell size={15} />
            </div>
            <div>
              <span>FOLLOW-UP ALERT</span>
              <strong>Stay on track</strong>
            </div>
          </motion.div>
        </motion.div>

        {/* =====================================================
            RIGHT CONTENT (3 Capability Points + Single CTA)
        ====================================================== */}
        <motion.div
          className="live-demo-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="live-demo-label">
            <span className="label-dot" />
            LEAD JOURNEY
          </span>

          <h2>
            Follow Every Lead.
            <br />
            <span>From Start to Outcome.</span>
          </h2>

          <p className="live-demo-description">
            Keep every lead, follow-up, activity, and update connected in one clear
            timeline.
          </p>

          {/* 3 Simple Capability Points */}
          <div className="live-demo-features">
            {/* 1. Track Every Lead */}
            <div className="live-feature">
              <div className="live-feature-icon">
                <Target size={18} />
              </div>
              <div>
                <strong>Track Every Lead</strong>
                <p>Keep lead details and status updates organized in one place.</p>
              </div>
            </div>

            {/* 2. Stay Ahead of Follow-ups */}
            <div className="live-feature">
              <div className="live-feature-icon">
                <Bell size={18} />
              </div>
              <div>
                <strong>Stay Ahead of Follow-ups</strong>
                <p>Get reminders and alerts for important follow-up activities.</p>
              </div>
            </div>

            {/* 3. Understand Performance */}
            <div className="live-feature">
              <div className="live-feature-icon">
                <BarChart2 size={18} />
              </div>
              <div>
                <strong>Understand Performance</strong>
                <p>
                  See activity and performance through a centralized dashboard and
                  reports.
                </p>
              </div>
            </div>
          </div>

          {/* Single CTA: Explore BMO Lead -> */}
          <div className="live-demo-actions">
            <button
              className="live-demo-btn"
              type="button"
              onClick={handleExplore}
            >
              <span>Explore BMO Lead</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LiveDemo