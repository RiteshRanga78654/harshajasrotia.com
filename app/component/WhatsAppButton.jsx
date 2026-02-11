"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // Use the professional contact number provided in your earlier footer code
  const phoneNumber = "919876700294"; // Replace with your actual WhatsApp number
  const message = "Hello Harsha, I'm interested in discussing a strategic partnership.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      {/* Pulse Effect Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40" />
      
      <FaWhatsapp size={32} className="relative z-10" />
      
      {/* Tooltip on Hover */}
      <span className="absolute right-full mr-4 bg-[#111827] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with Harsha
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;