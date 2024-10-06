let currentSlide = 0;
let slides = document.querySelectorAll(".carousel-images img");

function showSlide(slideIndex) {
    slides.forEach(slide => slide.classList.remove("active"));
    if (slideIndex >= slides.length) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = slideIndex;
    }
    slides[currentSlide].classList.add("active");
}

function changeSlide(step) {
    showSlide(currentSlide + step);
}

showSlide(currentSlide);

setInterval(() => {
    changeSlide(1);
}, 5000);
