import refs from './refs';

const { addImage, imageList } = refs;

export default function uploadFile(file) {
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
    imageList.insertAdjacentHTML(
      'beforeend',
      `<li class="image-preview__item"><img src="${e.target.result}" alt="" /></li>`,
    );
  };
  reader.onerror = function (e) {
    alert('Помилка завантаження зображення!');
  };

  reader.readAsDataURL(file);
}
