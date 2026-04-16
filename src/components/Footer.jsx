import React from 'react';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import logoUrl from '../public/logo.png';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>

        <div style={styles.brand}>
          <div style={styles.logoContainer}>
            <img
              src={logoUrl}
              alt="NEXUM Logo"
              style={{ height: '35px', width: '35px', borderRadius: '50%', objectFit: 'cover', marginRight: '10px' }}
            />
            <span style={styles.logoText}>NEXUM</span>
          </div>
          <p style={styles.desc}>
            Transforming businesses through digital excellence and empowering the workforce of tomorrow.
          </p>
          <div style={styles.socials}>
            <a href="#" style={styles.socialIcon}><FiLinkedin size={20} /></a>
            <a href="#" style={styles.socialIcon}><FiTwitter size={20} /></a>
            <a href="#" style={styles.socialIcon}><FiInstagram size={20} /></a>
            <a href="#" style={styles.socialIcon}><FiFacebook size={20} /></a>
          </div>
        </div>

        <div style={styles.linksBlock}>
          <h4 style={styles.linksTitle}>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="#home" style={styles.link}>Home</a></li>
            <li><a href="#about" style={styles.link}>About Us</a></li>
            <li><a href="#services" style={styles.link}>Services</a></li>
            <li><a href="#projects" style={styles.link}>Projects</a></li>
          </ul>
        </div>

        <div style={styles.linksBlock}>
          <h4 style={styles.linksTitle}>Services</h4>
          <ul style={styles.list}>
            <li><a href="#services" style={styles.link}>Web Development</a></li>
            <li><a href="#services" style={styles.link}>UI/UX Design</a></li>
            <li><a href="#services" style={styles.link}>Analytics</a></li>
            <li><a href="#edtech" style={styles.link}>EdTech Training</a></li>
          </ul>
        </div>
      </div>

      <div style={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} NEXUM Digital Transformation & EdTech. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#ffffff',
    paddingTop: '6rem',
    borderTop: '1px solid rgba(0,0,0,0.05)',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    marginBottom: '4rem',
  },
  brand: {
    flex: '2 1 300px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.5rem',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 800,
    background: 'var(--gradient-primary)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  desc: {
    color: 'var(--color-text-muted)',
    marginBottom: '2rem',
    lineHeight: 1.6,
  },
  socials: {
    display: 'flex',
    gap: '1rem',
  },
  socialIcon: {
    color: 'var(--color-text)',
    background: 'rgba(0,0,0,0.05)',
    padding: '0.75rem',
    borderRadius: '50%',
    display: 'flex',
    transition: 'all 0.3s ease',
  },
  linksBlock: {
    flex: '1 1 150px',
  },
  linksTitle: {
    color: 'var(--color-text)',
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  link: {
    color: 'var(--color-text-muted)',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  bottom: {
    borderTop: '1px solid rgba(0,0,0,0.05)',
    padding: '2rem',
    textAlign: 'center',
    color: 'var(--color-text-muted)',
    fontSize: '0.9rem',
    background: '#ffffff',
  }
};

export default Footer;
