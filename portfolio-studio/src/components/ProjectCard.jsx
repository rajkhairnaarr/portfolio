import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <Link to={`/work/${project.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="project-card group bg-white rounded-lg shadow-lg overflow-hidden mb-12"
      >
        <div
          className={`grid md:grid-cols-12 gap-8 items-center ${
            isEven ? '' : 'md:flex-row-reverse'
          }`}
        >
          {/* Text Column */}
          <div
            className={`md:col-span-5 p-8 ${
              isEven ? 'md:order-1' : 'md:order-2 md:col-start-8'
            }`}
          >
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent bg-opacity-10 text-accent text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl font-heading font-bold text-gray-900 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-lg text-gray-600">{project.role}</p>

              <p className="text-gray-700 leading-relaxed">{project.short}</p>

              <div className="pt-4 flex items-center text-accent font-semibold">
                View Case Study
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div
            className={`md:col-span-7 ${
              isEven ? 'md:order-2' : 'md:order-1 md:col-start-1'
            }`}
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.heroImage}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default ProjectCard;
