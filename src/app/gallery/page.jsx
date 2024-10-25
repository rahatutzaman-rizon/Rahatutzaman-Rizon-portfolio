"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Gallery = () => {
  const [expandedId, setExpandedId] = useState(null);

  const images = [
    { id: 1, url: 'https://i.ibb.co/xGRQwHW/IMG-20200306-214803-494.jpg', title: 'Sunset Silhouette' },
    { id: 2, url: 'https://i.ibb.co/x5wM7xb/IMG-20210118-133418-421.jpg', title: 'Urban Exploration' },
    { id: 3, url: 'https://i.ibb.co/BVdV3wf/IMG-20210118-134305-726.jpg', title: 'Natures Patterns' },
    { id: 4, url: 'https://i.ibb.co/VqvQcD6/IMG-20210130-005030-314.jpg', title: 'City Lights' },
    { id: 5, url: 'https://i.ibb.co/W3NpXnV/IMG-20210130-010014-060.jpg', title: 'Reflections' },
    { id: 6, url: 'https://i.ibb.co/fxGcggT/IMG-20210310-205945-388.jpg', title: 'Abstract Architecture' },
    { id: 7, url: 'https://i.ibb.co/M7PR1QN/IMG-20210331-222352-817.jpg', title: 'Street Scene' },
    { id: 8, url: 'https://i.ibb.co/NV2CkJF/IMG-20210427-045042-856.jpg', title: 'Natural Wonder' },
  ];

  const ImageCard = ({ image }) => {
    const isExpanded = expandedId === image.id;

    return (
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out ${
          isExpanded ? 'col-span-2 row-span-2' : ''
        }`}
        onClick={() => setExpandedId(isExpanded ? null : image.id)}
      >
        <motion.div
          layout
          className="relative w-full h-full"
        >
          <motion.img
            layout
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
          />
          <motion.div
            layout
            className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
          >
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
              <h3 className="text-white text-xl font-semibold">{image.title}</h3>
              {/* {isExpanded ? (
                <FiMinimize2 className="text-white text-2xl" />
              ) : (
                <FiMaximize2 className="text-white text-2xl" />
              )} */}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            My Photography Portfolio
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my collection of captivating moments frozen in time. Each image tells a unique story, 
            showcasing my passion for photography and my perspective on the world around us.
          </p>
        </section>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      
    </div>
  );
};

export default Gallery;