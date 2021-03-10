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


























