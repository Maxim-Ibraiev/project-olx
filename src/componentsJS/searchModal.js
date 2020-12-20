import ApiService from '../js/api-service';
import productCard from '../templates/productCard.handlebars';

const apiService = new ApiService();

const searchBtn = document.querySelector('button[data-modal="search"]');
const modal = document.querySelector('.search-modal');
const searchModalCloseIcon = document.querySelector('.search-modal-button-close');
const searchModalSearchIcon = document.querySelector('.search-modal-button-search');
const searchModalInput = document.querySelector('.search-modal-input');
const searchModalOverlay = document.querySelector('.search-modal-overlay');
const infoMessage = document.querySelector('.error-message');
const headerContainer = document.querySelector('.header-container');
const mainContainer = document.querySelector('.main-container');

searchBtn.addEventListener('click', openSearchModal);
searchModalCloseIcon.addEventListener('click', closeSearchModal);
searchModalOverlay.addEventListener('click', closeSearchModal);
searchModalSearchIcon.addEventListener('click', searchQuery);
window.addEventListener('keydown', keyboardPress);

function openSearchModal() { 
    modal.classList.add('is-open');
    document.body.classList.add('overflow-hidden');
}

function closeSearchModal() {
    modal.classList.remove('is-open');
    document.body.classList.remove('overflow-hidden');
}

function searchQuery() {
    if (searchModalInput.value == '') {
        infoMessage.classList.add('is-open')
    } else {
        clearProdsCardContainer();
        apiService.searchQuery = searchModalInput.value;
        infoMessage.classList.remove('is-open');
        apiService.fetchSearchQuery().then(cards => appendProdCardsMarkup(cards));
    }  
}

function keyboardPress(event) {
    if (event.code === 'Escape') {
        closeSearchModal();
    } else if (event.code === 'Enter') {
        searchQuery()
    }   
}

function appendProdCardsMarkup(cards) {
    if (cards.length > 0) {
        mainContainer.insertAdjacentHTML('afterbegin', productCard(cards));
    } else {
        infoMessage.classList.add('is-open')
    }
}

function clearProdsCardContainer() {
    mainContainer.innerHTML = "";
}