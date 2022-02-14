const accordionElements = document.querySelectorAll('.accordion-element');

for (_accordionElement of accordionElements) {
  const button = _accordionElement.querySelector('.accordion-button');

  button.addEventListener('click', () => {
    accordionElements.forEach((element) =>
      element !== button.parentElement
        ? element.classList.remove('open')
        : element.classList.toggle('open')
    );
  });
}
