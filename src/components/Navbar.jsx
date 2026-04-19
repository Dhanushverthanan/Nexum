import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logoUrl from '../public/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'EdTech', href: '#edtech' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logoUrl} alt="NEXUM Logo" className="h-10 w-10 rounded-full object-cover shadow-sm" />
          <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            NEXUM
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="relative text-slate-700 font-medium hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-flex btn btn-primary py-2 px-6 text-sm">
            Get in Touch
          </a>
          
          <button 
            className="md:hidden text-slate-800 p-2 focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-black/5 shadow-xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full text-center">
              <a
                href={link.href}
                className="block w-full text-lg font-medium text-slate-800 hover:text-primary transition-colors duration-300 px-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="w-full px-6 pt-4 border-t border-black/5 flex justify-center">
             <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary w-full max-w-[200px]">Get in Touch</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
