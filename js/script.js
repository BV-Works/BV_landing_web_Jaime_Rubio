// Navigation menu functionality

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

// Carousel functionality

const track = document.querySelector(".carousel-track");

let isDragging = false;
let startX = 0;
let startScroll = 0;

track.addEventListener("pointerdown", (e) => {
  isDragging = true;
  track.setPointerCapture(e.pointerId);
  startX = e.clientX;
  startScroll = track.scrollLeft;
  track.classList.add("dragging");
});

track.addEventListener("pointermove", (e) => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  track.scrollLeft = startScroll - dx;
});

track.addEventListener("pointerup", (e) => {
  isDragging = false;
  track.releasePointerCapture(e.pointerId);
  track.classList.remove("dragging");
});

track.addEventListener("pointercancel", () => {
  isDragging = false;
  track.classList.remove("dragging");
});