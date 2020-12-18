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
  
  // function checkEmail(){
  //   if (email.validity.typeMismatch) {
  //     email.setCustomValidity("Введіть коректний e-mail!");
  //   } else {
  //     email.setCustomValidity("");
  //   }
  // }
  
  // const email = document.querySelector("#email");
  // const password = document.querySelector("#password")
  // email.addEventListener("input", checkEmail);

})();

const BASE_URL = 'https://callboard-backend.herokuapp.com';

const signInByGoogle = document.querySelector('.auth-modal-button-google');
const logInBtnRef = document.querySelector('.log-in');
const signInBtnRef = document.querySelector('.sign-in');
const registerFormRef = document.querySelector('.auth-modal-form');
const authInputs = registerFormRef.querySelectorAll('.auth-modal-input');

logInBtnRef.addEventListener('click', getAuthInputDataToLogin)
signInBtnRef.addEventListener('click', getAuthInputDataToSignin)

  // Log-in
function getAuthInputDataToLogin (event) {
  event.preventDefault();
 const arrAuthInputValue = Array.from(authInputs).reduce((acc, el) => {
   acc.push(el.value)
   return acc
 },[])

  let authInputData ={};
  authInputData.email = arrAuthInputValue[0]
  authInputData.password = arrAuthInputValue[1]
  console.log(authInputData);

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
      .then(data =>console.log(data));
  }
}
  // Registration
function getAuthInputDataToSignin (event) {
  event.preventDefault();
 const arrAuthInputValue = Array.from(authInputs).reduce((acc, el) => {
   acc.push(el.value)
   return acc
 },[])

  let authInputData ={};
  authInputData.email = arrAuthInputValue[0]
  authInputData.password = arrAuthInputValue[1]
  console.log(authInputData);
 
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


