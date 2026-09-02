import React from "react";
import "./Features.css";

interface Feature {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

const features: Feature[] = [
  {
    icon: "◉",
    title: "Follow Every Client",
    description:
      "Follow each client from their first enquiry through quotation, confirmation, or cancellation.",
    tag: "CLIENT FOLLOW-UP",
  },
  {
    icon: "⇧",
    title: "Upload Leads Easily",
    description:
      "Upload your Excel file and automatically extract client information into your lead database.",
    tag: "EXCEL IMPORT",
  },
  {
    icon: "⌂",
    title: "Insightful Dashboard",
    description:
      "See your complete lead activity at a glance with important numbers, statuses, and real-time insights.",
    tag: "DASHBOARD",
  },
  {
    icon: "✓",
    title: "Complete Lead Records",
    description:
      "Keep client details, follow-up history, status changes, and important information organized in one place.",
    tag: "LEAD RECORDS",
  },
];

const Features: React.FC = () => {
  return (
    <section className="features-section" id="features">
      <div className="container">
        {/* Header */}
        <div className="features-header">

          <div className="features-eyebrow">EVERYTHING IN ONE PLACE</div>

          <h2>
            Make every lead
            <span> easier to follow.</span>
          </h2>

          <p>
            BMO Leads helps your team organize client enquiries, follow every
            lead, update statuses, and keep complete records.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="features-list">
          {features.map((feature, index) => (
            <div
              className="feature-card"
              key={feature.title}
              style={
                {
                  "--delay": `${index * 0.08}s`,
                } as React.CSSProperties
              }
            >
              {/* Icon */}
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{feature.icon}</div>
              </div>

              {/* Content */}
              <div className="feature-card-content">
                <span className="feature-tag">{feature.tag}</span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>

              {/* Right Visual */}
              <div className="feature-visual">
                {index === 0 && (
                  <div className="status-flow">
                    <span>Enquiry</span>
                    <b>→</b>
                    <span>Quotation</span>
                  </div>
                )}

                {index === 1 && (
                  <div className="excel-box">
                    <span>XL</span>

                    <div>
                      <b>1,240</b>
                      <small> leads imported</small>
                    </div>
                  </div>
                )}

                {index === 2 && (
                  <div className="status-pill">
                    <i></i>
                    Quotation
                  </div>
                )}

                {index === 3 && (
                  <div className="report-bars">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
