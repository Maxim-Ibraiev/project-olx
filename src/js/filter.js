const filterSection = document.querySelectorAll('.section');

document.querySelector('nav').addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') return;

  let filterClass = event.target.dataset['f'];

  filterSection.forEach(element => {
    element.classList.remove('is-hidden');
    if (
      !element.classList.contains(filterClass) &&
      filterClass !== 'clear-filter'
    ) {
      element.classList.add('is-hidden');
    }
  });
});

// const clearFilterBtn = document.querySelector('.filter__buton-clear');
// clearFilterBtn.addEventListener('click', clearFilterFn);

// function clearFilterFn() {
//   console.log('click on filter');
// }
