import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import './CTA.css'

const CTA = () => {
  return (
    <section id="cta" className="cta-section">

      <motion.div
        className="cta-glow cta-glow-one"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="cta-glow cta-glow-two"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="cta-card"
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="cta-label">READY TO GET STARTED?</span>

        <h2 className="cta-main-heading">
          Ready to stop tracking leads <span>manually?</span>
        </h2>

        <p className="cta-sub">
          Manage your leads, callbacks and follow-ups in one place with BMO Lead.
          Replace Excel, notebooks and missed calls — once and for all.
        </p>

        <div className="cta-trust-row">
          {[
            'No complicated setup',
            'Callback management',
            'Team activity tracking',
            'Follow-up reminders',
          ].map((item) => (
            <span key={item} className="cta-trust-pill">
              <CheckCircle2 size={13} className="cta-trust-icon" />
              {item}
            </span>
          ))}
        </div>

        <div className="cta-buttons">
          <motion.button
            className="cta-primary-btn"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Free
            <ArrowRight size={17} />
          </motion.button>

          <motion.button
            className="cta-secondary-btn"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Features
          </motion.button>
        </div>

      </motion.div>
    </section>
  )
}

export default CTA