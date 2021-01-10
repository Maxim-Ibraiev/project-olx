import ApiService from './apiService';
const apiService = new ApiService();
import productModalCard from '../partials/productCardModal.handlebars';
import userInfoTemplate from '../partials/owner-info.handlebars';
import refs from '../js/refs';
import $ from '../../node_modules/jquery/dist/jquery';
import slick from '../js/slick';

refs.closeBtn.addEventListener('click', onModalClose);
function onModalClose(event) {
	event.preventDefault();
	refs.productModal.classList.remove('isOpened');
	refs.productBackdrop.classList.add('isHidden');
}

function openProductModal(product) {
	
	refs.productModal.classList.add('isOpened');
	refs.productBackdrop.classList.remove('isHidden');
	onFetchUserInfo(product);
	
	onRenderProductCard(product);
	
	onOwnerInfoBtnToggle();

	onSlidesToggle();	

  const favouritesBtn = document.querySelector('.js-favourites');
	favouritesBtn.addEventListener('click', postProductToFavourites);
	apiService.callId = product._id;
	function postProductToFavourites() {		
		apiService.postToFavourites().then(data => {
	 console.log(data);
	})
	}
}

function onFetchUserInfo(product) {
	apiService.userId = product.userId;	
	apiService.fetchUserData().then(data => {
		onRenderUserInfo(data);
	})
}

function onRenderProductCard(product) {
	refs.productContainer.innerHTML = '';
	const markup = productModalCard(product);
	refs.productContainer.insertAdjacentHTML('beforeend', markup);
}

function onRenderUserInfo(data) {
	const markup = userInfoTemplate(data);
	const ownerInfo = document.querySelector('.js-owner-info');
	ownerInfo.insertAdjacentHTML('afterbegin', markup);
}

function onOwnerInfoBtnToggle() {
	const productOwner = document.querySelector('.js-product-owner');
	const ownerInfo = document.querySelector('.js-owner-info');
	productOwner.addEventListener('click', onOwnerInfoShow);
  function onOwnerInfoShow(event) {
	  event.preventDefault();
		ownerInfo.classList.add('isShown');
  }
}





function onSlidesToggle() {
	
	 $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
	 });
	
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.main-slider',
		focusOnSelect: true,
	
	});
	
	$('.slider-mobile').slick({
    slidesToShow: 1,
		slidesToScroll: 1,	
		dots: true,
  });
}

export { openProductModal };

