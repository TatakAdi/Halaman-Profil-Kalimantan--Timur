let slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const totalSlides = slides.length;
let currentIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

document.getElementById("prev").addEventListener("click", prevSlide);

document.getElementById("next").addEventListener("click", nextSlide);

setInterval(nextSlide, 5000);
