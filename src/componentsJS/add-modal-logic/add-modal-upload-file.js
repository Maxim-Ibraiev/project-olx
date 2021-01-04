import refs from './refs';

const { addImage, imageList } = refs;

export default function uploadFile(event, file) {
  if (!['image/jpeg'].includes(file.type)) {
    alert('Зображення тільки формату .jpeg!');
    addImage.value = '';
    return;
  }

  if (file.size > 3 * 1024 * 1024) {
    alert('Розмір зображення не більше ніж 3 МБ.');
    return;
  }
  let reader = new FileReader();

  reader.onload = function (e) {
    event.target.parentNode.parentNode.insertAdjacentHTML(
      'beforeend',
      `<img class="image-preview__item" style="position: absolute; width: 100%; object-fit: contain " src="${e.target.result}" alt="" />`,
    );
  };

  reader.onerror = function () {
    alert('Помилка завантаження зображення!');
  };

  reader.readAsDataURL(file);
}
