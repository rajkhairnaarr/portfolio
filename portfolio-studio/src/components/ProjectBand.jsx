import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';

function ProjectBand({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <Link to={`/work/${project.slug}`} className="project-band block">
      <div className="hairline-separator">
        <div className={`grid grid-cols-1 lg:grid-cols-12 min-h-[600px] ${
          isEven ? '' : 'lg:flex-row-reverse'
        }`}>
          {/* Text Column - Left aligned, narrow */}
          <div
            className={`lg:col-span-5 flex items-center editorial-gutter py-16 lg:py-24 ${
              isEven ? 'lg:order-1' : 'lg:order-2 lg:col-start-8'
            }`}
          >
            <div className="editorial-text-narrow space-y-6 pr-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 leading-tight">
                {project.title}
              </h3>

              {/* Role */}
              <p className="text-xl text-gray-600 font-medium">{project.role}</p>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed">{project.short}</p>

              {/* Link indicator */}
              <div className="flex items-center text-accent font-semibold text-lg group">
                <span>View Case Study</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </div>

          {/* Visual Column - Fills remaining space to viewport edge */}
          <div
            className={`lg:col-span-7 relative overflow-hidden ${
              isEven ? 'lg:order-2' : 'lg:order-1 lg:col-start-1'
            }`}
          >
            <img
              src={project.heroImage}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectBand;
