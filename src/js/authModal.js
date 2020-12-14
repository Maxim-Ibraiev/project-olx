(() => {
    const refs = {
      openAuthModalBtn: document.querySelector('[auth-modal-open]'),
      closeAuthModalBtn: document.querySelector('[auth-modal-close]'),
      authModal: document.querySelector('[auth-modal]'),
    };
  
    refs.openAuthModalBtn.addEventListener('click', toggleModal);
    refs.closeAuthModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.authModal.classList.toggle('is-hidden');
    }
  })();


const email = document.querySelector("#email");
const password = document.querySelector("#password")
email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Введіть коректний e-mail!");
  } else {
    email.setCustomValidity("");
  }
});

// import axios from 'axios';

// logInButton.addEventListener('click', handleRegisterSubmit)

import axios from 'axios';

const BASE_URL = 'https://callboard-backend.herokuapp.com';

const registerUser = userData => {
    const { email, password } = userData;
    return axios.post(`${BASE_URL}/auth/login`, {email, password});
}
// const logInButton = document.querySelector('.log-in')
const registerFormRef = document.querySelector('.auth-modal-form');
//const emailRef = document.querySelector('.email');
//const passwordRef = document.querySelector('.password');
const handleRegisterSubmit = event => {
    event.preventDefault();
    const { target: form } = event;
    // const { emailRef, passwordRef } = event;
    // const { currentTarget: form } = event.target;
    // const { registerFormRef } = event;
    const formData = new FormData(form);
    // const formData = new FormData(emailRef, passwordRef);
    const body = {}

    formData.forEach((value, key)=> {
        body[key] = value;
    })

    // )
    // registerUser(event)
    registerUser(body)
        .then(({data}) => console.log(data))
        // .then(({emailRef, passwordRef}) => console.log(emailRef, passwordRef))
}

// logInButton.addEventListener('click', handleRegisterSubmit)
registerFormRef.addEventListener('submit', handleRegisterSubmit)

const registerFormRef = document.querySelector('.auth-modal-form');
// console.log(registerFormRef)
const handleRegisterSubmit = event => {
    event.preventDefault();

    const { currentTarget: form } = event;
    const formData = new FormData(form);
    const body = {}


    formData.forEach((value, key)=> {
        body[key] = value;
    })
    console.log(body)
    // console.log(formData);
    // formData.forEach((value, key) => {
    //     console.log(key.value);
    // })    
    registerUser(body)
        .then(result => console.log(result))
}

// registerFormRef.addEventListener('submit', handleRegisterSubmit)

const BASE_URL = 'https://callboard-backend.herokuapp.com';

const postToAdd = {
    email: 'user5468878994545@example.com',
    password: 'qwerty123',
  };

 const option = {
   method: 'POST',
   body: JSON.stringify(postToAdd),
   headers: {
     'Content-Type': 'application/json; charset=UTF-8',
   },
 };

 const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append(
  'Authorization',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc',
);

const urlAuthRegister = `${BASE_URL}/auth/login`;

 // Регистрация 
fetch(urlAuthRegister, option)
 .then((r) => r.json())
 .then(console.log);
