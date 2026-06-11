# The Bikini Bar

**Build Your Bikini.** Mix. Match. Charm. Repeat.

A customizable swimwear ecommerce site for The Bikini Bar — a build-your-own
bikini brand made for pool days, vacations, bachelorette trips, and
Scottsdale-style social shopping. Structure modeled on blookini.com, with
The Bikini Bar brand identity applied throughout.

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Homepage | `index.html` | Hero, how-it-works steps, collection tiles, Charm Bar, events banner, email signup |
| Builder | `builder.html` | 5-step Build Your Bikini flow with live preview, pricing, and sticky mobile CTA |
| Shop | `shop.html` | Product grid with type + collection filters (`?collection=` deep links supported) |
| Events | `events.html` | Pop-up calendar and bachelorette inquiry form |

Shared across all pages: sticky header, cart drawer (`Your Bikini Build`)
with a free-shipping progress bar and upsell, and the cactus-green footer.

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

## Collections

Desert Luxe · Wild Print · Neon Nights · Bridal Pool Party · Scottsdale Edit
