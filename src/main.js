import './style.css';
import { createHeader } from './components/header/header.js';
import { createSections } from './components/sections/sections.js';
import { updateFormPlaceholders } from './components/sections/contact/contact.js';
import { createFooter } from './components/footer/footer.js';
import menuData from './data/menu.json';

document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('.header')) {
    createHeader();
  }
  if (!document.querySelector('.maincontainer')) {
    createSections(menuData);
  }
  if (!document.querySelector('.footercontainer')) {
    document.body.append(createFooter());
  }
  updateFormPlaceholders();
});
