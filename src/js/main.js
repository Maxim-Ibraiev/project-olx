// import { template } from 'handlebars';
import productCardTpl from '../templates/category.handlebars';
import productCardSaleTpl from '../templates/productCard.handlebars';
import oneSliderTpl from '../templates/one-slider.handlebars';


// import CategoriesApi from './categories-api';
// const catApi = new CategoriesApi();

const mainСontainerRef = document.querySelector('.main-container');
const BASE_URL = 'https://callboard-backend.herokuapp.com';
const paginationGroup = document.querySelector('.pagination-container');

class AllCategory {
    constructor() {
        this.page = 1;
        this.category = 'work';
    }

    async fetchAllCategory() {
        const url = `${BASE_URL}/call?page=${this.page}`
        const fetches = await fetch(url)
        const json = await fetches.json()
        return json
    }

    async onWork() {
        const url = `${BASE_URL}/call/specific/${this.category}`
        const fetches = await fetch(url)
        const json = await fetches.json()
        return json
    }
    
    onePage() {
        this.page = 1;
    }
    twoPage() {
        this.page = 2;
    }
    threePage() {
        this.page = 3;
    }
}

const category = new AllCategory();

const firstPageBtn = document.querySelector('[data-atribute="one-page"]');
const secondPageBtn = document.querySelector(`[data-atribute="two-page"]`);
const thirdPageBtn = document.querySelector(`[data-atribute="three-page"]`);

firstPageBtn.addEventListener('click', markOnePage);
secondPageBtn.addEventListener('click', markTwoPage);
thirdPageBtn.addEventListener('click', markThreePage);

firstPageBtn.classList.add('is-active');

function markOnePage() {
    // console.log(document.querySelector('.button-next-pages').textContent === event.path[0].innerText);
    // event.preventDefault();
    

    category.onePage();

    category.fetchAllCategory().then(result => {
        window.scrollTo({
            top: document.body.clientHeight - 2500,
            behavior: 'smooth',
        });
        renderSlaider(result);
        
        return result;
    })
    .then(response => {
        renderCard(response);
    });

    firstPageBtn.classList.add('is-active');
    thirdPageBtn.classList.remove('is-active');
    secondPageBtn.classList.remove('is-active');

    // secondPageBtn.removeEventListener('click', markTwoPage);
    // thirdPageBtn.removeEventListener('click', markThreePage);
} 

markOnePage();


function markTwoPage(event) {
    event.preventDefault();

    category.twoPage();

    category.fetchAllCategory().then(result => {
        window.scrollTo({
            top: document.body.clientHeight - 2500,
            behavior: 'smooth',
        });
        renderSlaider(result);
        
        return result;
    })
    .then(response => {
        renderCard(response);
    });

    firstPageBtn.classList.remove('is-active');
    thirdPageBtn.classList.remove('is-active');
    secondPageBtn.classList.add('is-active');

    // firstPageBtn.removeEventListener('click', markOnePage);
    // thirdPageBtn.removeEventListener('click', markThreePage);
}

function markThreePage(event) {
    event.preventDefault();
    
    category.threePage();

    category.fetchAllCategory().then(result => {
        window.scrollTo({
            top: document.body.clientHeight - 2500,
            behavior: 'smooth',
        });
        renderSlaider(result);

        return result;
    })
    .then(response => {
        renderCard(response);
    });

    firstPageBtn.classList.remove('is-active');
    thirdPageBtn.classList.add('is-active');
    secondPageBtn.classList.remove('is-active');

    // firstPageBtn.removeEventListener('click', markOnePage);
    // secondPageBtn.removeEventListener('click', markTwoPage);
}

function renderSlaider(result) {
    const resultKey = (Object.keys(result));
        const resultKeyTransletion = translationWordsCategories(resultKey);
        markupSliderinerHTML(resultKeyTransletion);
}

function renderCard(response) {
    const valuesEntries = (Object.entries(response));
        for (const values of valuesEntries) {
            document.querySelector(`[data-category=${values[0]}]`).insertAdjacentHTML('afterbegin', productCardTpl(values[1]));
        }
}

function markupSliderinerHTML(title) {
    mainСontainerRef.innerHTML = oneSliderTpl(title);
}

const translationOfWords = {
    property: 'Нерухомість',
    transport: 'Транспорт',
    work: 'Работа',
    electronics: 'Електроніка',
    businessAndServices: 'Бізнес та послуги',
    recreationAndSport: 'Відпочинок і спорт',
    free: 'Віддам безкоштовно',
    trade: 'торговля',
    sales: 'Розпродаж   різне'
}

function translationWordsCategories(arr) {
    let newArr = arr.map(category => {
        return {
            category: category,
            tran: translationOfWords[category],
        }
    })
    return newArr;
}

mainСontainerRef.addEventListener('click', markOnlyOneCategory);

function markOnlyOneCategory(e) {
    console.log(`run markOnlyOneCategory `, e.srcElement.dataset.atributeBtn);

    if (e.srcElement.dataset.atributeBtn === 'sales') {
        category.category = `${e.srcElement.dataset.atributeBtn}`;
        category.onWork().then(res => {
            mainСontainerRef.innerHTML = productCardSaleTpl(res);
            console.log(res);
        })
        return;
    }
    if (e.srcElement.dataset.atributeBtn === 'recreationAndSport') {

        category.category = `${e.srcElement.dataset.atributeBtn}`;
        category.onWork().then(res => {
            mainСontainerRef.innerHTML = productCardTpl(res);
            console.log(res);
        })
        return;
    }
    if (e.srcElement.dataset.atributeBtn === 'free') {
        category.category = `${e.srcElement.dataset.atributeBtn}`;
        category.onWork().then(res => {
            mainСontainerRef.innerHTML = productCardTpl(res);
            console.log(res);
        })
        return;
    }

}
