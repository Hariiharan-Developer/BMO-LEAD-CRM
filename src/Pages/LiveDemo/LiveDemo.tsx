import { motion } from 'framer-motion'
import {
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Users,
} from 'lucide-react'
import './LiveDemo.css'

const stats = [
  {
    label: 'Total Leads',
    value: '1,248',
    icon: Users,
    change: '+12.8%',
  },
  {
    label: 'Enquiries',
    value: '648',
    icon: BarChart3,
    change: '+8.4%',
  },
  {
    label: 'Converted',
    value: '126',
    icon: CheckCircle2,
    change: '+18.2%',
  },
]

const pipeline = [
  { label: 'Enquiry', value: 648, percentage: 100 },
  { label: 'Quotation', value: 284, percentage: 72 },
  { label: 'Confirmed', value: 126, percentage: 48 },
  { label: 'Cancelled', value: 42, percentage: 18 },
]

const LiveDemo = () => {
  return (
    <section id="live-demo" className="live-demo-section">

      {/* HEADER */}
      <motion.div
        className="live-demo-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span>LIVE SHOWCASE</span>

        <h2>
          See Your Sales
          <br />
          <strong>Come To Life.</strong>
        </h2>

        <p>
          Get a clear view of your leads, pipeline and sales
          performance from one powerful dashboard.
        </p>
      </motion.div>

      {/* DASHBOARD */}
      <motion.div
        className="live-dashboard"
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        {/* DASHBOARD TOP BAR */}
        <div className="live-dashboard-top">

          <div>
            <small>OVERVIEW</small>
            <h3>Lead Dashboard</h3>
          </div>

          <div className="live-status">
            <span />
            Live Data
          </div>

        </div>

        {/* STATS */}
        <div className="live-stats">

          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <motion.div
                className="live-stat-card"
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -5,
                }}
              >

                <div className="live-stat-icon">
                  <Icon size={19} />
                </div>

                <div className="live-stat-content">
                  <small>{stat.label}</small>

                  <strong>{stat.value}</strong>

                  <span>
                    <TrendingUp size={11} />
                    {stat.change}
                  </span>
                </div>

              </motion.div>
            )
          })}

        </div>

        {/* MAIN CONTENT */}
        <div className="live-dashboard-grid">

          {/* CHART */}
          <div className="live-chart-card">

            <div className="live-card-heading">
              <div>
                <small>PERFORMANCE</small>
                <h4>Lead Conversion</h4>
              </div>

              <span>Last 30 days</span>
            </div>

            <div className="live-chart">

              <div className="chart-grid-line line-1" />
              <div className="chart-grid-line line-2" />
              <div className="chart-grid-line line-3" />
              <div className="chart-grid-line line-4" />

              <motion.div
                className="chart-growth"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                }}
              />

              <div className="chart-dots">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <motion.span
                    key={item}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4 + item * 0.15,
                    }}
                  />
                ))}
              </div>

            </div>

          </div>

          {/* PIPELINE */}
          <div className="live-pipeline-card">

            <div className="live-card-heading">
              <div>
                <small>PIPELINE</small>
                <h4>Sales Overview</h4>
              </div>
            </div>

            <div className="live-pipeline">

              {pipeline.map((item, index) => (

                <div
                  className="live-pipeline-row"
                  key={item.label}
                >

                  <div className="pipeline-label">
                    <span className={`pipeline-dot pipeline-dot-${index}`} />
                    {item.label}
                  </div>

                  <strong>{item.value}</strong>

                  <div className="pipeline-progress">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${item.percentage}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: index * 0.15,
                      }}
                    />
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </motion.div>

      {/* FLOATING SUCCESS MESSAGE */}
      <motion.div
        className="demo-success-card"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >

        <div className="demo-success-icon">
          <CheckCircle2 size={20} />
        </div>

        <div>
          <small>LEAD CONVERTED</small>
          <strong>New customer added</strong>
        </div>

      </motion.div>

    </section>
  )
}

export default LiveDemo