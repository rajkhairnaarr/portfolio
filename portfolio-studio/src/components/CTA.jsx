import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

function CTA() {
  return (
    <section className="section-padding bg-light noise-texture">
      <div className="container-asymmetric">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-h2 text-on-light mb-12">
            Available for select projects—
            <br />
            let's build something that matters
          </h2>

          <Button
            asChild
            size="lg"
            className="btn-primary text-lg"
          >
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
