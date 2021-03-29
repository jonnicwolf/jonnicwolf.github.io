const headShot = () => {
  const frame = document.querySelector('#headshot-wrap');
  const photo = document.createElement('img');
  frame.appendChild(photo);
  frame.innerHTML = photo.innerHTML(headshotObj[1].shot)
  console.log(photo.innerHTML(headshotObj[1].shot))
}

const header = document.querySelector('#header')
const govName = 'Jon Narine.dev'
const nickName = 'Fezz.shake'

const slides = document.querySelector('.mySlides')

const documentHeight = document.documentElement.scrollHeight - window.innerHeight
const scrollHeight = window.scrollY

header.textContent = govName
header.setAttribute('style','font-family: Bungee Shade; font-size: 48px')  

//names should swap every 4000 but switch on toggle button click
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
  console.log(slides)
  
  if (n > slides.length) {
    slideIndex = 1
  } else if (n < 1) {
    slideIndex = slides.length
  }  
  for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
  }  
  slides[slideIndex-1].style.display = "block";    
}
showSlides(slideIndex, 'mySlides1');
showSlides(slideIndex,'mySlides2')

const slideToDa= (n) => { showSlides(slideIndex += n) }
const currentSlide = (n) => { showSlides(slideIndex = n) }

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





















