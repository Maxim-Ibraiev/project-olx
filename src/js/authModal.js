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

const email = document.querySelector("#mail");
const password = document.querySelector("#password")
email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Введіть коректний e-mail!");
  } else {
    email.setCustomValidity("");
  }
});
// import axios from 'axios';

// const BASE_URL = 'https://callboard-backend.herokuapp.com';

// const registerUser = userData => {
//     const { email, password } = userData;
//     return axios.post(`${BASE_URL}/auth/register`, {email, password});
// }
// const postToAdd = {
//   email: document.querySelector('#mail'),
//   password: document.querySelector('#password')
// };



// const registerFormRef = document.querySelector('.auth-modal-form');
// // console.log(registerFormRef)
// const handleRegisterSubmit = event => {
//     event.preventDefault();

//     const { currentTarget: form } = event;
//     const formData = new FormData(form);
//     const body = {}


//     formData.forEach((value, key)=> {
//         body[key] = value;
//     })
//     console.log(body)
//     // console.log(formData);
//     // formData.forEach((value, key) => {
//     //     console.log(key.value);
//     // })    
//     registerUser(body)
//         .then(result => console.log(result))
// }

// registerFormRef.addEventListener('submit', handleRegisterSubmit)





// // const option = {
// //   method: 'POST',
// //   body: JSON.stringify(postToAdd),
// //   headers: {
// //     'Content-Type': 'application/json; charset=UTF-8',
// //   },
// // };

// // const urlAuthRegister = `${BASE_URL}/auth/register`;

// //  // Регистрация 
// // fetch(urlAuthRegister, option)
// //  .then((r) => r.json())
// //  .then(console.log);

// //  const urlAuthLogin = `${BASE_URL}/auth/login`;
 
// // fetch(urlAuthLogin, option)
// //   .then(r => r.json())
// //   .then(console.log);

// // const urlAuthUser = `${BASE_URL}/user`;

// // fetch(urlAuthUser, {
// //   method: 'GET',
// //   headers: myHeaders,
// // })
// //   .then(r => r.json())
// //   .then(console.log);

// // // password.addEventListener("input", function (event){
// // //     if (password) { password.setCustomValidity(message)
// // //     }
// // // })
 // Регистрация 
fetch(urlAuthRegister, option)
 .then((r) => r.json())
 .then(console.log);
