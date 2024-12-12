let slideIndex = 1;
showSlides(slideIndex);

window.plusSlides = function(n) {
  showSlides((slideIndex += n));
}

window.currentSlide = function(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow__slide");
  let dots = document.getElementsByClassName("slideshow__dots--item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slideshow__slide--active");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].classList.add("slideshow__slide--active");
  dots[slideIndex - 1].className += " active";
}
