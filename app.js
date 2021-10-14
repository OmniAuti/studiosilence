const shapeOne = document.querySelector('.starting-shape-one')
const shapeTwo = document.querySelector('.starting-shape-two')
const shapeThree = document.querySelector('.starting-shape-three')


const topAbout = document.querySelector('.about-section')

window.addEventListener('scroll', () => {
    console.log(topAbout.getBoundingClientRect().top)
   if (topAbout.getBoundingClientRect().top < 325)  {

        shapeOne.classList.add('moveOneAbout') 
        shapeTwo.classList.add('moveTwoAbout') 
        shapeThree.classList.add('moveThreeAbout') 

   } 
   else if (topAbout.getBoundingClientRect().top > 325) {
       shapeOne.classList.remove('moveOneAbout')
       shapeTwo.classList.remove('moveTwoAbout')
       shapeThree.classList.remove('moveThreeAbout')
   }
     
})