import { motion } from 'framer-motion'
import {
  Target,
  CheckCircle2,
  Users,
  BarChart3
} from 'lucide-react'

import './Features.css'

const features = [
  {
    icon: Target,
    title: 'Lead Tracking',
    description:
      'Keep every lead organized from first contact to final conversion.'
  },
  {
    icon: CheckCircle2,
    title: 'Smart Follow-Ups',
    description:
      'Never miss an important follow-up with organized activities.'
  },
  {
    icon: Users,
    title: 'Lead Prioritization',
    description:
      'Focus your team on the prospects that matter most.'
  },
  {
    icon: BarChart3,
    title: 'Powerful Analytics',
    description:
      'Understand your pipeline with clear real-time insights.'
  }
]

const Features = () => {
  return (
    <section
      id="features"
      className="features-section"
    >

      <div className="section-heading">

        <span>
          POWERFUL TOOLS
        </span>

        <h2>
          Everything You Need
          <br />

          <strong>
            To Manage Your Leads.
          </strong>
        </h2>

        <p>
          BMO Lead gives your team everything
          needed to organize, track and convert
          opportunities.
        </p>

      </div>


      <motion.div
        className="feature-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.12
        }}
      >

        {features.map((feature) => {

          const Icon = feature.icon

          return (
            <motion.div
              className="feature-card"
              key={feature.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30
                },
                visible: {
                  opacity: 1,
                  y: 0
                }
              }}
              whileHover={{
                y: -8
              }}
            >

              <div className="feature-icon">
                <Icon size={22} />
              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

            </motion.div>
          )
        })}

      </motion.div>

    </section>
  )
}

export default Features