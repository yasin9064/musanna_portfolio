import React, { useState } from 'react';
import Image from 'next/image';
import { Section } from './ui/Section';

const galleryImages = [
  {
    id: 1,
    src: '/images/Gallery/1.jpeg',
    alt: 'Modern Office Interior',
    category: 'Office'
  },
  {
    id: 2,
    src: '/images/Gallery/2.jpeg',
    alt: 'Satisfied Clients',
    category: 'Clients'
  },
  {
    id: 3,
    src: '/images/Gallery/3.jpeg',
    alt: 'Team Strategy Meeting',
    category: 'Team'
  },
  {
    id: 4,
    src: '/images/Gallery/4.jpeg',
    alt: 'Efficient Processing',
    category: 'Process'
  },
  {
    id: 5,
    src: '/images/Gallery/5.jpeg',  
    alt: 'Client Consultation',
    category: 'Services'
  },
  {
    id: 6,
    src: '/images/Gallery/6.jpeg',
    alt: 'Visa Success',
    category: 'Success'
  },
  {
    id: 7,
    src: '/images/Gallery/7.jpeg',
    alt: 'Modern Office Interior',
    category: 'Office'
  },
  {
    id: 8,
    src: '/images/Gallery/8.jpeg',
    alt: 'Satisfied Clients',
    category: 'Clients'
  },
  {
    id: 9,
    src: '/images/Gallery/9.jpeg',
    alt: 'Team Strategy Meeting',
    category: 'Team'
  },
  {
    id: 10,
    src: '/images/Gallery/10.jpeg',
    alt: 'Efficient Processing',
    category: 'Process'
  },
  {
    id: 11,
    src: '/images/Gallery/11.jpeg',
    alt: 'Client Consultation',
    category: 'Services'
  },
  {
    id: 12,
    src: '/images/Gallery/12.jpeg',
    alt: 'Visa Success',
    category: 'Success'
  }
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <Section id="gallery" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Gallery</h2>
        <p className="text-gray-600">A glimpse into our workspace and successful client stories.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] sm:auto-rows-[200px]">
        {galleryImages.map((image, index) => (
          <div 
            key={image.id}
            className={`relative rounded-xl overflow-hidden shadow-lg group cursor-pointer ${index === 1 || index === 4 ? 'sm:row-span-2' : ''}`}
            onClick={() => setSelectedImage(image.id)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-lg mb-1">{image.category}</h3>
                <p className="text-sm text-gray-200">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          
          <div className="relative w-full max-w-5xl h-[80vh]" onClick={e => e.stopPropagation()}>
             {galleryImages.find(img => img.id === selectedImage) && (
               <Image
                 src={galleryImages.find(img => img.id === selectedImage)!.src}
                 alt={galleryImages.find(img => img.id === selectedImage)!.alt}
                 fill
                 className="object-contain"
               />
             )}
          </div>
        </div>
      )}
    </Section>
  );
};
