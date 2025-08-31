# Vaibhav Sharma - Portfolio Website

## Overview

Personal portfolio website for Vaibhav Sharma, Senior Data Scientist specializing in MLOps & Data Engineering. Built with React and Tailwind CSS for deployment on GitHub Pages.

**Key Features:**
- Responsive design with minimalist, professional styling
- Hero section with professional introduction
- Skills showcase organized by technology categories
- Featured projects highlighting ML/Data Engineering work
- Contact section with social media links
- Optimized for GitHub Pages deployment

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Minimalist & professional style with light theme, soft grays/whites, and blue highlights.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with Vite for fast development and building
- **Styling**: Tailwind CSS with custom design system
- **Components**: Modular component structure (Hero, Skills, Projects, Contact)
- **Icons**: Lucide React for consistent iconography
- **Typography**: Inter font family for professional appearance

### Component Structure
```
src/
├── components/
│   ├── Hero.jsx       # Main landing section with intro
│   ├── Skills.jsx     # Technical skills showcase
│   ├── Projects.jsx   # Featured project highlights  
│   └── Contact.jsx    # Contact information and links
├── App.jsx           # Main app component
├── main.jsx          # React entry point
└── index.css         # Global styles and Tailwind imports
```

### Deployment Configuration
- **GitHub Pages**: Automated deployment via GitHub Actions
- **Build Tool**: Vite with optimized production builds
- **Domain**: Will be available at username.github.io/repository-name

## Dependencies

### Core Framework
- React 19.1.1 - Modern React with latest features
- React DOM 19.1.1 - DOM rendering
- Vite 7.1.3 - Fast build tool and dev server

### Styling & UI
- Tailwind CSS 4.1.12 - Utility-first CSS framework
- PostCSS 8.5.6 - CSS processing
- Autoprefixer 10.4.21 - CSS vendor prefixing
- Lucide React 0.542.0 - Icon library
- React Icons 5.5.0 - Additional icon sets

### Development
- @vitejs/plugin-react 5.0.2 - Vite React plugin

## Recent Changes (August 31, 2025)

✅ **Project Setup**
- Initialized React portfolio project with Vite
- Configured Tailwind CSS with custom color palette
- Set up modern development workflow

✅ **Portfolio Components** 
- Created Hero section with professional introduction
- Built Skills section with categorized technology showcase
- Developed Projects section featuring 3 key projects
- Implemented Contact section with social media links

✅ **GitHub Pages Setup**
- Configured GitHub Actions workflow for automated deployment
- Set up proper build configuration for static hosting

## Next Steps for GitHub Deployment

1. Create new GitHub repository (e.g., `vaibhav-portfolio`)
2. Push code to repository
3. Enable GitHub Pages in repository settings
4. Update social media links with actual profiles
5. Add custom domain if desired