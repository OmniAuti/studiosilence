const coverOne = document.querySelector(".cover-shape-one");
const coverTwo = document.querySelector(".cover-shape-two");
const coverThree = document.querySelector(".cover-shape-three");
const coverFour = document.querySelector(".cover-shape-four");
const coverFive = document.querySelector(".cover-shape-five");

const aboutSection = document.querySelector(".about-section");
const hero = document.querySelector(".hero");

const wrapper = document.querySelector("main");

wrapper.addEventListener("scroll", () => {
  const paraShape = hero.getBoundingClientRect().x * 1.1;

  coverOne.style.transform = `translateX(${paraShape * -1}px)`;
  coverTwo.style.transform = `translateX(${paraShape * -1}px)`;
  coverThree.style.transform = `translateX(${paraShape * -1}px)`;
  coverFour.style.transform = `translateX(${paraShape * -1}px)`;
  coverFive.style.transform = `translateX(${paraShape * -1}px)`;
});

if (window.innerWidth > 800) {
  const scrollContainer = document.querySelector("main");

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });
}

const contactDiv = document.querySelector(".contact-container");
const contactGlassCont = document.querySelector(".contact-glass-cont");

setInterval(rainbowContact, 8500);

let i = 0;
function rainbowContact() {
  const glass = document.createElement("div");
  glass.classList.add("contact-glass-cont", `remove-${i}`);
  glass.innerHTML = `<div class="contact-glass-one"></div>
    <div class="contact-glass-two"></div>
    <div class="contact-glass-three"></div>
    <div class="contact-glass-four"></div>
    <div class="contact-glass-five"></div>`;
  contactDiv.append(glass);

  const child = document.querySelector(`.remove-${i}`);

  setTimeout(() => {
    contactDiv.removeChild(child);
  }, 10500);

  i++;
}

const galClick = document.querySelectorAll(".gal-click");
const galModal = document.querySelector(".gallery-modal");
const galModalCont = document.querySelector(".gallery-modal-cont");
const closeBtn = document.querySelector(".close-btn");

galClick.forEach((gal) => {
  gal.addEventListener("click", () => {
    let attrPic = gal.firstElementChild.getAttribute("src");

    if (!galModalCont.classList.contains("active-modal")) {
      galModal.firstElementChild.setAttribute("src", attrPic);
      galModalCont.classList.add("active-modal");

      const topOfModal = galModal.offsetTop * 1.25;

      console.log(topOfModal);
      window.scrollTo({
        top: topOfModal,

        behavior: "smooth",
      });
    }
  });
});

closeBtn.addEventListener("click", () => {
  galModalCont.classList.remove("active-modal");
});


const circleHero = document.querySelector(".circle-hero");
const rectangleHero = document.querySelector(".rectangle-hero");
const diamondHero = document.querySelector(".diamond-hero");
const triangleHero = document.querySelector(".triangle-hero");
const rectangleTwoHero = document.querySelector(".rectangle-two-hero");
const boltHero = document.querySelector(".bolt-hero");
const extraHero = document.querySelector(".extra-hero");
//USE THESE TO DETERMINE BEST PRACTICE WITH RESIZING -- NEED TO ADD AN EVENT LISTENR FOR RESIZE
//console.log(window.innerWidth, 'width', window.innerHeight, 'height')
const windowWidth = hero.offsetWidth;
const windowHeight = hero.offsetHeight;

setInterval(() => {
    console.log(windowWidth, windowHeight)
   console.log(circleHero.getBoundingClientRect().top, 'circle')
  // console.log(diamondHero.getBoundingClientRect().top, 'diamond')
  // console.log(rectangleHero.getBoundingClientRect().left, 'rect')

  // console.log(rectangleTwoHero.getBoundingClientRect().bottom, 'rectTwo')
  //console.log(triangleHero.getBoundingClientRect().top, 'tri')
  //console.log(boltHero.getBoundingClientRect().left, 'bolt')

  if (circleHero.getBoundingClientRect().bottom < 150) {
    diamondHero.style.animationName = "diamond-hero";
    setTimeout(() => {
      circleHero.style.animationName = "circle";
    }, 2000);
  }

  if (diamondHero.getBoundingClientRect().top > windowHeight) {
    rectangleHero.style.animationName = "rectangle-hero";
    setTimeout(() => {
      diamondHero.style.animationName = "diamond";
    }, 1000);
  }

  if (rectangleHero.getBoundingClientRect().left > windowWidth) {
    triangleHero.style.animationName = "triangle-hero";
    setTimeout(() => {
      rectangleHero.style.animationName = "rectangle";
    }, 1000);
  }

  if (triangleHero.getBoundingClientRect().top > windowHeight) {
    rectangleTwoHero.style.animationName = "rectangle-two-hero";
    setTimeout(() => {
      triangleHero.style.animationName = "triangle";
    }, 1000);
  }

  if (rectangleTwoHero.getBoundingClientRect().bottom < 0) {
    boltHero.style.animationName = "bolt-hero";
    setTimeout(() => {
      rectangleTwoHero.style.animationName = "rectangle-two";
    }, 2000);
  }

  if (boltHero.getBoundingClientRect().left < -400) {
    extraHero.style.animationName = "extra-hero";
    setTimeout(() => {
      boltHero.style.animationName = "bolt";
    }, 2000);
  }

  if (extraHero.getBoundingClientRect().left > windowWidth) {
    circleHero.style.animationName = "circle-hero";
    setTimeout(() => {
      extraHero.style.animationName = "extra";
    }, 2000);
  }
}, 1000);
