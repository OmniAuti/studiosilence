const coverOne = document.querySelector('.cover-shape-one')
const coverTwo = document.querySelector('.cover-shape-two')
const coverThree = document.querySelector('.cover-shape-three')
const coverFour = document.querySelector('.cover-shape-four')
const coverFive = document.querySelector('.cover-shape-five')


const aboutSection = document.querySelector('.about-section')
const hero = document.querySelector('.hero')

const wrapper = document.querySelector('main')

wrapper.addEventListener('scroll', () => {


    const paraShape = hero.getBoundingClientRect().x;
    console.log(paraShape * -10)
    coverOne.style.transform = `translateX(${paraShape * -1}px)`
    coverTwo.style.transform = `translateX(${paraShape * -1}px)`
    coverThree.style.transform = `translateX(${paraShape * -1}px)`
    coverFour.style.transform = `translateX(${paraShape * -1}px)`
    coverFive.style.transform = `translateX(${paraShape * -1}px)`
     
})

const scrollContainer = document.querySelector('main');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

