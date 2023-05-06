export function selectClick() {
  const selected = document.querySelector('.selected');
  const optionsList = document.querySelectorAll('.option');
  const optionsContainer = document.querySelector('.options-container');
  console.log(optionsContainer.classList);
  optionsContainer.classList.toggle('active');

  optionsList.forEach((o) => {
    o.addEventListener('click', () => {
      const optionsContainer = document.querySelector('.options-container');
      selected.innerHTML = o.querySelector('label').innerHTML;
      optionsContainer.classList.remove('active');
    });
  });
}
