const coverOne = document.querySelector('.cover-shape-one')
const coverTwo = document.querySelector('.cover-shape-two')
const coverThree = document.querySelector('.cover-shape-three')
const coverFour = document.querySelector('.cover-shape-four')
const coverFive = document.querySelector('.cover-shape-five')


const aboutSection = document.querySelector('.about-section')
const hero = document.querySelector('.hero')

const wrapper = document.querySelector('main')

wrapper.addEventListener('scroll', () => {


    const paraShape = hero.getBoundingClientRect().x * 1.1;

    coverOne.style.transform = `translateX(${paraShape * -1}px)`
    coverTwo.style.transform = `translateX(${paraShape * -1}px)`
    coverThree.style.transform = `translateX(${paraShape * -1}px)`
    coverFour.style.transform = `translateX(${paraShape * -1}px)`
    coverFive.style.transform = `translateX(${paraShape * -1}px)`
     
})


if (window.innerWidth > 800) {
    
    const scrollContainer = document.querySelector('main');

    scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

}


const contactDiv = document.querySelector('.contact-container')
const contactGlassCont = document.querySelector('.contact-glass-cont')

setInterval(rainbowContact, 8500)

let i = 0
function rainbowContact() {

    const glass = document.createElement('div')
    glass.classList.add('contact-glass-cont', `remove-${i}`)
    glass.innerHTML = `<div class="contact-glass-one"></div>
    <div class="contact-glass-two"></div>
    <div class="contact-glass-three"></div>
    <div class="contact-glass-four"></div>
    <div class="contact-glass-five"></div>`
    contactDiv.append(glass)

    const child = document.querySelector(`.remove-${i}`)

    setTimeout(() => {
        contactDiv.removeChild(child)
    }, 10500)

    i++
  }

