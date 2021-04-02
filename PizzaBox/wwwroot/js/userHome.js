const user = JSON.parse(localStorage.getItem('user'));

console.log(user)
document.getElementById("userInfoDisplay").innerHTML = user.firstName;

const storeList = document.getElementById("storeList");
(function () {
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
    //localStorage.setItem('stores', JSON.stringify(res));
    let htmlA = '';
    res.forEach(store => {
       
        htmlA += `<li><a href="./store.html?id=${store.storeId}/">${store.storeName}</a></li>
                        <span>${store.storeLocation}</span><br><br>`;
        
    });
    storeList.innerHTML = htmlA;
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

    localStorage.removeItem('user');

    location = "https://localhost:5001"; 
})

