// import { template } from 'handlebars';
// import productCardTpl from '../templates/category.handlebars';
import productCardSaleTpl from '../templates/productCard.handlebars';
import favoritePage from '../partials/favoritePage.handlebars';


// import CategoriesApi from './categories-api';
// const catApi = new CategoriesApi();

const mainСontainerRef = document.querySelector('.main-container');
const paginationContainer = document.querySelector('.pagination-container');
const BASE_URL = 'https://callboard-backend.herokuapp.com';
const containerOwn = document.querySelector('[data-action="add-owns"]');
const containerFavorites = document.querySelector('[data-action="add-favorites"]');


const goToFavoriteLink = document.querySelector('[data-action="go-to-favorite"]');

goToFavoriteLink.addEventListener('click', deleteMain);

function deleteMain () {
    mainСontainerRef.innerHTML = favoritePage();
    paginationContainer.innerHTML = '';
}
