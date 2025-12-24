import React from 'react';
import { assets } from '../assets/assets';

const WhatsAppContact = () => {
  const whatsappNumber = '919888919994'; // Replace with your actual WhatsApp number
  const whatsappMessage = 'Hello! I am interested in your interior design services.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappLink}
      rel="noopener noreferrer"
      aria-label="Contact via WhatsApp"
      title="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-40"
    >
      <div className="hover:scale-105 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110">
        <img
          src={assets.whatsapp_icon}
          alt="WhatsApp"
          className="w-full"
        />
      </div>
    </a>

  );
};

export default WhatsAppContact;
