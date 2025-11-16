import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="min-h-[75vh] bg-hero-gradient flex items-center py-24 px-6">
      <div className="max-w-content mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="hero-h1 on-gradient-dark">
              Crafting Digital Experiences That Matter
            </h1>

            <p className="hero-lead on-gradient-dark max-w-xl">
              I'm a product designer passionate about creating intuitive, accessible,
              and delightful user experiences. From concept to launch, I transform
              complex problems into elegant solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/work" className="btn-primary text-center">
                View My Work
              </Link>
              <Link to="/contact" className="btn-secondary text-center">
                Get In Touch
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/assets/hero.png"
              alt="Portfolio showcase"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            {/* TODO: Replace /assets/hero.png with your hero image */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
