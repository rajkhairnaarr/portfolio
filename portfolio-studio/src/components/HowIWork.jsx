import { motion } from 'framer-motion';
import { workProcess } from '../data/portfolioData';

function HowIWork() {
  return (
    <section className="section-padding bg-dark noise-texture">
      <div className="container-asymmetric">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-h2 text-on-dark mb-16 lg:mb-20"
        >
          Process
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {workProcess.map((process, index) => (
            <motion.div
              key={process.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step Number - minimal, high contrast */}
              <div className="text-small uppercase tracking-wider text-accent mb-4 font-bold">
                {process.step}
              </div>

              {/* Process Details */}
              <h3 className="text-h3 text-on-dark mb-4">
                {process.title}
              </h3>
              <p className="text-body text-muted">
                {process.description}
              </p>

              {/* Arrow connector (except last item) */}
              {index < workProcess.length - 1 && (
                <div className="hidden lg:block absolute top-0 -right-8 text-accent text-xl opacity-30">
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
