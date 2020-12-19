const axios = require('axios')
import BASE_URL from '../BASE_URL'

const add = document.querySelector('.my-calls-btn-org');
const form = document.querySelector('#form');
const token = localStorage.getItem('token');
add.addEventListener('click', ()=>{
    let data = new FormData(form);
    let config = {
        method: 'POST',
        url: `${BASE_URL}/call`,
        headers: { 
          'accept': 'application/json', 
          'Content-Type': 'multipart/form-data', 
          'Authorization': `Bearer ${token}`
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}) 