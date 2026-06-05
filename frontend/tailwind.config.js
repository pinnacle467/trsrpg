/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        display: ['Oswald', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0A0A0F',
          deep: '#050507',
          card: '#0f0c18',
          soft: '#16121f',
        },
        brand: {
          purpleDeep: '#6B21A8',
          purple: '#9333EA',
          blue: '#2563EB',
          blueDark: '#1E3A5F',
          neon: '#3B82F6',
        },
        blood: '#DC2626',
        warn: '#F59E0B',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(147,51,234,0.25), 0 18px 60px -20px rgba(147,51,234,0.45)',
        'glow-blue': '0 0 0 1px rgba(59,130,246,0.25), 0 18px 60px -20px rgba(59,130,246,0.45)',
        'glow-blood': '0 0 0 1px rgba(220,38,38,0.3), 0 18px 60px -20px rgba(220,38,38,0.5)',
      },
      backgroundImage: {
        'hero-grad': 'linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f172a 100%)',
        'btn-grad': 'linear-gradient(90deg, #6B21A8, #2563EB)',
        'text-grad': 'linear-gradient(90deg, #D8B4FE, #93C5FD)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        floatUp: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-120px) scale(0.4)', opacity: '0' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 18px 0 rgba(220,38,38,0.45)' },
          '50%': { boxShadow: '0 0 46px 8px rgba(220,38,38,0.85)' },
        },
        bounceSlow: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
