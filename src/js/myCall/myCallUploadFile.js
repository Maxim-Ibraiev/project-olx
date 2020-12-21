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
    
    for (let ind = 0; ind < refs.myCallImg.children.length; ind++) {
      const hasSrc = refs.myCallImg.children[ind].children[0].src == 'http://localhost:4444/src/images/placeholder.png'

    }


    
  // }
      
    
      // console.dir(refs.myCallImg.children[0].children[0].src);
      // refs.myCallImg.lastElementChild.remove()    
  };
  reader.onerror = function (e) {
    alert('Помилка завантаження зображення!');
  };

  reader.readAsDataURL(file);
}