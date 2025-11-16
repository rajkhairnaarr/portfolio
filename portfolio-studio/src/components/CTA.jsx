import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function CTA() {
  return (
    <section className="bg-cta-gradient py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Let's Create Something Amazing Together
        </h2>

        <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out.
        </p>

        <Link
          to="/contact"
          className="inline-block px-10 py-5 bg-white text-hero-top font-bold text-lg rounded-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
        >
          Start a Conversation
        </Link>
      </motion.div>
    </section>
  );
}

export default CTA;
