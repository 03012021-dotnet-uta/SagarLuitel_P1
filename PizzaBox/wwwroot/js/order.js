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
document.getElementById("userInfoDisplay").innerHTML = user.firstName;
document.getElementById("mycart").innerHTML = `Cart ${i}`

const stores = document.getElementById('stores');
const pizzas = document.getElementById('pizzas');
const sizes = document.getElementById('sizes');
const crusts = document.getElementById('crusts');
const toppings = document.getElementById('toppings')
const displayOrder = document.getElementById("displayOrder");
const topp = document.getElementById("topp");
topp.style.display = "none";

var arrFormdata = new Array();

//get all store
function getAllStore() {
    // a fetch request is, by default, a GET request and doesn't need a body. 
fetch("api/store/getAllStore")
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
  sessionStorage.setItem('Stores', res);
    let htmlA;
    res.forEach(store => {
        htmlA += `<option value=${store.storeId}>${store.storeName}</option>`
    });
    stores.innerHTML = htmlA;
})
.catch(function(err) {  
    console.log('Failed to fetch page: ', err);  
});
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
getAllStore();


const tv = JSON.parse(sessionStorage.getItem('Toppings'));
const cv = JSON.parse(sessionStorage.getItem('Crusts'));
const sv = JSON.parse(sessionStorage.getItem("Sizes"));
const pv = JSON.parse(sessionStorage.getItem('Pizzas'));

let htmlA;
pv.forEach(pizza => {
    htmlA += `<option value=${pizza.pizzaId}>${pizza.name}</option>`
});
pizzas.innerHTML = htmlA;



let htmlB;
  sv.forEach(size => {
      htmlB += `<option value="${size.sizeId},${size.price}">${size.name} $${size.price}</option>`
  });
  sizes.innerHTML = htmlB;

  let htmlC;
  cv.forEach(crust => {
      htmlC += `<option value="${crust.crustID},${crust.price}">${crust.name} $${crust.price}</option>`
  });
  crusts.innerHTML = htmlC;

  function myFunction() {
    var x = document.getElementById("pizzas").value;
    if(x != 4){
      
      toppings.style.display = "none"
    }else{
      topp.style.display = "block";
      toppings.style.display = "block"
    } 
  }

  myFunction();
  let htmlD = "";
  tv.forEach(topping => {
      htmlD += `<input type="checkbox" name="topping[]" value="${topping.toppingId},${topping.price}">
                <label for="topping"> ${topping.name} &emsp; $${topping.price}</label><br>`
  });
  toppings.innerHTML = htmlD;


//const orderForm = document.getElementById('addToCart'); // form on submit order
const cartForm = document.getElementById('orderNow'); // form on submit cart
const form = document.getElementById("orderCart");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let total  = 0;
    var split = form.size.value.split(",");
    var sizeid = split[0];
    var sizeprice = split[1];
    console.log(split[1]);
    total += parseFloat(split[1]);


    var split = form.crust.value.split(",");
    var crustid = split[0];
    var crustprice = split[1];
    console.log(split[1]);
    total += parseFloat(split[1])

    let toppingList = '';
    let topPrices = "";
    const checkboxes = document.getElementsByName('topping[]');
    var i = 0;
    checkboxes.forEach(t => {
        if(t.checked){
            i++;
            var split = t.value.split(",")
            toppingList += split[0] + ",";
            total +=  parseFloat(split[1]);
            console.log(split[1]);
            topPrices = split[1] + ", "
        }
    });

    if(i > 5){
      alert("Please Select Only 5 topping");
      form.reset();
      return;
    }
    
    console.log(toppingList)
     
    const formData = {
      storeId: form.store.value,
      pizzaId: form.pizza.value,
      toppingIds: toppingList,
      sizeId: sizeid,
      crustId: crustid,
      Total: total,
      userId: user.userId
    }
    confirm(`Your Total is: ${formData.Total}`);
    console.log(formData);
    // if(formData.email === "" || formData.name === "" || formData.phone === "" || formData.password === ""){
    //     return;
    // }
    // console.log(formData.firstName);
    // console.log(formData.email);
    // console.log(formData.phone);

    let htmlA = `<button type="button" id="now">CheckOur Now</button>
                  &emsp;
                 <button type="button" id="later">Order More</button>`

    displayOrder.innerHTML = htmlA;

    const laterbutton = document.getElementById("later");
    laterbutton.addEventListener("click", orderLater);
    const nowbutton = document.getElementById("now");
    
    arrFormdata.push(formData)
    console.log(arrFormdata[0])
    localStorage.setItem("order",  JSON.stringify(arrFormdata));
    
    var x = JSON.parse(localStorage.getItem("order"))

    function orderLater() {
      //console.log(x)
      form.reset();
      laterbutton.style.display = "none";
      nowbutton.style.display = "none";
      return;
    }


    nowbutton.addEventListener("click", (event) =>{
    event.preventDefault();
  
    fetch('api/pizza/postCart', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(x)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
          }
          else       // When the page is loaded convert it to text
            return response.json();
        })
        .then((jsonResponse) => {
          console.log(jsonResponse);
          document.getElementById("successMsg").innerHTML = "SuccessFully Saved Pizza";
          document.getElementById("successMsg").style.backgroundColor = "green"
          setTimeout(function(){
            document.getElementById("successMsg").innerHTML = '';
          }, 10000);

          form.reset();
          localStorage.removeItem('order'); // add cart to cart list
          location = "https://localhost:5001/order.html"; 
        })
        .catch(function(err) {  
            console.log('Failed to fetch page: ', err);  
        });
    })
    

})


/**
 * logout --------------------------------------------------
 */
 const logout = document.getElementById('logout');
 logout.addEventListener('click', (event) => {
     event.preventDefault(); 
 
     sessionStorage.clear();
     localStorage.clear();

     location = "https://localhost:5001"; 
 })
 