import './buttons.css';
import menuData from '../../data/menu.json';

export function createButton({ label, link, isActive = false }) {
  const button = document.createElement('button');
  button.textContent = label;
  button.classList.add('menu-button');
  if (isActive) {
    button.classList.add('active');
  }
  button.addEventListener('click', () => {
    toggleActiveButton(button);
    if (link) {
      window.location.hash = link;
    }
  });
  return button;
}

function toggleActiveButton(clickedButton) {
  const allButtons = document.querySelectorAll('.menu-button');
  allButtons.forEach((button) => button.classList.remove('active'));
  clickedButton.classList.add('active');
}

export function printButtons(container, language = 'es') {
  const menuButtons = menuData[language].filter((btn) => btn.visible);
  container.innerHTML = '';
  menuButtons.forEach((btn, index) => {
    const isActive = index === 0;
    const button = createButton({ ...btn, isActive });
    container.append(button);
  });
}
