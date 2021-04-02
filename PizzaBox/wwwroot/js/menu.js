const user = JSON.parse(localStorage.getItem('user'));
console.log(user)

const cart1 = JSON.parse(localStorage.getItem('order'));
var i = 0;
for (const key in cart1) {
  if (Object.hasOwnProperty.call(cart1, key)) {
    i++;
  }
}
if(!user){
  location = "https://localhost:5001/login.html"; 
}


//get all pizzas
function getAllPizza() {
    // a fetch request is, by default, a GET request and doesn't need a body. 
fetch("api/pizza/getAllPizza")
.then(response => {
  if (!response.ok) {
    throw new Error(`Network response was not ok (${response.status})`);
  }
  else       // When the page is loaded convert it to text
    return response.json();
})
.then((jsonResponse) => {
  console.log(jsonResponse);
  return jsonResponse;
})
.then(res => {
  //save the Person to localStorage
  sessionStorage.setItem('Pizzas', JSON.stringify(res));
})
.catch(function(err) {  
    console.log('Failed to fetch page: ', err);  
});
}


//get all Toppings
function getAllTopping() {
    // a fetch request is, by default, a GET request and doesn't need a body. 
fetch("api/pizza/getAllTopping")
.then(response => {
  if (!response.ok) {
    throw new Error(`Network response was not ok (${response.status})`);
  }
  else       // When the page is loaded convert it to text
    return response.json();
})
.then((jsonResponse) => {
  console.log(jsonResponse);
  return jsonResponse;
})
.then(res => {
  //save the Person to localStorage
  sessionStorage.setItem('Toppings', JSON.stringify(res));
})
.catch(function(err) {  
    console.log('Failed to fetch page: ', err);  
});
}

//get all size
function getAllSize() {
    // a fetch request is, by default, a GET request and doesn't need a body. 
fetch("api/pizza/getAllSize")
.then(response => {
  if (!response.ok) {
    throw new Error(`Network response was not ok (${response.status})`);
  }
  else       // When the page is loaded convert it to text
    return response.json();
})
.then((jsonResponse) => {
  console.log(jsonResponse);
  return jsonResponse;
})
.then(res => {
  //save the Person to localStorage
  sessionStorage.setItem('Sizes', JSON.stringify(res));
})
.catch(function(err) {  
    console.log('Failed to fetch page: ', err);  
});
}

//get all crust
function getAllCrust() {
    // a fetch request is, by default, a GET request and doesn't need a body. 
fetch("api/pizza/getAllCrust")
.then(response => {
  if (!response.ok) {
    throw new Error(`Network response was not ok (${response.status})`);
  }
  else       // When the page is loaded convert it to text
    return response.json();
})
.then((jsonResponse) => {
  console.log(jsonResponse);
  return jsonResponse;
})
.then(res => {
  //save the Person to localStorage
  //sessionStorage.setItem('stores', JSON.stringify(res));
  sessionStorage.setItem ('Crusts', JSON.stringify(res));
  
})
.catch(function(err) {  
    console.log('Failed to fetch page: ', err);  
});
}

getAllCrust();
getAllPizza();
getAllSize();
getAllTopping();

const tv = JSON.parse(sessionStorage.getItem('Toppings'));
const cv = JSON.parse(sessionStorage.getItem('Crusts'));
const sv = JSON.parse(sessionStorage.getItem("Sizes"));
const pv = JSON.parse(sessionStorage.getItem('Pizzas'));

const menuDiv = document.getElementById("menu");

var htmlt = '';
pv.forEach(pizza => {
    htmlt += `<li>${pizza.name}</li>`
});
menuDiv.innerHTML = htmlt;