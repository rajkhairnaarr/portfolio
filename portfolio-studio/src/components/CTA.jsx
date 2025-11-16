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
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-10">
          Let's Create Something Meaningful Together
        </h2>

        <Button
          asChild
          size="lg"
          className="bg-white text-hero-top hover:bg-gray-100 font-bold text-lg px-12 py-6"
        >
          <Link to="/contact">Contact Me</Link>
        </Button>
      </motion.div>
    </section>
  );
}

export default CTA;
