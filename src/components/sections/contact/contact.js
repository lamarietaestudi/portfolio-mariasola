import './contact.css';
import formData from '../../../data/form.json';

export function createContactContent(section, language = 'es') {
  const formContainer = document.createElement('div');
  const formItems = document.createElement('form');
  formContainer.classList.add('formcontainer');
  formItems.classList.add('formitems');

  const fields = [
    {
      type: 'text',
      className: 'formfields',
      placeholder: formData[language].placeholders.name,
      name: 'name'
    },
    {
      type: 'email',
      className: 'formfields',
      placeholder: formData[language].placeholders.email,
      name: 'email'
    }
  ];
  fields.forEach((field) => {
    const input = document.createElement('input');
    input.type = field.type;
    input.classList.add(field.className);
    input.placeholder = field.placeholder;
    input.name = field.name;
    formItems.append(input);
  });
  const messageField = document.createElement('textarea');
  messageField.classList.add('formfields');
  messageField.placeholder = formData[language].placeholders.message;
  formItems.append(messageField);
  const submitButton = document.createElement('button');
  submitButton.classList.add('submitbutton');
  submitButton.type = 'submit';
  submitButton.textContent = formData[language].submit;
  formItems.append(submitButton);
  formContainer.append(formItems);
  section.append(formContainer);
  return formContainer;
}

export function updateFormPlaceholders(language = 'es') {
  const formfields = document.querySelectorAll('.formfields');
  const submitButton = document.querySelector('.submitbutton');
  submitButton.textContent = formData[language].submit;
  formfields[0].placeholder = formData[language].placeholders.name;
  formfields[1].placeholder = formData[language].placeholders.email;
  formfields[2].placeholder = formData[language].placeholders.message;
}
