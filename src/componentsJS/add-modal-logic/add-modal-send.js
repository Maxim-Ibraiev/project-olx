import uploadFile from './add-modal-upload-file';
import refs from './refs';
import formValidate from './add-modal-validation';
import { handleCloseModal } from './add-modal-close';

const { form, addImage, imageList } = refs;
const formdata = new FormData();

form.addEventListener('submit', formSend);

async function formSend(e) {
  e.preventDefault();

  let error = formValidate(form);
  const accessToken = sessionStorage.getItem('token');

  if (error === 0) {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    let formReq = form.querySelectorAll('._req');
    for (let i = 0; i < formReq.length; i++) {
      const element = formReq[i];

      if (element.classList.contains('_name')) {
        formdata.append('title', `${element.value}`);
      } else if (element.classList.contains('_description')) {
        formdata.append('description', `${element.value}`);
      } else if (element.classList.contains('_phone')) {
        formdata.append('phone', `${element.value}`);
      } else if (element.classList.contains('_category')) {
        let value = element.options[element.selectedIndex].value;
        formdata.append('category', `${value}`);
      } else if (element.classList.contains('_price')) {
        formdata.append('price', `${element.value}`);
      }
    }

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://callboard-backend.herokuapp.com/call/', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        handleCloseModal();
      })
      .catch(error => console.log('error', error));
  } else {
    alert('Заповніть будь-ласка всі поля!');
  }
}

addImage.addEventListener('change', () => {
  uploadFile(addImage.files[0]);
  formdata.append('file', addImage.files[0]);
});

imageList.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    const remove = confirm('Ви впевнені що бажаєте видалити фото зі списку?');
    if (remove) {
      e.target.parentNode.remove();
    }
  }
});
