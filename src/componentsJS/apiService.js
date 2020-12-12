export default class ApiService {
	constructor() {}

	fetchProductData() {
		const url = 'https://callboard-backend.herokuapp.com/call/specific/work';
		return fetch(url)
			.then(response => response.json());
	}
}