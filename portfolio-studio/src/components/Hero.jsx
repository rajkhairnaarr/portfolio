import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

function Hero() {
  return (
    <section className="min-h-screen bg-dark noise-texture flex items-center whitespace-hero-bottom">
      <div className="container-asymmetric w-full py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-container"
        >
          {/* Eyebrow */}
          <div className="text-small uppercase tracking-wider text-muted font-medium mb-8">
            Product Designer & Systems Thinker
          </div>

          {/* Headline - 84px with clamp, left-aligned, max-width 60% */}
          <h1 className="text-h1 text-on-dark mb-8">
            Building intuitive products through clarity, not complexity
          </h1>

          {/* Subtext - 18px */}
          <p className="text-body text-muted max-w-2xl mb-12">
            I'm Raj Khairnar. I help teams design product experiences that make sense—
            reducing cognitive load, improving usability, and driving measurable outcomes.
          </p>

          {/* Asymmetric button placement - primary left, secondary offset right */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <Button asChild variant="default" size="lg" className="btn-primary">
              <Link to="/work">View Selected Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary sm:ml-12">
              <Link to="/about">How I Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
