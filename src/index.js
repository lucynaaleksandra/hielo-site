import "./index.scss";
import $ from "jquery";
import sticky from "jquery-sticky";

if (sticky) {
}

// SIDEBAR
window.openNav = () => {
  document
    .querySelector(".la-nav__sidebar")
    .classList.add("la-nav__sidebar--visible");
};

window.closeNav = () => {
  document
    .querySelector(".la-nav__sidebar")
    .classList.remove("la-nav__sidebar--visible");
};

// SLIDER
let slideIndex = 1;
showSlides(slideIndex);

window.currentSlide = n => {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  let slides = document.getElementsByClassName("la-nav__slide");
  let dots = document.getElementsByClassName("la-nav__slider");

  if (n > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// LAZY LOADING
document.addEventListener("DOMContentLoaded", function() {
  var sections = [].slice.call(document.querySelectorAll("main > section"));

  if ("IntersectionObserver" in window) {
    let sectionObserver = new IntersectionObserver(
      function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("section--visible");
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -400px 0px"
      }
    );

    sections.forEach(function(section) {
      sectionObserver.observe(section);
    });
  }
});

// STICKY NAV
$(document).ready(function() {
  $("#la-nav__navbar").sticky({
    topSpacing: 0,
    zIndex: 15,
    backgroundColor: "rgba(255, 255, 255, .3)"
  });

  $("#la-nav__navbar").on("sticky-start", function() {
    $("#la-nav__navbar").css({ backgroundColor: "rgba(255, 255, 255, .3)" });
  });
  $("#la-fourgrid__section").on("sticky-end", function() {
    $("#about_section").css({ backgroundColor: "rgba(255, 255, 255, .7)" });
  });
});

// console.log(window);
// $(document).ready(() => {
//   console.log("hello");
// });
