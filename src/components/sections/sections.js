import './sections.css';
import { createAboutMeContent } from './aboutme/aboutme.js';
import { createSkillsContent } from './skills/skills.js';
import { createExperienceContent } from './experience/experience.js';
import { createFormationContent } from './formation/formation.js';
import { createProjectsContent } from './projects/projects.js';
import {
  createContactContent,
  updateFormPlaceholders
} from './contact/contact.js';
import menuData from '../../data/menu.json';

export function generateSections(mainContainer, menuData, selectedLanguage) {
  mainContainer.innerHTML = '';
  menuData[selectedLanguage].forEach((menuItem) => {
    if (menuItem.visible !== true) return;
    const section = document.createElement('section');
    section.id = menuItem.link.replace('#', '');
    section.classList.add('section');
    const title = document.createElement('h2');
    title.textContent = menuItem.label;
    title.classList.add('title-section');
    section.append(title);
    switch (menuItem.link) {
      case '#aboutMe':
        createAboutMeContent(section, selectedLanguage);
        break;
      case '#skills':
        createSkillsContent(section, selectedLanguage);
        break;
      case '#experience':
        createExperienceContent(section, selectedLanguage);
        break;
      case '#formation':
        createFormationContent(section, selectedLanguage);
        break;
      case '#projects':
        createProjectsContent(section, selectedLanguage);
        break;
      case '#contact':
        createContactContent(section, selectedLanguage);
        break;
    }
    mainContainer.append(section);
  });
}
export function createSections(menuData, defaultLanguage = 'es') {
  const mainContainer = document.createElement('main');
  mainContainer.classList.add('maincontainer');
  generateSections(mainContainer, menuData, defaultLanguage);
  document.body.append(mainContainer);
}
