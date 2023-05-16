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

closeIcon.addEventListener('click', closeClick);

function closeClick() {
  myLogo.classList.remove('visibility-hidden');
  menuDesktop.classList.remove('visibility-hidden');
  hambugerIcon.classList.remove('display-none');
  menuItem1.classList.remove('display-block');
  menuItem2.classList.remove('display-block');
  menuItem3.classList.remove('display-block');
  closeIcon.classList.remove('display-block');
  mobileMenu.classList.remove('mobile-full-height');
  document.body.classList.remove('no-scroll');
}
