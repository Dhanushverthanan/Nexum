import React from 'react';
import { FiTarget, FiHeart, FiZap } from 'react-icons/fi';

const About = () => {
  const values = [
    { icon: <FiZap size={24} />, title: "Innovation", desc: "Pushing boundaries with cutting-edge tech." },
    { icon: <FiTarget size={24} />, title: "Impact", desc: "Creating solutions with measurable outcomes." },
    { icon: <FiHeart size={24} />, title: "Integrity", desc: "Transparent, honest, and ethical practices." }
  ];

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About NEXUM</h2>
        <p className="section-subtitle">A collective of tech enthusiasts, educators, and visionaries dedicated to shaping the future of digital experience and learning.</p>

        <div style={styles.content}>
          <div style={styles.textContent}>
            <h3 style={styles.heading}>Our Story</h3>
            <p style={styles.paragraph}>
              Founded with the mission to bridge the growing gap between rapid technological advancement and available skilled talent, NEXUM exists at the intersection of Digital Transformation and EdTech. 
            </p>
            <p style={styles.paragraph}>
              We partner with businesses to completely digitize their operations, creating seamless, modern, and highly performant platforms. Simultaneously, we empower the next generation of developers through our immersive training and placement programs.
            </p>
          </div>

          <div style={styles.valuesGrid}>
            {values.map((v, idx) => (
              <div key={idx} className="glass-card" style={styles.valueCard}>
                <div style={styles.icon}>{v.icon}</div>
                <h4 style={styles.valueTitle}>{v.title}</h4>
                <p style={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
    }
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: 'var(--color-primary)',
  },
  paragraph: {
    color: 'var(--color-text-muted)',
    marginBottom: '1.5rem',
    fontSize: '1.1rem',
    lineHeight: 1.8,
  },
  valuesGrid: {
    display: 'grid',
    gap: '1.5rem',
  },
  valueCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.5rem',
    padding: '1.5rem',
  },
  icon: {
    color: 'var(--color-secondary)',
    background: 'rgba(0, 114, 255, 0.1)',
    padding: '1rem',
    borderRadius: '12px',
  },
  valueTitle: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  },
  valueDesc: {
    color: 'var(--color-text-muted)',
    fontSize: '0.9rem',
  }
};

export default About;
