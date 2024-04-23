function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')
    slides[activeSlide].classList.add("active");
//slides.forEach((slide) => {
    for (const slide of slides) {

        slide.addEventListener('click', () => {
            removeActiveClasses()
            slide.classList.add("active");

        })
    }

    function removeActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(4)