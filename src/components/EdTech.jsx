import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCode, FiBriefcase } from 'react-icons/fi';

const EdTech = () => {
  const offerings = [
    {
      title: "Consultation",
      desc: "Expert career and technology guidance to set you on the right path.",
      icon: <FiBookOpen size={32} />,
      badge: "Online | Offline"
    },
    {
      title: "Training Programs",
      desc: "Intensive courses in Web Dev, AI, Data Analytics, and Design.",
      icon: <FiCode size={32} />,
      badge: "Hybrid"
    },
    {
      title: "Placement Support",
      desc: "Resume building, mock interviews, and direct job connection.",
      icon: <FiBriefcase size={32} />,
      badge: "Included"
    }
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="edtech" className="py-24 px-6 bg-background-alt relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <h2 className="section-title">Learn. Grow. Get Placed.</h2>
          <p className="section-subtitle">Bridging the gap between academia and industry with hands-on training and real-world projects.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.15 } }
              }}
              className="glass-card flex flex-col items-center text-center relative pt-12 group"
            >
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-primary-dark border border-black/5 shadow-sm">
                {item.badge}
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary-dark/20 text-primary-dark flex items-center justify-center rounded-full mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <div className="glass-card flex flex-col md:flex-row justify-between items-center gap-8 bg-gradient-to-r from-white to-primary/5 border-l-4 border-l-primary hover:-translate-y-1">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Upcoming Batch Starts Soon!</h3>
              <p className="text-slate-500">Enroll now to secure your spot in the next Full-Stack Web Development cohort.</p>
            </div>
            <a href="#contact" className="btn btn-primary whitespace-nowrap">Enroll Now</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EdTech;
