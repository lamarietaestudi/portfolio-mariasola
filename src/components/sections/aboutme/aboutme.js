import aboutmeData from '../../../data/aboutme.json';
import './aboutme.css';

export function createAboutMeContent(section, language = 'es') {
  const aboutMeContainer = document.createElement('div');
  const textAboutMe = document.createElement('p');
  const imageAboutMe = document.createElement('img');

  aboutMeContainer.classList.add('aboutmecontainer');
  imageAboutMe.classList.add('imageaboutme');
  textAboutMe.classList.add('textaboutme');

  imageAboutMe.src = aboutmeData[language].image;
  imageAboutMe.alt = 'Maria Sola';
  textAboutMe.innerHTML = aboutmeData[language].text;

  aboutMeContainer.append(textAboutMe, imageAboutMe);
  section.append(aboutMeContainer);
}
