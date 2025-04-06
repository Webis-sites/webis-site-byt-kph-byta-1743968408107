import React from 'react';
import { FaBookReader, FaCalendarAlt, FaUtensils, FaGraduationCap } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-secondary mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const services = [
    {
      icon: <FaBookReader />,
      title: "קבוצות לימוד",
      description: "אנו מציעים מרחב נוח וייעודי לקבוצות לימוד, עם אווירה שקטה ומזמינה המאפשרת ריכוז מקסימלי."
    },
    {
      icon: <FaCalendarAlt />,
      title: "אירועים חינוכיים",
      description: "מרחב מותאם לאירועים חינוכיים, הרצאות וסדנאות, כולל ציוד אודיו-ויזואלי וסידור ישיבה גמיש."
    },
    {
      icon: <FaUtensils />,
      title: "קייטרינג למוסדות חינוך",
      description: "שירותי קייטרינג איכותיים למוסדות חינוך, כולל אפשרויות לתזונה בריאה ומגוונת."
    },
    {
      icon: <FaGraduationCap />,
      title: "הנחות לסטודנטים",
      description: "תכנית הנחות ייחודית לסטודנטים, כולל מנויים חודשיים במחירים מיוחדים וקפה חופשי בשעות מוגדרות."
    }
  ];

  return (
    <section className="py-16 bg-primary text-right" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">השירותים שלנו</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            בבית קפה ביתא אנו מציעים מגוון שירותים המותאמים במיוחד לצרכים החינוכיים והלימודיים שלכם
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}