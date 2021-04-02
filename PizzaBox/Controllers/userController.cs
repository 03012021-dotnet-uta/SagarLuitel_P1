using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using models;
using BusinessLogic;

namespace PizzaBox.userController{

    // create class to get data from login form.
    public class loginUser
    {
        public string email { get; set; }
        public string Password { get; set; }
    }

    [Route("api/[controller]")]
	[ApiController]
    public class userController : ControllerBase{

        private readonly UserMethods _userBusiness;

        public userController(UserMethods business){
            this._userBusiness = business;
        }

        /// <summary>
        /// Takes a data from form (user) and returns registered user.
        /// 
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost("register")]
        public ActionResult<User> Register([FromBody] RawUser user){
            
            Console.WriteLine($"YAY! we made it to the C# side with {user.firstName}, {user.email}. ");

            User newUser = _userBusiness.userRegister(user);

            if( newUser == null){
                return StatusCode(409, "We're sorry, your new user was not successfully saved or a user of that email already exists.");
            }
            return newUser;
        }

        /// <summary>
        /// Takes a data from form (user) and returns the logged in user.
        /// 
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost("login")]
        public ActionResult<User> Login([FromBody] loginUser user){   
            
            User newUser = _userBusiness.userLogin(user.email, user.Password);

            if(newUser == null){
               return StatusCode(409, "We're sorry, your username was not found.");

            }

            return newUser;

        }

        /// <summary>
        /// Takes a userid and returns list of all order by that user.
        /// 
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet("getUserOrder/{UserId}")]
        public ActionResult<List<Order>> gerUserOrder(int UserId){
            List<Order> userOrders = _userBusiness.getOrderByUserId(UserId);

            return userOrders;
        }

        /// <summary>
        /// retunrs all user
        /// </summary>
        /// <returns></returns>
        [HttpGet("getAllUser")]
        public ActionResult<List<User>> getAllUser(){
            return _userBusiness.getAllUser();
        }

    }
}