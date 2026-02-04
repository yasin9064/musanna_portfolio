import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Process', id: 'process' },
    { label: 'Testimonials', id: 'testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className={`font-playfair text-2xl font-bold ${isScrolled ? 'text-secondary' : 'text-white'}`}>
          Musanna Doc <span className="text-primary">Services</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button 
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}
            >
              {link.label}
            </button>
          ))}
          <Button size="sm" onClick={() => scrollTo('contact')}>Get Quote</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col gap-4 border-t">
            {navLinks.map(link => (
              <button 
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-gray-800 font-medium py-2 border-b border-gray-100"
              >
                {link.label}
              </button>
            ))}
            <Button className="w-full mt-2" onClick={() => scrollTo('contact')}>Get Quote</Button>
          </div>
        )}
      </div>
    </nav>
  );
};
