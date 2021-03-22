const headshotObj = [
  { shot: '/photo_assets/5A06D71D-808D-4825-B692-F5C79E6D89B8.jpg' },
  { shot: '/photo_assets/IMG_1062.jpeg' },
  { shot: '/photo_assets/IMG_1948.jpeg' },
  { shot: '/photo_assets/IMG_0830.jpeg' },  
]

const headShot = () => {
  const frame = document.querySelector('#headshot-wrap');
  const photo = document.createElement('img');
  frame.appendChild(photo);
  frame.innerHTML = photo.innerHTML(headshotObj[1].shot)
  console.log(photo.innerHTML(headshotObj[1].shot))
}

headshot

//trying to make a continuous loop here
// const headshotLoop = () => {
//   const headshot = document.querySelector('#headshot-wrap')
//   const img = document.createElement('img')
//   headshot.innerHTML = ''
//   headshot.appendChild(img)
//   for (let i = 0; i <= headshotObj.length; i++) {    
//     // img.src = headshotObj[i].shot
//     console.log(img)
//     setTimeout(() => img.src = headshotObj[i].shot, 1500)    
//   }
// }
//setInterval(headshotLoop,1500)

const aboutMeObj = [
    { slide1Content: 'My name is Jon, but there are a million Jons around so call me Fezz!' },
    { slide2Content: 'I was born in a small South American country called Guyana to a Soldier dad and a Geologist mom. I love cricket, Formula 1, coding, IndyCar, mountain biking, coding, boxing, and programming =D !' },
    { slide3Content: 'I am kind, conscientious, direct, and I love working with others! None of us is as smart as all of us.'}
];

const skillsObj = [
    {language: 'Javascript', image: 'javascript png'},
    {language: 'HTML5', image: 'HTML5 png'},
    {language: 'CSS', image: 'CSS png'},
    {language: 'node.js', image: 'node.js'},
    {language: 'react', image: 'react png'},
    {language: 'Command Line', image: 'commandline png'}
];

const projectObj = [
    { gif:'dragonrend png', content: 'blah'},
];

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
const showSlides = (n) => {    
  const slides = document.getElementsByClassName("mySlides");
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
showSlides(slideIndex);

const slideToDa= (n) => { showSlides(slideIndex += n) }
const currentSlide = (n) => { showSlides(slideIndex = n) }


//make the semicircle officially a button
const semiCircle = document.querySelector('#semi-circle-btn')
semiCircle.addEventListener('click', () => {
  const ul = document.querySelector('#nav-btn ul')
  if (ul.style.display === 'none') {
    ul.style.display = 'block'
  } else {
    ul.style.display = 'none'
  }
})





















