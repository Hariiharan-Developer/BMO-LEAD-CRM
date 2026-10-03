import React from 'react'
import { motion } from 'framer-motion'
import './TargetAudience.css'

const audiences = [
  {
    id: 'realestate',
    emoji: '🏠',
    title: 'Real Estate',
    desc: 'Track property enquiries, buyer follow-ups, and deal stages in one place.',
    color: '#e67e22',
  },
  {
    id: 'education',
    emoji: '🎓',
    title: 'Education & Training',
    desc: 'Manage student enquiries, demo schedules, and admission follow-ups easily.',
    color: '#8e44ad',
  },
  {
    id: 'automobile',
    emoji: '🚗',
    title: 'Automobile',
    desc: 'Log test drive requests, track callbacks, and follow up with every prospect.',
    color: '#2980b9',
  },
  {
    id: 'service',
    emoji: '🛠️',
    title: 'Service Businesses',
    desc: 'Never miss a callback from a customer who requested a quote or repair.',
    color: '#27ae60',
  },
  {
    id: 'sales',
    emoji: '📞',
    title: 'Sales Teams',
    desc: 'Give every rep a clear pipeline and managers a real-time view of activity.',
    color: '#c0392b',
  },
  {
    id: 'agencies',
    emoji: '💼',
    title: 'Agencies',
    desc: 'Assign leads to team members and track each client from enquiry to close.',
    color: '#16a085',
  },
  {
    id: 'smb',
    emoji: '🏢',
    title: 'Small & Medium Businesses',
    desc: 'A simple, powerful CRM built for growing businesses without complex setup.',
    color: '#ff5900',
  },
]

const TargetAudience: React.FC = () => {
  return (
    <section id="who-its-for" className="ta-section">
      <div className="ta-container">

        {/* Header */}
        <motion.div
          className="ta-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="ta-eyebrow">WHO IT'S FOR</span>
          <h2 className="ta-heading">
            BMO Lead works for any business{' '}
            <span className="ta-heading-orange">that handles enquiries</span>
          </h2>
          <p className="ta-sub">
            If your business receives customer enquiries and needs regular follow-ups,
            BMO Lead is built for you.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="ta-grid">
          {audiences.map((a, i) => (
            <motion.div
              key={a.id}
              className="ta-card"
              style={{ '--ta-color': a.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 + i * 0.07 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <span className="ta-emoji">{a.emoji}</span>
              <h3 className="ta-card-title">{a.title}</h3>
              <p className="ta-card-desc">{a.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TargetAudience
