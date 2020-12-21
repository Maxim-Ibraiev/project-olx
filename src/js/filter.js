import ApiService from '../js/api-service';
import productCard from '../templates/productCard.handlebars';

const apiService = new ApiService();

const propertyBtn = document.querySelector('.property');
const transportBtn = document.querySelector('.transport');
const workBtn = document.querySelector('.work');
const electronicsBtn = document.querySelector('.electronics');
const businessBtn = document.querySelector('.business');
const recreationBtn = document.querySelector('.recreation');
const freeBtn = document.querySelector('.free');
const tradeBtn = document.querySelector('.trade');
const headerContainer = document.querySelector('.header-container');
const mainContainer = document.querySelector('.main-container');

propertyBtn.addEventListener('click', openProperty);
transportBtn.addEventListener('click', openTransport);
workBtn.addEventListener('click', openWork);
electronicsBtn.addEventListener('click', openElectronics);
businessBtn.addEventListener('click', openBusiness);
recreationBtn.addEventListener('click', openRecreation);
freeBtn.addEventListener('click', openFree);
tradeBtn.addEventListener('click', openTrade);


function openProperty() {
    if (propertyBtn.value == '') {
        clearProdsCardContainer();
        apiService.property = propertyBtn.value;
        apiService.fetchProperty().then(cards => appendProdCardsMarkup(cards));
    }  
}

function openTransport() {
    if (transportBtn.value == '') {
        clearProdsCardContainer();
        apiService.transport = transportBtn.value;
        apiService.fetchTransport().then(cards => appendProdCardsMarkup(cards));
    }
}

function openWork() {
    if (workBtn.value == '') {
        clearProdsCardContainer();
        apiService.work = workBtn.value;
        apiService.fetchWork().then(cards => appendProdCardsMarkup(cards));
    }
}

function openElectronics() {
    if (electronicsBtn.value == '') {
        clearProdsCardContainer();
        apiService.electronics = electronicsBtn.value;
        apiService.fetchElectronics().then(cards => appendProdCardsMarkup(cards));
    }
}

function openBusiness() {
    if (businessBtn.value == '') {
        clearProdsCardContainer();
        apiService.business = businessBtn.value;
        apiService.fetchBusiness().then(cards => appendProdCardsMarkup(cards));
    }
}

function openRecreation() {
    if (recreationBtn.value == '') {
        clearProdsCardContainer();
        apiService.recreation = recreationBtn.value;
        apiService.fetchRecreation().then(cards => appendProdCardsMarkup(cards));
    }
}

function openFree() {
    if (freeBtn.value == '') {
        clearProdsCardContainer();
        apiService.free = freeBtn.value;
        apiService.fetchFree().then(cards => appendProdCardsMarkup(cards));
    }
}

function openTrade() {
    if (tradeBtn.value == '') {
        clearProdsCardContainer();
        apiService.trade = tradeBtn.value;
        apiService.fetchTrade().then(cards => appendProdCardsMarkup(cards));
    }
}

function appendProdCardsMarkup(cards) {
        mainContainer.insertAdjacentHTML('afterbegin', productCard(cards));
}

function clearProdsCardContainer() {
    mainContainer.innerHTML = "";
}