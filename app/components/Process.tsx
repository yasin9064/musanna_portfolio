import React from 'react';
import { Section } from './ui/Section';

const steps = [
  {
    id: 1,
    title: 'Consultation',
    description: 'We discuss your requirements and check eligibility criteria for the desired service.',
    icon: '💬'
  },
  {
    id: 2,
    title: 'Documentation',
    description: 'Our experts assist in collecting and verifying all necessary documents.',
    icon: '📄'
  },
  {
    id: 3,
    title: 'Processing',
    description: 'We file your application and handle all government liaison work.',
    icon: '⚙️'
  },
  {
    id: 4,
    title: 'Delivery',
    description: 'Receive your processed documents securely at your doorstep.',
    icon: '📦'
  }
];

export const Process = () => {
  return (
    <Section id="process" className="bg-secondary text-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-4 text-white">How It Works</h2>
        <p className="text-gray-400">A simple, transparent 4-step process to get your documents ready.</p>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-700 -z-0">
          <div className="h-full bg-primary w-full origin-left animate-[grow_3s_ease-out_forwards]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={step.id} className="group relative">
              {/* Step Circle */}
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-gray-800 rounded-full border-4 border-gray-700 group-hover:border-primary flex items-center justify-center text-2xl md:text-3xl transition-all duration-300 group-hover:scale-110 shadow-xl mb-6 relative">
                 <span className="relative z-10">{step.icon}</span>
                 {/* Pulse effect */}
                 <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
              </div>

              {/* Content */}
              <div className="text-center px-2">
                <div className="text-primary font-bold mb-2 text-sm uppercase tracking-wider">Step {step.id}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
