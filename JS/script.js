// For telephone form

document.getElementById("phone").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^0-9+]/g, ""); // Remove non-numeric except "+"

  // Ensure "+" appears only at the beginning
  if (this.value.indexOf("+") > 0) {
    this.value = this.value.replace(/\+/g, ""); // Remove all "+"
    this.value = "+" + this.value; // Add "+" at the start
  }
});

// Set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);

// Make mobile nav work

const btnNavEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".nav-bar");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);
    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// sticky nav

const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
