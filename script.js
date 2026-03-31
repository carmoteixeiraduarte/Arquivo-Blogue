const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links a, .brand");

const closeMenu = () => {
  if (!menuToggle || !navLinks) return;

  menuToggle.classList.remove("is-open");
  navLinks.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
};

const toggleMenu = () => {
  if (!menuToggle || !navLinks) return;

  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
};

if (menuToggle) {
  menuToggle.addEventListener("click", toggleMenu);
}

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

document.addEventListener("click", (event) => {
  if (!navLinks || !menuToggle) return;
  if (navLinks.contains(event.target) || menuToggle.contains(event.target)) return;
  closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});

document.querySelectorAll('a[href^="#"]:not(#botao-topo)').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    const targetElement = targetId ? document.querySelector(targetId) : null;

    if (!targetElement) return;

    event.preventDefault();
    const header = document.querySelector(".site-header");
    const offset = header ? header.offsetHeight + 14 : 0;
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: "smooth",
    });
  });
});

const botaoTopo = document.getElementById("botao-topo");

if (botaoTopo) {
  botaoTopo.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
