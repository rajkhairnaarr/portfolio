import { useEffect } from 'react';
import ValuePillars from '../components/ValuePillars';
import SignatureCaseStudy from '../components/SignatureCaseStudy';
import Playground from '../components/Playground';
import HowIWork from '../components/HowIWork';
import CTA from '../components/CTA';

function Home() {
  useEffect(() => {
    // Load UnicornStudio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.35/dist/unicornStudio.umd.js';
      script.onload = function() {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <div>
      {/* Hero Section - UnicornStudio */}
      <section className="min-h-screen flex items-center justify-center bg-dark overflow-hidden">
        <div
          data-us-project="tfTJE5fjug296JOMr7eh"
          style={{ width: '1440px', height: '900px', maxWidth: '100%' }}
        />
      </section>

      {/* Rest of the portfolio sections */}
      <ValuePillars />
      <SignatureCaseStudy />
      <Playground />
      <HowIWork />
      <CTA />
    </div>
  );
}

export default Home;
