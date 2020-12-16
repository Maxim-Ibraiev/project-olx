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
	refs.productModal.classList.add('isClosed');
	refs.productBackdrop.classList.add('isHidden');
}

apiService.fetchProductData().then(data => {
	const product = data[7];
	
	onFetchUserInfo(product);
	
	onRenderProductCard(product);
	
	onOwnerInfoBtnToggle();

	onSlidesToggle();

	onFavouritesPush();	
})

function onFetchUserInfo(product) {
	apiService.userId = product.userId;	
	apiService.fetchUserData().then(data => {
		onRenderUserInfo(data);
	})
}
	

function postProductToFavourites() {
		apiService.postToFavourites().then(data => {
	 console.log(data);
	})
	}

function onRenderProductCard(product) {
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

function onFavouritesPush() {
	const favouritesBtn = document.querySelector('.js-favourites');
	favouritesBtn.addEventListener('click', postProductToFavourites);
}

// function onFavouritesPush() {
// 	apiService.postToFavourites().then(data => {
// 	 console.log(data);
// 	})
// }

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

