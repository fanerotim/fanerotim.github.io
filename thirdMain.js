const slideTwo = document.querySelectorAll(".slide-2");
const nextiousOne = document.querySelector("#nextSlideTwo");
const previousOne = document.querySelector("#previousTwo");
const intervalTime2 = 5000;
let slidesIntervalOne;

const nextiousOneSlider = () => {
    // Get current class
    const presentTwo = document.querySelector(".presentTwo");
    // Remove current class
    presentTwo.classList.remove("presentTwo");
    // Check for next slide
    if (presentTwo.nextElementSibling) {
        // add current to next sibling

        presentTwo.nextElementSibling.classList.add("presentTwo");
    } else {
        // add current to start
        slideTwo[0].classList.add("presentTwo");
    }
    setTimeout(() => presentTwo.classList.remove("presentTwo"));
};

    const previousOneSlides = () => {
        // Get current class
        const presentTwo = document.querySelector(".presentTwo");
        // Remove current class
        presentTwo.classList.remove("presentTwo");
        // Check for prev slide
        if (presentTwo.previousElementSibling) {
            // Add  current to prev sibling
            presentTwo.previousElementSibling.classList.add("presentTwo");
        } else {
            // Add current to last
            slideTwo[slideTwo.length - 1].classList.add("presentTwo");
        }
        setTimeout(() => presentTwo.classList.remove("presentTwo"));
    };

    // button events

    nextiousOne.addEventListener("click", e => {
        nextiousOneSlider();
        if (auto) {
            clearInterval(slidesIntervalOne);
            slidesIntervalOne = setInterval(nextiousOneSlider, intervalTime2);
        }
    });

    previousOne.addEventListener("click", e => {
        previousOneSlides();
        if (auto) {
            clearInterval(slidesIntervalOne);
            slidesIntervalOne = setInterval(nextiousOneSlider, intervalTime2);
        }
    });

    if (auto) {
        slidesIntervalOne = setInterval(nextiousOneSlider, intervalTime2);
}



