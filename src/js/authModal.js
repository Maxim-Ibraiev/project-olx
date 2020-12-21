import { data } from 'jquery';

const refs = {
  openAuthModalBtn: document.querySelector('[auth-modal-open]'),
  closeAuthModalBtn: document.querySelector('[auth-modal-close]'),
  authModal: document.querySelector('[auth-modal]'),
  authBackdrop: document.querySelector('.auth-backdrop'),
};
(() => {
  // authContainer: document.querySelector('.auth-container'),

  refs.authBackdrop.addEventListener('click', closeAuthModalByClickToBackdrop);
  refs.openAuthModalBtn.addEventListener('click', toggleModal);
  refs.closeAuthModalBtn.addEventListener('click', toggleModal);

  // refs.authBackdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', closeModalbyEsc);
  function closeModalbyEsc(evt) {
    if (evt.code === 'Escape') {
      closeModal();
    }
  }

  function toggleModal() {
    refs.authModal.classList.toggle('is-hidden');
  }

  function closeAuthModalByClickToBackdrop(evt) {
    if (evt.target === evt.currentTarget) {
      closeModal();
    }
  }
})();

const authForm = document.querySelector('.auth-modal-form');
// console.log(authForm);
const authValidateButton = document.querySelectorAll('.auth-modal-button');
// console.log(authValidateButton);
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const validateFields = authForm.querySelectorAll('.auth-modal-input');

const generateError = function (text) {
  var error = document.createElement('div');
  error.className = 'error';
  error.style.color = 'red';
  error.innerHTML = text;
  return error;
};

const removeValidation = function () {
  var errors = authForm.querySelectorAll('.error');
  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
};

const checkFieldsPresence = function () {
  for (let i = 0; i < validateFields.length; i++) {
    if (!validateFields[i].value) {
      console.log('field is blank', validateFields[i]);
      let error = generateError('Заповніть корректно!');
      authForm[i].parentElement.insertBefore(error, validateFields[i]);
    }
  }
};

const validateFormFunction = function (event) {
  removeValidation();
  checkFieldsPresence();
};

authForm.addEventListener('submit', validateFormFunction);

const BASE_URL = 'https://callboard-backend.herokuapp.com';

// const signInByGoogle = document.querySelector('.auth-modal-button-google');
const logInBtnRef = document.querySelector('.log-in');
const signInBtnRef = document.querySelector('.sign-in');
const registerFormRef = document.querySelector('.auth-modal-form');
const authInputs = registerFormRef.querySelectorAll('.auth-modal-input');

logInBtnRef.addEventListener('click', getAuthInputDataToLogin);
signInBtnRef.addEventListener('click', getAuthInputDataToSignin);

// Log-in
function getAuthInputDataToLogin(event) {
  if (!event.email) event.preventDefault();
  validateFormFunction();

  const arrAuthInputValue = Array.from(authInputs).reduce((acc, el) => {
    acc.push(el.value);
    return acc;
  }, []);

  let authInputData = {};
  authInputData.email = arrAuthInputValue[0];
  authInputData.password = arrAuthInputValue[1];
  // console.log(authInputData);

  fetchLogInData(authInputData);

  function fetchLogInData(body) {
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
      .then(data => {
        if (data.message == 'Password is wrong') {
          alert('Неверный пароль');

          return;
        }

        if(data.message != undefined) {

          if (data.message.split(' ').includes("doesn't")) {
            alert('Неверный логин');
            
            return;
          }
        }

        if (data.refreshToken) {
          localStorage.setItem('refreshToken', data.refreshToken);
          switchStatus();
          closeModal();
          return;
        }
      })
      .catch(console.log);
  }
}

// Registration
function getAuthInputDataToSignin(event) {
  event.preventDefault();
  validateFormFunction();

  const arrAuthInputValue = Array.from(authInputs).reduce((acc, el) => {
    acc.push(el.value);
    return acc;
  }, []);

  let authInputData = {};
  authInputData.email = arrAuthInputValue[0];
  authInputData.password = arrAuthInputValue[1];

  const urlAuthSignIn = `${BASE_URL}/auth/register`;
  const option = {
    method: 'POST',
    body: JSON.stringify(authInputData),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  fetch(urlAuthSignIn, option)
    .then(r => r.json())
    .then(data => {
      console.log(data);
      delete data.id;

      if(data.message) {

        if (data.message.split(' ').includes('exists')) {
          alert('Пользователь с такой электронной почтой уже существует');
          return
        }
      }
      getAuthInputDataToLogin(data);
    });
}

function closeModal() {
  refs.authModal.classList.add('is-hidden');
}

//************/
const modalBtn = document.querySelector('.authorization');
const accountBtn = document.querySelector('.account');
const logoutBtn = document.querySelector('.logout');

if (
  localStorage.getItem('refreshToken') &&
  localStorage.getItem('refreshToken') != 'undefined'
) {
  switchStatus();
}

function switchStatus() {
  if (modalBtn.hasAttribute('hidden')) {
    modalBtn.removeAttribute('hidden');
    accountBtn.hidden = true;
    logoutBtn.hidden = true;

    return;
  }
  modalBtn.hidden = true;
  accountBtn.removeAttribute('hidden');
  logoutBtn.removeAttribute('hidden');
}
