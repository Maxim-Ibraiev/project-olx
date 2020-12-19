export default class CategoriesApi {
  constructor(category) {
    this.category = category;      
  }
  
  main () {
    return fetch("https://callboard-backend.herokuapp.com/call?page=1")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}

sales () {   
  return fetch("https://callboard-backend.herokuapp.com/call/specific/sales")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}

recreationAndSport () {  
   return fetch("https://callboard-backend.herokuapp.com/call/specific/recreationAndSport")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}

free () {    
    return fetch("https://callboard-backend.herokuapp.com/call/specific/free")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}

businessAndServices () {   
   return fetch("https://callboard-backend.herokuapp.com/call/specific/businessAndServices")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}
work () {   
   return fetch(`https://callboard-backend.herokuapp.com/call/specific/work`)
  .then(response => response.json())
  .then(result => result)
    .catch(error => console.log('error', error));
  
}
transport () {   
   return fetch("https://callboard-backend.herokuapp.com/call/specific/transport")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}
electronics () {    
   return fetch("https://callboard-backend.herokuapp.com/call/specific/electronics")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}
trade () {   
   return fetch("https://callboard-backend.herokuapp.com/call/specific/trade")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}
property () {    
   return fetch("https://callboard-backend.herokuapp.com/call/specific/property")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
  }
Error () {
  error({
    title: 'Неправильный адрес страницы!!!',
    delay: 1500
  })
  }  
}