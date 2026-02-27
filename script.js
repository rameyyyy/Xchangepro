let index = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".card").length;

setInterval(() => {
  index++;
  if (index >= totalSlides) {
    index = 0;
  }
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000);