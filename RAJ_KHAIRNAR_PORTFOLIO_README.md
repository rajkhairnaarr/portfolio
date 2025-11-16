# Raj Khairnar - Portfolio Website

A clarity-driven UI/UX designer portfolio website built with React, Vite, Tailwind CSS, and shadcn/ui components.

## 🎯 Project Overview

This is a complete portfolio website showcasing Raj Khairnar's work as a Product Designer. The site features an editorial layout with large negative space, narrow text columns, wide visual columns, and a clean modern aesthetic.

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
portfolio-studio/
├── src/
│   ├── components/
│   │   ├── ui/               # shadcn/ui components (Button, Badge)
│   │   ├── Hero.jsx          # Hero section with 5/7 grid
│   │   ├── ValuePillars.jsx  # Three-column value pillars
│   │   ├── SignatureCaseStudy.jsx  # Flagship project showcase
│   │   ├── Playground.jsx    # UI explorations gallery
│   │   ├── HowIWork.jsx      # 4-step process component
│   │   ├── CTA.jsx           # Call-to-action section
│   │   ├── Header.jsx        # Navigation header
│   │   └── Footer.jsx        # Footer with social links
│   ├── pages/
│   │   ├── Home.jsx          # Homepage with all sections
│   │   ├── About.jsx         # About page with bio
│   │   ├── Work.jsx          # Work page (placeholder)
│   │   ├── Contact.jsx       # Contact page
│   │   └── CaseStudy.jsx     # Detailed case study page
│   ├── data/
│   │   └── portfolioData.js  # All portfolio content
│   └── lib/
│       └── utils.js          # shadcn/ui utilities
├── public/
│   └── assets/               # Placeholder images directory
└── tailwind.config.js        # Tailwind configuration
```

## 🎨 Design Features

### Editorial Layout Specifications
- **Max-width text column**: 540px
- **Left gutter**: 96px desktop / 24px mobile
- **Hero height**: 75-85vh
- **Vertical rhythm**: 120px/80px/48px (desktop/tablet/mobile)
- **Gallery grid**: 3-4 columns
- **Footer**: Dark, minimal, left-aligned

### Color Palette
- **Primary (Accent)**: #667eea (Purple-blue)
- **Gradient**: Hero gradient from #6366f1 to #8b5cf6
- **Text**: Gray scale (900, 700, 600, 500, 400)
- **Background**: White, Gray-50, Footer-deep

### Typography
- **Headings**: Space Grotesk (from Google Fonts)
- **Body**: Inter (from Google Fonts)
- **Font sizes**: Responsive scale from text-sm to text-6xl

## 📄 Pages & Sections

### Homepage
1. **Hero** - Raj's introduction with dual CTAs
2. **Value Pillars** - Clarity, Craft, Impact
3. **Signature Case Study** - Featured onboarding redesign project
4. **Playground** - 8-item UI explorations gallery
5. **How I Work** - 4-step process (Understand → Structure → Design → Iterate)
6. **CTA** - Contact call-to-action

### About Page
- Portrait photo (square aspect ratio)
- Bio text in narrow column
- Personal statement about design philosophy

### Work Page
- Currently placeholder for future projects
- Can be expanded with additional case studies

### Contact Page
- Contact form (existing)
- Social links integration

### Case Study Page (`/work/onboarding-redesign`)
- Project overview
- Challenge description
- Solution approach (4 key improvements)
- Impact metrics (72% completion, -38% drop-off, 4.6/5 satisfaction)
- Key learnings

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Navigate to project directory
cd portfolio-studio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content Customization

All content is centralized in `/src/data/portfolioData.js`. Update this file to customize:

- Value pillars text
- Signature case study details
- Playground items
- Work process steps
- About page content
- Social links (email, LinkedIn, Twitter)

## 🖼️ Adding Images

See `PLACEHOLDER_IMAGES_README.md` for detailed image specifications and locations.

**Required images:**
- `public/assets/hero.png` (1920x1080)
- `public/assets/signature-case-study.jpg` (1400x900)
- `public/assets/raj-portrait.jpg` (800x800 square)
- `public/assets/playground/exploration-{1-8}.jpg` (600x600 each)

## 🎯 Key Components

### shadcn/ui Components Used
- **Button** - Primary CTAs, navigation links
- **Badge** - Project tags, category labels

### Editorial Components
- **ValuePillars** - Three-column grid with animations
- **SignatureCaseStudy** - 5/7 grid split with image
- **Playground** - Responsive grid gallery (2-3-4 columns)
- **HowIWork** - Horizontal process steps with arrows

## 🔧 Configuration Files

### Tailwind Config (`tailwind.config.js`)
- Editorial layout tokens (maxWidth, spacing)
- Custom color palette
- Font family configuration
- Content paths for purging

### Vite Config
- React plugin
- Build optimizations
- Asset handling

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on navigation
- Alt text on all images
- Keyboard navigation support
- Skip-to-content link
- Focus states on interactive elements

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
```

Output in `dist/` directory:
- Optimized JS bundle (~346KB)
- CSS bundle (~22KB)
- Static assets

### Deploy
The built site can be deployed to:
- Vercel (recommended for Vite projects)
- Netlify
- GitHub Pages
- Any static hosting service

## 🎨 Design Philosophy

This portfolio embodies Raj's design principles:

1. **Clarity** - Clean typography, ample whitespace, clear information hierarchy
2. **Craft** - Attention to spacing, typography, and visual details
3. **Impact** - Focused content showcasing measurable results

## 📄 License

© 2025 Raj Khairnar — Designing thoughtful digital experiences.

## 🤝 Support

For questions or issues, refer to the documentation in this repository or check the inline code comments.
