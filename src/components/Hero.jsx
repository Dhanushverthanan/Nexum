import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="gradient-bg"></div>
      
      {/* Decorative Blur Orbs */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-72 h-72 rounded-full blur-[100px] -z-10 top-[20%] left-[10%] bg-primary"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
        className="absolute w-72 h-72 rounded-full blur-[100px] -z-10 bottom-[20%] right-[10%] bg-primary-dark"
      ></motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="container-custom text-center max-w-4xl z-10 flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="badge mb-6">
          DIGITAL TRANSFORMATION × EDTECH
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
          Transforming Businesses.<br className="hidden md:block"/>
          <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"> Empowering Minds.</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl">
          NEXUM delivers cutting-edge digital transformation services and industry-leading educational programs to bridge the gap between technology and talent.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="chip">Web Dev & AI Apps</span>
          <span className="chip">UI/UX Design</span>
          <span className="chip">Corporate Training</span>
          <span className="chip">Tech Ed</span>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <a href="#services" className="btn btn-primary">Explore Services</a>
          <a href="#projects" className="btn btn-secondary">Our Projects</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
