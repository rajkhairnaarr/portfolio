import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import { aboutContent } from '../data/portfolioData';

function About() {
  return (
    <div className="pt-24">
      {/* About Section */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section bg-white">
        <div className="max-w-content mx-auto editorial-gutter px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4"
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={aboutContent.image}
                  alt="Raj Khairnar portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
                {aboutContent.title}
              </h1>
              <div className="editorial-text-narrow space-y-6">
                {aboutContent.body.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}

export default About;
