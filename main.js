addEventListener("DOMContentLoaded", (event) => {

const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const itemsVisible = 4; // Number of items to show at once
let currentIndex = 0;

// Clone the first few items and append them to the end
for (let i = 0; i < itemsVisible; i++) {
    const clone = carouselItems[i].cloneNode(true);
    carouselInner.appendChild(clone);
}

// Function to determine the correct offset based on screen size
function getOffset() {
    const mobile = window.matchMedia("(max-width: 768px)");
    return mobile.matches ? 70 : 70 / itemsVisible; // 300 for mobile, otherwise normal calculation
}

function rotateCarousel() {
    currentIndex++;
    const offset = -currentIndex * getOffset();
    carouselInner.style.transition = 'transform 0.5s ease-in-out';
    carouselInner.style.transform = `translateX(${offset}%)`;

    // Reset to the beginning when the end of the carousel is reached
    if (currentIndex === carouselItems.length) {
        setTimeout(() => {
            carouselInner.style.transition = 'none'; // Disable transition for reset
            currentIndex = 0;
            carouselInner.style.transform = `translateX(0%)`;
        }, 500); // Matches the transition duration
    }
}

setInterval(rotateCarousel, 3000); // Change the interval as needed

// Optionally: Listen for screen resize to adapt offset dynamically
window.addEventListener('resize', () => {
    // Recalculate offset when the screen is resized
    carouselInner.style.transform = `translateX(${-currentIndex * getOffset()}%)`;
});


  var timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-me.wrapper",
    
      start: "top center", // when the top of the trigger hits the top of the viewport
      end: "+=50", // end after scrolling 500px beyond the start
    },
   
  })
	gsap.to('.about-me-image', {autoAlpha:1, duration:7});
	
	var timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".homepage-hero-row",
    pin: true, // pin the trigger element while active
    start: "top center", // when the top of the trigger hits the top of the viewport
    end: "+=50", // end after scrolling 500px beyond the start

    markers: false
  },
 
});

// Apply stagger within the .to() method
timeline2.to('.solution-card', {
  autoAlpha: 1, // animate opacity
  duration: 1.5, // duration of each animation
  stagger: 0.1 // stagger time between animations for each card
});


let b1 = "linear-gradient(0deg, rgba(34, 87, 103, 1) 50%, rgba(62, 142, 150, 1) 94%, rgba(62, 142, 150, 1) 70%);";
let b2 = "linear-gradient(180deg, rgba(34,87,103,1) 5%, rgba(62,142,150,1) 50%, rgba(62,142,150,1) 75%)";




gsap.fromTo(
  ".homepage-hero",
  { backgroundImage: b1 },
  { 
    backgroundImage: b2, 
    duration: 12,  // Duration for a smooth transition
    ease: "power2.inOut",  // Smoother easing function
    repeat: -1, 
    yoyo: true 
  }
);





	
});