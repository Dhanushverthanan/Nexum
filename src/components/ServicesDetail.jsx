import React from 'react';
import { FiMonitor, FiPenTool, FiBarChart2, FiCpu, FiArrowRight } from 'react-icons/fi';

const ServicesDetail = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Custom websites, landing pages, and scalable full-stack applications with modern architecture.",
      icon: <FiMonitor size={32} />
    },
    {
      title: "UI/UX Designing",
      desc: "Brand identity, intuitive wireframing, and premium product design that wows users.",
      icon: <FiPenTool size={32} />
    },
    {
      title: "Analytics Solutions",
      desc: "Data-rich dashboards, business intelligence, and reporting to drive informed decisions.",
      icon: <FiBarChart2 size={32} />
    },
    {
      title: "AI-Based Solutions",
      desc: "Smart chatbots, process automation, and machine learning model integrations.",
      icon: <FiCpu size={32} />
    }
  ];

  const steps = ["Discovery", "Design", "Build", "Deploy", "Support"];

  return (
    <section id="services">
      <div className="container">
        <h2 className="section-title">End-to-End Digital Transformation</h2>
        <p className="section-subtitle">We empower your business with scalable, futuristic digital solutions tailored to your unique challenges.</p>

        <div className="grid grid-2" style={styles.cardsGrid}>
          {services.map((service, idx) => (
            <div key={idx} className="glass-card" style={styles.card}>
              <div style={styles.iconWrapper}>{service.icon}</div>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardDesc}>{service.desc}</p>
              <a href="#contact" style={styles.link}>
                Learn More <FiArrowRight />
              </a>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div style={styles.timeline}>
          <h3 style={{textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem'}}>Our Process</h3>
          <div style={styles.timelineTrack}>
            {steps.map((step, idx) => (
              <div key={idx} style={styles.step}>
                <div style={styles.stepDot}></div>
                <p style={styles.stepText}>{step}</p>
                {idx < steps.length - 1 && <div style={styles.stepLine}></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  cardsGrid: {
    marginBottom: '5rem',
  },
  card: {
    position: 'relative',
    overflow: 'hidden',
  },
  iconWrapper: {
    color: 'var(--color-secondary)',
    marginBottom: '1.5rem',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  cardDesc: {
    color: 'var(--color-text-muted)',
    marginBottom: '2rem',
  },
  link: {
    color: 'var(--color-primary)',
    textDecoration: 'none',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'gap 0.3s ease',
  },
  timeline: {
    background: '#ffffff',
    padding: '3rem',
    borderRadius: '16px',
    border: '1px solid rgba(0,0,0,0.05)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  },
  timelineTrack: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '1rem',
    position: 'relative',
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
    minWidth: '100px',
  },
  stepDot: {
    width: '20px',
    height: '20px',
    background: 'var(--gradient-primary)',
    borderRadius: '50%',
    marginBottom: '1rem',
    zIndex: 2,
  },
  stepLine: {
    position: 'absolute',
    top: '9px',
    left: 'calc(50% + 10px)',
    width: 'calc(100% - 20px)',
    height: '2px',
    background: 'rgba(0,0,0,0.1)',
    zIndex: 1,
  },
  stepText: {
    fontWeight: 600,
  }
};

export default ServicesDetail;
