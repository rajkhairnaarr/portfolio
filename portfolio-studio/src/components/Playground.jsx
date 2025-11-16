import { useState } from 'react';
import { motion } from 'framer-motion';
import { playgroundItems } from '../data/portfolioData';
import Lightbox from './Lightbox';

function Playground() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState('');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (image, alt) => {
    setLightboxImage(image);
    setLightboxAlt(alt);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    // Delay clearing image to allow exit animation
    setTimeout(() => {
      setLightboxImage(null);
      setLightboxAlt('');
    }, 200);
  };

  // Define which items should be tall or wide for bento-box layout
  const getBentoItemClass = (index) => {
    // Make items at index 1, 4, 6 tall (span 2 rows)
    if ([1, 4, 6].includes(index)) return 'bento-item bento-item-tall';
    // Make item at index 2 wide (span 2 columns)
    if (index === 2) return 'bento-item bento-item-wide';
    return 'bento-item';
  };

  return (
    <>
      <section className="section-padding bg-light noise-texture">
        <div className="container-asymmetric">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16 lg:mb-20"
          >
            <h2 className="text-h2 text-on-light mb-6">
              Explorations
            </h2>
            <p className="text-body text-muted">
              UI experiments, motion studies, and interface ideas. A space for exploring concepts
              without constraints—building muscle memory through iteration.
            </p>
          </motion.div>

          {/* Bento-box grid with varied aspect ratios */}
          <div
            className="bento-grid"
            role="region"
            aria-label="Playground gallery"
          >
            {playgroundItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => openLightbox(item.image, item.alt)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={getBentoItemClass(index)}
                aria-label={`View ${item.alt} in lightbox`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        image={lightboxImage}
        alt={lightboxAlt}
      />
    </>
  );
}

export default Playground;
