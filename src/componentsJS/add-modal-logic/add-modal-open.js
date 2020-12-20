import refs from './refs';

const { body, openModalAddBtn, addModalOverlay, selectorCategory } = refs;

openModalAddBtn.addEventListener('click', handleOpenModal);

function handleOpenModal() {
  addModalOverlay.classList.add('visible');
  // body.classList.add('hidden');
}

fetch('https://callboard-backend.herokuapp.com/call/categories')
  .then(response => response.json())
  .then(result => {
    let translationOfWords = {
      property: 'Нерухомість',
      transport: ' Транспорт',
      work: 'Робота',
      electronics: 'Електроніка',
      'business and services': 'Бізнес та послуги',
      'recreation and sport': 'Відпочинок та спорт',
      free: 'Віддам безкоштовно',
      trade: 'Обмін',
    };
    const markup = result.map(
      category =>
        `<option value="${category}" class="select-option">${translationOfWords[category]}</option> `,
    );
    selectorCategory.insertAdjacentHTML('beforeend', markup);
  })
  .catch(error => console.log('error', error));
