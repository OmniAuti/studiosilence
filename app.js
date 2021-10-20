const shapeOne = document.querySelector('.starting-shape-one')
const shapeTwo = document.querySelector('.starting-shape-two')
const shapeThree = document.querySelector('.starting-shape-three')


const aboutSection = document.querySelector('.about-section')


const wrapper = document.querySelector('main')

wrapper.addEventListener('scroll', () => {



    console.log(aboutSection.getBoundingClientRect())
    console.log(aboutSection.getBoundingClientRect())

   if (aboutSection.getBoundingClientRect().left < 325)  {

        shapeOne.classList.add('moveOneAbout') 
        shapeTwo.classList.add('moveTwoAbout') 
        shapeThree.classList.add('moveThreeAbout') 

   } 
   else if (aboutSection.getBoundingClientRect().left > 325) {
       shapeOne.classList.remove('moveOneAbout')
       shapeTwo.classList.remove('moveTwoAbout')
       shapeThree.classList.remove('moveThreeAbout')
   }
     
})

const scrollContainer = document.querySelector('main');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});