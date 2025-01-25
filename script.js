document.addEventListener("DOMContentLoaded", () => {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0, // Start at the first slide
    gap: 20, // Space between slides
    perView: 4, // Default view for screens larger than the largest breakpoint
    breakpoints: {
      1024: { perView: 3 }, // Show 3 images on medium screens
      768: { perView: 2 }, // Show 2 images on small screens
      560: { perView: 1 }, // Show 1 image on very small screens
    },
  }).mount();
});
