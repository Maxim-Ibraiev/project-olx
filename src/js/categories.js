let translationOfWords = {
    property:'Нерухомість',
    transport:'Транспорт',
    work:'Робота',
    electronics:'Eлектроніка',
    'business and services':'Бізнес та услуги',
    'recreation and sport':'Відпочинок і спорт',
    free:'Віддам безкоштовно',
    trade:'Обмін'
};

let BASE_URL = 'https://callboard-backend.herokuapp.com';
let getCategories = async () => {
    return await fetch(`${BASE_URL}/call/categories`)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error))
}

let getCategory = ( category ) => {
  
    fetch(`${BASE_URL}/call/specific/${category}`)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}



let menuRef = document.querySelector('.filter__item');

let addMarkup = ( categories ) => {
    let markup = categories.map( category => `<a href="/${category}.html" data-category="${category}" class="filter__button"${category}">${translationOfWords[category]}</a>`)
  menuRef.innerHTML = markup.join(' ')
  
}

menuRef.addEventListener('click', (e) => {
    e.preventDefault();
    let category = e.target.getAttribute('data-category');
    getCategory ( category );
})

let start = async () => {
  let categories = await getCategories();
  addMarkup ( categories )
}

start();

