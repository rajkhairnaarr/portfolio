import { motion } from 'framer-motion';
import { valuePillars } from '../data/portfolioData';

function ValuePillars() {
  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section bg-white">
      <div className="max-w-content mx-auto editorial-gutter px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {valuePillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                {pillar.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuePillars;
