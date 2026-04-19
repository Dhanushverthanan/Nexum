import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiPenTool, FiBarChart2, FiCpu, FiArrowRight } from 'react-icons/fi';

const ServicesDetail = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Custom websites, landing pages, and scalable full-stack applications with modern architecture.",
      icon: <FiMonitor size={36} />
    },
    {
      title: "UI/UX Designing",
      desc: "Brand identity, intuitive wireframing, and premium product design that wows users.",
      icon: <FiPenTool size={36} />
    },
    {
      title: "Analytics Solutions",
      desc: "Data-rich dashboards, business intelligence, and reporting to drive informed decisions.",
      icon: <FiBarChart2 size={36} />
    },
    {
      title: "AI-Based Solutions",
      desc: "Smart chatbots, process automation, and machine learning model integrations.",
      icon: <FiCpu size={36} />
    }
  ];

  const steps = ["Discovery", "Design", "Build", "Deploy", "Support"];

  return (
    <section id="services" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">End-to-End Digital Transformation</h2>
          <p className="section-subtitle">We empower your business with scalable, futuristic digital solutions tailored to your unique challenges.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card flex flex-col p-8 group border-t-4 border-transparent hover:border-t-primary"
            >
              <div className="text-primary bg-primary/10 w-20 h-20 flex items-center justify-center rounded-2xl mb-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-500 mb-8 flex-1 leading-relaxed text-lg">{service.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-primary-dark transition-colors w-fit group/link">
                Learn More 
                <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-2" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white p-12 rounded-[24px] border border-black/5 shadow-glass relative"
        >
          <h3 className="text-center text-2xl font-extrabold text-slate-800 mb-12">Our Process</h3>
          
          <div className="relative flex justify-between items-start flex-col md:flex-row gap-10 md:gap-0">
            {/* Background Line for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-slate-200 z-0"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1 relative z-10 w-full md:w-auto">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-[4px] border-primary/20 shadow-md mb-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-xl">
                  {idx + 1}
                </div>
                <p className="font-bold text-slate-700 text-lg">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDetail;
