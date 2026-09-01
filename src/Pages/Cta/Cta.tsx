import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import './CTA.css'

const CTA = () => {
  return (
    <section className="cta-section">

      <motion.div
        className="cta-glow cta-glow-one"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="cta-glow cta-glow-two"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="cta-card"
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
        }}
      >

        <motion.div
          className="cta-icon"
          animate={{
            rotate: [0, 8, -8, 0],
            y: [0, -4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkles size={22} />
        </motion.div>

        <span className="cta-label">
          READY TO GROW?
        </span>

        <h2>
          Turn More Leads
          <br />
          <strong>Into Customers.</strong>
        </h2>

        <p>
          Bring your leads, follow-ups and sales pipeline
          together in one intelligent workspace.
        </p>

        <div className="cta-buttons">

          <motion.button
            className="cta-primary-btn"
            whileHover={{
              y: -3,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            Get Started
            <ArrowRight size={17} />
          </motion.button>

          <motion.button
            className="cta-secondary-btn"
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            Explore Live Demo
          </motion.button>

        </div>

        <div className="cta-trust">
          <span />
          No complicated setup
          <span />
          Built for growing teams
          <span />
          Simple & powerful
        </div>

      </motion.div>

    </section>
  )
}

export default CTA