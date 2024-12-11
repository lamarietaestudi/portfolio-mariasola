import skillsData from '../../../data/skills.json';
import './skills.css';

export function createSkillsContent(section, language = 'es') {
  const skillsCategories = Object.keys(skillsData[language]);

  const categoriesMenu = document.createElement('nav');
  categoriesMenu.classList.add('categoriesmenu');

  function toggleActiveButton(activeButton) {
    const buttons = categoriesMenu.querySelectorAll('.categorybutton');
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    activeButton.classList.add('active');
  }

  skillsCategories.forEach((category) => {
    const categoryButton = document.createElement('button');
    categoryButton.classList.add('categorybutton');
    categoryButton.textContent = category;

    if (category === skillsCategories[0]) {
      categoryButton.classList.add('active');
    }

    categoryButton.addEventListener('click', () => {
      toggleActiveButton(categoryButton);
      chargeSkills(category);
    });
    categoriesMenu.append(categoryButton);
  });
  section.append(categoriesMenu);

  const skillsContainer = document.createElement('div');
  skillsContainer.classList.add('skillscontainer');
  section.append(skillsContainer);

  function chargeSkills(category) {
    skillsContainer.innerHTML = '';

    let skillsList = skillsData[language][category];

    if (category === 'Técnicas' || category === 'Technical') {
      const skillsOfCategory = {};

      skillsList.forEach((skill) => {
        const categoriesArray = Array.isArray(skill.category)
          ? skill.category
          : [skill.category];

        categoriesArray.forEach((category) => {
          if (!skillsOfCategory[category]) {
            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('categorycontainer');

            const categoryTitle = document.createElement('h3');
            categoryTitle.textContent = category;
            categoryTitle.classList.add('categorytitle');
            categoryContainer.append(categoryTitle);

            skillsOfCategory[category] = categoryContainer;
          }

          const skillIcon = document.createElement('img');
          skillIcon.src = skill.logo;
          skillIcon.alt = skill.name;
          skillIcon.classList.add('skillicon');
          skillsOfCategory[category].append(skillIcon);
        });
      });

      Object.values(skillsOfCategory).forEach((categoryContainer) => {
        skillsContainer.append(categoryContainer);
      });
    } else {
      skillsList.forEach((skill) => {
        const skillProfContainer = document.createElement('div');
        skillProfContainer.classList.add('skillprofcontainer');

        const skillName = document.createElement('h3');
        skillName.textContent = skill.name;
        skillName.classList.add('skillname');

        const skillDescription = document.createElement('p');
        skillDescription.textContent = skill.description;
        skillDescription.classList.add('skilldescription');

        skillProfContainer.append(skillName, skillDescription);
        skillsContainer.append(skillProfContainer);
      });
    }
  }
  chargeSkills(skillsCategories[0]);
  toggleActiveButton(categoriesMenu.querySelector('.categorybutton'));
}
