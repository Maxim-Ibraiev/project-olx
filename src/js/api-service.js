const URL_CATEGORY = 'https://callboard-backend.herokuapp.com/call/specific/';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.sale = [];
  }

  fetchSearchQuery() {
    return fetch(
      `https://callboard-backend.herokuapp.com/call/find?search=${this.searchQuery}`,
    )
      .then(respone => respone.json())
      .then(data => {
        return data;
      });
  }

  fetchProperty() {
    return fetch(`${URL_CATEGORY}property`)
      .then(respone => respone.json())
      .then(data => {
        return data;
      });
  }

  fetchTransport() {
    return fetch(`${URL_CATEGORY}transport`)
      .then(respone => respone.json())
      .then(data => {
        // const inSale = data.filter(sale => sale.isOnSale);
        // this.sale.push(inSale);
        // console.log(this.sale);
        return data;
      });
  }
  fetchWork() {
    return fetch(`${URL_CATEGORY}work`)
      .then(respone => respone.json())
      .then(data => {
        return data;
      });
  }

  fetchElectronics() {
    return fetch(`${URL_CATEGORY}electronics`)
      .then(respone => respone.json())
      .then(data => {
        return data;
      });
  }

  fetchBusiness() {
    return fetch(`${URL_CATEGORY}business%20and%20services`)
      .then(respone => respone.json())
      .then(data => {
        return data;
      });
  }

  fetchRecreation() {
    return fetch(`${URL_CATEGORY}recreation%20and%20sport`)
      .then(respone => respone.json())
      .then(data => {
        return data;
      });
  }

  fetchFree() {
    return fetch(`${URL_CATEGORY}free`)
      .then(respone => respone.json())
      .then(data => {
        return data;
      });
  }

  fetchTrade() {
    return fetch(`${URL_CATEGORY}trade`)
      .then(respone => respone.json())
      .then(data => {
        return data;
      });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
