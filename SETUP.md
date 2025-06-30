# 🚀 Cosmic Portfolio Setup Guide

## Quick Start

1. **Extract/Download** all project files to a folder
2. **Open** the folder in Visual Studio Code
3. **Open Terminal** in VS Code (Terminal → New Terminal)
4. **Install dependencies:**
   ```bash
   npm install
   ```
5. **Start development server:**
   ```bash
   npm run dev
   ```
6. **Open browser** and visit `http://localhost:3000`

## 📋 Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Visual Studio Code** - [Download here](https://code.visualstudio.com/)

## 🛠️ Commands

```bash
# Install dependencies
npm install

# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for code issues
npm run lint
```

## 📁 Project Structure

```
cosmic-portfolio/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   └── *.tsx            # Main app components
├── styles/              # CSS styles
├── public/              # Static assets
├── index.html           # Entry HTML
├── main.tsx            # React entry point
├── App.tsx             # Main app component
└── vite.config.ts      # Vite configuration
```

## 🎨 Customization

### Colors
- Edit `/styles/globals.css` for theme colors
- Lime green (#a3e635) is the primary accent

### Content
- Update `/components/Hero.tsx` for intro section
- Modify `/components/About.tsx` for about info
- Edit `/components/Contact.tsx` for contact details

## 🔧 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3001
```

### Clear Cache
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Issues
```bash
npm run build
```

## 📞 Need Help?

If you encounter any issues:
1. Check Node.js version: `node --version` (should be 18+)
2. Clear npm cache: `npm cache clean --force`
3. Restart VS Code
4. Try deleting `node_modules` and running `npm install` again

## 🌟 Features

- ✅ Responsive design
- ✅ Smooth animations
- ✅ Space theme with lime accents
- ✅ Contact form
- ✅ Project showcase
- ✅ Interactive elements
- ✅ Mobile-friendly navigation

---

**You're all set! 🚀 Your cosmic portfolio is ready to launch!**