import { motion } from 'framer-motion'

import './HowItWorks.css'

import loginImage from '../../assets/login.png'
import dashboardImage from '../../assets/dashboard.png'
import leadImage from '../../assets/notification.png'
import reportImage from '../../assets/report.png'
import analyticsImage from '../../assets/analytic.png'
import excelImage from '../../assets/excel.png'

const steps = [
  {
    number: '01',
    title: 'Login',
    description:
      'Securely access your BMO Leads workspace and start managing your sales pipeline.',
    image: loginImage,
  },
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

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-section">

      {/* =================================
          HEADER
      ================================= */}

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


      {/* =================================
          MAIN
      ================================= */}

      <div className="how-main">


        {/* =================================
            LEFT CONTENT
        ================================= */}

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


        {/* =================================
            RIGHT SCREEN
        ================================= */}

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

          {/* =================================
              LAPTOP
          ================================= */}

          <div className="laptop">

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


            {/* =================================
                SCREEN
            ================================= */}

            <div className="screen">

              <motion.div
                className="screen-track"
                animate={{
                  x: [
                    '0%',
                    '0%',
                    '-16.666%',
                    '-16.666%',
                    '-33.333%',
                    '-33.333%',
                    '-50%',
                    '-50%',
                    '-66.666%',
                    '-66.666%',
                    '-83.333%',
                    '-83.333%',
                    '0%',
                  ],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >

                {steps.map((step) => (
                  <div
                    className="screen-slide"
                    key={step.number}
                  >

                    <img
                      src={step.image}
                      alt={`${step.title} - BMO Leads`}
                    />

                  </div>
                ))}

              </motion.div>

            </div>


            {/* =================================
                LAPTOP BASE
            ================================= */}

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