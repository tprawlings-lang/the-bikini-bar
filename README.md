# The Bikini Bar by Desert Tide

**Build Your Bikini. Your Way.** Customize. Mix. Match. Shine.

A customizable swimwear ecommerce site for The Bikini Bar — a build-your-own
bikini brand with a neon cocktail-bar identity: hot pink script neon,
amber-gold accents, and a warm midnight backdrop. Structure modeled on
blookini.com; collections read as house cocktails, the builder as the menu,
and the cart as your tab. Full identity spec in [BRAND.md](BRAND.md).

Live site: https://tprawlings-lang.github.io/the-bikini-bar/

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Homepage | `index.html` | Hero, how-it-works steps, collection tiles, Charm Bar, events banner, email signup |
| Builder | `builder.html` | 5-step Build Your Bikini flow with live preview, pricing, and sticky mobile CTA |
| Shop | `shop.html` | Product grid with type + collection filters (`?collection=` deep links supported) |
| Events | `events.html` | Pop-up calendar and bachelorette inquiry form |

Shared across all pages: sticky header, cart drawer (`Your Tab`) with a
free-shipping progress bar and upsell, and the neon-trimmed midnight footer.

## Stack

Static HTML + CSS + vanilla JavaScript. No build step.

- `css/styles.css` — full brand token system (colors, typography, buttons, cards) per the brand kit
- `js/main.js` — cart drawer (localStorage), nav, signup forms, toasts
- `js/builder.js` — builder state, option/swatch selection, build-to-cart
- `js/shop.js` — product data and collection filtering

## Run locally

Any static server works:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Collections — The House Menu

Desert Tide Signature · Pink Paloma · Midnight Margarita · Sunset Spritz · Bride's Last Splash
