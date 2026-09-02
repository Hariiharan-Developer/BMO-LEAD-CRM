import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Target,
  ShieldCheck,
} from 'lucide-react'
import { Button, Container, Row, Col } from 'react-bootstrap'

import './Hero.css'
import './AnimatedHero.css'

import dashboardImage from '../../assets/report.png'

const Hero = () => {
  return (
    <section id="home" className="hero-section">

      {/* Background */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-grid" />

      <Container className="hero-container">
        <Row className="align-items-center g-5">

          {/* =========================================
              LEFT CONTENT
          ========================================= */}
          <Col lg={5} className="hero-content-col">

            <motion.div
              className="hero-content"
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
            >

              {/* Badge */}
              <motion.div
                className="hero-badge"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
              >
                <span className="status-dot" />

                SMART LEAD MANAGEMENT PLATFORM
              </motion.div>

              {/* Heading */}
              <h1>
                Turn Every Lead
                <br />

                <span>
                  Into an Opportunity.
                </span>
              </h1>

              {/* Description */}
              <p className="hero-description">
                Capture, organize, track and convert your
                leads with one powerful platform built
                for modern sales teams.
              </p>

              {/* Buttons */}
              <div className="hero-buttons">

                <motion.div
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <Button
                    className="primary-btn"
                    type="button"
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <Button
                    className="secondary-btn"
                    type="button"
                  >
                    Explore Platform
                    <ArrowRight size={18} />
                  </Button>
                </motion.div>

              </div>

              {/* Trust */}
              <div className="hero-trust">

                <CheckCircle2 size={18} />

                <span>
                  Built for growing sales teams
                </span>

              </div>

            </motion.div>
          </Col>


          {/* =========================================
              RIGHT VISUAL
          ========================================= */}
          <Col lg={7} className="hero-visual-col">

            <motion.div
              className="hero-visual"
              initial={{
                opacity: 0,
                x: 80,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: 'easeOut',
              }}
            >

              {/* Dashboard */}
              <motion.div
                className="dashboard-preview"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >

                <div className="dashboard-browser">

                  {/* Browser Header */}
                  <div className="browser-top">

                    <div className="browser-dots">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="browser-title">
                      BMO Leads
                    </div>

                  </div>

                  {/* Dashboard Image */}
                  <img
                    src={dashboardImage}
                    alt="BMO Leads Dashboard"
                    className="dashboard-image"
                  />

                </div>

              </motion.div>


              {/* =========================================
                  FLOATING CARD - USERS
              ========================================= */}
              <motion.div
                className="hero-floating-card floating-users"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >

                <div className="floating-icon orange-icon">
                  <Users size={18} />
                </div>

                <div>
                  <small>
                    ACTIVE LEADS
                  </small>

                  <strong>
                    1,248
                  </strong>
                </div>

              </motion.div>


              {/* =========================================
                  FLOATING CARD - CONVERSION
              ========================================= */}
              <motion.div
                className="hero-floating-card floating-conversion"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                  ease: 'easeInOut',
                }}
              >

                <div className="floating-icon orange-icon">
                  <TrendingUp size={18} />
                </div>

                <div>
                  <small>
                    CONVERSION
                  </small>

                  <strong>
                    +12.8%
                  </strong>
                </div>

              </motion.div>


              {/* =========================================
                  FLOATING CARD - SECURITY
              ========================================= */}
              <motion.div
                className="hero-floating-card floating-security"
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1.5,
                  ease: 'easeInOut',
                }}
              >

                <div className="floating-icon orange-icon">
                  <ShieldCheck size={18} />
                </div>

                <div>
                  <small>
                    SECURE PLATFORM
                  </small>

                  <strong>
                    Protected
                  </strong>
                </div>

              </motion.div>


              {/* Target */}
              <motion.div
                className="hero-target"
                animate={{
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Target size={22} />
              </motion.div>

            </motion.div>
          </Col>

        </Row>
      </Container>

    </section>
  )
}

export default Hero