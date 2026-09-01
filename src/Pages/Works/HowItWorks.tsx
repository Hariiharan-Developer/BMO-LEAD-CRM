import { motion } from 'framer-motion'
import {
  Upload,
  Target,
  BellRing,
  Trophy,
  ArrowRight,
} from 'lucide-react'

import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Capture',
    description:
      'Collect leads from different sources and keep all customer information organized in one place.',
  },
  {
    number: '02',
    icon: Target,
    title: 'Qualify',
    description:
      'Understand customer requirements, identify valuable opportunities and prioritize the right leads.',
  },
  {
    number: '03',
    icon: BellRing,
    title: 'Follow Up',
    description:
      'Stay connected with prospects using reminders and organized follow-up activities.',
  },
  {
    number: '04',
    icon: Trophy,
    title: 'Convert',
    description:
      'Move qualified opportunities through your pipeline and turn them into successful customers.',
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-section">

      <motion.div
        className="how-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>HOW IT WORKS</span>

        <h2>
          From First Contact
          <br />
          <strong>To Successful Conversion.</strong>
        </h2>

        <p>
          BMO Lead gives your sales team a simple,
          structured workflow to manage every opportunity.
        </p>
      </motion.div>

      <div className="how-steps">

        <div className="how-progress-line" />

        {steps.map((step, index) => {

          const Icon = step.icon

          return (
            <motion.div
              className="how-step"
              key={step.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-80px',
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >

              <div className="how-number">
                {step.number}
              </div>

              <motion.div
                className="how-icon"
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
              >
                <Icon size={23} />
              </motion.div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              {index < steps.length - 1 && (
                <ArrowRight className="how-arrow" size={20} />
              )}

            </motion.div>
          )
        })}

      </div>

    </section>
  )
}

export default HowItWorks