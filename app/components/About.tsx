import React from 'react';
import Image from 'next/image';
import { Section } from './ui/Section';
import { StatCounter } from './ui/StatCounter';

const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const About = () => {
  return (
    <Section id="about" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Years of Excellence in Document Services</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Founded in 2022, we have dedicated ourselves to simplifying complex government and travel documentation for thousands of clients. Our mission is to provide transparent, fast, and reliable services that save you time and effort.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <FeatureCard 
              title="Expert Guidance" 
              description="Our team of certified agents ensures your documents are error-free."
              icon={<span className="text-3xl">🎯</span>} 
            />
            <FeatureCard 
              title="Fast Processing" 
              description="Expedited channels to get your documents delivered in record time."
              icon={<span className="text-3xl">⚡</span>} 
            />
            <FeatureCard 
              title="Secure Handling" 
              description="Bank-grade security protocols to protect your personal data."
              icon={<span className="text-3xl">🔒</span>} 
            />
            <FeatureCard 
              title="24/7 Support" 
              description="Round-the-clock assistance for all your queries and updates."
              icon={<span className="text-3xl">🎧</span>} 
            />
          </div>

          <div className="flex gap-8 border-t pt-8">
            <StatCounter end={7} label="Years in Business" suffix="+" />
            <StatCounter end={4000} label="Docs Processed" suffix="+" />
          </div>
        </div>

        {/* Right: Parallax Image */}
        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
            <Image
              src="/images/About.jpeg"
              alt="Our Professional Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
          
        </div>
      </div>
    </Section>
  );
};
