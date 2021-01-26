const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click',() =>{
const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
});