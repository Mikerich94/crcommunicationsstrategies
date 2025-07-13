document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // TIMELINE 1
  var timeline1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".two-col-section",
      start: "top 70%",
      end: "bottom top",
      markers: false,
      onEnter: () => console.log("Entered the trigger zone"),
      onLeave: () => console.log("Left the trigger zone")
    },
  });

  timeline1.to('.solution-card', {
    autoAlpha: 1,
    duration: 1.5,
    stagger: 0.1
  });

  // TIMELINE 2
  var timeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-me.wrapper",
      start: "top center",
      end: "+=100",
    },
  });
  timeline2.to('.about-me-image', { autoAlpha: 1, duration: 4 });

  // CAROUSEL
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const itemsVisible = 4;
  let currentIndex = 0;

  for (let i = 0; i < itemsVisible; i++) {
    const clone = carouselItems[i].cloneNode(true);
    carouselInner.appendChild(clone);
  }

  function getOffset() {
    const mobile = window.matchMedia("(max-width: 768px)");
    return mobile.matches ? 70 : 70 / itemsVisible;
  }

  function rotateCarousel() {
    currentIndex++;
    const offset = -currentIndex * getOffset();
    carouselInner.style.transition = 'transform 0.5s ease-in-out';
    carouselInner.style.transform = `translateX(${offset}%)`;

    if (currentIndex === carouselItems.length) {
      setTimeout(() => {
        carouselInner.style.transition = 'none';
        currentIndex = 0;
        carouselInner.style.transform = `translateX(0%)`;
      }, 500);
    }
  }

  setInterval(rotateCarousel, 3000);

  window.addEventListener('resize', () => {
    carouselInner.style.transform = `translateX(${-currentIndex * getOffset()}%)`;
  });

  // BACKGROUND ANIMATION
  let b1 = "linear-gradient(0deg, rgba(34, 87, 103, 1) 50%, rgba(62, 142, 150, 1) 94%, rgba(62, 142, 150, 1) 70%)";
  let b2 = "linear-gradient(180deg, rgba(34,87,103,1) 5%, rgba(62,142,150,1) 50%, rgba(62,142,150,1) 75%)";

  gsap.fromTo(".homepage-hero", { backgroundImage: b1 }, {
    backgroundImage: b2,
    duration: 12,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  });

  gsap.fromTo(".contact-container", { backgroundImage: b1 }, {
    backgroundImage: b2,
    duration: 12,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  });

  // ✅ TYPING ANIMATION - WORKING
  const subtext = document.querySelector('.subtext');
  const fullText = subtext.textContent;
  subtext.textContent = ''; // Start empty

  let i = 0;
  function typeLetter() {
    if (i < fullText.length) {
      subtext.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeLetter, 60);
    }
  }

  typeLetter();
});
