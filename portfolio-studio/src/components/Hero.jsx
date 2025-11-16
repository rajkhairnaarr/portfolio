import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

function Hero() {
  return (
    <section className="min-h-[80vh] bg-hero-gradient grid lg:grid-cols-12">
      {/* Left Column - Text Content with Editorial Gutter */}
      <div className="lg:col-span-5 flex items-center editorial-gutter py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="editorial-text-narrow space-y-8"
        >
          <h1 className="hero-h1 on-gradient-dark">
            Crafting Digital Experiences That Matter
          </h1>

          <p className="hero-lead on-gradient-dark">
            I'm a product designer passionate about creating intuitive, accessible,
            and delightful user experiences. From concept to launch, I transform
            complex problems into elegant solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild variant="default" size="lg">
              <Link to="/work">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Right Column - Hero Image fills to viewport edge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:col-span-7 relative overflow-hidden"
      >
        <img
          src="/assets/hero.png"
          alt="Portfolio showcase"
          className="w-full h-full object-cover"
        />
        {/* TODO: Replace /assets/hero.png with your hero image */}
      </motion.div>
    </section>
  );
}

export default Hero;
