
document.querySelectorAll('.skill-box').forEach(box => {
  box.addEventListener('mouseover', () => {
    const percentage = box.getAttribute('data-percentage');
    const percentageDisplay = box.querySelector('.skill-percentage');
    percentageDisplay.textContent = `${percentage}%`;
  });
});


let currentSlide = 0;
const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");
const totalCards = cards.length;

function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 20; // Card width + gap
    cardContainer.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}

function nextSlide() {
    if (currentSlide < totalCards - 3) {
        currentSlide++;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
    }
}

// Initialize carousel
updateCarousel();

window.addEventListener("resize", updateCarousel);

function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log(this.seconds); // `this` refers to Timer
    }, 1000);
}

new Timer(); // Logs 1, 2, 3... every second


//cursor animation
