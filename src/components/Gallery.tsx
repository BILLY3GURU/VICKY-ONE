import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES } from '../constants';
import { cn } from '../lib/utils';
import { X } from 'lucide-react';

const categories = ['All', 'Portrait', 'Wedding', 'Fashion', 'Event'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  const filteredImages = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-24 left-1/2 -translate-x-1/2 text-[15vw] font-serif font-bold text-outline pointer-events-none select-none uppercase tracking-widest opacity-50">
        Portfolio
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">The Portfolio</h2>
          <div className="w-20 h-[1px] bg-red-600 mx-auto mb-8" />
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'text-sm uppercase tracking-widest transition-all duration-300 pb-1 border-b-2',
                  activeCategory === cat ? 'text-red-600 border-red-600' : 'text-zinc-500 border-transparent hover:text-zinc-300'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, i) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={cn(
                  "relative group overflow-hidden rounded-2xl cursor-pointer aspect-[4/5]",
                  i === 1 || i === 4 ? "md:col-span-2 md:aspect-[16/9]" : ""
                )}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8">
                  <div className="overflow-hidden">
                    <span className="text-red-600 text-[10px] uppercase tracking-[0.4em] font-bold mb-2 block translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {image.category}
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="text-2xl font-serif italic text-white mb-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-200">
                      {image.title}
                    </h3>
                  </div>
                  <div className="w-12 h-[1px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left delay-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 text-white hover:text-red-600 transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-10 h-10" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm"
                referrerPolicy="no-referrer"
              />
              <div className="mt-8 text-center">
                <span className="text-red-600 text-xs uppercase tracking-[0.4em] mb-2 block">{selectedImage.category}</span>
                <h3 className="text-3xl md:text-5xl font-serif italic text-white">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
