# البـاشـا — Al Basha Menu

A Next.js 14 (TypeScript + Tailwind CSS) digital menu for **Al Basha** restaurant — مخبز · فول · حمص.

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--sand-bg` | `#F5DFA0` | Page background |
| `--brown` | `#3B1F08` | Primary text, footer |
| `--flame` | `#FF7B00` | Flame, CTA accents |
| `--sand` | `#C8861E` | Borders, ornaments |
| `--cream` | `#FFF8E7` | Card backgrounds |

## Project Structure

```
albasha-menu/
├── app/
│   ├── globals.css       # Global styles, CSS variables, animations
│   ├── layout.tsx        # Root layout (Arabic RTL, Google Fonts)
│   └── page.tsx          # Main page
├── components/
│   ├── Header.tsx        # Brand header with OvenLogo SVG
│   ├── OvenLogo.tsx      # Animated SVG logo matching brand
│   ├── CategoryTabs.tsx  # Sticky navigation tabs
│   ├── MenuSection.tsx   # Category section wrapper
│   ├── MenuCard.tsx      # Individual item card
│   ├── MenuClient.tsx    # Client component (state, tab switching)
│   └── Footer.tsx        # Footer with hours
├── data/
│   └── menu.ts           # Full menu data (Arabic + English)
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev
# → Open http://localhost:3000

# Production build
npm run build
npm start
```

## Customization

### Update menu items
Edit `data/menu.ts` — each item has:
- `nameAr` / `nameEn` — Arabic and English names
- `descAr` / `descEn` — descriptions
- `price` — in USD (change currency in `MenuCard.tsx`)
- `tag` — `"popular"` | `"new"` | `"chef"` | `undefined`
- `emoji` — decorative emoji icon

### Update prices/currency
In `components/MenuCard.tsx`, change the `$` symbol and `.toFixed(2)` logic.

### Add a category
In `data/menu.ts`, push a new object to `menuCategories` following the existing shape.

## Features

- ✅ Fully bilingual (Arabic RTL + English)
- ✅ Sticky category navigation tabs
- ✅ Animated oven/flame SVG logo
- ✅ Smooth fade-in / stagger card animations
- ✅ Tag badges (popular / new / chef's pick)
- ✅ Brand-accurate warm sand + brown color palette
- ✅ Google Fonts: Noto Naskh Arabic + Playfair Display
- ✅ Mobile-first responsive layout
- ✅ No external icon library dependencies
