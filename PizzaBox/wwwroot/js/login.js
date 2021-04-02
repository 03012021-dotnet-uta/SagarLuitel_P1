const signupForm = document.getElementById('signup'); //user registration
const loginForm = document.getElementById('login'); // login form


/**-------------------------------------------------------------------------------------------------
 *                            User Registration
 * ------------------------------------------------------------------------------------------------- 
 */
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("here")
    formValidation();
    names = signupForm.name.value.trim().split(" ");
    /**create a string[] to send to the API in the body */
    const formData = {
      firstName: names[0],
      lastName: names[1],
      email: signupForm.email.value.trim(),
      phone: signupForm.pNum.value.trim(),
      Password: signupForm.password.value.trim()
    }

    if(formData.email === "" || formData.name === "" || formData.phone === "" || formData.password === ""){
        return;
    }
    console.log(formData.firstName);
    console.log(formData.email);
    console.log(formData.phone);

    fetch('api/user/register', {
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
          console.log(jsonResponse);
          localStorage.setItem('user', JSON.stringify(jsonResponse));
          location = "https://localhost:5001/userHome.html"; 
        })
        .catch(function(err) {  
            console.log('Failed to fetch page: ', err);  
        });

})


/**-------------------------------------------------------------------------------------------------
 *                                        User Login  
 *                                            ||
 *                                            \/
 * -------------------------------------------------------------------------------------------------
 */

 loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log("erefdafs")
  //formValidation();
  /**create a string[] to send to the API in the body */
  const formData = {
    email: loginForm.email.value.trim(),
    Password: loginForm.password.value.trim()
  }

  if(formData.email === "" || formData.password === ""){
      return;
  }
  console.log(formData.email);
  console.log(formData.Password);

  fetch('api/user/login', {
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
        console.log(jsonResponse);
        localStorage.setItem('user', JSON.stringify(jsonResponse));
        location = "https://localhost:5001/userHome.html";  //* xxx****/
      })
      .catch(function(err) {  
          console.log('Failed to fetch page: ', err);  
      });

})


/**
 * 
 * @returns ******************************************************************----------------------------
 */


function formValidation(){
    if(!allLetter(signupForm.name.value.trim())){
        alert("Name should only contain letters")
        signupForm.reset();
        return;
    }
    if(!allnumeric(signupForm.pNum)){
        alert("Phon Number should only contain Numbers")
        signupForm.reset();
        return;
    }
    if(!ValidateEmail(signupForm.email)){
        alert("Enter a valid Email")
        signupForm.reset();
        return;
    }
    if(signupForm.password.value.trim().length < 8){
        alert("Password must be at least 8 characters long")
        signupForm.reset();
        return;
    }

}


//https://www.w3resource.com/javascript/form/all-letters-field.php <-- got it from here
function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z ]+$/;
   if(inputtxt.match(letters))
     {
      return true;
     }
     return false;
  }

  function allnumeric(inputtxt)
   {
      var numbers = /^[0-9]+$/;
      if(inputtxt.value.match(numbers))
      {
        return true;
      }
      return false;
   }
   function ValidateEmail(inputText) 
    {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(inputText.value.match(mailformat))
        {
            return true;
        }
    }
