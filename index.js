const myLogo = document.querySelector('.my-logo-wrapper');
const menuDesktop = document.querySelector('.right-menu');
const hambugerIcon = document.querySelector('.hamburger-menu');
const closeIcon = document.getElementById('closeIcon');
const menuItem1 = document.getElementById('item1');
const menuItem2 = document.getElementById('item2');
const menuItem3 = document.getElementById('item3');
const mobileMenu = document.querySelector('.mobile-menu');

hambugerIcon.addEventListener('click', menuClick);

function menuClick() {
  myLogo.classList.add('visibility-hidden');
  menuDesktop.classList.add('visibility-hidden');
  hambugerIcon.classList.add('display-none');
  closeIcon.classList.add('display-block');
  menuItem1.classList.add('display-block');
  menuItem2.classList.add('display-block');
  menuItem3.classList.add('display-block');
  mobileMenu.classList.add('mobile-full-height');
  document.body.classList.add('no-scroll');
}
