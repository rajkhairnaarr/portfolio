import { useState } from 'react';
import { motion } from 'framer-motion';
import FilterPills from '../components/FilterPills';
import ProjectBand from '../components/ProjectBand';
import { projects, filterProjectsByTag } from '../data/projects';

function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects = filterProjectsByTag(activeFilter);

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-hero-gradient py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-content mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold on-gradient-dark mb-6">
            My Work
          </h1>
          <p className="text-xl on-gradient-dark max-w-2xl mx-auto">
            A collection of projects that showcase my approach to solving complex design
            challenges and creating meaningful user experiences.
          </p>
        </motion.div>
      </section>

      {/* Vertical rhythm spacing */}
      <div className="py-section-mobile md:py-section-tablet lg:py-section">
        <FilterPills activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </div>

      {/* Project Bands Stack */}
      <section className="bg-white">
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center editorial-gutter">
            <p className="text-xl text-gray-600">
              No projects found for this filter. Try selecting a different category.
            </p>
          </div>
        ) : (
          filteredProjects.map((project, index) => (
            <ProjectBand key={project.slug} project={project} index={index} />
          ))
        )}
      </section>
    </div>
  );
}

export default Work;
