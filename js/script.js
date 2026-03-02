const menuToggle = document.getElementById("menu-toggle");
const menuToggleClose = document.getElementById("menu-toggle-close");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("nav-overlay");
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  menuToggleClose.classList.toggle("active");
});
menuToggleClose.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  menuToggleClose.classList.remove("active");
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 762) {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    menuToggleClose.classList.remove("active");
  }
});