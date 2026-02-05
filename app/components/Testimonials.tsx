import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Section } from './ui/Section';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    service: 'Passport Renewal',
    rating: 5,
    review: 'Incredible service! Got my passport renewed within a week. The team was very helpful with the documentation.',
    image: 'https://placehold.co/100x100/ffbe40/333333?text=RS'
  },
  {
    id: 2,
    name: 'Priya Patel',
    service: 'Visa Assistance',
    rating: 5,
    review: 'They made the complex visa process look so easy. Highly recommended for anyone looking for hassle-free services.',
    image: 'https://placehold.co/100x100/ffbe40/333333?text=PP'
  },
  {
    id: 3,
    name: 'Amit Kumar',
    service: 'ITR Filing',
    rating: 5,
    review: 'Very professional approach to tax filing. They explained everything clearly and saved me a lot of tax.',
    image: 'https://placehold.co/100x100/ffbe40/333333?text=AK'
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const rotateCarousel = (nextIndex: number) => {
    setCurrentIndex(nextIndex);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <Section id="testimonials" className="bg-gray-50 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
        <p className="text-gray-600">See what our satisfied clients have to say about our services.</p>
      </div>

      <div 
        className="relative h-[400px] flex items-center justify-center perspective-1000"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative w-full max-w-lg h-64 preserve-3d transition-transform duration-500 ease-out">
          {testimonials.map((testimonial, index) => {
            // Calculate position relative to current index
            let offset = index - currentIndex;
            // Handle wrap-around for visual continuity in 3-item list
            // For 3 items: -2 -> 1, -1 -> -1, 0 -> 0, 1 -> 1, 2 -> -1
            // This is complex for a generic carousel. 
            // Let's use a simpler stack approach for 3 items:
            // Current: z-index 10, scale 1, opacity 1, translate 0
            // Next: z-index 5, scale 0.8, opacity 0.7, translate 50%
            // Prev: z-index 5, scale 0.8, opacity 0.7, translate -50%
            
            // Normalize offset to be within -1, 0, 1 loop for 3 items
            if (offset === -2) offset = 1;
            if (offset === 2) offset = -1;
            
            // Determine styles based on offset
            let transform = 'translateX(0) scale(0.8) translateZ(-100px)';
            let zIndex = 0;
            let opacity = 0;

            if (offset === 0) {
              transform = 'translateX(0) scale(1) translateZ(0)';
              zIndex = 10;
              opacity = 1;
            } else if (offset === 1 || (currentIndex === testimonials.length - 1 && index === 0)) {
               // Next item (right)
               transform = 'translateX(50%) scale(0.8) rotateY(-15deg)';
               zIndex = 5;
               opacity = 0.6;
            } else if (offset === -1 || (currentIndex === 0 && index === testimonials.length - 1)) {
               // Prev item (left)
               transform = 'translateX(-50%) scale(0.8) rotateY(15deg)';
               zIndex = 5;
               opacity = 0.6;
            }

            return (
              <div
                key={testimonial.id}
                className="absolute top-0 left-0 w-full h-full bg-white rounded-xl shadow-2xl p-8 transition-all duration-500 flex flex-col items-center text-center border border-gray-100"
                style={{
                  transform,
                  zIndex,
                  opacity: opacity === 0 ? 0 : opacity, // Hide others if any
                  pointerEvents: offset === 0 ? 'auto' : 'none'
                }}
              >
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full border-4 border-primary mb-4 object-cover"
                  unoptimized
                />
                <div className="flex gap-1 mb-2 text-primary">
                  {[...Array(testimonial.rating)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.review}"</p>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <span className="text-sm text-gray-400">{testimonial.service}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-8">
        <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-secondary hover:bg-primary transition-colors">
          ←
        </button>
        <div className="flex gap-2 items-center">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-secondary hover:bg-primary transition-colors">
          →
        </button>
      </div>
    </Section>
  );
};
