const refs = {
  form: document.querySelector('.js-add-form'),
  openAddModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeAddModalBtn: document.querySelector('[data-action="close-modal"]'),
  addBackdrop: document.querySelector('.js-backdrop'),
  selectorCategory: document.querySelector('.add-modal__product-select'),
  imgLoaderArea: document.querySelector('.add-modal__product-photos'),
  addImage: document.querySelector('.add-image'),
};

// Логика закрытия модалки по кнопке закрыть, искейпу и бэкдропу
refs.openAddModalBtn.addEventListener('click', onOpenAddModal);
refs.closeAddModalBtn.addEventListener('click', onCloseAddModal);
refs.addBackdrop.addEventListener('click', onBackdropClick);

function onOpenAddModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}

function onCloseAddModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
  let formReq = refs.form.querySelectorAll('._req');
  for (let i = 0; i < formReq.length; i++) {
    const element = formReq[i];
    element.classList.remove('visible');
  }
  // form.reset();
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseAddModal();
  }
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseAddModal();
  }
}

// Логика добавления изображения и перемещения "+" на следующий блок
let imgLoaderArea;

refs.imgLoaderArea.addEventListener('click', chooseImgBlock);
refs.imgLoaderArea.addEventListener('change', previewImg);

//==================================
function chooseImgBlock(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  if (!event.target.dataset.active) {
    return;
  }
  const imgTarget = event.target;
  imgTarget.setAttribute('type', 'file');
}

//=========================
function previewImg(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  changeImgBlock(event);
  if (event.target.dataset.id) {
    const file = event.target.files[0];
    const inputID = event.target.dataset.id;
    const img = document.querySelector(`.input-label__img--${inputID}`);
    const reader = new FileReader();
    reader.onloadend = () => {
      img.src = reader.result;
      productImage = reader.result;
      img.setAttribute('data-img', productImage);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      img.src = '';
    }
  }
}

//======================
function changeImgBlock(event) {
  const imgTarget = event.target;
  imgTarget.nextElementSibling.classList.remove('choose-this');
  let imgId = Number(event.target.dataset.id);
  imgId += 1;
  if (imgId > 5) {
    return;
  }
  const nextImg = document.querySelector(`[data-id="${imgId}"]`);
  nextImg.dataset.active = true;
  nextImg.nextElementSibling.classList.add('choose-this');
}

//===========================
// Логика подгрузки и отображения категорий с бэкенда при нажатии на выпадашку выбора категории
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
    refs.selectorCategory.insertAdjacentHTML('beforeend', markup);
  })
  .catch(error => console.log('error', error));

//===========================================
// const formdata = new FormData();
const form = refs.form.addEventListener('submit', formSend);

async function formSend(e) {
  e.preventDefault();

  let error = addFormValidate(form);

  // const accessToken = sessionStorage.getItem('token');

  if (error === 0) {
    //   var myHeaders = new Headers();
    //   myHeaders.append('Authorization', `Bearer ${accessToken}`);
    //   let formReq = refs.form.querySelectorAll('._req');
    //   for (let i = 0; i < formReq.length; i++) {
    //     const element = formReq[i];
    //     if (element.classList.contains('_name')) {
    //       formdata.append('title', `${element.value}`);
    //     } else if (element.classList.contains('_description')) {
    //       formdata.append('description', `${element.value}`);
    //     } else if (element.classList.contains('_phone')) {
    //       formdata.append('phone', `${element.value}`);
    //     } else if (element.classList.contains('_category')) {
    //       let value = element.options[element.selectedIndex].value;
    //       formdata.append('category', `${value}`);
    //     } else if (element.classList.contains('_price')) {
    //       formdata.append('price', `${element.value}`);
    //     }
    //   }
    //   var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: formdata,
    //     redirect: 'follow',
    //   };
    //   fetch('https://callboard-backend.herokuapp.com/call/', requestOptions)
    //     .then(response => response.json())
    //     .then(result => {
    //       console.log(result);
    //       onCloseAddModal();
    //     })
    //     .catch(error => console.log('error', error));
  } else {
    alert('Заповніть будь-ласка всі поля');
  }
}

// addImage.addEventListener('change', () => {
//   uploadFile(addImage.files[0]);
//   formdata.append('file', addImage.files[0]);
// });

// imageList.addEventListener('click', e => {
//   if (e.target.tagName === 'IMG') {
//     const remove = confirm('Ви впевнені що хочете видалити фото зі списку?');
//     if (remove) {
//       e.target.parentNode.remove();
//     }
//   }
// });

function addFormValidate(form) {
  let error = 0;
  let formReq = refs.form.querySelectorAll('._req');

  const price = document.querySelector('._price');
  const errorPriceBlock = document.querySelector('.error-price');

  errorPriceBlock.classList.remove('visible');

  for (let i = 0; i < formReq.length; i++) {
    const element = formReq[i];
    element.classList.remove('visible');

    if (element.classList.contains('_name')) {
      if (element.value.length <= 3 || element.value.length >= 15) {
        element.classList.add('visible');
        error += 1;
      }
    } else if (element.classList.contains('_description')) {
      if (element.value.length <= 5) {
        element.classList.add('visible');
        error += 1;
      }
    } else if (element.classList.contains('_phone')) {
      if (phoneValidate(element)) {
        element.classList.add('visible');
        error += 1;
      }
    } else if (element.classList.contains('_category')) {
      let value = element.options[element.selectedIndex].value;
      if ((value === 'work' || value === 'free') && price.value !== '0') {
        errorPriceBlock.classList.add('visible');
      }

      if (element.value === 'category') {
        element.classList.add('visible');
        error += 1;
      }
    } else if (element.classList.contains('_price')) {
      if (
        (!Number(element.value) && Number(element.value) !== 0) ||
        element.value === ''
      ) {
        element.classList.add('visible');
        error += 1;
      }
    } else if (
      refs.imgLoaderArea.children.length < 1 ||
      refs.imgLoaderArea.children.length > 5
    ) {
      element.classList.add('visible');
      error += 1;
    }
  }
  return error;
}

function phoneValidate(element) {
  return !/^\+380\d{3}\d{2}\d{2}\d{2}$/.test(element.value);
}

