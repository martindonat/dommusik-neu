(() => {
  // <stdin>
  (() => {
    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-nav]");
    const header = document.querySelector("[data-header]");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!open));
        nav.classList.toggle("is-open", !open);
        document.body.classList.toggle("nav-open", !open);
      });
    }
    const carousel = document.querySelector("[data-carousel]");
    if (carousel) {
      const slides = [...carousel.querySelectorAll("[data-slide]")];
      const dots = [...carousel.querySelectorAll("[data-carousel-dot]")];
      const prev = carousel.querySelector("[data-carousel-prev]");
      const next = carousel.querySelector("[data-carousel-next]");
      let index = 0;
      let timer;
      const show = (newIndex) => {
        index = (newIndex + slides.length) % slides.length;
        slides.forEach((slide, i) => {
          const active = i === index;
          slide.classList.toggle("is-active", active);
          slide.setAttribute("aria-hidden", String(!active));
        });
        dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
      };
      const start = () => {
        window.clearInterval(timer);
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          timer = window.setInterval(() => show(index + 1), 7e3);
        }
      };
      prev?.addEventListener("click", () => {
        show(index - 1);
        start();
      });
      next?.addEventListener("click", () => {
        show(index + 1);
        start();
      });
      dots.forEach((dot, i) => dot.addEventListener("click", () => {
        show(i);
        start();
      }));
      carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
      carousel.addEventListener("mouseleave", start);
      start();
    }
    const topButton = document.querySelector("[data-back-to-top]");
    if (topButton) {
      const update = () => topButton.classList.toggle("is-visible", window.scrollY > 500);
      window.addEventListener("scroll", update, { passive: true });
      topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
      update();
    }
    const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  })();
})();
//# sourceMappingURL=main.js.map
