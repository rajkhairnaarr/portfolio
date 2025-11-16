import ProjectCard from './ProjectCard';

function ProjectsGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <section className="py-24 px-6">
        <div className="max-w-content mx-auto text-center">
          <p className="text-xl text-gray-600">
            No projects found for this filter. Try selecting a different category.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-content mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
