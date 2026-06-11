/* The Bikini Bar — shop grid, product data, and collection filters */

const ICONS = {
  top: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4l3 7h2l2-5.5L14 11h2l3-7M8 11c0 2.8 1.8 4.5 4 4.5s4-1.7 4-4.5"/></svg>',
  bottom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-5 8h-4L5 8zM5 8 3.5 5.5M19 8l1.5-2.5"/></svg>',
  ties: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5c-3 1-5 4-5 8s2 6 5 6 5-2 5-6-2-7-5-8zM12 5V3"/></svg>',
  charm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="5"/><path d="M12 9V5M10 3h4"/></svg>',
  accessory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.5 1.5M16.9 16.9l1.5 1.5M18.4 5.6l-1.5 1.5M7.1 16.9l-1.5 1.5"/></svg>',
};

const PRODUCTS = [
  { name: "Cactus Green Triangle Top", price: 39.99, type: "tops", section: "Top", collections: ["desert-luxe", "scottsdale"], icon: "top", bg: "#0F5132", swatches: ["#0F5132", "#006B4F", "#F6EFE3"] },
  { name: "Desert Tan Bandeau Top", price: 39.99, type: "tops", section: "Top", collections: ["desert-luxe"], icon: "top", bg: "#D9B98F", swatches: ["#D9B98F", "#B88746", "#FFF9F0"] },
  { name: "Leopard Halter Top", price: 42.99, type: "tops", section: "Top", collections: ["wild-print"], icon: "top", bg: "#3a2d1c", badge: "Bold", swatches: ["#3a2d1c", "#C8A24A", "#111111"] },
  { name: "Zebra Triangle Top", price: 39.99, type: "tops", section: "Top", collections: ["wild-print"], icon: "top", bg: "#111111", swatches: ["#111111", "#FFF9F0"] },
  { name: "Neon Pink Triangle Top", price: 39.99, type: "tops", section: "Top", collections: ["neon-nights"], icon: "top", bg: "#FF2DAA", badge: "Limited Drop", badgeClass: "neon", swatches: ["#FF2DAA", "#B6FF00", "#111111"] },
  { name: "Ivory Bride Bandeau Top", price: 42.99, type: "tops", section: "Top", collections: ["bridal"], icon: "top", bg: "#C8A24A", swatches: ["#FFF9F0", "#C8A24A"] },
  { name: "Turquoise Halter Top", price: 42.99, type: "tops", section: "Top", collections: ["scottsdale"], icon: "top", bg: "#1EB6A7", swatches: ["#1EB6A7", "#0F5132", "#C8A24A"] },

  { name: "Cactus Green Tie-Side Bottom", price: 39.99, type: "bottoms", section: "Bottom", collections: ["desert-luxe", "scottsdale"], icon: "bottom", bg: "#0F5132", swatches: ["#0F5132", "#006B4F", "#F6EFE3"] },
  { name: "Desert Tan Cheeky Bottom", price: 39.99, type: "bottoms", section: "Bottom", collections: ["desert-luxe"], icon: "bottom", bg: "#D9B98F", swatches: ["#D9B98F", "#B88746"] },
  { name: "Leopard Tie-Side Bottom", price: 42.99, type: "bottoms", section: "Bottom", collections: ["wild-print"], icon: "bottom", bg: "#3a2d1c", swatches: ["#3a2d1c", "#C8A24A"] },
  { name: "Neon Lime Cheeky Bottom", price: 39.99, type: "bottoms", section: "Bottom", collections: ["neon-nights"], icon: "bottom", bg: "#7da300", badge: "Limited Drop", badgeClass: "neon", swatches: ["#B6FF00", "#FF2DAA", "#111111"] },
  { name: "Ivory Bride High-Waist Bottom", price: 44.99, type: "bottoms", section: "Bottom", collections: ["bridal"], icon: "bottom", bg: "#C8A24A", swatches: ["#FFF9F0", "#C8A24A"] },
  { name: "Pool Coral Classic Bottom", price: 39.99, type: "bottoms", section: "Bottom", collections: ["scottsdale"], icon: "bottom", bg: "#FF6F61", badge: "Summer", swatches: ["#FF6F61", "#1EB6A7", "#F6EFE3"] },

  { name: "Gold Shimmer Ties (2)", price: 10.0, type: "ties", section: "Ties", collections: ["desert-luxe"], icon: "ties", bg: "#B88746", swatches: ["#C8A24A", "#B88746"] },
  { name: "Emerald Ties (2)", price: 10.0, type: "ties", section: "Ties", collections: ["desert-luxe", "scottsdale"], icon: "ties", bg: "#006B4F", swatches: ["#006B4F", "#0F5132"] },
  { name: "Zebra Ties (2)", price: 10.0, type: "ties", section: "Ties", collections: ["wild-print"], icon: "ties", bg: "#111111", swatches: ["#111111", "#FFF9F0"] },
  { name: "Neon Pink Ties (2)", price: 10.0, type: "ties", section: "Ties", collections: ["neon-nights"], icon: "ties", bg: "#FF2DAA", swatches: ["#FF2DAA", "#B6FF00"] },
  { name: "Pearl White Ties (2)", price: 10.0, type: "ties", section: "Ties", collections: ["bridal"], icon: "ties", bg: "#C8A24A", swatches: ["#FFF9F0", "#C8A24A"] },

  { name: "Gold Star Charm", price: 4.0, type: "charms", section: "Charms", collections: ["desert-luxe", "wild-print"], icon: "charm", bg: "#C8A24A" },
  { name: "Mini Cactus Charm", price: 4.0, type: "charms", section: "Charms", collections: ["scottsdale"], icon: "charm", bg: "#0F5132" },
  { name: "Pearl Drop Charm", price: 5.0, type: "charms", section: "Charms", collections: ["bridal"], icon: "charm", bg: "#D9B98F", badge: "Bride Fave" },
  { name: "Martini Charm", price: 5.0, type: "charms", section: "Charms", collections: ["neon-nights", "scottsdale"], icon: "charm", bg: "#1EB6A7" },
  { name: "Letter Charm", price: 4.0, type: "charms", section: "Charms", collections: ["bridal", "wild-print"], icon: "charm", bg: "#B88746" },
  { name: "Heart Charm", price: 4.0, type: "charms", section: "Charms", collections: ["bridal", "neon-nights"], icon: "charm", bg: "#FF6F61" },

  { name: "String Weaving Tool", price: 4.0, type: "accessories", section: "Accessories", collections: [], icon: "accessory", bg: "#B88746" },
  { name: "Poolside Scrunchie", price: 8.0, type: "accessories", section: "Accessories", collections: ["desert-luxe"], icon: "accessory", bg: "#D9B98F" },
  { name: "The Bikini Bar Gift Card", price: 25.0, type: "accessories", section: "Accessories", collections: [], icon: "accessory", bg: "#0F5132", badge: "Gift" },
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
    '<div class="product-image" style="background: linear-gradient(160deg, ' + p.bg + '22, ' + p.bg + '55); color:' + p.bg + ';">' +
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
    : '<p class="accent-line">Nothing here yet. New drops are coming.</p>';
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
