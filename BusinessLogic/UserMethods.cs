using System;
using Repository;
using models;

namespace BusinessLogic
{
    public class UserMethods
    {
        private readonly Hasher hasher = new Hasher();

        private readonly PizzaBoxRepo _repo;

        public UserMethods(PizzaBoxRepo repo){
            this._repo = repo;
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