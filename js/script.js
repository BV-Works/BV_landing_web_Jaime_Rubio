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

const tracks = document.querySelectorAll(".carousel-track");

tracks.forEach((track) => {
  let isDragging = false;
  let startX = 0;
  let startScroll = 0;
  let velocity = 0;
  let rafID;

  const animate = () => {
    if (!isDragging) {
      track.scrollLeft += velocity;
      velocity *= 0.95; // fricción
      if (Math.abs(velocity) > 0.5) {
        rafID = requestAnimationFrame(animate);
      }
    }
  };

  track.addEventListener("pointerdown", (e) => {
    isDragging = true;
    track.setPointerCapture(e.pointerId);
    startX = e.clientX;
    startScroll = track.scrollLeft;
    velocity = 0;
    track.classList.add("dragging");
    cancelAnimationFrame(rafID);
  });

  track.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    velocity = -dx; // guarda la velocidad para inercia
    track.scrollLeft = startScroll - dx;
  });

  const stopDragging = () => {
    isDragging = false;
    track.releasePointerCapture(e.pointerId);
    track.classList.remove("dragging");
    rafID = requestAnimationFrame(animate); // inicia la inercia
  };

  track.addEventListener("pointerup", stopDragging);
  track.addEventListener("pointercancel", stopDragging);
});