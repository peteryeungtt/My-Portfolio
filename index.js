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

const storageObject = JSON.parse(localStorage.getItem('storageString'));

document.getElementById('name').value = storageObject.name;
document.getElementById('email').value = storageObject.email;
document.getElementById('message').value = storageObject.message;

// Work Projects
const projects = [
  {
    title: 'Multi-Post Stories',
    image: 'images/modal-picture0.png',
    image1: 'images/project1.png',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    live_link: 'https://peteryeungtt.github.io/My-Portfolio/',
    source_link: 'https://github.com/peteryeungtt/My-Portfolio',
  },
  {
    title: 'Professional Art Printing Data',
    image: 'images/other_project1.png',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://peteryeungtt.github.io/My-Portfolio/',
    source_link: 'https://github.com/peteryeungtt/My-Portfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    image: 'images/other_project2.png',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://peteryeungtt.github.io/My-Portfolio/',
    source_link: 'https://github.com/peteryeungtt/My-Portfolio',
  },
  {
    title: 'Website Portfolio',
    image: 'images/other_project3.png',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://peteryeungtt.github.io/My-Portfolio/',
    source_link: 'https://github.com/peteryeungtt/My-Portfolio',
  },
  {
    title: 'Professional Art Printing Data',
    image: 'images/other_project1.png',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://peteryeungtt.github.io/My-Portfolio/',
    source_link: 'https://github.com/peteryeungtt/My-Portfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    image: 'images/other_project2.png',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://peteryeungtt.github.io/My-Portfolio/',
    source_link: 'https://github.com/peteryeungtt/My-Portfolio',
  },
  {
    title: 'Website Portfolio',
    image: 'images/other_project3.png',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://peteryeungtt.github.io/My-Portfolio/',
    source_link: 'https://github.com/peteryeungtt/My-Portfolio',
  },
];

// Main Project
const workProjectWrapper = document.createElement('div');
workProjectWrapper.classList.add('work-project-wrapper');
const workProjectImg = document.createElement('img');
workProjectImg.classList.add('work-project-img');
workProjectImg.src = projects[0].image1;
workProjectImg.alt = 'Project Image';
workProjectWrapper.appendChild(workProjectImg);
const workProjectText = document.createElement('div');
workProjectText.classList.add('work-project-text');
const workProjectTitle = document.createElement('h3');
workProjectTitle.classList.add('work-project-title');
workProjectTitle.textContent = projects[0].title;
workProjectText.appendChild(workProjectTitle);
const workProjectDescription = document.createElement('p');
workProjectDescription.classList.add('work-project-description');
workProjectDescription.textContent = projects[0].description;
workProjectText.appendChild(workProjectDescription);
const workInfoTags = document.createElement('ul');
workInfoTags.classList.add('work-info-tags');
const tags = projects[0].technologies;
tags.forEach((tag) => {
  const tagItem = document.createElement('li');
  tagItem.classList.add('work-info-tag');
  tagItem.textContent = tag;
  workInfoTags.appendChild(tagItem);
});
workProjectText.appendChild(workInfoTags);
const seeProjectBtn = document.createElement('a');
seeProjectBtn.classList.add('see-work-btn');
seeProjectBtn.textContent = 'See Project';
workProjectText.appendChild(seeProjectBtn);
workProjectWrapper.appendChild(workProjectText);
const workSection = document.querySelector('.works-wrapper');
workSection.appendChild(workProjectWrapper);

// 6 Project Cards Section
for (let i = 1; i <= 6; i += 1) {
  const otherWorkWrapper = document.createElement('div');
  otherWorkWrapper.classList.add('other-work-wrapper', 'ease-out-effect');
  otherWorkWrapper.classList.add(`project${i}-background-image`);
  const otherWorkText = document.createElement('div');
  otherWorkText.classList.add('other-work-text');
  const otherWorkTitle = document.createElement('h3');
  otherWorkTitle.classList.add('other-work-title');
  otherWorkTitle.textContent = projects[i].title;
  otherWorkText.appendChild(otherWorkTitle);
  const otherWorkDescription = document.createElement('p');
  otherWorkDescription.classList.add('other-work-description');
  otherWorkDescription.textContent = projects[0].description;
  otherWorkText.appendChild(otherWorkDescription);
  const otherWorkTags = document.createElement('ul');
  otherWorkTags.classList.add('other-work-tags');
  const tags = projects[i].technologies;
  tags.forEach((tag) => {
    const tagItem = document.createElement('li');
    tagItem.classList.add('other-work-tag');
    tagItem.textContent = tag;
    otherWorkTags.appendChild(tagItem);
  });
  otherWorkText.appendChild(otherWorkTags);
  const otherWorkSeeBtn = document.createElement('a');
  otherWorkSeeBtn.classList.add('other-work-see-btn');
  otherWorkSeeBtn.textContent = 'See Project';
  otherWorkText.appendChild(otherWorkSeeBtn);
  otherWorkWrapper.appendChild(otherWorkText);
  workSection.appendChild(otherWorkWrapper);
}

const xButton = document.getElementById('x-popup');
const popupModal = document.getElementById('popup-wrapper');
const click = document.querySelector('.see-work-btn');
const allotherclicks = document.querySelectorAll('.other-work-see-btn');
function open() {
  popupModal.classList.add('display-flex');
}
function close() {
  popupModal.classList.remove('display-flex');
}
click.addEventListener('click', open);
xButton.addEventListener('click', close);
for (let i = 0; i <= 6; i += 1) {
  allotherclicks[i].addEventListener('click', open);
}