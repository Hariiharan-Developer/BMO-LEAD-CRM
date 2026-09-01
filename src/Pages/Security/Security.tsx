import { motion } from 'framer-motion'
import {
  Lock,
  ShieldCheck,
  Database,
  UserCheck,
  KeyRound,
  Server,
  CheckCircle2,
} from 'lucide-react'
import './Security.css'

const securityItems = [
  {
    icon: Lock,
    title: 'Secure Authentication',
    description:
      'Protect every account with secure authentication and controlled access.',
  },
  {
    icon: UserCheck,
    title: 'Role-Based Access',
    description:
      'Give every team member access only to the features they need.',
  },
  {
    icon: Database,
    title: 'Protected Data',
    description:
      'Keep customer and lead information protected throughout the system.',
  },
  {
    icon: KeyRound,
    title: 'Controlled Permissions',
    description:
      'Manage create, view, update and delete permissions with precision.',
  },
]

const Security = () => {
  return (
    <section id="security" className="security-section">

      <div className="security-glow" />

      <div className="security-container">

        {/* LEFT CONTENT */}

        <motion.div
          className="security-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="security-label">
            SECURITY FIRST
          </span>

          <h2>
            Your Data.
            <br />
            <strong>Protected By Design.</strong>
          </h2>

          <p>
            BMO Lead is designed with security and access
            control at the core, helping your team manage
            sensitive sales information with confidence.
          </p>

          <div className="security-status">

            <div className="security-status-icon">
              <ShieldCheck size={22} />
            </div>

            <div>
              <strong>Security Ready</strong>
              <span>
                Built for controlled business access
              </span>
            </div>

          </div>

        </motion.div>


        {/* RIGHT SECURITY CARD */}

        <motion.div
          className="security-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="security-card-header">

            <div className="security-shield">
              <ShieldCheck size={25} />
            </div>

            <div>
              <small>PROTECTION STATUS</small>

              <h3>
                System Protected
              </h3>
            </div>

            <motion.div
              className="security-check"
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <CheckCircle2 size={18} />
            </motion.div>

          </div>


          <div className="security-grid">

            {securityItems.map((item, index) => {

              const Icon = item.icon

              return (
                <motion.div
                  className="security-item"
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                >

                  <div className="security-item-icon">
                    <Icon size={18} />
                  </div>

                  <div>
                    <h4>{item.title}</h4>

                    <p>
                      {item.description}
                    </p>
                  </div>

                </motion.div>
              )
            })}

          </div>


          <div className="security-server">

            <div className="server-icon">
              <Server size={17} />
            </div>

            <div className="server-info">

              <strong>
                Protected Workspace
              </strong>

              <span>
                Access is controlled by your
                organization permissions.
              </span>

            </div>

            <div className="server-dot" />

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Security