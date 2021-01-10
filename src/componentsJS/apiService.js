export default class ApiService {
	constructor() {
		this.ownerId = ''
		this.productId = ''
		this.token = localStorage.getItem('refreshToken');
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
		const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': this.token,
			  body: this.productId,
			
      },
		};
		const url = `https://callboard-backend.herokuapp.com/call/favourite/${this.productId}`;
		return fetch(url, options)
			.then(response => response.json());
	}

	get callId() {
		return this.productId;
	}

	set callId(newProductId) {
		return this.productId = newProductId;
	}

	// get authToken() {
	// 	return this.token;
	// }

	// set authToken(newToken) {
	// 	return this.tokend = newToken;
	// }
}