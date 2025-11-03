# Quick Start Guide

## Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Update Social Links
Edit `components/Footer.tsx` and update the `socialLinks` array with your actual URLs.

### Add Your Indicators/Strategies
- **Indicators**: Edit the `indicators` array in `components/Indicators.tsx`
- **Strategies**: Edit the `strategies` array in `components/Strategies.tsx`

### Customize Colors
Edit `tailwind.config.js` to change the neon colors:
```js
colors: {
  neon: {
    gold: '#FFD700',  // Change gold
    teal: '#00F5FF',  // Change teal
  }
}
```

## Build for Production

```bash
npm run build
npm start
```

Enjoy your new website! 🚀
