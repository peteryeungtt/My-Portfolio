// Mobile Menu
const myLogo = document.querySelector('.my-logo-wrapper');
const menuDesktop = document.querySelector('.right-menu');
const hambugeIcon = document.querySelector('.hamburger-menu');
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

if (storageObject) {
  document.getElementById('name').value = storageObject.name;
  document.getElementById('email').value = storageObject.email;
  document.getElementById('message').value = storageObject.message;
}

// Work Projects
const projects = [
  {
    title: 'Multi Post Stories',
    image: 'images/modal-picture0.png',
    image1: 'images/project1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
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

// Popup
const htmlCode = `
  <div id="popup-wrapper" class="popup-modal display-none">
    <div class="popup-inner">
      <div class="popup-close-btn">
        <div class="title-descr">
          <h1 id="popup-header" class="project-heading-pop">
          ${projects[0].title}</h1>
          <svg id="x-popup" class=".xBtn" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path fill="#67798E" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"></path>
          </svg>
        </div>
        <ul class="popup-tag-list">
          <li class="tag-items popup-feature">
          ${projects[0].technologies[0 + 0]}</li>
          <li class="tag-items popup-feature">
          ${projects[0].technologies[0 + 1]}</li>
          <li class="tag-items popup-feature">
          ${projects[0].technologies[0 + 2]}</li>
        </ul>
      </div>
      <div class="popup-info">
        <img id="popup-image" class="popup-image" src="
        ${projects[0].image}" alt="post image">
        <div class="popup-info-holder">
          <p id="popup-description" class="popup-description">
          ${projects[0].description}
          </p>
          <p id="popup-description1" class="popup-description desktop-des1">
            A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.
          </p>
          <div class="popup-btn-holder">
            <a id="seeLivePopup" class="popup-btn btn" href="
            ${projects[0].live_link}">See live
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="black"></path>
              </svg>
            </a>
            <a id="seeSourcePopup" class="popup-btn btn" href="
            ${projects[0].source_link}">See source
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="black"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
const container = document.createElement('div');
container.innerHTML = htmlCode;
document.body.appendChild(container);

function openModal() {
  document.getElementById('popup-wrapper').classList.remove('display-none');
}

function closeModal() {
  document.getElementById('popup-wrapper').classList.add('display-none');
}

const clickOpen = document.querySelector('.see-work-btn');
clickOpen.addEventListener('click', openModal);

const clickClose = document.getElementById('x-popup');
clickClose.addEventListener('click', closeModal);

const allOtherButtons = document.querySelectorAll('.other-work-see-btn');

for (let i = 0; i < 6; i += 1) {
  allOtherButtons[i].addEventListener('click', openModal);
}
