const axios = require('axios');
import { bottom } from '@popperjs/core';
import BASE_URL from '../BASE_URL';
import refs from '../renderComponentsHTML';

const add = document.querySelector('.my-calls-btn-org');
const form = document.querySelector('#form');
const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

add.addEventListener('click', e => {
  // const title = refs.myCallModal.querySelector('[name="title"]').value;
  // const imgFist = refs.myCallModal.querySelector('[name="input_file_first"]').files[0];
  // const imgSecond = refs.myCallModal.querySelector('[name="input_file_second"]').files[0];
  // const imgThird = refs.myCallModal.querySelector('[name="input_file_third"]').files[0];
  // const imgFourth = refs.myCallModal.querySelector('[name="input_file_fourth"]').files[0];
  // const imgFifth = refs.myCallModal.querySelector('[name="input_file_fifth"]').files[0];
  // const description = refs.myCallModal.querySelector('[name="comment"]').value;
  // const category = refs.myCallOption.value;
  // const price = refs.myCallModal.querySelector('[name="price"]').value;
  // const phone = refs.myCallModal.querySelector('[name="telephone"]').value;
  // let data = new FormData();

  // data.append('title', title);
  // // data.append('file', [imgFist, imgSecond, imgThird, imgFourth, imgFifth].filter(el => el));
  // data.append('file', imgFist);
  // data.append('description',description)
  // data.append('category',category)
  // data.append('price',price)
  // data.append('phone',phone)

  const form = document.querySelector('#form')
  const dataForm = new FormData(form)
  // const description = document.querySelector('#description').value
  const category = document.querySelector('.my-calls-option').value
  dataForm.append('category',category)
  
  for (var pair of dataForm.entries()) {
    console.log(pair[0]+ ', ' + pair[1]); 
}

  let config = {
    method: 'POST',
    url: `${BASE_URL}/call`,
    redirect: 'follow',
    headers: {
      accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${refreshToken}`,
    },
    data: dataForm,
  };
  
  axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

// const formData = new FormData();
//   const myHeaders = new Headers();
//   addCardForm.addEventListener('submit', onFormSubmit);
//   photoElem.addEventListener('input', function () {
//     formData.append('file', photoElem.files[0]);
//   });
//   async function onFormSubmit(e) {
//     e.preventDefault();
//     const formElements = e.currentTarget.elements;
//     const title = formElements.title.value;
//     const description = formElements.description.value;
//     const category = formElements.category.value;
//     const price = formElements.price.value;
//     const phone = formElements.phone.value;
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('category', category);
//     formData.append('price', Number(price));
//     formData.append('phone', phone);
//     myHeaders.append('Authorization', `Bearer ${load('Token').accessToken}`);
//     const URL = 'https://callboard-backend.herokuapp.com/call';
//     const requestOptions = {
//       method: 'POST',
//       redirect: 'follow',
//       headers: myHeaders,
//       body: formData,
//     };
//     const answer = await fetch(URL, requestOptions);
//     if (answer.ok) {
//       closeBtn.click();
//       pushError('Ваше оголошення успішно опубліковане');
//     }
