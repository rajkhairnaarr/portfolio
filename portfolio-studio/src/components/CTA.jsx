import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

function CTA() {
  return (
    <section className="bg-cta-gradient py-24 md:py-32 lg:py-40 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-cta-text mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Let's Create Something Amazing Together
        </h2>

        <p className="text-xl text-white text-opacity-90 mb-10 leading-relaxed">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-white text-hero-top hover:bg-gray-100 font-bold text-lg px-12 py-6"
        >
          <Link to="/contact">Start a Conversation</Link>
        </Button>
      </motion.div>
    </section>
  );
}

export default CTA;
