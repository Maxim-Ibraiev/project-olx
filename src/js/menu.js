export default openAndCloseMenu();
import sliderTpl from '../partials/slider.handlebars';

function openAndCloseMenu() {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[header-backdrop]'),
  };


  const sliderContainer = document.querySelector('.main-container')
  const myFavourites = document.querySelector('.js-my-favourites');
  myFavourites.addEventListener('click', openMyFavourites);
  const token = localStorage.getItem('refreshToken');

  function openMyFavourites() {		
		const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': token,			
      },
		};
		const url = `https://callboard-backend.herokuapp.com/user`;
		return fetch(url, options)
      .then(response => response.json()).then(currentUser => {
        console.log(currentUser.favourites);
        const markup = sliderTpl(currentUser.favourites);
        console.log(markup);
        sliderContainer.innerHTML = '';
        sliderContainer.insertAdjacentHTML('beforeend', markup);
      });
	}




  refs.openModalBtn.addEventListener('click', onClickOpenModal);
  refs.closeModalBtn.addEventListener('click', onClickCloseModal);

  function onClickOpenModal() {
    window.addEventListener("keydown", onKeyDown);
    refs.modal.addEventListener("click", onOverlayClick);
    refs.modal.classList.add("is-open");
  }

  function onClickCloseModal() {
    window.removeEventListener("keydown", onKeyDown);
    refs.modal.removeEventListener("click", onOverlayClick);
    refs.modal.classList.remove("is-open");
  }

  function onOverlayClick(event) {
    if (event.currentTarget === event.target) {
      onClickCloseModal()
    }
  }
  
  function onKeyDown(event) {
    if (event.code === "Escape") {
      onClickCloseModal()
    }
}
}