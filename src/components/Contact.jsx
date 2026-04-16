import React from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" style={{background: 'rgba(19, 119, 185, 0.03)'}}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Ready to transform your business or start your tech journey? Drop us a message.</p>

        <div style={styles.grid}>
          <div className="glass-card" style={styles.formContainer}>
            <form style={styles.form}>
              <div style={styles.inputGroup}>
                <input type="text" placeholder="Your Name" className="glass-input" required />
              </div>
              <div style={styles.row}>
                <input type="email" placeholder="Email Address" className="glass-input" required />
                <input type="tel" placeholder="Phone Number" className="glass-input" />
              </div>
              <div style={styles.inputGroup}>
                <select className="glass-input" style={styles.select}>
                  <option value="" disabled selected>Service Interest</option>
                  <option value="web">Web Development</option>
                  <option value="ui">UI/UX Design</option>
                  <option value="ai">AI / Analytics</option>
                  <option value="edtech">EdTech Training</option>
                </select>
              </div>
              <div style={styles.inputGroup}>
                <textarea placeholder="Your Message" rows="5" className="glass-input" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Send Message</button>
            </form>
          </div>

          <div style={styles.infoContainer}>
            <div className="glass-card" style={styles.infoCard}>
              <div style={styles.infoItem}>
                <FiMail size={24} color="var(--color-primary)" />
                <div>
                  <h4 style={styles.infoTitle}>Email Us</h4>
                  <p style={styles.infoText}>nexumdte@gmail.com</p>
                </div>
              </div>
              <div style={styles.infoItem}>
                <FiPhone size={24} color="var(--color-primary)" />
                <div>
                  <h4 style={styles.infoTitle}>Call Us</h4>
                  <p style={styles.infoText}>+91 98765 43210</p>
                </div>
              </div>
              <div style={styles.infoItem}>
                <FiMapPin size={24} color="var(--color-primary)" />
                <div>
                  <h4 style={styles.infoTitle}>Location</h4>
                  <p style={styles.infoText}>Tech Park, Innovation Hub,<br />Chennai, TN, India.</p>
                </div>
              </div>

              <div style={styles.mapPlaceholder}>
                <p>Google Maps Embed Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '3fr 2fr',
    gap: '2rem',
  },
  formContainer: {
    padding: '3rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  row: {
    display: 'flex',
    gap: '1.5rem',
  },
  select: {
    appearance: 'none',
    backgroundColor: '#ffffff',
    color: 'var(--color-text)',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  infoCard: {
    padding: '3rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  infoTitle: {
    fontSize: '1.1rem',
    marginBottom: '0.25rem',
  },
  infoText: {
    color: 'var(--color-text-muted)',
  },
  mapPlaceholder: {
    marginTop: 'auto',
    width: '100%',
    height: '200px',
    background: 'rgba(0,0,0,0.02)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-text-muted)',
    border: '1px dashed rgba(0,0,0,0.15)',
  }
};

export default Contact;
