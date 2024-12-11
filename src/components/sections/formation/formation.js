import formationData from '../../../data/formation.json';
import './formation.css';

export function createFormationContent(section, language = 'es') {
  const formationList = formationData[language];
  formationList.forEach((formation) => {
    const formationContainer = document.createElement('div');
    const courseFormation = document.createElement('h3');
    const institutionFormation = document.createElement('p');
    const durationFormation = document.createElement('p');

    formationContainer.classList.add('formationcontainer');
    courseFormation.classList.add('courseformation');
    institutionFormation.classList.add('institutionformation');
    durationFormation.classList.add('durationformation');

    courseFormation.textContent = formation.course;
    institutionFormation.textContent = formation.institution;
    durationFormation.textContent = `${formation.startDate} - ${formation.endDate}`;

    formationContainer.append(
      courseFormation,
      institutionFormation,
      durationFormation
    );
    section.append(formationContainer);
  });
}
