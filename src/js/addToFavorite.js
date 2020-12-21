import { requestRemoveFromFavorites, requestAddToFavorites } from './requestFavorite';
const refs = {
    addFavoriteBtn: document.querySelector('.favorite')
}

//Добавление в избранное POST/call/favourite/{callId}

function onAddToFavoriteListener(){
    refs.addFavoriteBtn.addEventListener('click', addFavoriteCard);
}
function addFavoriteCard(e) { 
    e.preventDefault();
    
    requestAddToFavorites()
    .catch(error => console.log('error', error));
}


//Удаление из избранного DELETE/call/favourite/{callId}
function onRemoveFromFavoriteListener(){
refs.addFavoriteBtn.addEventListener('click', removeFavoriteCard);
}

function removeFavoriteCard(e) { 
    e.preventDefault();
    requestRemoveFromFavorites()
    .catch(error => console.log('error', error));
}

function getListenersFavoriteCard() {
    onAddToFavoriteListener();
    onRemoveFromFavoriteListener();
  };

