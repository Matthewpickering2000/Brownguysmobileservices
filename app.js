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

document.querySelectorAll('.flip-card, .m-flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped'); // Toggle the "flipped" class
    });
});