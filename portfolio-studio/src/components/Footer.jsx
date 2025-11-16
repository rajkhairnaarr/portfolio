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
    <footer className="bg-footer-deep text-white">
      {/* Footer Content */}
      <div className="max-w-content mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Raj Khairnar — Designing thoughtful digital experiences.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div className="text-center">
            <nav className="flex justify-center space-x-6" aria-label="Footer navigation">
              <Link
                to="/about"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                About
              </Link>
              <span className="text-gray-600">·</span>
              <Link
                to="/work"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Work
              </Link>
              <span className="text-gray-600">·</span>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3 - Social & Email */}
          <div className="text-right">
            <div className="flex justify-end space-x-6">
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Email
              </a>
              <span className="text-gray-600">·</span>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-gray-600">·</span>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
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
