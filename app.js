let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("Slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 1500);
}
showSlides();

// Select all mechanic flip cards
document.querySelectorAll('.m-flip-card').forEach(card => {
    // Add event listeners for click, touchstart, and touchend
    ['click', 'touchstart', 'touchend'].forEach(eventType => {
        card.addEventListener(eventType, () => {
            card.classList.toggle('flipped'); // Toggle the "flipped" class
        });
    });
});