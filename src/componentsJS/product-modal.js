import ApiService from './apiService';
const apiService = new ApiService();

apiService.fetchProductData().then(data => console.log('data', data));