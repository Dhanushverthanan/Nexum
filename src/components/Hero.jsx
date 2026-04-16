import React from 'react';

const Hero = () => {
  return (
    <section id="home" style={styles.heroSection}>
      <div className="gradient-bg"></div>
      
      {/* Decorative Blur Orbs */}
      <div style={{...styles.orb, top: '20%', left: '10%', background: 'var(--color-primary)'}}></div>
      <div style={{...styles.orb, bottom: '20%', right: '10%', background: 'var(--color-secondary)'}}></div>

      <div className="container animate-fade-in" style={styles.content}>
        <h1 style={styles.title}>
          Transforming Businesses.<br/>
          <span style={styles.highlight}>Empowering Minds.</span>
        </h1>
        <p style={styles.subtitle}>
          NEXUM delivers cutting-edge digital transformation services and industry-leading educational programs to bridge the gap between technology and talent.
        </p>
        <div style={styles.ctaGroup}>
          <a href="#services" className="btn btn-primary">Explore Services</a>
          <a href="#projects" className="btn btn-secondary">Our Projects</a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '80px',
    overflow: 'hidden',
    position: 'relative',
  },
  orb: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    filter: 'blur(100px)',
    opacity: 0.3,
    zIndex: -1,
    animation: 'pulse 4s infinite alternate',
  },
  content: {
    textAlign: 'center',
    maxWidth: '800px',
    zIndex: 1,
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: '1.5rem',
  },
  highlight: {
    background: 'var(--gradient-primary)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: 'var(--color-text-muted)',
    marginBottom: '2.5rem',
    maxWidth: '600px',
    margin: '0 auto 2.5rem',
  },
  ctaGroup: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }
};

export default Hero;
