import { motion } from 'framer-motion';
import { workProcess } from '../data/portfolioData';

function HowIWork() {
  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section bg-gray-50">
      <div className="max-w-content mx-auto editorial-gutter px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-12 lg:mb-16"
        >
          How I Work
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {workProcess.map((process, index) => (
            <motion.div
              key={process.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="text-6xl font-heading font-bold text-accent opacity-20 mb-4">
                {process.step}
              </div>

              {/* Process Details */}
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                {process.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {process.description}
              </p>

              {/* Arrow connector (except last item) */}
              {index < workProcess.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-6 text-gray-300 text-2xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowIWork;
