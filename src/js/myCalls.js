import BASE_URL from './BASE_URL'
import refs from './refs'

const currentProd = {
  imageUrls: [
    'https://storage.googleapis.com/kidslikev2_bucket/07f526f8-4cbe-4d47-8b3a-ffd3cdc3e150.jpeg',
  ],
  _id: '5fd076b7deae5f0017e41a7d',
  title: 'Red Shirt',
  description: 'New red shirt, made from cotton',
  category: 'business and services',
  price: 255,
  phone: '+380000000000',
  isOnSale: false,
  userId: '5fcf371a2d55d90017ae3391',
  __v: 0,
}

const url = `${BASE_URL}/call/${currentProd._id}`
const postToUpdate = {};
const option = {
  method: 'PATCH',
  body: JSON.stringify(postToUpdate),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
}

// Собрать данные из инпута
console.log(refs.MyCallSavaBtn)
refs.MyCallSavaBtn.addEventListener('click', productUpdate)

function productUpdate (e) {
// fetch(url, option)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log('ERROR' + error));
}



// Отправить запрос на бекенд, чтобы изменить цену
