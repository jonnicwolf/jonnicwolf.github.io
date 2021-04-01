const header = document.querySelector('#header')
const govName = 'Jon Narine.dev'
const nickName = 'Fezz.shake'
const slides = document.querySelector('.mySlides')
const documentHeight = document.documentElement.scrollHeight - window.innerHeight
const scrollHeight = window.scrollY

header.textContent = govName

const nameSwitch = () => {
    if (header.textContent === govName) {
      header.textContent = nickName
      //name should switch on click to the toggle button then content switch
    } else {
        header.textContent = govName        
    }    
}

setInterval(nameSwitch, 4000)

//modified from https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 1;
const showSlides = (n,slideId) => {    
  const slides = document.getElementsByClassName(slideId);

  if (n > slides.length) {
    slideIndex = 1
    console.log('n > slides.length')
  } else if (n < 1) {
    slideIndex = slides.length
    console.log(slideIndex)
  }  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "flex";
  console.log(slideIndex)  
}
showSlides(slideIndex, 'mySlides-1');
showSlides(slideIndex, 'mySlides-2');

const slideToDa = (n,slideId) => { showSlides(slideIndex += n, slideId ) }

//make the semicircle officially a button
const semiCircle = document.querySelector('#semi-circle-btn')
semiCircle.addEventListener('click', () => {
  const ul = document.querySelector('#nav-btn ul')
  if (ul.style.display === 'block') {
    ul.style.display = 'none'
    semiCircle.style.backgroundColor = 'gold'
  } else {
    ul.style.display = 'block'
    semiCircle.style.backgroundColor = 'crimson'
  }
})

const wrapper1 = document.querySelector('#flex-wrapper-1')
const wrapper2 = document.querySelector('#flex-wrapper-2')

























