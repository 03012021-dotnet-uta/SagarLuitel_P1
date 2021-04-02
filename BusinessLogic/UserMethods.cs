using System;
using Repository;
using models;
using System.Collections.Generic;

namespace BusinessLogic
{
    public class UserMethods
    {
        private readonly Hasher hasher = new Hasher();

        private readonly PizzaBoxRepo _repo;

        private readonly userRepo _repoUser;

        public UserMethods(PizzaBoxRepo repo, userRepo repoUser){
            this._repo = repo;
            this._repoUser = repoUser;

        }
        public User userRegister(RawUser user){

            Console.WriteLine(user.email);
            if (_repo.UserExists(user.email))
            {
                return null;
            }

            User newUser = hasher.hashPassword(user.Password);
            newUser.firstName = user.firstName;
            newUser.lastName = user.lastName;
            newUser.email = user.email;
            newUser.phone = user.phone;

            User registerUser = _repo.Register(newUser);
            if(registerUser == null){
                return null;
            }

            registerUser.PasswordHash = null;
            registerUser.PasswordSalt = null;
            return registerUser;
        }

        public User userLogin(string email, string password){
            Console.WriteLine(" Here 12 " + email);
            if (!_repo.UserExists(email))
            {
                return null;
            }
            else{
                
                User foundUser = _repo.GetUserByEmail(email);

                // hash the provided password with the key from the found user
                byte[] hash = hasher.HashTheUsername(password, foundUser.PasswordSalt);

                if (CompareTwoHashes(foundUser.PasswordHash, hash))
                {
                    foundUser.PasswordHash = null;
                    foundUser.PasswordSalt = null;
                    return foundUser;
                }
                else return null;

            }
            
            //return null;
        }


        public List<Order> getOrderByUserId(int userId){
            var listOrder = _repoUser.getAllOrder();

            var userOrder = new List<Order>();
            foreach (var order in listOrder)
            {
                if (order.UserId == userId)
                {
                    userOrder.Add(order);
                }
            }

            return userOrder;
        }

        /// <summary>
        /// returns all user
        /// </summary>
        /// <returns></returns>
        public List<User> getAllUser(){
            return _repoUser.getAllUser();
        }

        /// <summary>
        /// gets two arrays and compire them and return true or false
        /// </summary>
        /// <param name="arr1"></param>
        /// <param name="arr2"></param>
        /// <returns></returns>
        private bool CompareTwoHashes(byte[] arr1, byte[] arr2)
        {
            if (arr1.Length != arr2.Length)
            {
                return false;
            }
            //compare the hash of the inputted password and the found user
            for (int i = 0; i < arr1.Length; i++)
            {
                if (arr1[i] != arr2[i])
                {
                    return false;
                } // Unauthorized("Invalid Password");
            }
            return true;
        }
        
    }
}