///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  // ini langsung nama class tanpa .
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionProfilEl = document.querySelector(".section-profil");

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
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionProfilEl);

// ///////////////////////////////////////////////////////////
// // Smooth scrolling animation

// const allLinks = document.querySelectorAll("a:link");
// // console.log(allLinks);

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     // console.log(e);
//     e.preventDefault();
//     const href = link.getAttribute("href");
//     console.log(href);

//     // Scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     //  Scrool to other links
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       console.log(sectionEl);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     // Close mobile navigation
//     if (link.classList.contains("main-nav-link"))
//       headerEl.classList.toggle("nav-open");
//   });
// });
