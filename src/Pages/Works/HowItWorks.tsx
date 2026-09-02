import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

import './HowItWorks.css'

// import loginImage from '../../assets/login.png'
import dashboardImage from '../../assets/timeline.png'
import leadImage from '../../assets/followup.png'
import reportImage from '../../assets/report.png'
import analyticsImage from '../../assets/lead.png'
import excelImage from '../../assets/excel.png'

const steps = [
  // {
  //   number: '01',
  //   title: 'Login',
  //   description:
  //     'Securely access your BMO Leads workspace and start managing your sales pipeline.',
  //   image: loginImage,
  // },
  {
    number: '02',
    title: 'Dashboard',
    description:
      'Get a complete overview of your leads, enquiries, conversions and sales performance.',
    image: dashboardImage,
  },
  {
    number: '03',
    title: 'Manage Leads',
    description:
      'Create, organize, update and track every lead from one centralized workspace.',
    image: leadImage,
  },
  {
    number: '04',
    title: 'Reports',
    description:
      'Monitor your lead activity and understand what is happening across your pipeline.',
    image: reportImage,
  },
  {
    number: '05',
    title: 'Analytics',
    description:
      'Turn your lead data into useful insights and make better sales decisions.',
    image: analyticsImage,
  },
  {
    number: '06',
    title: 'Export Data',
    description:
      'Download your lead information as an Excel file whenever you need it.',
    image: excelImage,
  },
]

const AUTO_SCROLL_TIME = 5000

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setActiveStep((current) =>
      current === steps.length - 1 ? 0 : current + 1
    )
  }

  const previousSlide = () => {
    setActiveStep((current) =>
      current === 0 ? steps.length - 1 : current - 1
    )
  }

  /* =====================================================
     AUTO SLIDE
  ===================================================== */

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setActiveStep((current) =>
        current === steps.length - 1 ? 0 : current + 1
      )
    }, AUTO_SCROLL_TIME)

    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <section
      id="how-it-works"
      className="how-section"
    >

      {/* =================================================
          HEADING
      ================================================= */}

      <motion.div
        className="how-heading"
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <span className="section-label">
          HOW IT WORKS
        </span>

        <h2>
          Everything You Need
          <br />

          <strong>
            From Login To Conversion.
          </strong>
        </h2>

        <p>
          Follow the complete BMO Leads workflow
          and see how every part of your sales
          process works together.
        </p>
      </motion.div>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="how-main">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <motion.div
          className="how-content"
          initial={{
            opacity: 0,
            x: -45,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <span className="content-label">
            ONE PLATFORM
          </span>

          <h3>
            Manage your
            <span> entire lead journey.</span>
          </h3>

          <p>
            From the moment a lead enters your system
            to the final conversion, BMO Leads keeps
            everything organized, visible and easy to manage.
          </p>

          <div className="content-points">

            <div>
              <span className="point-number">
                01
              </span>

              <span>
                Capture & organize leads
              </span>
            </div>

            <div>
              <span className="point-number">
                02
              </span>

              <span>
                Track your sales pipeline
              </span>
            </div>

            <div>
              <span className="point-number">
                03
              </span>

              <span>
                Analyze & improve performance
              </span>
            </div>

          </div>

        </motion.div>

        {/* =================================================
            LAPTOP
        ================================================= */}

        <motion.div
          className="screen-section"
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >

          <div
            className="laptop"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >

            {/* =================================================
                LAPTOP HEADER
            ================================================= */}

            <div className="laptop-header">

              <div className="laptop-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="laptop-title">
                BMO Leads
              </span>

              <div className="laptop-status">

                <span />

                Live

              </div>

            </div>

            {/* =================================================
                SCREEN
            ================================================= */}

            <div className="screen">

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeStep}
                  className="screen-slide"
                  initial={{
                    opacity: 0,
                    scale: 1.015,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.99,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >

                  <img
                    src={steps[activeStep].image}
                    alt={`${steps[activeStep].title} - BMO Leads`}
                  />

                </motion.div>

              </AnimatePresence>

              {/* =================================================
                  NAVIGATION ARROWS
              ================================================= */}

              <button
                type="button"
                className="carousel-arrow carousel-arrow-left"
                onClick={previousSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft size={19} />
              </button>

              <button
                type="button"
                className="carousel-arrow carousel-arrow-right"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight size={19} />
              </button>

            </div>

            {/* =================================================
                CAROUSEL FOOTER
            ================================================= */}

            <div className="carousel-footer">

              <div className="carousel-dots">

                {steps.map((step, index) => (

                  <button
                    key={step.number}
                    type="button"
                    className={`carousel-dot ${
                      activeStep === index
                        ? 'active'
                        : ''
                    }`}
                    onClick={() =>
                      setActiveStep(index)
                    }
                    aria-label={`Go to ${step.title}`}
                  />

                ))}

              </div>

              {/* Progress */}

              <div className="carousel-progress">

                <motion.div
                  key={activeStep}
                  className="carousel-progress-bar"
                  initial={{
                    width: '0%',
                  }}
                  animate={{
                    width: isPaused
                      ? '0%'
                      : '100%',
                  }}
                  transition={{
                    duration: isPaused
                      ? 0
                      : AUTO_SCROLL_TIME / 1000,
                    ease: 'linear',
                  }}
                />

              </div>

            </div>

            {/* =================================================
                LAPTOP BASE
            ================================================= */}

            <div className="laptop-base">

              <div className="laptop-notch" />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default HowItWorks