import refs from '../refs';

export default function uploadFile(file) {
  if (!['image/jpeg'].includes(file.type)) {
    alert('Зображення тільки формату .jpeg!');
    refs.myCallInputImg.value = '';
    return;
  }

  if (file.size > 3 * 1024 * 1024) {
    alert('Розмір зображення не більше ніж 3 МБ.');
    return;
  }
  let reader = new FileReader();
  reader.onload = function (e) {

    refs.myCallImg.insertAdjacentHTML(
      'afterbegin',
      `<div class="my-calls-input-placeholders-label">
          <img class="my-calls-input-placeholders-label-img" src="${e.target.result}">
        </div>`
    );
      
    refs.myCallImg.lastElementChild.remove()    
  };
  reader.onerror = function (e) {
    alert('Помилка завантаження зображення!');
  };

  reader.readAsDataURL(file);
}