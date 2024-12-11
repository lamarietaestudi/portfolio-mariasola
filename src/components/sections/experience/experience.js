import experienceData from '../../../data/experience.json';
import './experience.css';

export function createExperienceContent(section, language = 'es') {
  const experienceList = experienceData[language];
  experienceList.forEach((experience) => {
    const experienceContainer = document.createElement('div');
    const titleExperience = document.createElement('h3');
    const companyExperience = document.createElement('p');
    const durationExperience = document.createElement('p');
    const descriptionList = document.createElement('ul');

    experienceContainer.classList.add('experiencecontainer');
    titleExperience.classList.add('titleexperience');
    companyExperience.classList.add('companyexperience');
    durationExperience.classList.add('durationexperience');
    descriptionList.classList.add('descriptionlist');

    titleExperience.textContent = experience.jobTitle;
    companyExperience.textContent = experience.company;
    durationExperience.textContent = `${experience.startDate} - ${experience.endDate}`;
    experience.description.forEach((item) => {
      const descriptionItem = document.createElement('li');
      descriptionItem.classList.add('descriptionitem');
      descriptionItem.textContent = item;
      descriptionList.append(descriptionItem);
    });
    experienceContainer.append(
      titleExperience,
      companyExperience,
      durationExperience,
      descriptionList
    );
    section.append(experienceContainer);
  });
}
