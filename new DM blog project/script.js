const slides = document.querySelector('.slide');
const items = document.querySelectorAll('.item');
let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
    const totalItems = items.length;
    if (index >= totalItems) {
        currentIndex = 0; // Loop back to the first item
    } else if (index < 0) {
        currentIndex = totalItems - 1; // Loop back to the last item
    } else {
        currentIndex = index; // Set current index
    }
    const offset = -currentIndex * 100; // Calculate offset for sliding effect
    slides.style.transform = `translateX(${offset}%)`; // Apply the translation
}

// Next and Previous buttons
document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

// Swipe functionality
let startX = 0;

slides.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Get the starting X position
});

slides.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX; // Get the ending X position
    if (startX > endX + 50) {
        // Swiped left
        showSlide(currentIndex + 1);
    } else if (startX < endX - 50) {
        // Swiped right
        showSlide(currentIndex - 1);
    }
});

// Automatic slide (optional)
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000); // Change slide every 5 seconds

slides.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    console.log('Touch start at:', startX);
});

slides.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    console.log('Touch end at:', endX);
    // Remaining code...
});


/*============================================================================================== */


