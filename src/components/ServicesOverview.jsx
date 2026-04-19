import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiPieChart, FiCpu } from 'react-icons/fi';

const ServicesOverview = () => {
  const services = [
    { icon: <FiCode size={28} className="text-primary" />, label: "Web Dev" },
    { icon: <FiLayout size={28} className="text-primary" />, label: "UI/UX Design" },
    { icon: <FiPieChart size={28} className="text-primary" />, label: "Analytics" },
    { icon: <FiCpu size={28} className="text-primary" />, label: "AI Solutions" },
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Clients Served" },
    { value: "10k+", label: "Trained Students" },
    { value: "99%", label: "Success Rate" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-24 px-6 relative max-w-7xl mx-auto w-full">
      {/* Services Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass-card flex flex-wrap justify-around items-center gap-8 mb-24 py-10"
      >
        {services.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4 group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              {item.icon}
            </div>
            <span className="font-semibold text-lg text-slate-800 transition-colors duration-300 group-hover:text-primary-dark">
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Why Nexum Stats */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center"
      >
        {stats.map((stat, idx) => (
          <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-2">
              {stat.value}
            </h3>
            <p className="text-slate-500 font-medium text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesOverview;
