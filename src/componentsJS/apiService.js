export default class ApiService {
	constructor() {
		this.ownerId = ''
	}

	fetchProductData() {
		const url = 'https://callboard-backend.herokuapp.com/call/specific/business and services';
		return fetch(url)
			.then(response => response.json());
	}
	fetchUserData() {
		
		const url = `https://callboard-backend.herokuapp.com/user/${this.ownerId}`;
		return fetch(url)
			.then(response => response.json());
	}

	get userId() {
		return this.ownerId;
	}

	set userId(newUserId) {
		return this.ownerId = newUserId;
	}


	postToFavourites() {
		const productId = '5fd483ed85dda200172bd016';
		const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization':
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc',
			  body: productId,
			
      },
		};
		const url = `https://callboard-backend.herokuapp.com/call/favourite/${productId}`;
		return fetch(url, options)
			.then(response => response.json());
	}
}