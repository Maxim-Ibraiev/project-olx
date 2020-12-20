
export async function fetchCategory(BASE_URL,specCategory) {
  const options = {
    method: 'GET',
    headers: {
       'accept': 'application/json'
    },
  };
  const response = await fetch(`${BASE_URL}/call/specific/${specCategory}`, options);
  const responseJson = await response.json();
  return responseJson;
}
/*
const postToAdd = {
  email: 'user5468878994545@example.com',
  password: 'qwerty123',
};

const option = {
  method: 'POST',
  body: JSON.stringify(postToAdd),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append(
  'Authorization',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc',
);

*/
/*
export default class ApiService {
  constructor() {
    this.category = '';
    this.page = 1;
  }

  fetchCategories() {
   const urlCallCategory = `${BASE_URL}/call/categories`; 
  fetch(urlCallCategory, myHeaders)
      .then(respone => respone.json())
      .then(console.log);
  }
/*fetchCategory(){
  const urlCallCall = `${BASE_URL}/call/specific/${this.category}`;

const myHeadersCall = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append(
  'Authorization',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc',
);

fetch(urlCallCall, myHeadersCall)
  .then(r => r.json())
    .then(console.log);
  }
/*
incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }
    get category() {
    return this.category;
  }

  set category(newCategory) {
    this.category = newCategory;
  }
*//*
  fetchCategory() {
    console.log(this);
    return fetch(
      `${BASE_URL}/call/specific/${this.category}`,
    )
      .then(respone => respone.json())
      .then(({ category }) => {
        this.incrementPage();
        console.log(category);
        return category;
      });
  }

  incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

  get category() {
    return this.category;
  }

  set category(newCategory) {
    this.category = newCategory;
  }

}
*/