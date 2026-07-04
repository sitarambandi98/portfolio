# Developer Portfolio

A modern, professional, and responsive developer portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Hero Section** - Eye-catching introduction with animated elements
- **About Me** - Professional summary with highlights
- **Technical Skills** - Animated skill bars grouped by category
- **Projects** - Beautiful project cards with tech stack and highlights
- **Experience Timeline** - Professional work history
- **Contact Section** - Contact form and social links
- **Dark/Light Mode** - Theme toggle with system preference detection
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **SEO Optimized** - Meta tags and semantic HTML
- **Accessibility** - WCAG compliant
- **Animations** - Smooth Framer Motion animations

## Technologies

- React 19
- TypeScript
- Vite
- Tailwind CSS 3
- Framer Motion
- Lucide React Icons
- React Icons (Ai icons)
- React Helmet Async

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Updating Your Information

### 1. Personal Profile

Update `src/data/portfolio.ts`:

```typescript
export const profile = {
  name: "Your Name",
  title: "Full Stack Developer",
  tagline: "Your tagline here",
  introduction: "Your introduction text...",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  resumeUrl: "/resume.pdf",
};
```

### 2. Skills

Update the `skills` object in `src/data/portfolio.ts`:

```typescript
export const skills = {
  frontend: [
    { name: "React.js", level: 95 },
    // Add more skills...
  ],
  backend: [...],
  databases: [...],
  cloud: [...],
  tools: [...],
};
```

### 3. Projects

Update the `projects` array in `src/data/portfolio.ts`:

```typescript
export const projects = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description...",
    tech: ["React.js", ".NET", "Azure"],
    category: "Enterprise Application",
    highlights: ["Feature 1", "Feature 2", "Feature 3"],
  },
  // Add more projects...
];
```

### 4. Experience

Update the `experience` array in `src/data/portfolio.ts`:

```typescript
export const experience = [
  {
    id: 1,
    company: "Company Name",
    role: "Senior Developer",
    period: "2022 - Present",
    description: "Role description...",
    technologies: ["React", ".NET", "Azure"],
  },
  // Add more experience...
];
```

### 5. Resume

Place your resume PDF in the `public/` folder and update `profile.resumeUrl` to match the filename.

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel login` to authenticate
3. Run `vercel --prod` in the project root

Or connect your GitHub repository to Vercel for automatic deployments.

### Netlify

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run `netlify login` to authenticate
3. Run `netlify deploy --prod --dir=dist`

Or connect your GitHub repository to Netlify for automatic deployments.

### GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          # Add your resume here
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── SEO.tsx
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── data/
│   │   └── portfolio.ts    # All portfolio data here
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Customization

### Changing Colors

Update `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... other shades
  },
}
```

### Adding More Sections

1. Create a new component in `src/sections/`
2. Import it in `App.tsx`
3. Add it to the main layout

## License

MIT License - feel free to use this template for your own portfolio.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
