import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { signatureCaseStudy } from '../data/portfolioData';

function SignatureCaseStudy() {
  return (
    <section className="section-padding bg-dark noise-texture">
      {/* Asymmetric 60/40 split */}
      <div className="asymmetric-split">
        {/* Text Column - 60% width */}
        <div className="flex items-center px-12 lg:px-20 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl space-y-8"
          >
            <Badge variant="secondary" className="bg-accent text-primary minimal-radius">
              {signatureCaseStudy.tag}
            </Badge>

            <h2 className="text-h2 text-on-dark">
              {signatureCaseStudy.title}
            </h2>

            <p className="text-body text-accent font-medium">
              {signatureCaseStudy.role}
            </p>

            <p className="text-body text-muted leading-relaxed">
              {signatureCaseStudy.summary}
            </p>

            <div className="pt-4">
              <Button asChild size="lg" className="btn-primary">
                <Link to={`/work/${signatureCaseStudy.slug}`} className="inline-flex items-center gap-2">
                  {signatureCaseStudy.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Visual Column - 40% width, full-bleed */}
        <div className="relative overflow-hidden min-h-[500px] lg:min-h-[700px]">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={signatureCaseStudy.image}
            alt={signatureCaseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default SignatureCaseStudy;
