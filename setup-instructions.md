# Abhishek Wadhwa's Blogger Website - Setup Instructions

## Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

## Setup Steps

1. **Create a new React project with Vite:**
```bash
npm create vite@latest abhishek-blog -- --template react-ts
cd abhishek-blog
```

2. **Install dependencies:**
```bash
npm install
npm install clsx lucide-react tailwind-merge @radix-ui/react-slot class-variance-authority @radix-ui/react-scroll-area @radix-ui/react-separator @radix-ui/react-accordion tailwindcss
```

3. **Setup Tailwind CSS:**
```bash
npx tailwindcss init -p
```

4. **Copy all the source files from this project:**
   - Copy all files from `src/` directory
   - Copy `tailwind.config.js`
   - Copy `index.html`
   - Copy `package.json` (and merge dependencies)

5. **Run the development server:**
```bash
npm run dev
```

6. **Build for production:**
```bash
npm run build
```

## Project Structure
```
abhishek-blog/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── FeaturedBlogSection.tsx
│   │   ├── BooksAndPodcastsSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── SocialMediaSection.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## Key Features
- Fully responsive design
- Modern React with TypeScript
- Tailwind CSS for styling
- Lucide React icons
- Professional blogger layout
- SEO optimized
- Mobile-first approach

## Customization
- Update images in the components to use your own photos
- Modify content in each component to match your specific information
- Adjust colors in `tailwind.config.js` and `src/index.css`
- Add your own blog posts data
- Connect forms to your preferred email service

## Deployment
The site is ready to deploy to:
- Netlify (drag and drop the `dist` folder after `npm run build`)
- Vercel
- GitHub Pages
- Any static hosting service