import { motion } from 'framer-motion'
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Phone,
  TrendingUp,
  UserPlus,
  Zap,
} from 'lucide-react'
import './LiveDemo.css'

const LiveDemo = () => {
  return (
    <section id="live-demo" className="live-demo-section">
      <div className="live-demo-container">

        {/* =====================================================
            LEFT - MOBILE STYLE LEAD JOURNEY
        ====================================================== */}
        <motion.div
          className="live-demo-visual"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background glow */}
          <div className="journey-orbit journey-orbit-one" />
          <div className="journey-orbit journey-orbit-two" />

          {/* Floating live badge */}
          <motion.div
            className="journey-live-badge"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="journey-live-dot" />
            LIVE JOURNEY
          </motion.div>

          {/* =================================================
              MOBILE COVER
          ================================================== */}
          <motion.div
            className="mobile-journey-cover"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Decorative border */}
            <div className="cover-border-glow" />

            {/* Top Header */}
            <div className="cover-header">
              <div className="cover-brand">
                <div className="cover-brand-icon">
                  B
                </div>

                <div>
                  <span>BMO LEADS</span>
                  <strong>Sales Journey</strong>
                </div>
              </div>

              <div className="cover-menu">
                <span />
                <span />
                <span />
              </div>
            </div>

            {/* Small divider */}
            <div className="cover-divider" />

            {/* Journey title */}
            <div className="cover-title">
              <div>
                <span>LIVE PIPELINE</span>
                <h3>Lead Progress</h3>
              </div>

              <div className="cover-live-status">
                <span />
                LIVE
              </div>
            </div>

            {/* =================================================
                LEAD JOURNEY
            ================================================== */}
            <div className="lead-journey">

              {/* Connection line */}
              <div className="journey-line">

                <motion.span
                  className="journey-line-progress"
                  initial={{ height: '0%' }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 2.2,
                    delay: 0.4,
                    ease: 'easeInOut',
                  }}
                />

                <motion.span
                  className="journey-line-dot"
                  animate={{
                    top: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

              </div>


              {/* =================================================
                  NEW LEAD
              ================================================== */}
              <motion.div
                className="journey-step"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
              >
                <div className="journey-node">
                  <UserPlus size={18} />
                </div>

                <div className="journey-card">

                  <div className="journey-card-top">

                    <div>
                      <span className="journey-card-label">
                        NEW LEAD
                      </span>

                      <h4>
                        Rajesh Enterprises
                      </h4>
                    </div>

                    <div className="journey-card-icon">
                      <UserPlus size={15} />
                    </div>

                  </div>

                  <div className="journey-card-bottom">

                    <span>
                      Just added
                    </span>

                    <span className="journey-status new-status">
                      New
                    </span>

                  </div>

                </div>
              </motion.div>


              {/* =================================================
                  FOLLOW UP
              ================================================== */}
              <motion.div
                className="journey-step"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                }}
              >

                <div className="journey-node follow-node">
                  <Phone size={17} />
                </div>

                <div className="journey-card">

                  <div className="journey-card-top">

                    <div>
                      <span className="journey-card-label">
                        FOLLOW-UP
                      </span>

                      <h4>
                        Call scheduled
                      </h4>
                    </div>

                    <div className="journey-card-icon">
                      <CalendarClock size={15} />
                    </div>

                  </div>

                  <div className="journey-card-bottom">

                    <span>
                      Tomorrow · 10:30 AM
                    </span>

                    <span className="journey-status follow-status">
                      Scheduled
                    </span>

                  </div>

                </div>

              </motion.div>


              {/* =================================================
                  CONVERTED
              ================================================== */}
              <motion.div
                className="journey-step"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 1.2,
                }}
              >

                <div className="journey-node converted-node">
                  <CheckCircle2 size={18} />
                </div>

                <div className="journey-card converted-card">

                  <div className="journey-card-top">

                    <div>
                      <span className="journey-card-label">
                        CONVERTED
                      </span>

                      <h4>
                        New customer
                      </h4>
                    </div>

                    <div className="journey-card-icon success-icon">
                      <CheckCircle2 size={15} />
                    </div>

                  </div>

                  <div className="journey-card-bottom">

                    <span>
                      Deal successfully closed
                    </span>

                    <span className="journey-status converted-status">
                      Won
                    </span>

                  </div>

                </div>

              </motion.div>

            </div>


            {/* =================================================
                COVER FOOTER
            ================================================== */}
            <div className="cover-footer">

              <div className="cover-footer-icon">
                <TrendingUp size={15} />
              </div>

              <div>
                <span>CONVERSION RATE</span>
                <strong>+24.8%</strong>
              </div>

              <div className="cover-footer-line">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

            </div>

          </motion.div>


          {/* =================================================
              FLOATING SMART FOLLOW-UP
          ================================================== */}
          <motion.div
            className="journey-notification"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >

            <div className="notification-icon">
              <Zap size={15} />
            </div>

            <div>
              <span>
                SMART FOLLOW-UP
              </span>

              <strong>
                Never miss an opportunity
              </strong>
            </div>

          </motion.div>


          {/* =================================================
              FLOATING SUCCESS
          ================================================== */}
          <motion.div
            className="journey-success-float"
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >

            <div className="success-float-icon">
              <CheckCircle2 size={15} />
            </div>

            <div>
              <span>DEAL CLOSED</span>
              <strong>Successfully</strong>
            </div>

          </motion.div>

        </motion.div>


        {/* =====================================================
            RIGHT CONTENT
        ====================================================== */}
        <motion.div
          className="live-demo-content"
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <span className="live-demo-label">
            <span className="label-dot" />
            LIVE SHOWCASE
          </span>

          <h2>
            See Your Sales
            <br />
            <strong>
              Come To Life.
            </strong>
          </h2>

          <p className="live-demo-description">
            Experience how BMO Leads helps you manage your entire
            sales process from one simple and powerful platform.
          </p>


          {/* Features */}
          <div className="live-demo-features">

            <div className="live-feature">

              <div className="live-feature-icon">
                <Zap size={18} />
              </div>

              <div>
                <strong>
                  Manage Leads Effortlessly
                </strong>

                <p>
                  Capture, organize and track every lead
                  without losing valuable opportunities.
                </p>
              </div>

            </div>


            <div className="live-feature">

              <div className="live-feature-icon">
                <TrendingUp size={18} />
              </div>

              <div>
                <strong>
                  Track Your Sales Pipeline
                </strong>

                <p>
                  Get a clear view of enquiries, quotations,
                  confirmations and conversions.
                </p>
              </div>

            </div>


            <div className="live-feature">

              <div className="live-feature-icon">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <strong>
                  Turn Leads Into Customers
                </strong>

                <p>
                  Follow every opportunity and improve
                  your conversion performance.
                </p>
              </div>

            </div>

          </div>


          {/* CTA */}
          <div className="live-demo-actions">

            <button className="live-demo-btn">
              Explore BMO Leads
              <ArrowRight size={17} />
            </button>

            <span className="live-demo-note">
              Simple. Smart. Powerful.
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default LiveDemo