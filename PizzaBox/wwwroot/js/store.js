const user = JSON.parse(localStorage.getItem('user'));

console.log(user)
document.getElementById("userInfoDisplay").innerHTML = user.firstName;

if(!user){
  location = "https://localhost:5001/login.html"; 
}
let params = new URLSearchParams(document.location.search.substring(1));
const storeId = params.get("id");

(function () {
    // a fetch request is, by default, a GET request and doesn't need a body. 
fetch(`api/store/getAllStoreOrders/${storeId}`)
.then(response => {
  if (!response.ok) {
    throw new Error(`Network response was not ok (${response.status})`);
  }
  else       // When the page is loaded convert it to text
    return response.json();
})
.then((jsonResponse) => {
  return jsonResponse;
})
.then(res => {
  //save the Person to localStorage
  sessionStorage.setItem('orderlist', JSON.stringify(res));
    console.log(res);
})
.catch(function(err) {  
    console.log('Failed to fetch page: ', err);  
});
})();


//********************************** ALl Inven ************************ */
(function () {
    // a fetch request is, by default, a GET request and doesn't need a body. 
fetch(`api/store/getAllStoreInven/${storeId}`)
.then(response => {
  if (!response.ok) {
    throw new Error(`Network response was not ok (${response.status})`);
  }
  else       // When the page is loaded convert it to text
    return response.json();
})
.then((jsonResponse) => {
  return jsonResponse;
})
.then(res => {
  //save the Person to localStorage
  sessionStorage.setItem('inventoryList', JSON.stringify(res));
    console.log(res);
})
.catch(function(err) {  
    console.log('Failed to fetch page: ', err);  
});
})();

/** -------------------------------------------------------------------
 *                  pizza
 * -----------------------------------------------------------------
 */
 (function () {
    // a fetch request is, by default, a GET request and doesn't need a body. 
fetch(`api/pizza/getAllPizza`)
.then(response => {
  if (!response.ok) {
    throw new Error(`Network response was not ok (${response.status})`);
  }
  else       // When the page is loaded convert it to text
    return response.json();
})
.then((jsonResponse) => {
  return jsonResponse;
})
.then(res => {
  //save the Person to localStorage
  sessionStorage.setItem('pizzas', JSON.stringify(res));
    console.log(res);
})
.catch(function(err) {  
    console.log('Failed to fetch page: ', err);  
});
})();

//*************************************   user  ********************************** */
(function () {
    // a fetch request is, by default, a GET request and doesn't need a body. 
fetch(`api/user/getAllUser`)
.then(response => {
  if (!response.ok) {
    throw new Error(`Network response was not ok (${response.status})`);
  }
  else       // When the page is loaded convert it to text
    return response.json();
})
.then((jsonResponse) => {
  return jsonResponse;
})
.then(res => {
  //save the Person to localStorage
  sessionStorage.setItem('userList', JSON.stringify(res));
    console.log(res);
})
.catch(function(err) {  
    console.log('Failed to fetch page: ', err);  
});
})();


//** *************************                              ******************************/
const pizzaList = JSON.parse(sessionStorage.getItem('pizzas'));
const orderList = JSON.parse(sessionStorage.getItem('orderlist'));
const invenList = JSON.parse(sessionStorage.getItem('inventoryList'));
const listUser  = JSON.parse(sessionStorage.getItem("userList"))

const inveDis = document.getElementById("displayInven");
const ordeDis = document.getElementById("displayOrder");

class myOrder  {
    constructor(OrderTime, Total, userName) { 
        this.OrderTime =  OrderTime;
        this.Total = Total;
        this.UserName = userName;
    }
};

var listOfordr = new Array();
orderList.forEach(ol => {
    var a = new myOrder;
    a.OrderTime = ol.orderTime; 
    a.Total = ol.total;
    listUser.forEach(lu=> {
        if(lu.userId == ol.userId){
            //console.log(pl.PizzaName)
            a.userName = lu.firstName;
        }
    });
    listOfordr.push(a);
});

var htmlOL = '';
listOfordr.forEach(x => {
    htmlOL += `<li>Order Time: ${x.OrderTime} <br> Total: ${x.Total} <br> User: ${x.userName}</li><br><br>`
});
ordeDis.innerHTML = htmlOL;

class myInven  {
    constructor(pizzaName, numOfPizza) { 
        this.pizzaName =  pizzaName;
        this.numOfPizza = numOfPizza;
    }
};

var listOfInven = new Array();
invenList.forEach(il => {
    var a = new myInven;
    a.numOfPizza = il.numOfPizza; 
    pizzaList.forEach(pl=> {
        if(pl.pizzaId == il.pizzaId){
            //console.log(pl.PizzaName)
            a.pizzaName = pl.name;
        }
    });
    listOfInven.push(a);
});

var htmlIv ='';
listOfInven.forEach(y => {
    console.log(y.pizzaName)
    htmlIv += `<li>Pizza Name: ${y.pizzaName} <br> Number of Pizza: ${y.numOfPizza}</li><br><br>`
});
inveDis.innerHTML = htmlIv;

const userinfo = document.getElementById("userInfo");
const searchUser = document.getElementById("searchBar");

searchUser.addEventListener("submit", (event) =>{
    event.preventDefault();
    var htmls = '';
    console.log(searchUser.search.value.trim())
    listUser.forEach(user => {
        if(user.firstName == searchUser.search.value.trim()){
                 htmls += ` <span>Name: ${user.firstName} ${user.lastName} </span><br>
                            <span>Phone: ${user.phone} </span><br>
                            <span>email: ${user.email} <span> `
        }
    });
    userinfo.innerHTML = htmls;
    return;
});


//***************************************** */
const logout = document.getElementById('logout');
logout.addEventListener('click', (event) => {
    event.preventDefault(); 

    localStorage.removeItem('user');

    location = "https://localhost:5001"; 
})
