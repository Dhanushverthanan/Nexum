import React from 'react';
import { FiCode, FiLayout, FiPieChart, FiCpu } from 'react-icons/fi';

const ServicesOverview = () => {
  const services = [
    { icon: <FiCode size={24} />, label: "Web Dev" },
    { icon: <FiLayout size={24} />, label: "UI/UX Design" },
    { icon: <FiPieChart size={24} />, label: "Analytics" },
    { icon: <FiCpu size={24} />, label: "AI Solutions" },
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Clients Served" },
    { value: "10k+", label: "Trained Students" },
    { value: "99%", label: "Success Rate" },
  ];

  return (
    <section style={styles.section}>
      <div className="container">
        
        {/* Services Strip */}
        <div className="glass-card" style={styles.strip}>
          {services.map((item, idx) => (
            <div key={idx} style={styles.stripItem}>
              <div style={styles.icon}>{item.icon}</div>
              <span style={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Why Nexum Stats */}
        <div style={styles.statsContainer}>
          {stats.map((stat, idx) => (
            <div key={idx} style={styles.statBox}>
              <h3 style={styles.statValue}>{stat.value}</h3>
              <p style={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 2rem 2rem 2rem',
  },
  strip: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '2rem',
    marginBottom: '6rem',
    padding: '2.5rem',
  },
  stripItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
  },
  icon: {
    color: 'var(--color-primary)',
    background: 'rgba(0, 196, 180, 0.1)',
    padding: '1rem',
    borderRadius: '50%',
    display: 'flex',
  },
  label: {
    fontWeight: 600,
    fontSize: '1.1rem',
  },
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    textAlign: 'center',
  },
  statValue: {
    fontSize: '3rem',
    fontWeight: 800,
    background: 'var(--gradient-primary)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '0.5rem',
  },
  statLabel: {
    color: 'var(--color-text-muted)',
    fontWeight: 500,
  }
};

export default ServicesOverview;
