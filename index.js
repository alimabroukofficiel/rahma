const icon__menu = document.querySelector('.icon__menu')
const header = document.querySelector("header")
icon__menu.addEventListener('click' , ()=>{
    header.classList.toggle('active')
})