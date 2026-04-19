import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background-alt overflow-hidden">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Ready to transform your business or start your tech journey? Drop us a message.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card lg:col-span-3 p-8 lg:p-12 border-l-4 border-l-primary"
          >
            <form className="flex flex-col gap-6">
              <input type="text" placeholder="Your Name" className="glass-input" required />
              
              <div className="flex flex-col md:flex-row gap-6">
                <input type="email" placeholder="Email Address" className="glass-input" required />
                <input type="tel" placeholder="Phone Number" className="glass-input" />
              </div>
              
              <select className="glass-input appearance-none bg-white font-medium" defaultValue="" required>
                <option value="" disabled>Service Interest</option>
                <option value="web">Web Development</option>
                <option value="ui">UI/UX Design</option>
                <option value="ai">AI / Analytics</option>
                <option value="edtech">EdTech Training</option>
              </select>
              
              <textarea placeholder="Your Message" rows="5" className="glass-input resize-none" required></textarea>
              
              <button type="submit" className="btn btn-primary w-full shadow-lg">Send Message</button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full lg:col-span-2"
          >
            <div className="glass-card flex-1 flex flex-col gap-10 p-8 lg:p-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Email Us</h4>
                  <p className="text-slate-500">nexumdte@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Call Us</h4>
                  <p className="text-slate-500">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Location</h4>
                  <p className="text-slate-500">Tech Park, Innovation Hub,<br />Chennai, TN, India.</p>
                </div>
              </div>

              <div className="mt-auto w-full h-40 bg-slate-50 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400 font-medium">
                Google Maps Embed Area
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
