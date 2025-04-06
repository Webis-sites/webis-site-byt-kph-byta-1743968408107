'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden" dir="rtl">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
              אודות בית קפה ביתא
            </h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              אנחנו בית קפה מוביל בתחום המזון עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-gray-700">
              הצוות המקצועי שלנו מכין את המאכלים והמשקאות הטעימים ביותר, תוך שימוש בחומרי גלם איכותיים ומתכונים מסורתיים שעברו מדור לדור.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-secondary font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              קרא עוד
            </motion.button>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="order-1 md:order-2 relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="בית קפה ביתא - פנים המקום"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-secondary bg-opacity-20 rounded-lg"></div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
        >
          {[
            { title: 'איכות', description: 'אנו משתמשים רק בחומרי הגלם הטובים ביותר' },
            { title: 'מסורת', description: 'מתכונים מסורתיים בשילוב חדשנות קולינרית' },
            { title: 'אווירה', description: 'חלל מעוצב ונעים המזמין אתכם להישאר' }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-secondary">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;