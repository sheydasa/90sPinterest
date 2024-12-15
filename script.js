
let slideIndex = 1;
showSlides(slideIndex);

// Change slide
function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Show specific slide
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

// Display slides
function showSlides(n) {
    let slides = document.querySelectorAll('.slide');

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Display the current slide
    slides[slideIndex - 1].classList.add('active');
}
