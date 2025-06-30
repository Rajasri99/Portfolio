# 🌌 Cosmic Portfolio - Space-Themed Developer Portfolio

A stunning, responsive portfolio website built with React, TypeScript, Tailwind CSS v4, and Framer Motion. Features a cosmic space theme with lime green accents and smooth animations.

## ✨ Features

- **Space-themed Design**: Cosmic background with floating space objects
- **Responsive Layout**: Works perfectly on all device sizes
- **Smooth Animations**: Powered by Framer Motion
- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS v4
- **Interactive Elements**: Hover effects, scroll animations, and micro-interactions
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading and smooth scrolling

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download the project files
2. Open the project folder in Visual Studio Code
3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🎨 Customization

### Colors
The space theme uses a lime green accent color (`#a3e635`). You can customize colors in:
- `/styles/globals.css` - CSS variables
- Tailwind classes throughout components

### Content
Update your personal information in:
- `/components/Hero.tsx` - Main intro section
- `/components/About.tsx` - About section and skills
- `/components/ProjectDetails.tsx` - Portfolio projects
- `/components/Contact.tsx` - Contact information

### Space Objects
Customize floating space elements in:
- `/components/SpaceObjects.tsx` - SVG components for space theme

## 📂 Project Structure

```
cosmic-portfolio/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── figma/             # Figma import components
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   ├── Hero.tsx           # Hero section
│   ├── Navigation.tsx     # Main navigation
│   ├── ProjectDetails.tsx # Portfolio projects
│   └── SpaceObjects.tsx   # Space-themed SVG components
├── styles/
│   └── globals.css        # Global styles and Tailwind config
├── public/
│   └── favicon.svg        # Site favicon
├── App.tsx                # Main app component
├── main.tsx              # App entry point
└── index.html            # HTML template
```

## 🌟 Key Sections

1. **Hero** - Animated landing section with call-to-action
2. **Skills Strip** - Scrolling technology showcase
3. **About** - Mission profile with statistics and experience
4. **Projects** - Interactive project showcase
5. **Achievements** - Cosmic achievements and metrics
6. **Contact** - Contact form and social links

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Components

1. Create component in `/components/`
2. Import and use in `App.tsx`
3. Add responsive classes for mobile/tablet/desktop

## 🚀 Deployment

The project can be deployed to any static hosting service:

- **Vercel**: Connect your Git repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **AWS S3**: Upload the build files

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

Made with 💚 and cosmic energy ✨

## 🌌 Space Theme Features

- Floating animated space objects (astronauts, planets, UFOs, rockets)
- Particle effects and cosmic backgrounds
- Lime green accent color with glow effects
- Smooth parallax scrolling
- Interactive hover animations
- Loading screen with cosmic theme
- Custom scrollbar styling
- Space-themed micro-interactions