// TODO: Replace with your actual project data
export const projects = [
  {
    slug: 'modern-banking-app',
    title: 'Modern Banking Experience',
    role: 'Lead Product Designer',
    tags: ['Product', 'UI', 'System'],
    short: 'Redesigned mobile banking app focusing on simplicity and accessibility, resulting in 40% increase in user engagement.',
    heroImage: '/assets/project-1.jpg',
    metrics: {
      engagement: '+40%',
      taskCompletion: '+65%',
      userSatisfaction: '4.8/5'
    },
    content: `
# Modern Banking Experience

## Challenge
Traditional banking apps were cluttered and intimidating for new users. Our goal was to create an experience that felt approachable while maintaining security and trust.

## Approach
- Conducted user research with 50+ participants across demographics
- Created a simplified information architecture
- Implemented a design system with accessible components
- Collaborated with engineering to ensure pixel-perfect implementation

## Solution
A clean, intuitive interface that guides users through complex banking tasks with confidence. Features include:
- One-tap bill payments
- Visual spending insights
- Contextual help and tooltips
- Dark mode support

## Results
- 40% increase in user engagement
- 65% improvement in task completion rates
- 4.8/5 user satisfaction score
- Featured in App Store editorial

## Learnings
The importance of progressive disclosure in financial apps - showing users only what they need, when they need it.
    `
  },
  {
    slug: 'wellness-tracker',
    title: 'Wellness & Mindfulness Tracker',
    role: 'UI/UX Designer',
    tags: ['Brand', 'UI'],
    short: 'Created a calming, beautiful interface for a mental wellness app used by over 100k users.',
    heroImage: '/assets/project-2.jpg',
    metrics: {
      downloads: '100k+',
      retention: '78%',
      dailyActive: '45%'
    },
    content: `
# Wellness & Mindfulness Tracker

## Challenge
Mental wellness apps often feel clinical or overwhelming. We wanted to create something that felt like a safe, calming space.

## Approach
- Designed a soothing color palette backed by color psychology research
- Created gentle animations and transitions
- Implemented biometric integration for stress tracking
- Built flexible journaling and reflection tools

## Solution
A thoughtfully designed app that adapts to the user's emotional state and provides personalized guidance.

## Results
- Over 100,000 downloads in first 6 months
- 78% user retention rate
- 45% daily active users
- 4.9/5 rating on App Store

## Learnings
The power of microinteractions in creating an emotional connection with users.
    `
  },
  {
    slug: 'ecommerce-redesign',
    title: 'E-commerce Platform Redesign',
    role: 'Senior Product Designer',
    tags: ['Product', 'System'],
    short: 'Complete redesign of checkout flow reducing cart abandonment by 35%.',
    heroImage: '/assets/project-3.jpg',
    metrics: {
      cartAbandonment: '-35%',
      conversion: '+28%',
      averageOrder: '+15%'
    },
    content: `
# E-commerce Platform Redesign

## Challenge
High cart abandonment rates (68%) and complex checkout process were costing millions in lost revenue.

## Approach
- Analyzed user session recordings to identify friction points
- A/B tested multiple checkout flow variations
- Simplified form fields and added autofill
- Implemented guest checkout option
- Added trust signals throughout the flow

## Solution
A streamlined checkout experience that reduces steps from 7 to 3, with clear progress indicators and flexible payment options.

## Results
- 35% reduction in cart abandonment
- 28% increase in conversion rate
- 15% increase in average order value
- $2.3M additional annual revenue

## Learnings
Small improvements compound - even reducing a single form field can have measurable impact on conversion.
    `
  },
  {
    slug: 'design-system',
    title: 'Enterprise Design System',
    role: 'Design System Lead',
    tags: ['System', 'UI'],
    short: 'Built and documented a comprehensive design system adopted across 15+ product teams.',
    heroImage: '/assets/project-4.jpg',
    metrics: {
      adoption: '15 teams',
      efficiency: '+60%',
      consistency: '95%'
    },
    content: `
# Enterprise Design System

## Challenge
Inconsistent UI patterns across products leading to poor user experience and slow development cycles.

## Approach
- Audited existing UI components across all products
- Conducted workshops with design and engineering teams
- Created a token-based system for colors, spacing, and typography
- Built React component library with comprehensive documentation
- Established governance model and contribution guidelines

## Solution
A living design system with 100+ components, detailed usage guidelines, and automated accessibility testing.

## Results
- Adopted by 15+ product teams
- 60% increase in design-to-development efficiency
- 95% UI consistency score across products
- Reduced accessibility issues by 80%

## Learnings
A design system is as much about people and process as it is about components. Regular communication and education are key to adoption.
    `
  }
];

// Helper function to filter projects by tag
export const filterProjectsByTag = (tag) => {
  if (tag === 'All') return projects;
  return projects.filter(project => project.tags.includes(tag));
};

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

export default projects;
