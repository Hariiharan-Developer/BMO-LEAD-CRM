import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ShieldCheck,
  LockKeyhole,
  UserCheck,
  Database,
  CheckCircle2,
  Activity,
} from "lucide-react";

import "./Security.css";



const fadeUp:Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};



const Security: React.FC = () => {
  return (
    <section id="security" className="security-section">
      {/* Background */}
      <div className="security-bg-orb security-bg-orb-one" />
      <div className="security-bg-orb security-bg-orb-two" />

      <div className="security-container">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          className="security-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="security-top-label">
            <span className="security-label-dot" />
            SECURITY
          </div>

          <h2>
            Your leads.
            <br />
            <span>Protected.</span>
          </h2>

          <p className="security-description">
            Keep your customer information secure while giving your team the
            access they need to manage every lead with confidence.
          </p>

          {/* Security Status */}
          <div className="security-status-card">
            <div className="status-icon">
              <ShieldCheck size={23} />
            </div>

            <div className="status-content">
              <div className="status-heading">
                <span>Workspace Security</span>

                <span className="status-active">
                  <span />
                  Active
                </span>
              </div>

              <p>
                Your workspace is protected with controlled access and secure
                lead management.
              </p>
            </div>
          </div>

          {/* Small features */}
          <div className="security-small-features">
            <div className="security-small-item">
              <CheckCircle2 size={18} />
              <span>Controlled access</span>
            </div>

            <div className="security-small-item">
              <CheckCircle2 size={18} />
              <span>Protected records</span>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT VISUAL ================= */}
        <motion.div
          className="security-dashboard"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Main dashboard card */}
          <div className="security-panel">
            {/* Panel header */}
            <div className="security-panel-header">
              <div>
                <span className="panel-mini-label">SECURITY CENTER</span>
                <h3>Access Overview</h3>
              </div>

              <div className="panel-shield">
                <ShieldCheck size={21} />
              </div>
            </div>

            {/* Main security score */}
            <div className="security-score">
              <div className="score-ring">
                <div className="score-ring-inner">
                  <ShieldCheck size={31} />
                  <strong>100%</strong>
                  <span>Protected</span>
                </div>
              </div>

              <div className="score-details">
                <div className="score-detail-item">
                  <div className="detail-icon">
                    <LockKeyhole size={17} />
                  </div>

                  <div>
                    <strong>Secure Login</strong>
                    <span>Enabled</span>
                  </div>

                  <CheckCircle2 size={17} className="detail-check" />
                </div>

                <div className="score-detail-item">
                  <div className="detail-icon">
                    <UserCheck size={17} />
                  </div>

                  <div>
                    <strong>User Access</strong>
                    <span>Controlled</span>
                  </div>

                  <CheckCircle2 size={17} className="detail-check" />
                </div>

                <div className="score-detail-item">
                  <div className="detail-icon">
                    <Database size={17} />
                  </div>

                  <div>
                    <strong>Lead Data</strong>
                    <span>Protected</span>
                  </div>

                  <CheckCircle2 size={17} className="detail-check" />
                </div>
              </div>
            </div>

            {/* Activity */}
            <div className="security-activity">
              <div className="activity-header">
                <div>
                  <span>ACCESS ACTIVITY</span>
                  <h4>Recent workspace activity</h4>
                </div>

                <Activity size={18} />
              </div>

           
            </div>

            {/* Floating cards */}
            <motion.div
              className="floating-security-card floating-card-one"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="floating-icon orange">
                <LockKeyhole size={17} />
              </div>

              <div>
                <strong>Secure</strong>
                <span>Authentication</span>
              </div>
            </motion.div>

            <motion.div
              className="floating-security-card floating-card-two"
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="floating-icon green">
                <CheckCircle2 size={17} />
              </div>

              <div>
                <strong>Access</strong>
                <span>Verified</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Security;