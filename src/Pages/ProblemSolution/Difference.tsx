import React from 'react'
import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import './Difference.css'

const rows = [
  { without: 'Excel files & spreadsheets',    with: 'Centralized lead records' },
  { without: 'Notebook tracking',              with: 'Digital, searchable history' },
  { without: 'Manual alarms & reminders',      with: 'Smart follow-up reminders' },
  { without: 'Forgotten callbacks',            with: 'Callback management & logs' },
  { without: 'Scattered customer information', with: 'One complete customer history' },
  { without: 'Difficult status tracking',      with: 'Clear visual lead statuses' },
  { without: 'Manual reporting',               with: 'Dashboard & instant reports' },
]

const Difference: React.FC = () => {
  return (
    <section id="difference" className="diff-section">
      <div className="diff-container">

        {/* Header */}
        <motion.div
          className="diff-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="diff-eyebrow">THE DIFFERENCE</span>
          <h2 className="diff-heading">
            See what changes when you{' '}
            <span className="diff-heading-orange">use BMO Lead</span>
          </h2>
          <p className="diff-sub">
            A clear comparison of what your team struggles with today versus what BMO Lead makes simple.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          className="diff-table-wrap"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="diff-table">
            {/* Table Head */}
            <div className="diff-table-head">
              <div className="diff-col-label diff-col-without">
                <X size={16} className="diff-head-icon diff-head-x" />
                Without BMO Lead
              </div>
              <div className="diff-col-label diff-col-with">
                <Check size={16} className="diff-head-icon diff-head-check" />
                With BMO Lead
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <motion.div
                key={row.without}
                className="diff-row"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.05 + i * 0.07 }}
              >
                <div className="diff-cell diff-cell-without">
                  <span className="diff-x-icon"><X size={13} /></span>
                  {row.without}
                </div>
                <div className="diff-cell diff-cell-with">
                  <span className="diff-check-icon"><Check size={13} /></span>
                  {row.with}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Difference
