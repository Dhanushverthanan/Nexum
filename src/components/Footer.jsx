import React from 'react';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import logoUrl from '../public/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 border-t border-black/5">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src={logoUrl} 
              alt="NEXUM Logo" 
              className="h-10 w-10 rounded-full object-cover" 
            />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              NEXUM
            </span>
          </div>
          <p className="text-slate-500 mb-8 max-w-sm leading-relaxed">
            Transforming businesses through digital excellence and empowering the workforce of tomorrow.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors duration-300">
              <FiLinkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors duration-300">
              <FiTwitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors duration-300">
              <FiInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors duration-300">
              <FiFacebook size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-slate-800 mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            <li><a href="#home" className="text-slate-500 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Home</a></li>
            <li><a href="#about" className="text-slate-500 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">About Us</a></li>
            <li><a href="#services" className="text-slate-500 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Services</a></li>
            <li><a href="#projects" className="text-slate-500 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-slate-800 mb-6">Services</h4>
          <ul className="flex flex-col gap-4">
            <li><a href="#services" className="text-slate-500 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Web Development</a></li>
            <li><a href="#services" className="text-slate-500 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">UI/UX Design</a></li>
            <li><a href="#services" className="text-slate-500 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Analytics</a></li>
            <li><a href="#edtech" className="text-slate-500 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">EdTech Training</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5 py-8 text-center bg-slate-50">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} NEXUM Digital Transformation & EdTech. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
