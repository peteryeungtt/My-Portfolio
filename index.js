// Mobile Menu
const myLogo = document.querySelector('.my-logo-wrapper');
const menuDesktop = document.querySelector('.right-menu');
const hambugerIcon = document.querySelector('.hamburger-menu');
const closeIcon = document.getElementById('closeIcon');
const menuItem1 = document.getElementById('item1');
const menuItem2 = document.getElementById('item2');
const menuItem3 = document.getElementById('item3');
const mobileMenu = document.querySelector('.mobile-menu');

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

hambugerIcon.addEventListener('click', menuClick);

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

closeIcon.addEventListener('click', closeClick);

// Email Form Validation
const form = document.getElementById('form');
const email = document.getElementById('email');
const lowerCaseRegexChecker = /[A-Z]/;

form.addEventListener('submit', (e) => {
  if (lowerCaseRegexChecker.test(email.value.trim())) {
    e.preventDefault();
    const errorMessage = document.querySelector('small');
    errorMessage.classList.remove('display-none');
  }
});

// Local Storage
const myTempStorage = {
  name: '',
  email: '',
  message: '',
};

form.addEventListener('change', () => {
  myTempStorage.name = document.getElementById('name').value;
  myTempStorage.email = document.getElementById('email').value;
  myTempStorage.message = document.getElementById('message').value;
  localStorage.setItem('storageString', JSON.stringify(myTempStorage));
});