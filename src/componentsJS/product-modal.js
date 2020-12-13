import ApiService from './apiService';
const apiService = new ApiService();
import productModalCard from '../partials/productCardModal.handlebars';
import refs from '../js/refs';

apiService.fetchProductData().then(data => {
	const product = data[3];
	const markup = productModalCard(product);
	refs.productContainer.insertAdjacentHTML('beforeend', markup);	
  const productOwner = document.querySelector('.js-product-owner')
	console.log(productOwner);
  productOwner.addEventListener('click', onOwnerInfoShow)
  function onOwnerInfoShow(event) {
	  event.preventDefault();
	  console.log('click');
  }
})

refs.closeBtn.addEventListener('click', onModalClose);
function onModalClose(event) {
	event.preventDefault();
	refs.productModal.classList.add('isClosed')
}


