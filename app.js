const shapeOne = document.querySelector('.starting-shape-one')
const shapeOnea = document.querySelector('.starting-shape-one-2')
const shapeOneb = document.querySelector('.starting-shape-one-3')
const shapeOnec = document.querySelector('.starting-shape-one-4')
const shapeOned = document.querySelector('.starting-shape-one-5')
const shapeTwo = document.querySelector('.starting-shape-two')
const shapeThree = document.querySelector('.starting-shape-three')


const aboutSection = document.querySelector('.about-section')
const hero = document.querySelector('.hero')

const wrapper = document.querySelector('main')

wrapper.addEventListener('scroll', () => {


    const paraShape = hero.getBoundingClientRect().x * 2.5;
    console.log(paraShape * -10)
    shapeOne.style.transform = `translateX(${paraShape * -1}px)`
    shapeOnea.style.transform = `translateX(${paraShape * -1}px)`
    shapeOneb.style.transform = `translateX(${paraShape * -1}px)`
    shapeOnec.style.transform = `translateX(${paraShape * -1}px)`
    shapeOned.style.transform = `translateX(${paraShape * -1}px)`
     
})

const scrollContainer = document.querySelector('main');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

