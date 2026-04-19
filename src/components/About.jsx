import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiHeart, FiZap } from 'react-icons/fi';

const About = () => {
  const values = [
    { icon: <FiZap size={28} />, title: "Innovation", desc: "Pushing boundaries with cutting-edge tech." },
    { icon: <FiTarget size={28} />, title: "Impact", desc: "Creating solutions with measurable outcomes." },
    { icon: <FiHeart size={28} />, title: "Integrity", desc: "Transparent, honest, and ethical practices." }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden relative">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About NEXUM</h2>
          <p className="section-subtitle">A collective of tech enthusiasts, educators, and visionaries dedicated to shaping the future of digital experience and learning.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-extrabold text-primary mb-6">Our Story</h3>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Founded with the mission to bridge the growing gap between rapid technological advancement and available skilled talent, NEXUM exists at the intersection of Digital Transformation and EdTech. 
            </p>
            <p className="text-slate-500 text-lg leading-relaxed border-l-4 border-l-primary/30 pl-6 italic">
              We partner with businesses to completely digitize their operations, creating seamless, modern, and highly performant platforms. Simultaneously, we empower the next generation of developers through our immersive training and placement programs.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {values.map((v, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card flex items-start gap-6 p-6 group hover:-translate-x-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-dark/10 text-primary-dark flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {v.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{v.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
