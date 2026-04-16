import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      name: "Siva Ga Coffee Bar",
      desc: "A modern coffee bar website with an elegant menu, gallery, and contact section. Built with clean UI for local business branding to enhance customer engagement.",
      tags: ["React", "Vite", "TailwindCSS"],
      link: "https://sivagacoffeebar.in/",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=600",
      isLive: true
    },
    {
      name: "Nexus E-Commerce",
      desc: "Coming soon. A full-stack E-commerce platform with real-time inventory and AI-driven recommendations.",
      tags: ["Next.js", "Node.js", "MongoDB"],
      link: "#",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600",
      isLive: false
    },
    {
      name: "EduTrack LMS",
      desc: "Coming soon. A learning management system tailored for offline and hybrid coaching institutes.",
      tags: ["React", "Firebase", "Stripe"],
      link: "#",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600",
      isLive: false
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A glimpse into the digital experiences we've crafted for our partners and clients.</p>

        <div className="grid grid-3">
          {projects.map((proj, idx) => (
            <div key={idx} className="glass-card" style={styles.card}>
              <div style={styles.imageContainer}>
                <img src={proj.image} alt={proj.name} style={styles.image} />
                {!proj.isLive && <div style={styles.overlay}>Coming Soon</div>}
              </div>
              
              <div style={styles.content}>
                <h3 style={styles.title}>{proj.name}</h3>
                
                <div style={styles.tags}>
                  {proj.tags.map(tag => (
                    <span key={tag} style={styles.tag}>{tag}</span>
                  ))}
                </div>

                <p style={styles.desc}>{proj.desc}</p>
                
                {proj.isLive ? (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={styles.btn}>
                    View Project <FiExternalLink style={{marginLeft: '0.5rem'}} />
                  </a>
                ) : (
                  <button className="btn btn-secondary" disabled style={{...styles.btn, opacity: 0.5, cursor: 'not-allowed'}}>
                    In Progress
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  card: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255,255,255,0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: '1.2rem',
    letterSpacing: '1px',
    color: 'var(--color-primary)',
  },
  content: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontSize: '1.4rem',
    marginBottom: '1rem',
  },
  tags: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    marginBottom: '1rem',
  },
  tag: {
    background: '#f1f5f9',
    border: '1px solid rgba(0,0,0,0.05)',
    padding: '0.2rem 0.6rem',
    borderRadius: '4px',
    fontSize: '0.8rem',
    color: 'var(--color-primary)',
    fontWeight: 500,
  },
  desc: {
    color: 'var(--color-text-muted)',
    fontSize: '0.95rem',
    marginBottom: '2rem',
    flex: 1,
  },
  btn: {
    width: '100%',
  }
};

export default Projects;
