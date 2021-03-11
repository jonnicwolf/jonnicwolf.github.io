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
const documentHeight = document.documentElement.scrollHeight - window.innerHeight
const scrollHeight = window.scrollY

header.textContent = govName
console.log(`${header.textContent} header here`)
header.setAttribute('style','font-family: Bungee Shade; font-size: 48px')  

const nameSwitch = () => {
    if (header.textContent === govName) {
        header.textContent = nickName
        //name should switch on click to the toggle button then content switch
        //add a fade animation that goes from opacity: 0 --> 1 --> 0 in 4000
    } else {
        header.textContent = govName        
    }    
}

//names should swap every 4000 but switch on toggle button click
setInterval(nameSwitch, 4000)

//


























