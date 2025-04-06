'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface PortfolioItem {
  id: number;
  imageUrl: string;
  caption: string;
  category: 'events' | 'education' | 'atmosphere';
}

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b',
      caption: 'ערב שירה ויצירה - מפגש קהילתי',
      category: 'events'
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
      caption: 'סדנת לימוד - קבוצות דיון ולמידה',
      category: 'education'
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
      caption: 'הרצאות העשרה - מפגש חודשי',
      category: 'education'
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56',
      caption: 'פינת עבודה שקטה - לימודים וריכוז',
      category: 'atmosphere'
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1517231925375-bf2cb42917a5',
      caption: 'מפגש יוצרים - שיתופי פעולה',
      category: 'events'
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      caption: 'קבוצת למידה - סטודנטים ומרצים',
      category: 'education'
    },
    {
      id: 7,
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      caption: 'ערב ג׳אז - אווירה מיוחדת',
      category: 'events'
    },
    {
      id: 8,
      imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb',
      caption: 'פינות ישיבה נוחות - אווירה ביתית',
      category: 'atmosphere'
    }
  ];

  const filteredItems = activeFilter
    ? portfolioItems.filter(item => item.category === activeFilter)
    : portfolioItems;

  return (
    <section className="py-16 bg-primary-light text-right" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-serif font-bold text-secondary mb-4">הגלריה שלנו</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            הצצה לאירועים, מפגשים והווי בית קפה ביתא - המקום שבו קפה, למידה וקהילה נפגשים
          </p>
        </div>

        <div className="flex justify-center mb-8 flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              activeFilter === null
                ? 'bg-secondary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            הכל
          </button>
          <button
            onClick={() => setActiveFilter('events')}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              activeFilter === 'events'
                ? 'bg-secondary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            אירועים
          </button>
          <button
            onClick={() => setActiveFilter('education')}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              activeFilter === 'education'
                ? 'bg-secondary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            למידה
          </button>
          <button
            onClick={() => setActiveFilter('atmosphere')}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              activeFilter === 'atmosphere'
                ? 'bg-secondary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            אווירה
          </button>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden group">
                <Image
                  src={item.imageUrl}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="p-4 w-full bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-lg font-medium">{item.caption}</p>
                    <span className="inline-block mt-2 text-primary-light text-sm px-2 py-1 bg-secondary rounded-full">
                      {item.category === 'events' && 'אירועים'}
                      {item.category === 'education' && 'למידה'}
                      {item.category === 'atmosphere' && 'אווירה'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;