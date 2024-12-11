import './header.css';
import { printButtons } from '../buttons/buttons.js';
import { updateFormPlaceholders } from '../form/form.js';
import { generateSections } from '../sections/sections.js';
import menuData from '../../data/menu.json';

export function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  const logoContainer = createLogo();
  const menuContainer = createMenu();
  const optionsContainer = createOptions();
  header.append(logoContainer, menuContainer, optionsContainer);
  document.body.prepend(header);

  const menuHamburguer = createHamburguerMenu(menuContainer);
  header.append(menuHamburguer);
}
function createLogo() {
  const logoContainer = document.createElement('div');
  const logoImage = document.createElement('img');
  const logoName = document.createElement('p');
  logoContainer.classList.add('logocontainer');
  logoImage.classList.add('logoimage');
  logoName.classList.add('logoname');
  logoImage.src = '/public/assets/icon-logo.png';
  logoImage.alt = 'Maria Sola Portfolio';
  logoName.textContent = 'Maria Sola';
  logoContainer.append(logoImage, logoName);
  return logoContainer;
}
function createMenu() {
  const menuContainer = document.createElement('nav');
  menuContainer.classList.add('menucontainer');
  const defaultLanguage = 'es';
  printButtons(menuContainer, defaultLanguage);
  return menuContainer;
}
function createOptions() {
  const optionsContainer = document.createElement('div');
  const languageSelector = createLanguageSelector();
  optionsContainer.classList.add('optionscontainer');
  optionsContainer.append(languageSelector);
  return optionsContainer;
}
function createLanguageSelector() {
  const languageSelector = document.createElement('div');
  languageSelector.classList.add('languageselector');

  const selectedLanguage = document.createElement('div');
  selectedLanguage.classList.add('selectedlanguage');

  // Idioma predeterminado
  const defaultFlag = document.createElement('img');
  defaultFlag.src = '../../public/assets/es-flag.png';
  defaultFlag.alt = 'Español';
  defaultFlag.classList.add('flag');
  selectedLanguage.appendChild(defaultFlag);

  const dropdown = document.createElement('ul');
  dropdown.classList.add('languagedropdown');

  const languages = [
    { value: 'es', url: '../../public/assets/es-flag.png', alt: 'Español' },
    { value: 'en', url: '../../public/assets/en-flag.png', alt: 'English' }
  ];

  languages.forEach((language) => {
    const languageOption = document.createElement('li');
    languageOption.classList.add('languageoption');

    const flag = document.createElement('img');
    flag.src = language.url;
    flag.alt = language.alt;
    flag.classList.add('flag');

    languageOption.appendChild(flag);

    languageOption.addEventListener('click', () => {
      defaultFlag.src = language.url;
      defaultFlag.alt = language.alt;
      updateLanguage(language.value);
      dropdown.classList.remove('show');
    });

    dropdown.appendChild(languageOption);
  });

  selectedLanguage.addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });

  languageSelector.append(selectedLanguage, dropdown);
  return languageSelector;
}
function updateLanguage(selectedLanguage) {
  const menuContainer = document.querySelector('.menucontainer');
  printButtons(menuContainer, selectedLanguage);
  const mainContainer = document.querySelector('main');
  generateSections(mainContainer, menuData, selectedLanguage);
  updateFormPlaceholders(selectedLanguage);
}

function createHamburguerMenu(menuContainer) {
  const hamburguerIcon = document.createElement('img');
  hamburguerIcon.src = './public/assets/icon-burguer.svg';
  hamburguerIcon.alt = 'responsive menu';
  hamburguerIcon.classList.add('hamburguericon');
  hamburguerIcon.addEventListener('click', () => {
    menuContainer.classList.toggle('open');
  });
  return hamburguerIcon;
}
