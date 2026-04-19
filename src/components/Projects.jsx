import React from 'react';
import { motion } from 'framer-motion';
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
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A glimpse into the digital experiences we've crafted for our partners and clients.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card flex flex-col overflow-hidden p-0 group"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img 
                  src={proj.image} 
                  alt={proj.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                />
                {!proj.isLive && (
                  <div className="absolute inset-0 bg-white/90 flex items-center justify-center font-bold text-xl tracking-wider text-primary">
                    Coming Soon
                  </div>
                )}
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{proj.name}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map(tag => (
                    <span key={tag} className="bg-slate-100 border border-black/5 px-3 py-1 rounded-md text-xs font-semibold text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-slate-500 mb-8 flex-1">{proj.desc}</p>
                
                {proj.isLive ? (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-full group/btn">
                    View Project 
                    <FiExternalLink className="ml-2 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </a>
                ) : (
                  <button className="btn btn-secondary w-full opacity-50 cursor-not-allowed">
                    In Progress
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
