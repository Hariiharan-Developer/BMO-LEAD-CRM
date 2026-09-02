import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Play,
  TrendingUp,
  Zap,
} from 'lucide-react'
import './LiveDemo.css'
import liveDemoVideo from '../../assets/live-demo-video.mp4'

const LiveDemo = () => {
  return (
    <section id="live-demo" className="live-demo-section">

      <div className="live-demo-container">

        {/* =====================================================
            LEFT - MOBILE VIDEO
        ===================================================== */}
        <motion.div
          className="live-demo-visual"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="live-demo-glow" />

          <div className="mobile-device">

            {/* MOBILE TOP BAR */}
            <div className="mobile-top">

              <div className="mobile-camera" />

            </div>

            {/* VIDEO */}
            <div className="mobile-screen">

              <video
                className="live-demo-video"
                src={liveDemoVideo}
                autoPlay
                muted
                loop
                playsInline
              />

              {/* PLAY OVERLAY */}
              <div className="video-overlay">
                <div className="video-play">
                  <Play size={18} fill="currentColor" />
                </div>

                <span>LIVE DEMO</span>
              </div>

            </div>

            {/* MOBILE BOTTOM */}
            <div className="mobile-bottom">
              <span />
            </div>

          </div>

          {/* FLOATING LIVE BADGE */}
          <motion.div
            className="demo-live-badge"
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="live-dot" />
            Live Showcase
          </motion.div>

          {/* FLOATING SUCCESS CARD */}
          <motion.div
            className="demo-success-card"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >

            <div className="demo-success-icon">
              <CheckCircle2 size={18} />
            </div>

            <div>
              <small>LEAD CONVERTED</small>
              <strong>New customer added</strong>
            </div>

          </motion.div>

        </motion.div>


        {/* =====================================================
            RIGHT - CONTENT
        ===================================================== */}
        <motion.div
          className="live-demo-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* LABEL */}
          <span className="live-demo-label">
            <span className="label-dot" />
            LIVE SHOWCASE
          </span>


          {/* HEADING */}
          <h2>
            See Your Sales
            <br />
            <strong>Come To Life.</strong>
          </h2>


          {/* DESCRIPTION */}
          <p className="live-demo-description">
            Experience how BMO Leads helps you manage your entire
            sales process from one simple and powerful platform.
          </p>


          {/* FEATURES */}
          <div className="live-demo-features">

            <div className="live-feature">

              <div className="live-feature-icon">
                <Zap size={18} />
              </div>

              <div>
                <strong>Manage Leads Effortlessly</strong>

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
                <strong>Track Your Sales Pipeline</strong>

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
                <strong>Turn Leads Into Customers</strong>

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