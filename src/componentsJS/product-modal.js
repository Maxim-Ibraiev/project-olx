import ApiService from './apiService';
const apiService = new ApiService();
import productModalCard from '../partials/product-modal.handlebars';
import refs from '../js/refs';

apiService.fetchProductData().then(data => {	
	const product = data[3];
	const markup = productModalCard(product);
	refs.productContainer.insertAdjacentHTML('beforeend', markup);
	console.log(product);
	
	// const product = products.find(product => product._id === "5fd27c020031930017e917a0");	
})
console.log(refs.closeBtn);
refs.closeBtn.addEventListener('click', onModalClose);
function onModalClose(event) {
	event.preventDefault();
	console.log('click');
}

	// refs.productModal.classList.add('isClosed')

refs.productOwner.addEventListener('click', onOwnerInfoShow)

function onOwnerInfoShow() {
	console.log('click');
}