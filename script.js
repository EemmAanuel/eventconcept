const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  if (loader) {
    setTimeout(() => loader.classList.add("hide"), 500);
  }
});

const heroMedia = document.querySelector(".hero-media");
const ctaBg = document.querySelector(".cta-bg");
let ticking = false;

function parallax() {
  const y = window.scrollY;

  if (heroMedia) {
    heroMedia.style.transform = `translateY(${y * 0.12}px) scale(1.06)`;
  }

  if (ctaBg) {
    const rect = ctaBg.parentElement.getBoundingClientRect();
    const offset =
      (window.innerHeight - rect.top) /
      (window.innerHeight + rect.height);

    ctaBg.style.transform = `translateY(${offset * 45 - 22}px) scale(1.06)`;
  }

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(parallax);
    ticking = true;
  }
});

const reveals = document.querySelectorAll(
  ".statement-copy, .service, .project, .process-card, .quote blockquote, .cta-content"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { opacity: 0, transform: "translateY(35px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          {
            duration: 800,
            easing: "cubic-bezier(.2,.8,.2,1)",
            fill: "forwards"
          }
        );

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((element) => observer.observe(element));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* Mobile navigation */
const menuButton = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".main-nav");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");

    menuButton.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      menuButton.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      mobileMenu.classList.remove("is-open");
      menuButton.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    }
  });
}