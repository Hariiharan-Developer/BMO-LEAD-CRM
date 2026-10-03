import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import './Faq.css'

const faqData = [
  {
    question: 'What is BMO Lead?',
    answer:
      'BMO Lead is a centralized lead management platform that helps businesses track leads, manage follow-ups, monitor callbacks, and understand team performance — all in one place.',
  },
  {
    question: 'Who can use BMO Lead?',
    answer:
      'BMO Lead is designed for any business that receives customer enquiries and needs regular follow-ups — including real estate, education institutes, automobile businesses, service businesses, sales teams, agencies, and small to medium businesses.',
  },
  {
    question: 'Can I manage follow-ups?',
    answer:
      'Yes. BMO Lead lets you schedule follow-ups for any lead and sends timely reminders so your team never misses an important interaction.',
  },
  {
    question: 'Can I track callbacks?',
    answer:
      'Yes. BMO Lead has a dedicated callback management feature so you always know which customers are waiting for a call and when they were last contacted.',
  },
  {
    question: 'Can I assign leads to my team?',
    answer:
      'Yes. You can assign leads to specific team members and track their activity. Managers get full visibility into daily calls, open leads, and pipeline progress.',
  },
  {
    question: 'Can I update lead status?',
    answer:
      'Yes. BMO Lead supports clear lead statuses — New, Contacted, Follow-up, Interested, Converted, and Lost — so everyone on your team always knows where each lead stands.',
  },
  {
    question: 'Can I see follow-up history?',
    answer:
      'Yes. Every lead has a complete timeline showing all past interactions, notes, status changes, and follow-up activity so you always have full context.',
  },
  {
    question: 'Does BMO Lead replace Excel lead tracking?',
    answer:
      'Yes. BMO Lead is specifically built to replace scattered Excel files, notebooks, manual alarms, and phone-based tracking with a single organised system that your entire team can use.',
  },
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <motion.div
          className="faq-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="faq-eyebrow">FAQ</span>
          <h2>
            Common questions about{' '}
            <strong>BMO Lead</strong>
          </h2>
          <p>
            Everything you need to know about tracking leads, managing follow-ups,
            and replacing Excel with BMO Lead.
          </p>
        </motion.div>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index

            return (
              <motion.div
                key={item.question}
                className={`faq-item ${isOpen ? 'active' : ''}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <motion.div
                    className="faq-icon"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Plus size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ