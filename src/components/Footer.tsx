import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

interface NavLink {
  name: string;
  href: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks: NavLink[] = [
    { name: 'דף הבית', href: '/' },
    { name: 'תפריט', href: '/menu' },
    { name: 'אודות', href: '/about' },
    { name: 'אירועים', href: '/events' },
    { name: 'גלריה', href: '/gallery' },
    { name: 'צור קשר', href: '/contact' },
  ];

  return (
    <footer className="bg-primary text-secondary-dark rtl w-full py-8 px-4 md:px-8 lg:px-16 font-cafe">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <div className="relative h-16 w-40 mb-4">
              <Image 
                src="/images/logo.png" 
                alt="בית קפה ביתא לוגו" 
                layout="fill"
                objectFit="contain"
                className="object-right"
              />
            </div>
            <p className="text-sm mb-4">
              בית קפה ביתא הוא מקום חם ומזמין ליהנות מקפה איכותי, מאפים טריים ואווירה נעימה. אנו מתמחים בקפה ממקור אתי וחומרים מקומיים.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors duration-300"
                aria-label="פייסבוק"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors duration-300"
                aria-label="אינסטגרם"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors duration-300"
                aria-label="טוויטר"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4 text-secondary">ניווט מהיר</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4 text-secondary">שעות פתיחה</h3>
            <ul className="space-y-2">
              <li>ראשון - חמישי: 7:00 - 22:00</li>
              <li>שישי: 7:00 - 16:00</li>
              <li>שבת: 9:00 - 22:00</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4 text-secondary">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaMapMarkerAlt className="ml-2 text-secondary" />
                <span>רחוב הזית 123, תל אביב</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="ml-2 text-secondary" />
                <span>03-1234567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="ml-2 text-secondary" />
                <span>info@betacafe.co.il</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary/30 mt-8 pt-6 text-center">
          <p className="text-sm">
            © {currentYear} בית קפה ביתא. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;