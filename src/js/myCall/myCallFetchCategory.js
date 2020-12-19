import refs from '../refs'
import currentProd from './currentProd'

// Fill in category
export default fetch('https://callboard-backend.herokuapp.com/call/categories')
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
    refs.myCallOption.insertAdjacentHTML('beforeend', markup);
  })
  .then(() => {
    refs.myCallOption.value = currentProd.category;
  })
  .catch(error => console.log('error', error));