document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  // MENU MOBILE
  toggle?.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // NAVBAR SCROLL
  window.addEventListener("scroll", () => {
    navbar?.classList.toggle("scrolled", window.scrollY > 50);
  });

  // GALERÍA CLICK
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });

  // =========================
  // FOOTER ANIMACIÓN (NUEVO)
  // =========================
  const footer = document.querySelector("footer");

  if (footer) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          footer.classList.add("visible");
        }
      });
    }, {
      threshold: 0.2
    });

    observer.observe(footer);
  }

});

// =========================
  // ocultar cta en footer
  // =========================

const stickyCTA = document.querySelector(".sticky-cta");

window.addEventListener("scroll", () => {

  const footer = document.querySelector("footer");
  const footerTop = footer.getBoundingClientRect().top;

  if (footerTop < window.innerHeight - 120) {
    stickyCTA.classList.add("hide");
  } else {
    stickyCTA.classList.remove("hide");
  }

});