import { data } from "jquery";

(() => {
  const refs = {
    openAuthModalBtn: document.querySelector('[auth-modal-open]'),
    closeAuthModalBtn: document.querySelector('[auth-modal-close]'),
    authModal: document.querySelector('[auth-modal]'),
    authBackdrop: document.querySelector('.auth-backdrop'),
    // authContainer: document.querySelector('.auth-container'),

  };

  refs.authBackdrop.addEventListener('click', closeAuthModalByClickToBackdrop);
  refs.openAuthModalBtn.addEventListener('click', toggleModal);
  refs.closeAuthModalBtn.addEventListener('click', toggleModal);

  // refs.authBackdrop.addEventListener('click', closeModal);

  function closeModal(){
    refs.authModal.classList.add('is-hidden');
  }

  window.addEventListener('keydown', closeModalbyEsc)
    function closeModalbyEsc (evt){
  if (evt.code === "Escape"){
  closeModal()
  }
 }

  function toggleModal() {
    refs.authModal.classList.toggle('is-hidden');
  }

  function closeAuthModalByClickToBackdrop(evt){
    if(evt.target === evt.currentTarget){
      closeModal()
    }
  }

})();

const authForm = document.querySelector('.auth-modal-form');
// console.log(authForm);
const authValidateButton = document.querySelectorAll('.auth-modal-button');
// console.log(authValidateButton);
const emailInput = document.querySelector('.email')
const passwordInput = document.querySelector('.password')
const validateFields = authForm.querySelectorAll('.auth-modal-input')

const generateError = function (text) {
  var error = document.createElement('div')
  error.className = 'error'
  error.style.color = 'red'
  error.innerHTML = text
  return error
}

const removeValidation = function () {
  var errors = authForm.querySelectorAll('.error')
    for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
    }
  }

const checkFieldsPresence = function () {
  for (let i = 0; i < validateFields.length; i++) {
      if (!validateFields[i].value) {
        console.log('field is blank', validateFields[i])
        let error = generateError('Заповніть корректно!')
      authForm[i].parentElement.insertBefore(error, validateFields[i])
      }
    }
}

const validateFormFunction = function (event){
removeValidation()
checkFieldsPresence()
}

authForm.addEventListener('submit', validateFormFunction)

const BASE_URL = 'https://callboard-backend.herokuapp.com';

// const signInByGoogle = document.querySelector('.auth-modal-button-google');
const logInBtnRef = document.querySelector('.log-in');
const signInBtnRef = document.querySelector('.sign-in');
const registerFormRef = document.querySelector('.auth-modal-form');
const authInputs = registerFormRef.querySelectorAll('.auth-modal-input');

logInBtnRef.addEventListener('click', getAuthInputDataToLogin)
signInBtnRef.addEventListener('click', getAuthInputDataToSignin)

  // Log-in
function getAuthInputDataToLogin (event) {
  event.preventDefault();
  validateFormFunction()
  
 const arrAuthInputValue = Array.from(authInputs).reduce((acc, el) => {
   acc.push(el.value)
   return acc
 },[])

  let authInputData ={};
  authInputData.email = arrAuthInputValue[0]
  authInputData.password = arrAuthInputValue[1]
  // console.log(authInputData);

fetchLogInData(authInputData);

  function fetchLogInData(body){
    const urlAuthLogin = `${BASE_URL}/auth/login`;
    const option = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        },
    };
      fetch(urlAuthLogin, option)
      .then(r => r.json())
      .then(data => console.log(data));

      async function fetchDataLogin(){
        const urlAuthUser = `${BASE_URL}/auth/login`
      
        const obj = await fetch(urlAuthUser, option).then()
        // let result = {};
        const result = obj.json()
        console.log(result);
        // result.accessToken = result[0]
        const token = result.then(data=>data.refreshToken)
        console.log(token);
          localStorage.setItem('token', token)
        }
        fetchDataLogin()
  }
}

  // Registration
function getAuthInputDataToSignin (event) {
  
  // event.preventDefault();
  validateFormFunction()
 
 const arrAuthInputValue = Array.from(authInputs).reduce((acc, el) => {
   acc.push(el.value)
   return acc
 },[])

  let authInputData ={};
  authInputData.email = arrAuthInputValue[0]
  authInputData.password = arrAuthInputValue[1]
  // console.log(authInputData);
 
  fetchSignInData(authInputData);
 
  function fetchSignInData(body){
    const urlAuthSignIn = `${BASE_URL}/auth/register`;
    const option = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        },
      };
      fetch(urlAuthSignIn, option)
      .then(r => r.json())
      .then(data =>console.log(data));
  }
}


