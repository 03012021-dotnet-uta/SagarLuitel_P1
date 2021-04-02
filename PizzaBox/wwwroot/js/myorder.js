const user = JSON.parse(localStorage.getItem('user'));
console.log(user)
//const Stores = JSON.parse(sessionStorage.getItem("Stores"));
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
document.getElementById("mycart").innerHTML = `Cart ${i}`;
const showlistofOrder = document.getElementById("myorderList");
(function () {
    fetch(`api/user/getUserOrder/${user.userId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
          }
          else       // When the page is loaded convert it to text
            return response.json();
        })
        .then((jsonResponse) => {
          console.log(jsonResponse);

          htmlA = "";
          jsonResponse.forEach(order => {
            
            htmlA += `
                        <li> UserID: ${order.userId}, Total: ${order.total}, Time: ${order.orderTime} `
                    
                    // Stores.forEach(s => {
                    //     if(order.storeId == s.storeId){
                    //         htmlA += `Store Name: ${s.storeName}`
                    //     }
                    // });
                    htmlA += `</li>`

            });
            showlistofOrder.innerHTML = htmlA;

        })
        .catch(function(err) {  
            console.log('Failed to fetch page: ', err);  
        });
  
})();

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
 
 