const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const themeButton = document.querySelector(".header__theme-button");



hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("hamburger--open");
    nav.classList.toggle("header__nav--open");
    body.classList.toggle("hidden--body");
})


themeButton.addEventListener("click",function(){
    themeButton.classList.toggle('theme-button--dark');
    body.classList.toggle("body-dark")
})