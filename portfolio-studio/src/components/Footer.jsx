import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../data/portfolioData';

function Footer() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Calculate parallax offset
  const parallaxOffset = scrollY * 0.1;

  return (
    <footer className="bg-dark border-t border-subtle">
      {/* Footer Content - asymmetric, minimal */}
      <div className="container-asymmetric py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Column 1 - Brand */}
          <div>
            <p className="text-small text-muted">
              © {new Date().getFullYear()} Raj Khairnar
              <br />
              Building clarity into complex products
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <nav className="flex flex-col space-y-3" aria-label="Footer navigation">
              <Link
                to="/about"
                className="text-small text-muted hover:text-accent transition-colors uppercase tracking-wider"
              >
                About
              </Link>
              <Link
                to="/work"
                className="text-small text-muted hover:text-accent transition-colors uppercase tracking-wider"
              >
                Work
              </Link>
              <Link
                to="/contact"
                className="text-small text-muted hover:text-accent transition-colors uppercase tracking-wider"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3 - Social & Email */}
          <div className="md:text-right">
            <div className="flex md:justify-end flex-col md:items-end space-y-3">
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-small text-muted hover:text-accent transition-colors uppercase tracking-wider"
              >
                Email
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-small text-muted hover:text-accent transition-colors uppercase tracking-wider"
              >
                LinkedIn
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-small text-muted hover:text-accent transition-colors uppercase tracking-wider"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
