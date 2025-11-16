import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { signatureCaseStudy } from '../data/portfolioData';

function CaseStudy() {
  const { slug } = useParams();

  // For now, we only have one case study
  if (slug !== signatureCaseStudy.slug) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-16 lg:py-24 px-6">
        <div className="max-w-content mx-auto editorial-gutter">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="editorial-text-narrow space-y-6"
          >
            <Button asChild variant="ghost" size="sm" className="text-white hover:text-accent -ml-4">
              <Link to="/work" className="inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Work
              </Link>
            </Button>

            <Badge variant="secondary">{signatureCaseStudy.tag}</Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
              {signatureCaseStudy.title}
            </h1>

            <p className="text-xl text-white font-medium">
              {signatureCaseStudy.role}
            </p>

            <p className="text-lg text-gray-200 leading-relaxed">
              {signatureCaseStudy.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-content mx-auto"
        >
          <img
            src={signatureCaseStudy.image}
            alt={signatureCaseStudy.title}
            className="w-full h-auto"
          />
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section bg-white">
        <div className="max-w-content mx-auto editorial-gutter px-6">
          <div className="editorial-text-narrow space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                This case study showcases my approach to improving user onboarding experiences through clarity-first design and iterative testing.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The project involved redesigning a critical onboarding flow to reduce friction points and increase user confidence during the signup process.
              </p>
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Users were abandoning the onboarding process at a rate of 45%, citing confusion about required steps and lack of trust in the platform.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-2">
                <p className="font-semibold text-gray-900">Key Issues:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Unclear progress indication</li>
                  <li>Too many fields on single screens</li>
                  <li>Lack of contextual help</li>
                  <li>Insufficient trust signals</li>
                </ul>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Solution & Approach
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I redesigned the flow using a stepped approach, breaking complex tasks into digestible chunks with clear progress indicators and contextual guidance.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Simplified Steps</h3>
                  <p className="text-gray-600">Reduced from 3 dense pages to 5 focused steps, each with a single clear objective.</p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Progress Transparency</h3>
                  <p className="text-gray-600">Added a visual stepper showing current position and remaining steps.</p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Contextual Help</h3>
                  <p className="text-gray-600">Introduced inline tooltips and helper text for complex fields.</p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Trust Signals</h3>
                  <p className="text-gray-600">Added security badges, testimonials, and data protection messaging.</p>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Impact & Results
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-accent bg-opacity-10 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-accent mb-2">72%</div>
                  <p className="text-gray-700">Completion Rate</p>
                  <p className="text-sm text-gray-500 mt-1">Up from 55%</p>
                </div>
                <div className="bg-accent bg-opacity-10 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-accent mb-2">-38%</div>
                  <p className="text-gray-700">Drop-off Rate</p>
                  <p className="text-sm text-gray-500 mt-1">Significant improvement</p>
                </div>
                <div className="bg-accent bg-opacity-10 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-accent mb-2">4.6/5</div>
                  <p className="text-gray-700">User Satisfaction</p>
                  <p className="text-sm text-gray-500 mt-1">Post-launch survey</p>
                </div>
              </div>
            </motion.div>

            {/* Learnings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Key Learnings
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                This project reinforced the importance of clarity and progressive disclosure in complex user flows. Breaking down intimidating processes into manageable steps significantly improves user confidence and completion rates.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Regular user testing throughout the design process was crucial in identifying pain points and validating solutions before development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-content mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">
            Want to see more work?
          </h2>
          <Button asChild size="lg">
            <Link to="/work">View All Projects</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default CaseStudy;
