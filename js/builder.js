/* The Bikini Bar — Build Your Bikini styling bar */

const BUILDER = {
  tops: [
    { id: "triangle", name: "Triangle Top", price: 39.99 },
    { id: "bandeau", name: "Bandeau Top", price: 39.99 },
    { id: "halter", name: "Halter Top", price: 42.99 },
    { id: "underwire", name: "Underwire Top", price: 44.99 },
  ],
  bottoms: [
    { id: "tie-side", name: "Tie-Side Bottom", price: 39.99 },
    { id: "cheeky", name: "Cheeky Bottom", price: 39.99 },
    { id: "high-waist", name: "High-Waist Bottom", price: 42.99 },
    { id: "classic", name: "Classic Bottom", price: 39.99 },
  ],
  colors: [
    { id: "shell-cream", name: "Shell Cream", hex: "#FFF7ED" },
    { id: "petal-pink", name: "Petal Pink", hex: "#FFC1D6" },
    { id: "flamingo-pink", name: "Flamingo Pink", hex: "#FF4FA3" },
    { id: "coral-crush", name: "Coral Crush", hex: "#FF6F61" },
    { id: "gold-rush", name: "Gold Rush", hex: "#D4AF37" },
    { id: "salted-sage", name: "Salted Sage", hex: "#6F8F6B" },
    { id: "palm-green", name: "Palm Green", hex: "#0F3D2E" },
    { id: "tide-pool", name: "Tide Pool Teal", hex: "#1EB6A7" },
    { id: "after-dark", name: "After Dark", hex: "#1C1014" },
  ],
  charms: [
    { id: "gold-star", name: "Gold Star", price: 4.0 },
    { id: "palm-tree", name: "Palm Tree", price: 4.0 },
    { id: "martini", name: "Martini", price: 5.0 },
    { id: "cherry", name: "Cherry", price: 4.0 },
    { id: "heart", name: "Heart Charm", price: 4.0 },
    { id: "letter", name: "Letter Charm", price: 4.0 },
    { id: "pearl", name: "Pearl Drop", price: 5.0 },
    { id: "sun", name: "Sun Charm", price: 4.0 },
  ],
};

const build = { top: null, bottom: null, color: null, charms: [] };

function money(n) {
  return "$" + n.toFixed(2);
}

function buildTotal() {
  let total = 0;
  if (build.top) total += build.top.price;
  if (build.bottom) total += build.bottom.price;
  build.charms.forEach((c) => (total += c.price));
  return total;
}

function buildComplete() {
  return build.top && build.bottom && build.color;
}

function renderOptions(containerId, items, type) {
  const el = document.getElementById(containerId);
  el.innerHTML = items
    .map(
      (item) =>
        '<div class="option-card" data-type="' + type + '" data-id="' + item.id + '">' +
        '<p class="option-name">' + item.name + "</p>" +
        '<p class="option-price">' + money(item.price) + "</p>" +
        "</div>"
    )
    .join("");
}

function renderColors() {
  const el = document.getElementById("color-options");
  el.innerHTML = BUILDER.colors
    .map(
      (c) =>
        "<div>" +
        '<button class="color-swatch" data-type="color" data-id="' + c.id +
        '" style="background:' + c.hex + ';" aria-label="' + c.name + '"></button>' +
        '<span class="swatch-name">' + c.name + "</span>" +
        "</div>"
    )
    .join("");
}

function updateUI() {
  document.getElementById("summary-top").textContent = build.top ? build.top.name : "—";
  document.getElementById("summary-bottom").textContent = build.bottom ? build.bottom.name : "—";
  document.getElementById("summary-color").textContent = build.color ? build.color.name : "—";
  document.getElementById("summary-charms").textContent = build.charms.length
    ? build.charms.map((c) => c.name).join(", ")
    : "—";

  const total = money(buildTotal());
  document.getElementById("build-total").textContent = total;
  document.getElementById("sticky-total").textContent = total;

  if (build.color) {
    const stage = document.getElementById("preview-stage");
    stage.style.background = build.color.hex + "26";
    const icon = document.getElementById("preview-icon");
    const stroke = build.color.id === "shell-cream" ? "#D4AF37" : build.color.hex;
    icon.setAttribute("stroke", stroke);
  }

  document.querySelector('[data-step="top"]').classList.toggle("done", !!build.top);
  document.querySelector('[data-step="bottom"]').classList.toggle("done", !!build.bottom);
  document.querySelector('[data-step="color"]').classList.toggle("done", !!build.color);
  document.querySelector('[data-step="charms"]').classList.toggle("done", build.charms.length > 0);
  document.querySelector('[data-step="review"]').classList.toggle("done", buildComplete());

  const review = document.getElementById("review-text");
  if (buildComplete()) {
    const charmText = build.charms.length
      ? " with " + build.charms.map((c) => c.name).join(", ")
      : "";
    review.textContent =
      "Your build: " + build.color.name + " " + build.top.name + " + " +
      build.bottom.name + charmText + ". Total " + total + ". Make it yours.";
  } else {
    review.textContent = "Make your picks above and your build will come together here.";
  }

  ["add-build", "add-build-bottom", "add-build-sticky"].forEach((id) => {
    document.getElementById(id).disabled = !buildComplete();
  });
}

function addBuildToCart() {
  if (!buildComplete()) return;
  const colorName = build.color.name;
  Cart.add({
    name: colorName + " " + build.top.name,
    price: build.top.price,
    section: "Top",
    detail: "Build Your Bikini",
  });
  Cart.add({
    name: colorName + " " + build.bottom.name,
    price: build.bottom.price,
    section: "Bottom",
    detail: "Build Your Bikini",
  });
  build.charms.forEach((c) =>
    Cart.add({ name: c.name, price: c.price, section: "Charms", detail: "Charm Bar" })
  );
  showToast("Your build is on the tab");
}

document.addEventListener("DOMContentLoaded", () => {
  renderOptions("top-options", BUILDER.tops, "top");
  renderOptions("bottom-options", BUILDER.bottoms, "bottom");
  renderColors();
  renderOptions("charm-options", BUILDER.charms, "charm");

  document.addEventListener("click", (e) => {
    const card = e.target.closest("[data-type]");
    if (!card) return;
    const { type, id } = card.dataset;

    if (type === "top" || type === "bottom") {
      const list = type === "top" ? BUILDER.tops : BUILDER.bottoms;
      build[type] = list.find((i) => i.id === id);
      card.parentElement
        .querySelectorAll(".option-card")
        .forEach((c) => c.classList.toggle("selected", c === card));
    } else if (type === "color") {
      build.color = BUILDER.colors.find((c) => c.id === id);
      document
        .querySelectorAll(".color-swatch")
        .forEach((s) => s.classList.toggle("selected", s === card));
    } else if (type === "charm") {
      const charm = BUILDER.charms.find((c) => c.id === id);
      const idx = build.charms.findIndex((c) => c.id === id);
      if (idx >= 0) {
        build.charms.splice(idx, 1);
        card.classList.remove("selected");
      } else {
        build.charms.push(charm);
        card.classList.add("selected");
      }
    }
    updateUI();
  });

  ["add-build", "add-build-bottom", "add-build-sticky"].forEach((id) => {
    document.getElementById(id).addEventListener("click", addBuildToCart);
  });

  updateUI();
});
