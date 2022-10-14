// Callback for IntersectionObserver
const callback = function (entries) {
  entries.forEach((entry) => {
    // Is the element in the viewport?
    if (entry.isIntersecting) {
      // Add the class:
      if (entry.target.dataset.animation === "fade") {
        entry.target.classList.add("animate-fadein");
      } else if (entry.target.dataset.animation === "slide") {
        entry.target.classList.add("animate-slidein");
      } else if (entry.target.dataset.animation === "slide2") {
        entry.target.classList.add("animate-slideindelay");
      } else if (entry.target.dataset.animation === "slide3") {
        entry.target.classList.add("animate-slideindelay2");
      }
    } else {
      // Otherwise remove the class
      entry.target.classList.remove("animate-fadein");
      entry.target.classList.remove("animate-slidein");
      entry.target.classList.remove("animate-slideindelay");
      entry.target.classList.remove("animate-slideindelay2");
    }
  });
};

// Get all the elements you want to show on scroll
const targets = document.querySelectorAll("[data-animation]");

let options = {
  root: document,
  rootMargin: "300px",
  threshold: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
};

// Set up a new observer
const observer = new IntersectionObserver(callback, options);

// Loop through each of the target
targets.forEach(function (target) {
  // Hide the element
  target.classList.add("opacity-0");

  // Add the element to the watcher
  observer.observe(target);
});

let scrollpos = window.scrollY;
const header = document.querySelector(".floatinglogo");
const header_height = header.offsetHeight;

const add_class_on_scroll = () => header.classList.add("fade-in");
const remove_class_on_scroll = () => header.classList.remove("fade-in");

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});
