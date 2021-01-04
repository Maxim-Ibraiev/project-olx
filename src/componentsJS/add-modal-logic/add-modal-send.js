import uploadFile from './add-modal-upload-file';
import refs from './refs';
import formValidate from './add-modal-validation';
import { handleCloseModal } from './add-modal-close';

const refreshToken = localStorage.getItem('refreshToken');
const { form, AddProductBtn, imageList } = refs;

form.addEventListener('submit', formSend);

async function formSend(e) {
  e.preventDefault();
  let error = formValidate(form);

  if (error === 0) {
    const formData = new FormData(form);
    var myHeaders = new Headers();
    myHeaders.append('Authorization', refreshToken);
    // Bearer-когда авторизован вставить это.;

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formData,
      redirect: 'follow',
    };
    refs.AddProductBtn.disabled = true;

    fetch('https://callboard-backend.herokuapp.com/call/', requestOptions)
      .then(response => {
        handleCloseModal();
        return response.json();
      })
      .catch(error => console.log('error', error))
      .finally(() => (refs.AddProductBtn.disabled = false));
  } else {
    alert('Заповніть будь-ласка всі поля');
  }
}

imageList.addEventListener('change', event => {
  uploadFile(event, event.target.files[0]);
});

imageList.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    const remove = confirm('Ви впевнені що бажаєте видалити фото зі списку?');
    if (remove) {
      e.target.previousElementSibling.firstElementChild.value = '';
      e.target.remove();
    }
  }
});
//===================================================================
//     let formReq = form.querySelectorAll('._req');
//     for (let i = 0; i < formReq.length; i++) {
//       const element = formReq[i];

//       if (element.classList.contains('_name')) {
//         formdata.append('title', `${element.value}`);
//       } else if (element.classList.contains('_description')) {
//         formdata.append('description', `${element.value}`);
//       } else if (element.classList.contains('_phone')) {
//         formdata.append('phone', `${element.value}`);
//       } else if (element.classList.contains('_category')) {
//         let value = element.options[element.selectedIndex].value;
//         formdata.append('category', `${value}`);
//       } else if (element.classList.contains('_price')) {
//         formdata.append('price', `${element.value}`);
//       }
//     }
