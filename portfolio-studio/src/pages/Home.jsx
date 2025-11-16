import { useState } from 'react';
import Hero from '../components/Hero';
import FilterPills from '../components/FilterPills';
import ProjectBand from '../components/ProjectBand';
import CTA from '../components/CTA';
import { projects, filterProjectsByTag } from '../data/projects';

function Home() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects = filterProjectsByTag(activeFilter);

  return (
    <div>
      <Hero />

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

      {/* Vertical rhythm before CTA */}
      <div className="py-section-mobile md:py-section-tablet lg:py-section" />

      <CTA />
    </div>
  );
}

export default Home;
