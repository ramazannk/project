"use script";
const hamurger = document.querySelector('.hamburger'),
      menu =document.querySelector('.header__nav'),
      Close = document.querySelector('.hamburger'),
      CLose = document.querySelector('.header__nav');

hamurger.addEventListener('click', ()=>{
    hamurger.classList.toggle('active');
    menu.classList.toggle('active');
});

