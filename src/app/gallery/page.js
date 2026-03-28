'use client';

import { useState } from 'react';
import { galleryImages } from '@/data/mockData';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Gallery</h1>
          <p className="text-gray-400 text-lg">Moments from tournament matches and events</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={`gallery-${item.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer relative overflow-hidden rounded-xl border-2 border-gold border-opacity-30 hover:border-opacity-100 transition-all"
            >
              <div className="aspect-square bg-gradient-to-br from-field-dark to-field-green flex items-center justify-center overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-6xl">🏟️</div>
                )}
              </div>
              
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end justify-start p-4">
                <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-gold hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              <div className="bg-gradient-to-br from-field-dark to-field-green rounded-xl border-2 border-gold p-8">
                {selectedImage.image ? (
                  <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto rounded-lg mb-6 object-cover max-h-96" />
                ) : (
                  <div className="text-9xl text-center mb-6">🏟️</div>
                )}
                <h2 className="text-3xl font-bold text-gold mb-2">{selectedImage.title}</h2>
                <p className="text-gray-300 text-lg mb-6">{selectedImage.description}</p>
                
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-full btn-secondary"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Stats */}
        <div className="mt-20 bg-gradient-to-r from-field-dark via-field-green to-field-dark rounded-xl border border-gold border-opacity-30 p-8 text-center">
          <h2 className="text-2xl font-bold text-gold mb-6">Gallery Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-white">{galleryImages.length}</p>
              <p className="text-gray-400">Total Images</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">4</p>
              <p className="text-gray-400">Tournament Categories</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">100+</p>
              <p className="text-gray-400">Total Moments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
