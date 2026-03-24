const GALLERY_SELECTOR = "[data-project-gallery]";

function initProjectGallery(root: HTMLElement): void {
  if (root.dataset.galleryReady === "true") return;

  const slides = Array.from(
    root.querySelectorAll<HTMLElement>("[data-project-gallery-slide]"),
  );
  const indicators = Array.from(
    root.querySelectorAll<HTMLButtonElement>(
      "[data-project-gallery-indicator]",
    ),
  );
  const prevButton = root.querySelector<HTMLButtonElement>(
    "[data-project-gallery-prev]",
  );
  const nextButton = root.querySelector<HTMLButtonElement>(
    "[data-project-gallery-next]",
  );
  const caption = root.querySelector<HTMLElement>(
    "[data-project-gallery-caption]",
  );

  if (!slides.length || !caption) {
    root.dataset.galleryReady = "true";
    return;
  }

  let currentIndex = slides.findIndex((slide) =>
    slide.classList.contains("is-active"),
  );

  if (currentIndex < 0) {
    currentIndex = 0;
    slides[0]?.classList.add("is-active");
    slides[0]?.setAttribute("aria-hidden", "false");
  }

  let isAnimating = false;

  const syncIndicators = (activeIndex: number): void => {
    indicators.forEach((indicator, index) => {
      const isActive = index === activeIndex;
      indicator.classList.toggle("is-active", isActive);
      indicator.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  const render = (nextIndex: number): void => {
    if (isAnimating || nextIndex === currentIndex) return;

    const currentSlide = slides[currentIndex];
    const nextSlide = slides[nextIndex];

    if (!currentSlide || !nextSlide) return;

    isAnimating = true;

    currentSlide.classList.remove("is-active");
    currentSlide.classList.add("is-leaving");

    nextSlide.classList.add("is-entering");

    requestAnimationFrame(() => {
      nextSlide.classList.add("is-active");
      nextSlide.classList.remove("is-entering");
    });

    window.setTimeout(() => {
      currentSlide.classList.remove("is-leaving");
      currentSlide.setAttribute("aria-hidden", "true");

      nextSlide.setAttribute("aria-hidden", "false");

      caption.textContent = nextSlide.dataset.caption ?? "";

      syncIndicators(nextIndex);

      currentIndex = nextIndex;
      isAnimating = false;
    }, 420);
  };

  const goTo = (index: number): void => {
    const nextIndex = (index + slides.length) % slides.length;
    render(nextIndex);
  };

  prevButton?.addEventListener("click", () => goTo(currentIndex - 1));
  nextButton?.addEventListener("click", () => goTo(currentIndex + 1));

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => goTo(index));
  });

  root.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(currentIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(currentIndex + 1);
    }
  });

  root.dataset.galleryReady = "true";
}

function initAllProjectGalleries(): void {
  const roots = Array.from(
    document.querySelectorAll<HTMLElement>(GALLERY_SELECTOR),
  );

  roots.forEach((root) => initProjectGallery(root));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAllProjectGalleries, {
    once: true,
  });
} else {
  initAllProjectGalleries();
}

document.addEventListener("astro:page-load", initAllProjectGalleries);
