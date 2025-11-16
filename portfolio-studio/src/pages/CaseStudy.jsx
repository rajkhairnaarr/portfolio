import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectBySlug } from '../data/projects';
import CTA from '../components/CTA';

function CaseStudy() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Project Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, the project you're looking for doesn't exist.
          </p>
          <Link to="/work" className="btn-primary">
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-content mx-auto"
        >
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-white">
              <li>
                <Link to="/work" className="hover:text-accent transition-colors">
                  Work
                </Link>
              </li>
              <li>/</li>
              <li className="text-accent">{project.title}</li>
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold on-gradient-dark mb-6">
                {project.title}
              </h1>
              <p className="text-2xl on-gradient-dark mb-4">{project.role}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white bg-opacity-20 text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-6">
                  Key Metrics
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-3xl font-bold text-accent mb-2">{value}</div>
                      <div className="text-white capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="py-12 px-6 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-content mx-auto"
        >
          <img
            src={project.heroImage}
            alt={`${project.title} preview`}
            className="w-full rounded-lg shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto prose prose-lg"
        >
          {/* Parse markdown-like content */}
          {project.content.split('\n\n').map((paragraph, index) => {
            // Handle headers
            if (paragraph.startsWith('# ')) {
              return (
                <h1 key={index} className="text-4xl font-heading font-bold mt-12 mb-6">
                  {paragraph.replace('# ', '')}
                </h1>
              );
            }
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-3xl font-heading font-bold mt-10 mb-4">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            // Handle lists
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n').map((item) => item.replace('- ', ''));
              return (
                <ul key={index} className="list-disc list-inside space-y-2 my-6">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }
            // Regular paragraphs
            return (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            );
          })}
        </motion.div>
      </section>

      {/* Navigation to other projects */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-content mx-auto text-center">
          <Link
            to="/work"
            className="inline-flex items-center text-accent hover:text-opacity-80 font-semibold text-lg"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            View All Projects
          </Link>
        </div>
      </section>

      <CTA />
    </div>
  );
}

export default CaseStudy;
