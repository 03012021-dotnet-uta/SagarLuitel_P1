const toppingForm = document.getElementById('topping'); // topping form

toppingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    /**create a string[] to send to the API in the body */
    console.log("here")
    const formData = {
      Name: toppingForm.toppingName.value.trim(),
      Price: toppingForm.toppingPrice.value.trim(),
    }

    if(formData.Name === "" || formData.Price === "" ){
        return;
    }


    fetch('api/pizza/seedTopping', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
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

          document.getElementById("successMsg").innerHTML = "SuccessFully Saved Tipping";
          setTimeout(function(){
            document.getElementById("successMsg").innerHTML = '';
          }, 10000);
          toppingForm.reset();
          //return window.location.assign("https://localhost:5001/userHome.html/email=" + `${jsonResponse.email}`);  //* xxx****/
        })
        .catch(function(err) {  
            console.log('Failed to fetch page: ', err);  
        });
})

/**-------------------------------------------------------------------------------------------------------------------------- 
                                                 store
-------------------------------------------------------------------------------------------------------------------------- */

const storeForm = document.getElementById('store'); // store form

storeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    /**create a string[] to send to the API in the body */
    console.log("here")
    const formData = {
      storeName: storeForm.storeName.value.trim(),
      storeLocation: storeForm.storeLocation.value.trim(),
      storeAddress: storeForm.storeAddress.value.trim(),
      storePhoneNum: storeForm.storePhone.value.trim()

    }

    if(formData.storeName === "" || formData.storePhoneNum === "" ){
        return;
    }


    fetch('api/store/seedStore', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
          }
          else       
            return response.json();
        })
        .then((jsonResponse) => {
          
          console.log(jsonResponse);

          document.getElementById("successMsg").innerHTML = "SuccessFully Saved Store";
          setTimeout(function(){
            document.getElementById("successMsg").innerHTML = '';
          }, 10000);
          storeForm.reset();
          
        })
        .catch(function(err) {  
            console.log('Failed to fetch page: ', err);  
        });
})

/**--------------------------------------------------------------------------------------------------------------------------
 *                                      crust
 * --------------------------------------------------------------------------------------------------------------------------
 */

const crustForm = document.getElementById('crust'); // store form

crustForm.addEventListener('submit', (event) => {
    event.preventDefault();
    /**create a string[] to send to the API in the body */
    console.log("here")
    const formData = {
        Name: crustForm.crustName.value.trim(),
        Price: crustForm.crustPrice.value.trim(),
      }
  
      if(formData.Name === "" || formData.Price === "" ){
          return;
      }


    fetch('api/pizza/seedCrust', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
          }
          else       
            return response.json();
        })
        .then((jsonResponse) => {
          
          console.log(jsonResponse);

          document.getElementById("successMsg").innerHTML = "SuccessFully Saved Crust";
          setTimeout(function(){
            document.getElementById("successMsg").innerHTML = '';
          }, 10000);
          crustForm.reset();
          
        })
        .catch(function(err) {  
            console.log('Failed to fetch page: ', err);  
        });
})

/**-------------------------------------------------------------------------------------------------------------------------- 
 *                              size
 * -------------------------------------------------------------------------------------------------------------------------- 
*/

const sizeForm = document.getElementById('size'); // store form

sizeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    /**create a string[] to send to the API in the body */
    console.log("here")
    const formData = {
        Name:  sizeForm.sizeName.value.trim(),
        Price: sizeForm.sizePrice.value.trim(),
      }
  
      if(formData.Name === "" || formData.Price === "" ){
          return;
      }


    fetch('api/pizza/seedSize', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
          }
          else       
            return response.json();
        })
        .then((jsonResponse) => {
          
          console.log(jsonResponse);

          document.getElementById("successMsg").innerHTML = "SuccessFully Saved Size";
          setTimeout(function(){
            document.getElementById("successMsg").innerHTML = '';
          }, 10000);
          sizeForm.reset();
          
        })
        .catch(function(err) {  
            console.log('Failed to fetch page: ', err);  
        });
})

/**-------------------------------------------------------------------------------------------------------------------------- 
                                                 pizza
-------------------------------------------------------------------------------------------------------------------------- */

const pizzaForm = document.getElementById('pizza'); // store form

pizzaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    /**create a string[] to send to the API in the body */
    console.log("here")
    const formData = {
      Name: pizzaForm.pizzaName.value.trim(),
      

    }

    if(formData.Name === "" ){
        return;
    }


    fetch('api/pizza/seedPizza', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
          }
          else       
            return response.json();
        })
        .then((jsonResponse) => {
          
          console.log(jsonResponse);

          document.getElementById("successMsg").innerHTML = "SuccessFully Saved Pizza";
          setTimeout(function(){
            document.getElementById("successMsg").innerHTML = '';
          }, 10000);
          pizzaForm.reset();
          
        })
        .catch(function(err) {  
            console.log('Failed to fetch page: ', err);  
        });
})