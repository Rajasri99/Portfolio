/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        lime: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#365314',
          900: '#1a2e05',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.3' },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
            filter: 'drop-shadow(0 0 10px rgba(163, 230, 53, 0.3))',
          },
          '33%': { 
            transform: 'translateY(-20px) rotate(2deg)',
            filter: 'drop-shadow(0 0 15px rgba(163, 230, 53, 0.5))',
          },
          '66%': { 
            transform: 'translateY(-10px) rotate(-2deg)',
            filter: 'drop-shadow(0 0 12px rgba(163, 230, 53, 0.4))',
          },
        },
        'float-slow': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
            filter: 'drop-shadow(0 0 8px rgba(163, 230, 53, 0.2))',
          },
          '50%': { 
            transform: 'translateY(-30px) rotate(1deg)',
            filter: 'drop-shadow(0 0 20px rgba(163, 230, 53, 0.4))',
          },
        },
        orbit: {
          '0%': { 
            transform: 'rotate(0deg) translateX(100px) rotate(0deg)',
            filter: 'drop-shadow(0 0 5px rgba(163, 230, 53, 0.3))',
          },
          '100%': { 
            transform: 'rotate(360deg) translateX(100px) rotate(-360deg)',
            filter: 'drop-shadow(0 0 15px rgba(163, 230, 53, 0.5))',
          },
        },
        'lime-glow': {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 10px rgba(163, 230, 53, 0.4))',
          },
          '50%': { 
            filter: 'drop-shadow(0 0 20px rgba(163, 230, 53, 0.8))',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        twinkle: "twinkle 10s infinite",
        'float-animation': "float 6s ease-in-out infinite",
        'float-slow': "float-slow 8s ease-in-out infinite",
        'orbit-animation': "orbit 20s linear infinite",
        'lime-glow': "lime-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}