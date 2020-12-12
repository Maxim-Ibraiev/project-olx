import ApiService from './apiService';
const apiService = new ApiService();
import productModalCard from '../partials/product-modal.handlebars';

const refs = {
  productContainer: document.querySelector('.product-container'),
}

apiService.fetchProductData().then(data => {
	const products = data.work;
	const product = products.find(product => product._id === "5fd27c020031930017e917a0");
	const markup = productModalCard(product);
	// console.log(markup);
	console.log(refs.productContainer);
  refs.productContainer.insertAdjacentHTML('beforeend', markup);
})

