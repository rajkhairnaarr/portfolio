import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

describe('ProjectCard', () => {
  const mockProject = {
    slug: 'test-project',
    title: 'Test Project',
    role: 'Lead Designer',
    tags: ['UI', 'Product'],
    short: 'This is a test project description',
    heroImage: '/assets/test.jpg',
  };

  it('renders project title', () => {
    render(
      <MemoryRouter>
        <ProjectCard project={mockProject} index={0} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project role', () => {
    render(
      <MemoryRouter>
        <ProjectCard project={mockProject} index={0} />
      </MemoryRouter>
    );

    expect(screen.getByText('Lead Designer')).toBeInTheDocument();
  });

  it('renders all project tags', () => {
    render(
      <MemoryRouter>
        <ProjectCard project={mockProject} index={0} />
      </MemoryRouter>
    );

    expect(screen.getByText('UI')).toBeInTheDocument();
    expect(screen.getByText('Product')).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(
      <MemoryRouter>
        <ProjectCard project={mockProject} index={0} />
      </MemoryRouter>
    );

    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  it('links to the correct project page', () => {
    render(
      <MemoryRouter>
        <ProjectCard project={mockProject} index={0} />
      </MemoryRouter>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/work/test-project');
  });
});
