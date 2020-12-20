const axios = require('axios');
import uploadFile from './myCallUploadFile';
import BASE_URL from '../BASE_URL';
import refs from '../renderComponentsHTML';
import currentProd from './currentProd'

refs.myCallImg.addEventListener('change', () => {
  console.log(refs.myCallInputImg);
  uploadFile(refs.myCallInputImg.files[0]);
});
const toPatch = new FormData(form)
refs.myCallInputImg.addEventListener('input', function () {
  toPatch.append('file', refs.myCallInputImg.files[0]);
});

refs.myCallSavaBtn.addEventListener('click', e => {
  const refreshToken = localStorage.getItem('refreshToken');
  const form = document.querySelector('#form')
  const category = document.querySelector('.my-calls-option').value

  toPatch.append('category',category)

  
  for (const iterator of toPatch) {
    console.log(iterator[0], ' ', iterator[1]);
    
  }

  
  
  let config = {
    method: 'PATCH',
    url: `${BASE_URL}/call/${currentProd.id}`,
    redirect: 'follow',
    headers: {
      accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${refreshToken}`,
    },
    data: toPatch,
  };
  
  axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
