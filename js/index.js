const aboutMeObj = {
    slide1Content: 'My name is Jon, but there are a million Jons around so call me Fezz!',
    slide2Content: 'I was born in a small South American country called Guyana to a Soldier dad and a Geologist mom. I love cricket, Formula 1, coding, IndyCar, mountain biking, coding, boxing, and programming =D !',
    slide3Content: 'I am kind, conscientious, direct, and I love working with others! None of us is as smart as all of us.'
};

const skillsObj = {
    slide1Content: {language: 'Javascript', image: 'javascript png'},
    slide2Content: {language: 'HTML5', image: 'HTML5 png'},
    slide3Content: {language: 'CSS', image: 'CSS png'},
    slide4Content: {language: 'node.js', image: 'node.js'},
    slide5Content: {language: 'react', image: 'react png'},
    slide5Content: {language: 'Command Line', image: 'commandline png'}
};

const projectObj = {
    slide1Content: { gif:'dragonrend png', content: 'blah'},
    slide2Content: '',
    slide3Content: ''
};


const header = document.querySelector('#header')
const govName = 'Jon Narine'
const nickName = 'Fezz'

const slides = document.querySelector('.mySlides')

const documentHeight = document.documentElement.scrollHeight - window.innerHeight
const scrollHeight = window.scrollY

// const carousel = document.createElement('section')
// carousel.innerHTML = '<div class="slideshow-container"><div class="slides fade"><div class="location-dot">...</div></div></div>' 
//make a loop that will generate the amount of slides you need


header.textContent = govName
// console.log(`${header.textContent} header here`)
header.setAttribute('style','font-family: Bungee Shade; font-size: 48px')  

const nameSwitch = () => {
    if (header.textContent === govName) {
        header.textContent = nickName
        //name should switch on click to the toggle button then content switch
        
    } else {
        header.textContent = govName        
    }    
}

//names should swap every 4000 but switch on toggle button click
setInterval(nameSwitch, 4000)

let slideIndex = 1;
const showSlides = (n) => {
    // let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
showSlides(slideIndex);

const slideToDa= (n) => {
  showSlides(slideIndex += n);
}
const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

//mode slider

const rangeVal = document.querySelector('#mode-slider').value
console.log(`${rangeVal} rangeVal here`)
const slideWorks = () => {
    const slide = querySelector('#mode-slider')
    Object.assign(slide, { min: '1', max: '100' })
    if (rangeVal <=50) {
        //change colour scheme, resume, and projects
        //<=50 is also default
    } else {
        //change colour scheme, resume and projects
    }
}






















