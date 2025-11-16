import { motion } from 'framer-motion';
import { valuePillars } from '../data/portfolioData';

function ValuePillars() {
  return (
    <section className="section-padding bg-light noise-texture">
      <div className="container-asymmetric">
        {/* Grid with different widths: 45%, 38%, 42% and staggered translateY */}
        <div className="value-grid">
          {valuePillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="value-card"
            >
              <h3 className="text-h3 text-on-light mb-6">
                {pillar.title}
              </h3>
              <p className="text-body text-muted">
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
