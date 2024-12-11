import './footer.css';

export function createFooter(language = 'es') {
  const footerContainer = document.createElement('footer');
  footerContainer.classList.add('footercontainer');
  const footerSignature = createFooterSignature();
  footerContainer.append(footerSignature);
  return footerContainer;
}
function createFooterSignature() {
  const footerSignature = document.createElement('div');
  const signatureContainer = document.createElement('p');
  footerSignature.classList.add('footersignature');
  signatureContainer.classList.add('signaturecontainer');
  const year = new Date().getFullYear();
  signatureContainer.textContent = `©${year} | Maria Sola | Portfolio`;
  footerSignature.append(signatureContainer);
  return footerSignature;
}
