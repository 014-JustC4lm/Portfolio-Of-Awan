import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/gallery';
import { getCloudinaryUrl } from '../config/cloudinary';
import CloudImage from '../components/CloudImage';

const GalleryLightbox = ({ isOpen, image, onClose }) => {
  if (!isOpen || !image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-10"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <motion.img
          src={getCloudinaryUrl(image.src, 'f_auto,q_auto')}
          alt={image.alt}
          className="max-w-full max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

const VisualGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  const visibleImages = galleryImages ? galleryImages.slice(0, visibleCount) : [];

  return (
    <>
      <section className="py-24 bg-base transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">
            Activity Gallery
          </h2>

          {/* Grid Layout (Mobile: Horizontal Scroll, Desktop: Grid) */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:pb-0 scrollbar-hide">
            {galleryImages && galleryImages.length > 0 ? (
              visibleImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className="snap-center min-w-[75%] sm:min-w-[60%] md:min-w-0 md:w-auto group relative aspect-[4/3] overflow-hidden cursor-pointer bg-gray-200 dark:bg-gray-800 rounded-xl md:rounded-none z-50"
                    onClick={() => openLightbox(image)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <CloudImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="col-span-full text-center text-textSoft">No gallery images available.</p>
            )}
          </div>

          {/* Load More Button */}
          {galleryImages && visibleCount < galleryImages.length && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 bg-text text-base hover:bg-accent transition-colors duration-300 font-medium tracking-wide"
              >
                Load More Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={!!selectedImage}
        image={selectedImage}
        onClose={closeLightbox}
      />
    </>
  );
};

export default VisualGallery;
