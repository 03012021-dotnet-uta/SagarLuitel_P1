using models;
using System;
using System.Collections.Generic;
using System.Linq;
using AbstractPizza;

namespace Repository
{
    public class userRepo
    {
         private readonly PizzaBoxDbContext _dbContext;

        public userRepo(PizzaBoxDbContext context){
            this._dbContext = context;
        }

        public User GetUserById(int id)
        {
            User foundUser = _dbContext.User.FirstOrDefault(p => p.UserId == id);
            return foundUser;
        }

        public List<Order> getAllOrder(){
            return _dbContext.Order.ToList();
        }
        
        /// <summary>
        /// returns all users 
        /// </summary>
        /// <returns></returns>
        public List<User> getAllUser(){
            return _dbContext.User.ToList();
        }
    }
}