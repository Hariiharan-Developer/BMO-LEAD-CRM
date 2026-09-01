import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

import './Faq.css'

const faqData = [
  {
    question: 'What is BMO Lead?',
    answer:
      'BMO Lead is a smart lead management platform that helps teams capture, organize, track and convert leads from a single workspace.',
  },
  {
    question: 'How does lead management work?',
    answer:
      'Leads can be captured, assigned, prioritized and tracked through different stages such as enquiry, quotation and confirmation.',
  },
  {
    question: 'Can I track follow-ups?',
    answer:
      'Yes. BMO Lead helps your team organize follow-up activities and make sure important opportunities are not missed.',
  },
  {
    question: 'Can different employees have different permissions?',
    answer:
      'Yes. Role-based permissions can control which modules and actions each employee can access.',
  },
  {
    question: 'Can I see my sales pipeline?',
    answer:
      'Yes. The pipeline provides visibility into your enquiries, quotations, confirmed leads and other stages.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'BMO Lead is designed with authentication, controlled access and role-based permissions to help protect business data.',
  },
]

const FAQ = () => {

  const [activeIndex, setActiveIndex] =
    useState<number | null>(null)

  const handleToggle = (index: number) => {
    setActiveIndex(
      activeIndex === index ? null : index
    )
  }

  return (
    <section id="faq" className="faq-section">

      <motion.div
        className="faq-heading"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
      >

        <span>FAQ</span>

        <h2>
          Questions?
          <br />
          <strong>We've Got Answers.</strong>
        </h2>

        <p>
          Everything you need to know about
          managing your leads with BMO Lead.
        </p>

      </motion.div>


      <motion.div
        className="faq-list"
        initial={{
          opacity: 0,
          y: 30,
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

        {faqData.map((faq, index) => {

          const isOpen =
            activeIndex === index

          return (
            <div
              className={`faq-item ${
                isOpen ? 'active' : ''
              }`}
              key={faq.question}
            >

              <button
                className="faq-question"
                onClick={() =>
                  handleToggle(index)
                }
              >

                <span>
                  {faq.question}
                </span>

                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <Plus size={19} />
                </motion.span>

              </button>


              <AnimatePresence initial={false}>

                {isOpen && (

                  <motion.div
                    className="faq-answer-wrapper"
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >

                    <p className="faq-answer">
                      {faq.answer}
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>
          )
        })}

      </motion.div>

    </section>
  )
}

export default FAQ