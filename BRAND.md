# The Bikini Bar by Desert Tide — Brand Kit v2.0

**Resort daylight × cocktail bar.** Customize. Mix. Match. Shine.

Implementation of the official Brand Kit v2.0 PDF (June 2026). v2 trades the
neon-noir look for resort daylight: shell cream backgrounds, palm green
anchors, gold charm details, flamingo pink CTAs. The cocktail bar concept,
funnel naming, and component architecture are unchanged — only the skin.

---

## Color System (token names per kit §06)

| Token | Color | Hex | Usage |
| --- | --- | --- | --- |
| `--bb-neon` | Flamingo Pink | `#FF4FA3` | Primary brand · CTAs · links · active |
| `--bb-glow` | Petal | `#FFC1D6` | Hovers · light pink surfaces · tints · card borders |
| `--bb-amber` / `--bb-gold` | Gold | `#D4AF37` | Secondary accent · badges · charms · focus rings |
| `--bb-ink` | Palm Green | `#0F3D2E` | Text · footer · dark-mode background |
| `--bb-ink-2` | Dark surface | `#175941` | Cards on Palm Green |
| `--bb-coral` | Sage | `#6F8F6B` | Borders · icons · secondary text |
| `--bb-cream` | Shell Cream | `#FFF7ED` | DEFAULT page background |

Derived: muted text on cream `#5E6E5B` · petal band `rgba(255,193,214,.35)` ·
gold divider 1px `#D4AF37` at 60% · sunset gradient `linear-gradient(90deg,#FF4FA3,#D4AF37)`.

**60/30/10, beach edition:** cream dominates · green grounds · pink pops · gold garnishes.

## Typography

| Role | Font | Treatment |
| --- | --- | --- |
| Display / script | **Selima** (self-hosted), fallback **Sacramento** | Hero headlines, section flourishes, 'by' moments. Never under 28px, never body copy. |
| Headline | **Montserrat 700** | Page titles, nav, product names, buttons. Uppercase labels tracked +0.12em. |
| Body | **Montserrat 400/500** | Product copy, forms, helper text. 16px base, 1.6 line height. |

Note: Selima is not on Google Fonts — when the woff2 is sourced, add the
`@font-face` and the stack `'Selima','Sacramento',cursive` picks it up
automatically. Sacramento currently renders.

## Components

- **Primary button:** bg `#FF4FA3`, white text 700, pill; hover `#E8418F`, no glow.
- **Secondary button:** 1.5px Palm Green border, palm text; hover fills palm, cream text.
- **Tertiary/gold:** gold border or gold underline accents; focus ring 2px `#D4AF37` offset 2 (all modes).
- **Menu card (product):** white on cream, 1px Petal border, radius 16, Petal image well,
  price Montserrat 700 in pink; hover `translateY(-4px)` + `0 10px 30px rgba(15,61,46,.12)`.
- Shadows: soft `0 8px 30px rgba(15,61,46,.10)` · pop `0 6px 20px rgba(255,79,163,.25)`.

## Mode Flip — Poolside is default

- **Poolside (light, DEFAULT):** bg Shell Cream, cards white, text Palm Green, CTA Flamingo Pink.
- **After Dark (evening accent):** bg Palm Green, surfaces `#175941`, text Shell Cream,
  accents Gold + Petal. CTA stays pink in both. **The footer is always After Dark.**

## Accessibility (per kit §05)

Pink fails contrast on cream for body text (2.9:1) — pink is **display + buttons
only**; all reading text on cream is Palm Green (11.5:1 AAA). Sage on cream is
large text/icons only. Focus rings are gold everywhere.

## Logo

`assets/logo-primary.svg` — full vector lockup (gold ring, palm, pink script
"Bikini", BAR caps, bikini icon, star charm, arc tagline, by Desert Tide),
reconstructed from the delivered source. Uses live text (Selima/Sacramento +
Montserrat); it's inlined in the homepage hero so page webfonts apply.
Usage: primary lockup on Shell Cream or white only; never recolor the script
to gold or green; clear space = height of 'B' in BAR; min width 120px digital.

## Voice — unchanged cocktail-bar contract

Tab, close out, on the menu, garnish, last call, happy hour, order's up.

| Location | Copy |
| --- | --- |
| Tagline (footer/packaging) | Build your bikini. Your way. |
| Brand line | Customize. Mix. Match. Shine. |
| Cart header | Your Tab |
| Cart upsell | One more for the road? |
| Empty cart | Nothing on your tab yet. |
| Limited drops | Happy Hour / Last Call / After Dark |
| Events | Bring the bar to your party. |

## Collections — The House Menu

| Collection | Label | Tile treatment |
| --- | --- | --- |
| Desert Tide Signature | House Pour | After Dark: palm green + gold |
| Pink Paloma | Signature Mix | Petal pink, pink script |
| Midnight Margarita | After Dark | Deep green `#175941` + sage |
| Sunset Spritz | Happy Hour | Peach → petal gradient |
| Bride's Last Splash | Bachelorette Special | White + gold |

## Builder Color Menu

Shell Cream `#FFF7ED` · Petal Pink `#FFC1D6` · Flamingo Pink `#FF4FA3` ·
Coral Crush `#FF6F61` · Gold Rush `#D4AF37` · Salted Sage `#6F8F6B` ·
Palm Green `#0F3D2E` · Tide Pool Teal `#1EB6A7` · After Dark `#1C1014`
