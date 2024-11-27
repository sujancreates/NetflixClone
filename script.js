const slider = document.querySelector('.slider-track');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalItems = 13; // Total number of images
const itemWidth = slider.children[0].offsetWidth + 10; // Include margin-right

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - (Math.floor(slider.offsetWidth / itemWidth))) {
        currentIndex++;
        updateSliderPosition();
    }
});

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

