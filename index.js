const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

const updateCarousel = () => {
    const itemWidth = items[0].getBoundingClientRect().width; 
    const newTranslateX = -currentIndex * itemWidth;
    track.style.transform = `translateX(${newTranslateX}px)`;
};

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= items.length) {
        currentIndex = 0; // Loop back to the first item
    }else if(currentIndex ===3){
        currentIndex = 0;
    }

    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = items.length - 1; // Loop back to the last item
      
    }else if(currentIndex ===0){
        currentIndex = 3;
    }
    
    updateCarousel();
});

