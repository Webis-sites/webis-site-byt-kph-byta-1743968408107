'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'coffee' | 'food';
}

const ProductsSection: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'קפה שחור קלאסי',
      description: 'קפה שחור חזק ועשיר בטעם, מיוצר מפולים איכותיים',
      price: 12,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
      category: 'coffee',
    },
    {
      id: 2,
      name: 'קפוצ׳ינו',
      description: 'קפוצ׳ינו קרמי עם חלב מוקצף ושכבת קצף עשירה',
      price: 16,
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213',
      category: 'coffee',
    },
    {
      id: 3,
      name: 'לחמניית שקדים',
      description: 'לחמניה טרייה עם שקדים קלויים ומעט סוכר',
      price: 14,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
      category: 'food',
    },
    {
      id: 4,
      name: 'אספרסו כפול',
      description: 'אספרסו כפול חזק במיוחד, מושלם לתחילת היום',
      price: 10,
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04',
      category: 'coffee',
    },
    {
      id: 5,
      name: 'עוגת גבינה',
      description: 'עוגת גבינה אפויה ביתית עם שכבת פירות יער',
      price: 22,
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad',
      category: 'food',
    },
    {
      id: 6,
      name: 'קרואסון שוקולד',
      description: 'קרואסון חמאה פריך במילוי שוקולד בלגי משובח',
      price: 18,
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
      category: 'food',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 bg-white rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">המוצרים שלנו</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            בבית קפה ביתא אנו מקפידים על איכות בלתי מתפשרת. כל המוצרים שלנו מיוצרים מחומרי גלם טריים ואיכותיים, 
            ומוכנים מדי יום בידי הקונדיטורים והבריסטות המיומנים שלנו.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              variants={item}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={`${product.image}?w=600&h=400&fit=crop&crop=entropy&auto=format`}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-primary bg-opacity-10">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-secondary">{product.name}</h3>
                  <span className="text-lg font-bold text-secondary">₪{product.price}</span>
                </div>
                <p className="text-gray-700">{product.description}</p>
                <button 
                  className="mt-4 w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300"
                >
                  הוסף להזמנה
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;