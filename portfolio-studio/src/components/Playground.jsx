import { motion } from 'framer-motion';
import { playgroundItems } from '../data/portfolioData';

function Playground() {
  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section bg-white">
      <div className="max-w-content mx-auto editorial-gutter px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="editorial-text-narrow mb-12 lg:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Playground — Small Explorations & UI Ideas
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A collection of UI explorations, components, motion ideas, and experiments I create to stay sharp.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {playgroundItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Playground;
