# Placeholder Images Guide

This document lists all the placeholder images you need to replace for your Raj Khairnar portfolio website.

## Directory Structure

```
public/assets/
├── hero.png                          # Hero section background image (1920x1080 recommended)
├── signature-case-study.jpg          # Flagship project showcase image (1400x900 recommended)
├── raj-portrait.jpg                  # About page portrait (800x800 recommended, square aspect ratio)
├── playground/
│   ├── exploration-1.jpg             # Playground grid item 1 (600x600 square)
│   ├── exploration-2.jpg             # Playground grid item 2 (600x600 square)
│   ├── exploration-3.jpg             # Playground grid item 3 (600x600 square)
│   ├── exploration-4.jpg             # Playground grid item 4 (600x600 square)
│   ├── exploration-5.jpg             # Playground grid item 5 (600x600 square)
│   ├── exploration-6.jpg             # Playground grid item 6 (600x600 square)
│   ├── exploration-7.jpg             # Playground grid item 7 (600x600 square)
│   └── exploration-8.jpg             # Playground grid item 8 (600x600 square)
```

## Image Specifications

### Hero Image (`hero.png`)
- **Size**: 1920x1080px minimum
- **Format**: PNG or JPG
- **Purpose**: Right column background in hero section
- **Content**: Your best work showcase or abstract design

### Signature Case Study (`signature-case-study.jpg`)
- **Size**: 1400x900px minimum
- **Format**: JPG
- **Purpose**: Featured project showcase on homepage
- **Content**: Screenshot or mockup of your flagship onboarding redesign project

### Portrait (`raj-portrait.jpg`)
- **Size**: 800x800px (square)
- **Format**: JPG
- **Purpose**: About page portrait
- **Content**: Professional headshot or portrait photo

### Playground Items (`exploration-1.jpg` through `exploration-8.jpg`)
- **Size**: 600x600px each (square aspect ratio)
- **Format**: JPG
- **Purpose**: UI explorations gallery grid
- **Content**: UI components, motion studies, visual experiments, design explorations

## Quick Setup

### Option 1: Use Placeholder Image Services (Temporary)

You can use these URLs temporarily while preparing your images:

```javascript
// In portfolioData.js, temporarily use:
image: 'https://placehold.co/1400x900/667eea/ffffff?text=Case+Study'
```

### Option 2: Create Placeholder Files

Run these commands to create placeholder files:

```bash
cd public/assets
# Create placeholder files (you'll replace these with real images)
touch hero.png
touch signature-case-study.jpg
touch raj-portrait.jpg

cd playground
touch exploration-{1..8}.jpg
```

## Optimization Tips

1. **Compress images** before uploading (use tools like TinyPNG, ImageOptim)
2. **Use WebP format** for better performance when possible
3. **Provide retina versions** (@2x) for sharp display on high-DPI screens
4. **Add alt text** - already configured in components, describes your images well

## File References

Images are referenced in these files:
- `/src/data/portfolioData.js` - All image paths are defined here
- `/src/components/Hero.jsx` - Hero image
- `/src/components/SignatureCaseStudy.jsx` - Signature project image
- `/src/pages/About.jsx` - Portrait image
- `/src/components/Playground.jsx` - Exploration images

Replace the paths in `portfolioData.js` after adding your images to match your file names.
