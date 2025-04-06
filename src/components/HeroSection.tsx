'use client';

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden" dir="rtl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="בית קפה ביתא"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center">
          <h1 
            className="mb-6 font-serif text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            בית קפה מוביל בישראל
          </h1>
          
          <p 
            className="mb-8 text-xl text-white drop-shadow-md md:text-2xl"
            style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}
          >
            חווית לקוח מושלמת בכל ביקור
          </p>
          
          <button
            onClick={onCtaClick}
            className="transform rounded-lg bg-primary px-8 py-3 text-lg font-medium text-secondary shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            קבע תור עכשיו
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-secondary to-transparent" />
    </div>
  );
};

export default HeroSection;