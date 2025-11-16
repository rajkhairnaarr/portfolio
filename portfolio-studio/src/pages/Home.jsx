import { useState } from 'react';
import Hero from '../components/Hero';
import FilterPills from '../components/FilterPills';
import ProjectsGrid from '../components/ProjectsGrid';
import CTA from '../components/CTA';
import { projects, filterProjectsByTag } from '../data/projects';

function Home() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects = filterProjectsByTag(activeFilter);

  return (
    <div>
      <Hero />
      <FilterPills activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <ProjectsGrid projects={filteredProjects} />
      <CTA />
    </div>
  );
}

export default Home;
