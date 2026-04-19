import React from 'react';
import { FiBookOpen, FiCode, FiBriefcase } from 'react-icons/fi';

const EdTech = () => {
  const offerings = [
    {
      title: "Consultation",
      desc: "Expert career and technology guidance to set you on the right path.",
      icon: <FiBookOpen size={28} />,
      badge: "Online | Offline"
    },
    {
      title: "Training Programs",
      desc: "Intensive courses in Web Dev, AI, Data Analytics, and Design.",
      icon: <FiCode size={28} />,
      badge: "Hybrid"
    },
    {
      title: "Placement Support",
      desc: "Resume building, mock interviews, and direct job connection.",
      icon: <FiBriefcase size={28} />,
      badge: "Included"
    }
  ];

  return (
    <section id="edtech" style={{background: 'var(--color-bg-alt)'}}>
      <div className="container">
        <h2 className="section-title" style={{background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text'}}>Learn. Grow. Get Placed.</h2>
        <p className="section-subtitle">Bridging the gap between academia and industry with hands-on training and real-world projects.</p>

        <div className="grid grid-3">
          {offerings.map((item, idx) => (
            <div key={idx} className="glass-card" style={styles.card}>
              <div style={styles.badge}>{item.badge}</div>
              <div style={styles.icon}>{item.icon}</div>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={styles.ctaContainer}>
          <div className="glass-card" style={styles.ctaBox}>
            <div>
              <h3>Upcoming Batch Starts Soon!</h3>
              <p style={{color: 'var(--color-text-muted)'}}>Enroll now to secure your spot in the next Full-Stack Web Development cohort.</p>
            </div>
            <a href="#contact" className="btn btn-primary">Enroll Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  card: {
    position: 'relative',
    textAlign: 'center',
    paddingTop: '3rem',
  },
  badge: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: '#ffffff',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: 'var(--color-secondary)',
    border: '1px solid rgba(0,0,0,0.1)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  icon: {
    display: 'inline-flex',
    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(8, 145, 178, 0.2))',
    padding: '1.25rem',
    borderRadius: '50%',
    color: 'var(--color-secondary)',
    marginBottom: '1.5rem',
  },
  title: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
  },
  desc: {
    color: 'var(--color-text-muted)',
  },
  ctaContainer: {
    marginTop: '4rem',
  },
  ctaBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
    background: 'linear-gradient(90deg, #ffffff, rgba(6, 182, 212, 0.05))',
    borderLeft: '4px solid var(--color-primary)',
  }
};

export default EdTech;
