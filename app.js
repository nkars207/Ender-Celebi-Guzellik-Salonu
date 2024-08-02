const sliderWrapper = document.querySelector('.slider-wrapper');
const images = document.querySelectorAll('.image-item');
const totalImages = images.length;
let currentIndex = 0;

function showSlide(index) {
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.arrow.left').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

document.querySelector('.arrow.right').addEventListener('click', () => {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});
