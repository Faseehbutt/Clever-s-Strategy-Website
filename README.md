# Clever Community - TradingView Indicators & Strategies

A modern, minimalistic, high-end animated website to showcase TradingView indicators and strategies.

## Features

- 🎨 Sleek, futuristic dark theme with neon gold and teal highlights
- ✨ Smooth animations using Framer Motion
- 🎭 Glass-morphism effects and parallax backgrounds
- 📱 Fully responsive design for mobile and desktop
- 🎯 Interactive strategy filters
- 💫 Particle animations and floating glow effects
- ⚡ Built with Next.js 14 for optimal performance

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── BackgroundAnimation.tsx  # Canvas particle animation
│   ├── FloatingGlow.tsx        # Floating cursor-following elements
│   ├── Hero.tsx                # Hero section
│   ├── Indicators.tsx          # Indicators grid
│   ├── Strategies.tsx          # Strategies with filters
│   ├── About.tsx               # About us section
│   └── Footer.tsx              # Footer with social links
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the neon colors:

```js
colors: {
  neon: {
    gold: '#FFD700',      // Change gold color
    teal: '#00F5FF',      // Change teal color
  }
}
```

### Content

Update the data arrays in each component:
- `Indicators.tsx` - Edit the `indicators` array
- `Strategies.tsx` - Edit the `strategies` array and `filters` array
- `About.tsx` - Modify the about text and values

### Social Links

Update the `socialLinks` array in `Footer.tsx` with your actual links.

## License

MIT
