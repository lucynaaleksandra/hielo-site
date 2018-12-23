import "./index.scss";

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

// SLIDESHOW
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

  if (n < 1) {
    slideIndex = slides.length;
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

// // STICKY NAV
// window.onscroll = function() {
//   myFunction();
// };

// var navbar = document.querySelector("#la-nav__navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
//   console.log("sticky:: ", sticky);
// }
