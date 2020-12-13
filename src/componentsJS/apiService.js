export default class ApiService {
	constructor() {}

	fetchProductData() {
		const url = 'https://callboard-backend.herokuapp.com/call/specific/work';
		return fetch(url)
			.then(response => response.json());
	}
	// fetchUderData() {
	// 	const url = 'https://callboard-backend.herokuapp.com/user';
	// 	return fetch(url)
	// 		.then(response => response.json());
	// }


	// postToFavourites() {
	// 	const productId = '507f1f77bcf86cd799439013';
	// 	const options = {
  //     method: 'POST',
  //     headers: {
  //     'Content-Type': 'application/json; charset=UTF-8',
  //     'Authorization':
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc'
  //     },
	// 	};
	// 	const url = `https://callboard-backend.herokuapp.com/call/favourite/${productId}`;
	// 	return fetch(url, options)
	// 		.then(response => response.json());
	// }
}