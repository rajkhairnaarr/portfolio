import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { signatureCaseStudy } from '../data/portfolioData';

function SignatureCaseStudy() {
  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section bg-gray-50">
      <div className="grid lg:grid-cols-12">
        {/* Text Column - Left aligned, narrow */}
        <div className="lg:col-span-5 flex items-center editorial-gutter py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="editorial-text-narrow space-y-6"
          >
            <Badge variant="secondary">{signatureCaseStudy.tag}</Badge>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
              {signatureCaseStudy.title}
            </h2>

            <p className="text-xl text-gray-700 font-medium">
              {signatureCaseStudy.role}
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              {signatureCaseStudy.summary}
            </p>

            <div className="pt-4">
              <Button asChild size="lg">
                <Link to={`/work/${signatureCaseStudy.slug}`} className="inline-flex items-center gap-2">
                  {signatureCaseStudy.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Visual Column - Right aligned, full-bleed */}
        <div className="lg:col-span-7 relative overflow-hidden min-h-[500px] lg:min-h-[700px]">
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
