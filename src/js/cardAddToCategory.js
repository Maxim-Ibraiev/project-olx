import BASE_URL from './BASE_URL';
import { fetchCategory } from '../js/fetchCategory';
import  CardTpl  from '../templates/productCard.handlebars';

//категория по умолчанию
fetchCategory(BASE_URL, 'property').then(render => document.querySelector('.cards_wrapper').innerHTML = CardTpl(render))

//отображаем одну категорию нажимая на нее
setTimeout(() => {
  const chooseCategory = document.querySelector('.filter__button');

  chooseCategory.addEventListener('click', onCategoryClick)
  
  function onCategoryClick(e) {
    e.preventDefault();
    
    const category = e.target.textContent;
      fetchCategory(BASE_URL, category.trim()).then(render => document.querySelector('.cards_wrapper').innerHTML = CardTpl(render))
  }
}, 1000);