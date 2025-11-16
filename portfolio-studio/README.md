# Portfolio Studio

A production-ready, responsive portfolio website built with React, Vite, Tailwind CSS, React Router, and Framer Motion. This project follows a carefully designed system with custom gradients, typography, and spacing to create a beautiful, accessible user experience.

## Features

- ✨ Modern, responsive design with custom gradient backgrounds
- 🎨 Comprehensive design system with Tailwind CSS
- 🧭 Client-side routing with React Router
- 🎬 Smooth animations with Framer Motion
- ♿ Accessible components with ARIA labels and keyboard navigation
- 📱 Mobile-first responsive design
- 🎯 Filter functionality for project portfolio
- 🖼️ Masonry gallery with lightbox modal
- 🧪 Test suite with Vitest and React Testing Library
- 🚀 Optimized for production deployment

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Animations:** Framer Motion
- **Testing:** Vitest + React Testing Library

## Project Structure

```
portfolio-studio/
├── public/
│   └── assets/               # Static assets (images, etc.)
│       ├── hero.png
│       ├── project-1.jpg
│       ├── project-2.jpg
│       ├── project-3.jpg
│       ├── project-4.jpg
│       └── footer-flower.png
├── src/
│   ├── components/           # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── FilterPills.jsx
│   │   ├── ProjectsGrid.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Gallery.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   └── ContactForm.jsx
│   ├── pages/                # Page components
│   │   ├── Home.jsx
│   │   ├── Work.jsx
│   │   ├── CaseStudy.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/                 # Data files
│   │   └── projects.js
│   ├── __tests__/            # Test files
│   │   ├── setup.js
│   │   ├── ProjectCard.test.jsx
│   │   └── routing.test.jsx
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

### Installation

1. Extract the project files:
   ```bash
   tar -xzf portfolio-studio.tar.gz
   cd portfolio-studio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm test` - Run test suite

## Customization

### 1. Replace Placeholder Images

All placeholder images are located in `public/assets/`. Replace them with your actual images:

- `hero.png` - Hero section image
- `project-1.jpg` through `project-4.jpg` - Project preview images
- `footer-flower.png` - Decorative footer image

### 2. Update Project Data

Edit `src/data/projects.js` to add your actual projects:

```javascript
{
  slug: 'your-project-slug',
  title: 'Your Project Title',
  role: 'Your Role',
  tags: ['Tag1', 'Tag2'],
  short: 'Brief description',
  heroImage: '/assets/your-image.jpg',
  metrics: {
    metric1: 'value',
    metric2: 'value'
  },
  content: `Your full case study content...`
}
```

### 3. Update Personal Information

- **Header/Footer:** Edit `src/components/Header.jsx` and `src/components/Footer.jsx`
- **About Page:** Update content in `src/pages/About.jsx`
- **Contact Info:** Update email and social links in `src/components/Footer.jsx` and `src/pages/Contact.jsx`

### 4. Configure Contact Form

The contact form in `src/components/ContactForm.jsx` currently uses a placeholder submission handler. Integrate with your preferred service:

- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- Custom backend API

### 5. Customize Design System

The design system is configured in `tailwind.config.js`. You can customize:

- Colors (hero gradients, accent colors)
- Typography (font families, sizes)
- Spacing scale
- Breakpoints

## Design System

### Colors

- **hero-top:** `#1b1122`
- **hero-mid:** `#6c86a6`
- **hero-bottom:** `#eae2c5`
- **hero-bottom-soft:** `#f6e8d0`
- **accent:** `#f08b5a`
- **footer-deep:** `#0b0404`

### Typography

- **Heading Font:** Playfair Display (serif)
- **Body Font:** Inter (sans-serif)
- **H1 Size:** `clamp(36px, 6vw, 72px)`
- **Lead Text:** `clamp(16px, 2vw, 22px)`

### Spacing Scale

8, 12, 16, 24, 32, 48, 64 pixels

## Accessibility

This project follows WCAG 2.1 AA guidelines:

- Semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<nav>`)
- Skip-to-content link for keyboard users
- ARIA labels and roles on interactive elements
- Keyboard-accessible navigation and modals
- High contrast text on gradient backgrounds
- Respects `prefers-reduced-motion` media query

## Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. Test the production build locally:
   ```bash
   npm run preview
   ```

The build output will be in the `dist/` directory.

## Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Deploy to GitHub Pages

1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```

3. Update `vite.config.js` with your repo base:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For issues or questions, please open an issue in the GitHub repository.

---

Built with ❤️ using React, Vite, and Tailwind CSS
