import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Routing', () => {
  it('renders home page on root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Check for hero section content
    expect(screen.getByText(/Crafting Digital Experiences/i)).toBeInTheDocument();
  });

  it('renders work page on /work path', () => {
    render(
      <MemoryRouter initialEntries={['/work']}>
        <App />
      </MemoryRouter>
    );

    // Check for work page header
    expect(screen.getByText('My Work')).toBeInTheDocument();
  });

  it('renders about page on /about path', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    // Check for about page content
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders contact page on /contact path', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );

    // Check for contact page header
    expect(screen.getByText(/Let's Work Together/i)).toBeInTheDocument();
  });

  it('renders case study page on /work/:slug path', () => {
    render(
      <MemoryRouter initialEntries={['/work/modern-banking-app']}>
        <App />
      </MemoryRouter>
    );

    // Check for case study content
    expect(screen.getByText('Modern Banking Experience')).toBeInTheDocument();
  });

  it('shows 404 for non-existent project', () => {
    render(
      <MemoryRouter initialEntries={['/work/non-existent-project']}>
        <App />
      </MemoryRouter>
    );

    // Check for not found message
    expect(screen.getByText('Project Not Found')).toBeInTheDocument();
  });
});
