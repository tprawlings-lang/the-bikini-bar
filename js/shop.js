/* The Bikini Bar — shop grid, product data, and collection filters */

const ICONS = {
  top: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4l3 7h2l2-5.5L14 11h2l3-7M8 11c0 2.8 1.8 4.5 4 4.5s4-1.7 4-4.5"/></svg>',
  bottom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-5 8h-4L5 8zM5 8 3.5 5.5M19 8l1.5-2.5"/></svg>',
  ties: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5c-3 1-5 4-5 8s2 6 5 6 5-2 5-6-2-7-5-8zM12 5V3"/></svg>',
  charm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="5"/><path d="M12 9V5M10 3h4"/></svg>',
  accessory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.5 1.5M16.9 16.9l1.5 1.5M18.4 5.6l-1.5 1.5M7.1 16.9l-1.5 1.5"/></svg>',
};

/* bg = colorway swatch + icon color; fg overrides icon color for pale colorways */
const PRODUCTS = [
  { name: "Palm Green Triangle Top", price: 39.99, type: "tops", section: "Top", collections: ["signature"], icon: "top", bg: "#0F3D2E", swatches: ["#0F3D2E", "#D4AF37", "#FFF7ED"] },
  { name: "Gold Rush Bandeau Top", price: 39.99, type: "tops", section: "Top", collections: ["signature"], icon: "top", bg: "#D4AF37", swatches: ["#D4AF37", "#0F3D2E", "#FFF7ED"] },
  { name: "Flamingo Pink Halter Top", price: 42.99, type: "tops", section: "Top", collections: ["paloma"], icon: "top", bg: "#FF4FA3", badge: "Signature Mix", swatches: ["#FF4FA3", "#FFC1D6", "#FFF7ED"] },
  { name: "Petal Pink Triangle Top", price: 39.99, type: "tops", section: "Top", collections: ["paloma"], icon: "top", bg: "#FFC1D6", fg: "#E8418F", swatches: ["#FFC1D6", "#FF4FA3"] },
  { name: "After Dark Triangle Top", price: 39.99, type: "tops", section: "Top", collections: ["margarita"], icon: "top", bg: "#175941", badge: "Last Call", badgeClass: "neon", swatches: ["#175941", "#6F8F6B", "#D4AF37"] },
  { name: "Pearl Bride Bandeau Top", price: 42.99, type: "tops", section: "Top", collections: ["bridal"], icon: "top", bg: "#FFF7ED", fg: "#D4AF37", swatches: ["#FFF7ED", "#D4AF37"] },
  { name: "Coral Crush Halter Top", price: 42.99, type: "tops", section: "Top", collections: ["spritz"], icon: "top", bg: "#FF6F61", badge: "Happy Hour", swatches: ["#FF6F61", "#D4AF37", "#FFF7ED"] },

  { name: "Palm Green Tie-Side Bottom", price: 39.99, type: "bottoms", section: "Bottom", collections: ["signature"], icon: "bottom", bg: "#0F3D2E", swatches: ["#0F3D2E", "#D4AF37", "#FFF7ED"] },
  { name: "Gold Rush Cheeky Bottom", price: 39.99, type: "bottoms", section: "Bottom", collections: ["signature"], icon: "bottom", bg: "#D4AF37", swatches: ["#D4AF37", "#0F3D2E"] },
  { name: "Flamingo Pink Tie-Side Bottom", price: 42.99, type: "bottoms", section: "Bottom", collections: ["paloma"], icon: "bottom", bg: "#FF4FA3", swatches: ["#FF4FA3", "#FFC1D6"] },
  { name: "Salted Sage Cheeky Bottom", price: 39.99, type: "bottoms", section: "Bottom", collections: ["margarita"], icon: "bottom", bg: "#6F8F6B", badge: "Last Call", badgeClass: "neon", swatches: ["#6F8F6B", "#175941"] },
  { name: "Pearl Bride High-Waist Bottom", price: 44.99, type: "bottoms", section: "Bottom", collections: ["bridal"], icon: "bottom", bg: "#FFF7ED", fg: "#D4AF37", swatches: ["#FFF7ED", "#D4AF37"] },
  { name: "Coral Crush Classic Bottom", price: 39.99, type: "bottoms", section: "Bottom", collections: ["spritz"], icon: "bottom", bg: "#FF6F61", badge: "Happy Hour", swatches: ["#FF6F61", "#D4AF37"] },

  { name: "Gold Shimmer Ties (2)", price: 10.0, type: "ties", section: "Ties", collections: ["signature"], icon: "ties", bg: "#D4AF37", swatches: ["#D4AF37", "#0F3D2E"] },
  { name: "Palm Green Ties (2)", price: 10.0, type: "ties", section: "Ties", collections: ["signature"], icon: "ties", bg: "#0F3D2E", swatches: ["#0F3D2E", "#D4AF37"] },
  { name: "Flamingo Pink Ties (2)", price: 10.0, type: "ties", section: "Ties", collections: ["paloma"], icon: "ties", bg: "#FF4FA3", swatches: ["#FF4FA3", "#FFC1D6"] },
  { name: "Salted Sage Ties (2)", price: 10.0, type: "ties", section: "Ties", collections: ["margarita"], icon: "ties", bg: "#6F8F6B", swatches: ["#6F8F6B", "#175941"] },
  { name: "Pearl White Ties (2)", price: 10.0, type: "ties", section: "Ties", collections: ["bridal"], icon: "ties", bg: "#FFF7ED", fg: "#D4AF37", swatches: ["#FFF7ED", "#D4AF37"] },

  { name: "Gold Star Charm", price: 4.0, type: "charms", section: "Charms", collections: ["signature", "paloma"], icon: "charm", bg: "#D4AF37" },
  { name: "Palm Tree Charm", price: 4.0, type: "charms", section: "Charms", collections: ["signature"], icon: "charm", bg: "#0F3D2E" },
  { name: "Martini Charm", price: 5.0, type: "charms", section: "Charms", collections: ["margarita", "spritz"], icon: "charm", bg: "#6F8F6B" },
  { name: "Cherry Charm", price: 4.0, type: "charms", section: "Charms", collections: ["spritz", "paloma"], icon: "charm", bg: "#FF6F61" },
  { name: "Pearl Drop Charm", price: 5.0, type: "charms", section: "Charms", collections: ["bridal"], icon: "charm", bg: "#FFF7ED", fg: "#D4AF37", badge: "Bride Fave" },
  { name: "Letter Charm", price: 4.0, type: "charms", section: "Charms", collections: ["bridal", "paloma"], icon: "charm", bg: "#FF4FA3" },
  { name: "Heart Charm", price: 4.0, type: "charms", section: "Charms", collections: ["bridal", "spritz"], icon: "charm", bg: "#E8418F" },

  { name: "String Weaving Tool", price: 4.0, type: "accessories", section: "Accessories", collections: [], icon: "accessory", bg: "#6F8F6B" },
  { name: "Poolside Scrunchie", price: 8.0, type: "accessories", section: "Accessories", collections: ["spritz"], icon: "accessory", bg: "#FF6F61" },
  { name: "The Bikini Bar Gift Card", price: 25.0, type: "accessories", section: "Accessories", collections: [], icon: "accessory", bg: "#FF4FA3", badge: "Gift" },
];

function productCard(p) {
  const swatches = (p.swatches || [])
    .map((hex) => '<span class="swatch" style="background:' + hex + '"></span>')
    .join("");
  const badge = p.badge
    ? '<span class="product-badge ' + (p.badgeClass || "") + '">' + p.badge + "</span>"
    : "";
  return (
    '<div class="product-card">' +
    '<div class="product-image" style="color:' + (p.fg || p.bg) + ';">' +
    badge + ICONS[p.icon] +
    "</div>" +
    '<div class="product-info">' +
    "<h3>" + p.name + "</h3>" +
    '<p class="product-price">$' + p.price.toFixed(2) + "</p>" +
    '<div class="swatch-row">' + swatches + "</div>" +
    '<button class="button-secondary" data-add-name="' + p.name + '" data-add-price="' + p.price +
    '" data-add-section="' + p.section + '">Quick Add</button>' +
    "</div></div>"
  );
}

function renderShop(filter) {
  const grid = document.getElementById("product-grid");
  const visible = PRODUCTS.filter((p) => {
    if (!filter || filter === "all") return true;
    return p.type === filter || p.collections.includes(filter);
  });
  grid.innerHTML = visible.length
    ? visible.map(productCard).join("")
    : '<p class="accent-line">Nothing on the menu yet. New pours are coming.</p>';
}

document.addEventListener("DOMContentLoaded", () => {
  const param = new URLSearchParams(location.search).get("collection") || "all";
  const chips = document.querySelectorAll(".filter-chip");
  let active = "all";

  chips.forEach((chip) => {
    if (chip.dataset.filter === param) {
      active = param;
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
    }
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      renderShop(chip.dataset.filter);
    });
  });

  renderShop(active);
});
