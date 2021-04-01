
const stores = document.getElementById('stores');
const pizzas = document.getElementById('pizzas');
const sizes = document.getElementById('sizes');
const crusts = document.getElementById('crusts');
const toppings = document.getElementById('toppings')
const displayOrder = document.getElementById("displayOrder");

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
  let htmlA;
  res.forEach(pizza => {
      htmlA += `<option value=${pizza.pizzaId}>${pizza.name}</option>`
  });
  pizzas.innerHTML = htmlA;
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
  let htmlA = "";
  res.forEach(topping => {
      htmlA += `<input type="checkbox" name="topping[]" value="${topping.toppingId},${topping.price}">
                <label for="topping"> ${topping.name} &emsp; $${topping.price}</label><br>`
  });
  toppings.innerHTML = htmlA;
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
  let htmlA;
  res.forEach(size => {
      htmlA += `<option value="${size.sizeId},${size.price}">${size.name} $${size.price}</option>`
  });
  sizes.innerHTML = htmlA;
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
  //localStorage.setItem('stores', JSON.stringify(res));
  sessionStorage.setItem ('Crusts', res);
  let htmlA;
  res.forEach(crust => {
      htmlA += `<option value="${crust.crustID},${crust.price}">${crust.name} $${crust.price}</option>`
  });
  crusts.innerHTML = htmlA;
  
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
    checkboxes.forEach((t, i) => {
        if(t.checked){
            var split = t.value.split(",")
            toppingList += split[0] + ",";
            total +=  parseFloat(split[1]);
            console.log(split[1]);
            topPrices = split[1] + ", "
        }
    });
    
    console.log(toppingList)
    userId = "1";
    const formData = {
      storeId: form.store.value,
      pizzaId: form.pizza.value,
      toppingIds: toppingList,
      sizeId: sizeid,
      crustId: crustid,
      Total: total,
      userId: userId
    }

    console.log(formData);
    // if(formData.email === "" || formData.name === "" || formData.phone === "" || formData.password === ""){
    //     return;
    // }
    // console.log(formData.firstName);
    // console.log(formData.email);
    // console.log(formData.phone);

    let htmlA = `<button type="button" id="now">CheckOur Now</button>
                 <button type="button" id="later">Order More</button>`

    displayOrder.innerHTML = htmlA;

    document.getElementById("later").addEventListener("click", orderLater);
    
    arrFormdata.push(formData)
    console.log(arrFormdata[0])
    localStorage.setItem("order",  JSON.stringify(arrFormdata));
      var x = JSON.parse(localStorage.getItem("order"))

    function orderLater() {
      console.log(x)
      form.reset();
      return;
    }

    document.getElementById("now").addEventListener("click", (event) =>{
    fetch('api/pizza/postOrder', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify( JSON.parse(localStorage.getItem("order")))
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
          }
          else       // When the page is loaded convert it to text
            return response.json();
        })
        .then((jsonResponse) => {
          //responseDiv[0].textContent = jsonResponse.name + ' ' + jsonResponse.email;
          console.log(jsonResponse);
          
          //return window.location.assign("https://localhost:5001/userHome.html/email=" + `${jsonResponse.email}`);  //* xxx****/
        })
        .catch(function(err) {  
            console.log('Failed to fetch page: ', err);  
        });
    })
    

})