import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import Gallery from '../components/Gallery';

function About() {
  // TODO: Replace with your actual gallery images
  const galleryImages = [
    { src: '/assets/project-1.jpg', alt: 'Gallery image 1' },
    { src: '/assets/project-2.jpg', alt: 'Gallery image 2' },
    { src: '/assets/project-3.jpg', alt: 'Gallery image 3' },
    { src: '/assets/project-4.jpg', alt: 'Gallery image 4' },
    { src: '/assets/hero.png', alt: 'Gallery image 5' },
    { src: '/assets/project-1.jpg', alt: 'Gallery image 6' },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-content mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold on-gradient-dark mb-6">
                About Me
              </h1>
              <p className="text-xl on-gradient-dark leading-relaxed mb-6">
                I'm a product designer with 8+ years of experience creating digital
                products that people love to use. My approach combines strategic thinking,
                user research, and visual design to solve complex problems.
              </p>
              <p className="text-xl on-gradient-dark leading-relaxed">
                I believe great design is invisible—it just works. I'm passionate about
                accessibility, design systems, and mentoring the next generation of
                designers.
              </p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8">
              <img
                src="/assets/hero.png"
                alt="Profile"
                className="w-full rounded-lg shadow-lg mb-6"
              />
              {/* TODO: Replace with your profile photo */}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills & Experience */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold mb-8">Skills</h2>
              <div className="space-y-6">
                {[
                  {
                    category: 'Design',
                    skills: ['UI/UX Design', 'Prototyping', 'User Research', 'Design Systems'],
                  },
                  {
                    category: 'Tools',
                    skills: ['Figma', 'Adobe Creative Suite', 'Sketch', 'Framer'],
                  },
                  {
                    category: 'Development',
                    skills: ['HTML/CSS', 'React', 'Tailwind CSS', 'Basic JavaScript'],
                  },
                  {
                    category: 'Soft Skills',
                    skills: ['Collaboration', 'Presentation', 'Mentoring', 'Strategic Thinking'],
                  },
                ].map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h3 className="font-semibold text-lg mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold mb-8">Experience</h2>
              <div className="space-y-8">
                {/* TODO: Replace with your actual experience */}
                {[
                  {
                    title: 'Senior Product Designer',
                    company: 'Tech Startup Inc.',
                    period: '2020 - Present',
                    description:
                      'Lead design for core product features, established design system, mentored junior designers.',
                  },
                  {
                    title: 'Product Designer',
                    company: 'Digital Agency',
                    period: '2018 - 2020',
                    description:
                      'Designed mobile and web experiences for Fortune 500 clients across various industries.',
                  },
                  {
                    title: 'UI/UX Designer',
                    company: 'Startup Studio',
                    period: '2016 - 2018',
                    description:
                      'Worked on multiple startup projects from concept to launch, focusing on rapid prototyping.',
                  },
                ].map((job, index) => (
                  <div key={index} className="border-l-4 border-accent pl-6 pb-6">
                    <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                    <div className="text-accent font-medium mb-2">{job.company}</div>
                    <div className="text-gray-500 text-sm mb-3">{job.period}</div>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery images={galleryImages} />

      {/* CTA */}
      <CTA />
    </div>
  );
}

export default About;
