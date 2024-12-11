import projectsData from '../../../data/projects.json';
import './projects.css';

export function createProjectsContent(section, language = 'es') {
  const projectsList = projectsData;
  const projectsContainer = document.createElement('div');
  projectsContainer.classList.add('projectscontainer');
  section.append(projectsContainer);
  let modalWindow = document.querySelector('.modalwindow');
  if (!modalWindow) {
    modalWindow = createModalWindow();
    document.body.append(modalWindow);
  }

  const updateProjectsContent = (language) => {
    projectsContainer.innerHTML = '';

    projectsList.forEach((project) => {
      const projectWindow = document.createElement('div');
      const mainImageProject = document.createElement('img');

      projectWindow.classList.add('projectwindow');
      mainImageProject.classList.add('mainImageproject');

      mainImageProject.src = project.mainImage;

      mainImageProject.addEventListener('click', () => {
        openModalWindow(modalWindow, project, language);
      });
      projectWindow.append(mainImageProject);
      projectsContainer.append(projectWindow);
    });
  };
  updateProjectsContent(language);

  function createModalWindow() {
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modalwindow');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modalcontent');

    modalWindow.addEventListener('click', (event) => {
      if (event.target === modalWindow) {
        closeModalWindow();
      }
    });

    const closeButton = document.createElement('button');
    closeButton.classList.add('closebutton');
    closeButton.textContent = 'x';
    closeButton.addEventListener('click', closeModalWindow);

    const prevImage = document.createElement('button');
    prevImage.classList.add('navimages', 'previmage');
    prevImage.textContent = '<<';
    prevImage.addEventListener('click', () => navigateImages(-1));

    const nextImage = document.createElement('button');
    nextImage.classList.add('navimages', 'nextimage');
    nextImage.textContent = '>>';
    nextImage.addEventListener('click', () => navigateImages(1));

    modalContent.append(closeButton, prevImage, nextImage);
    modalWindow.append(modalContent);

    return modalWindow;
  }

  function openModalWindow(modalWindow, project, language) {
    const modalContent = modalWindow.querySelector('.modalcontent');
    const [closeButton, prevImage, nextImage] = modalContent.children;

    modalContent.innerHTML = '';
    modalContent.append(closeButton, prevImage, nextImage);

    const titleProject = document.createElement('h2');
    const descriptionProject = document.createElement('p');

    titleProject.textContent = project.title;
    descriptionProject.textContent = project.description[language];

    titleProject.classList.add('titleproject');
    descriptionProject.classList.add('descriptionproject');

    const imagesContainer = document.createElement('div');
    imagesContainer.classList.add('imagescontainer');
    imagesContainer.dataset.currentIndex = 0;
    project.images.forEach((image, index) => {
      const img = document.createElement('img');
      img.src = image;
      img.alt = project.title;
      img.dataset.index = index;
      img.style.display = index === 0 ? 'block' : 'none';
      imagesContainer.append(img);
    });

    modalContent.append(titleProject, descriptionProject, imagesContainer);
    modalWindow.style.display = 'block';
  }

  function closeModalWindow() {
    const modalWindow = document.querySelector('.modalwindow');
    modalWindow.style.display = 'none';
  }

  function navigateImages(direction) {
    const imagesContainer = document.querySelector('.imagescontainer');
    const images = imagesContainer.querySelectorAll('img');
    let currentIndex = parseInt(imagesContainer.dataset.currentIndex) || 0;
    currentIndex = (currentIndex + direction + images.length) % images.length;
    imagesContainer.dataset.currentIndex = currentIndex;

    images.forEach((img, index) => {
      img.style.display = index === currentIndex ? 'block' : 'none';
    });
  }
  return updateProjectsContent;
}
