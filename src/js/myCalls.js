localStorage.setItem(
  'accessToken',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYwNzY4MDg0Mn0.Nw3Xu2mElqFP5XXQ8OXlbheo6aN7ZC6fSXqup1AaeNI',
);
localStorage.setItem(
  'refreshToken',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc',
);

import BASE_URL from './BASE_URL';
import refs from './refs';
import currentProd from './myCall/currentProd';
import './myCall/myCallFetchCategory';
import './myCall/myCallPatch.js';



////////// Fill in inputs //////////

const inputs = refs.myCallModal.querySelectorAll('.js-my-calls-input');
const toFillInputs = ['title', 'description', 'price', 'phone', 'imageUrls'];

for (let ind = 0; ind < inputs.length; ind++) {
  inputs[ind].value = currentProd[toFillInputs[ind]];
}

refs.myCallSavaBtn.addEventListener('click', onProductUpdate);

function onProductUpdate() {
  // Collect values of inputs
  const arrValues = Array.from(inputs).reduce((acc, el) => {
    acc.push(el.value);

    return acc;
  }, []);

}
