/* The Bikini Bar — shared site behavior: cart drawer, nav, signup forms */

const CART_KEY = "tbb-cart";
const FREE_SHIPPING_THRESHOLD = 100;

const Cart = {
  read() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
      return [];
    }
  },
  write(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    renderCart();
  },
  add(item) {
    const items = Cart.read();
    items.push({ id: Date.now() + Math.random(), ...item });
    Cart.write(items);
    showToast(item.name + " added to your build");
    openCart();
  },
  remove(id) {
    Cart.write(Cart.read().filter((i) => i.id !== id));
  },
  total() {
    return Cart.read().reduce((sum, i) => sum + i.price, 0);
  },
};

function money(n) {
  return "$" + n.toFixed(2);
}

/* ---------- Cart drawer rendering ---------- */
function renderCart() {
  const items = Cart.read();
  const countEl = document.querySelector(".cart-count");
  if (countEl) countEl.textContent = items.length;

  const list = document.querySelector(".cart-items");
  if (!list) return;

  if (items.length === 0) {
    list.innerHTML =
      '<div class="cart-empty">' +
      '<p class="accent-line">Your bikini build is waiting.</p>' +
      '<p style="margin:14px 0 22px;">Pick your top, match your bottom, add your charms.</p>' +
      '<a class="button-primary" href="builder.html">Start Building</a>' +
      "</div>";
  } else {
    const sections = ["Top", "Bottom", "Ties", "Charms", "Accessories"];
    let html = "";
    sections.forEach((section) => {
      const inSection = items.filter((i) => i.section === section);
      if (!inSection.length) return;
      html +=
        '<p class="ship-label" style="margin-top:14px;">' + section + "</p>";
      inSection.forEach((i) => {
        html +=
          '<div class="cart-item">' +
          "<div>" +
          '<p class="item-name">' + i.name + "</p>" +
          (i.detail ? '<p class="item-detail">' + i.detail + "</p>" : "") +
          '<button class="item-remove" data-remove="' + i.id + '">Remove</button>' +
          "</div>" +
          "<span>" + money(i.price) + "</span>" +
          "</div>";
      });
    });
    list.innerHTML = html;
  }

  const totalEl = document.querySelector(".cart-total-amount");
  if (totalEl) totalEl.textContent = money(Cart.total());

  const fill = document.querySelector(".shipping-bar .fill");
  const shipLabel = document.querySelector(".shipping-bar .ship-label");
  if (fill && shipLabel) {
    const total = Cart.total();
    const pct = Math.min(100, (total / FREE_SHIPPING_THRESHOLD) * 100);
    fill.style.width = pct + "%";
    shipLabel.textContent =
      total >= FREE_SHIPPING_THRESHOLD
        ? "You unlocked free shipping"
        : money(FREE_SHIPPING_THRESHOLD - total) + " away from free shipping";
  }
}

function openCart() {
  document.querySelector(".cart-drawer")?.classList.add("open");
  document.querySelector(".cart-overlay")?.classList.add("open");
}

function closeCart() {
  document.querySelector(".cart-drawer")?.classList.remove("open");
  document.querySelector(".cart-overlay")?.classList.remove("open");
}

/* ---------- Toast ---------- */
let toastTimer;
function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

/* ---------- Wiring ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderCart();

  document.querySelector(".cart-button")?.addEventListener("click", openCart);
  document.querySelector(".cart-close")?.addEventListener("click", closeCart);
  document.querySelector(".cart-overlay")?.addEventListener("click", closeCart);

  document.querySelector(".menu-toggle")?.addEventListener("click", () => {
    document.querySelector(".main-nav")?.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    const removeId = e.target.dataset?.remove;
    if (removeId) Cart.remove(Number(removeId));

    const addBtn = e.target.closest("[data-add-name]");
    if (addBtn) {
      Cart.add({
        name: addBtn.dataset.addName,
        price: Number(addBtn.dataset.addPrice),
        section: addBtn.dataset.addSection || "Accessories",
        detail: addBtn.dataset.addDetail || "",
      });
    }
  });

  document.querySelectorAll(".signup-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type=email]");
      if (input?.value) {
        showToast("You're on the list. First access is yours.");
        input.value = "";
      }
    });
  });

  document.querySelector(".inquiry-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Got it! We'll get back to you with details and pricing.");
    e.target.reset();
  });
});
