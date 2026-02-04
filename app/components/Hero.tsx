import React from 'react';
import { Button } from './ui/Button';
import { useTypewriter } from '../hooks/useTypewriter';
import { StatCounter } from './ui/StatCounter';

export const Hero = () => {
  const headline = useTypewriter("Your Trusted Partner for Professional Document Services", 50);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-secondary text-white overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4 animate-fade-in">
            Premium Document Solutions
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight min-h-[160px] md:min-h-[200px]">
            {headline}
            <span className="animate-pulse text-primary">|</span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-xl">
            Specializing in Passport applications, PAN cards, ITR filing, GST registration, and flight bookings with a 99% success rate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => scrollToSection('services')} size="lg">
              Explore Services
            </Button>
            <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
              Contact Now
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700 mt-8">
            <StatCounter end={4} label="Years Experience" suffix="+" />
            <StatCounter end={10000} label="Satisfied Clients" suffix="+" />
            <StatCounter end={99} label="Success Rate" suffix="%" />
          </div>
        </div>

        {/* Image / Visual */}
        <div className="relative h-[500px] md:h-[700px] w-full flex justify-center items-center">
          <div className="relative w-[350px] md:w-[450px] h-[450px] md:h-[600px] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 group">
             {/* Placeholder for Professional Portrait */}
             <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-gray-500">
                <span className="text-xl">
                  <img src="/images/Musanna.jpeg" alt="Musanna" className="w-full h-full object-cover rounded-2xl" />
                </span>
             </div>
             
             {/* Floating Badges */}
             <div className="absolute top-10 -left-8 bg-white text-secondary px-6 py-3 rounded-lg shadow-xl animate-float-slow z-20">
               <span className="font-bold text-primary">✓</span> Expert Agent
             </div>
             
             <div className="absolute bottom-20 -right-8 bg-white text-secondary px-6 py-3 rounded-lg shadow-xl animate-float-delayed z-20">
               <span className="font-bold text-primary">★</span> Trusted Service
             </div>

             <div className="absolute top-1/2 -right-12 bg-primary text-secondary px-6 py-4 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-300 z-20">
               <span className="font-bold block text-2xl">10+</span>
               <span className="text-xs font-bold uppercase">Years Exp.</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
