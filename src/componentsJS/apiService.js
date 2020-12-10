

export default class ApiService {
	constructor() {}

	fetchProductData() {
		const url = 'https://callboard-backend.herokuapp.com/api-docs/call';
		return fetch(url)
			.then(response => response.json())
			.then(data => {
				return data;
			})
	}
}