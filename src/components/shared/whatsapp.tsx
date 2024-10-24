"use client"

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = ({ phoneNumber = "01771276400", message = "Hello!" }) => {
  const handleClick = () => {
    // Format phone number to remove any special characters
    const formattedPhone = phoneNumber.replace(/[^\d]/g, '');
    // Create WhatsApp URL with phone and message
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28}  />
      <h3>Whatsapp</h3>
    </button>
  );
};

export default WhatsAppButton;