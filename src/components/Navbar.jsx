import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logoUrl from '../public/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'EdTech', href: '#edtech' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'glass' : ''}`} style={styles.header}>
      <div className="container" style={styles.container}>
        <div style={styles.logoContainer}>
          <img
            src={logoUrl}
            alt="NEXUM Logo"
            style={{ height: '40px', width: '40px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span style={styles.logoText}>NEXUM</span>
        </div>

        <nav style={styles.navDesktop}>
          <ul style={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={styles.navLink}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary" style={styles.ctaBtn}>Get in Touch</a>

        <button style={styles.mobileToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX size={24} color="var(--color-text)" /> : <FiMenu size={24} color="var(--color-text)" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={styles.mobileMenu} className="glass">
          <ul style={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.name} style={styles.mobileNavItem}>
                <a
                  href={link.href}
                  style={styles.mobileNavLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    padding: '1rem 2rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logoSvg: {
    display: 'block',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 800,
    letterSpacing: '1px',
    background: 'var(--gradient-primary)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  navDesktop: {
    display: 'flex',
    '@media (maxWidth: 768px)': {
      display: 'none',
    }
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
  },
  navLink: {
    color: 'var(--color-text)',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.3s ease',
  },
  ctaBtn: {
    padding: '0.5rem 1.5rem',
    '@media (maxWidth: 768px)': {
      display: 'none',
    }
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    '@media (maxWidth: 768px)': {
      display: 'block',
    }
  },
  mobileMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    padding: '2rem',
    borderTop: '1px solid rgba(0,0,0,0.05)',
    background: 'rgba(255,255,255,0.95)',
  },
  mobileNavList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems: 'center',
  },
  mobileNavItem: {
    width: '100%',
    textAlign: 'center',
  },
  mobileNavLink: {
    color: 'var(--color-text)',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 500,
    display: 'block',
    width: '100%',
  }
};

export default Navbar;
