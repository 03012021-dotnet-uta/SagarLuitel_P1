using models;
using System;
using System.Collections.Generic;
using System.Linq;
using AbstractPizza;

namespace Repository
{
    public class PizzaBoxRepo
    {

        private readonly PizzaBoxDbContext _dbContext;

        public PizzaBoxRepo(PizzaBoxDbContext context){
            this._dbContext = context;
        }

        /// <summary>
        /// This method adds the verified new user to the Db and returns the User object from the Db
        /// </summary>
        /// <param name="newUser"></param>
        /// <returns></returns>
        public User Register(User newUser)
        {
            var newUser1 = _dbContext.User.Add(newUser);// addd the new person to the Db
            _dbContext.SaveChanges();// save the change.
            return _dbContext.User.FirstOrDefault(u => u.UserId == newUser.UserId);// default is null
        }

        /// <summary>
        /// Takes a username and returns true if the username is found in the Db.
        /// Otherwise returns false.
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        public bool UserExists(string email)
        {
            //default is NULL
            if (_dbContext.User.Where(p => p.email == email).FirstOrDefault() != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public User GetUserByEmail(string email)
        {
            User foundUser = _dbContext.User.FirstOrDefault(p => p.email == email);
            return foundUser;
        }


        public Topping seedTopping(Topping newTopping)
        {
            Console.WriteLine("topping: "+ newTopping);
            var newTopping1 = _dbContext.Topping.Add(newTopping);// 
            _dbContext.SaveChanges();// save the change.
            return _dbContext.Topping.FirstOrDefault(t => t.ToppingId == newTopping.ToppingId);// default is null
        }

        public Size seedSize(Size newSize)
        {
            Console.WriteLine("topping: "+ newSize);
            var newSize1 = _dbContext.Size.Add(newSize);// 
            _dbContext.SaveChanges();// save the change.
            return _dbContext.Size.FirstOrDefault(t => t.SizeId == newSize.SizeId);// default is null
        }

        public Crust seedCrust(Crust newCrust)
        {
            Console.WriteLine("topping: "+ newCrust);
            var newCrust1 = _dbContext.Crust.Add(newCrust);// 
            _dbContext.SaveChanges();// save the change.
            return _dbContext.Crust.FirstOrDefault(t => t.CrustID == newCrust.CrustID);// default is null
        }

        public Pizza seedPizza(Pizza newPizza)
        {
            Console.WriteLine("topping: "+ newPizza);
            var newPizza1 = _dbContext.Pizza.Add(newPizza);// 
            _dbContext.SaveChanges();// save the change.
            return _dbContext.Pizza.FirstOrDefault(t => t.PizzaId == newPizza.PizzaId);// default is null
        }

        public Store seedStore(Store newStore)
        {
            Console.WriteLine("topping: "+ newStore);
            var newStore1 = _dbContext.Store.Add(newStore);// 
            _dbContext.SaveChanges();// save the change.
            return _dbContext.Store.FirstOrDefault(s => s.StoreId == newStore.StoreId);// default is null
        }

        public List<Store> getAllStore(){

            return _dbContext.Store.ToList();
        }

        public List<Topping> getAllTopping(){

            return _dbContext.Topping.ToList();
        }

        public List<Size> getAllSize(){

            return _dbContext.Size.ToList();
        }

        public List<Crust> getAllCrust(){

            return _dbContext.Crust.ToList();
        }

        public List<Pizza> getAllPizza(){

            return _dbContext.Pizza.ToList();
        }

        public Pizza findPizzaByid(int id){
            return _dbContext.Pizza.FirstOrDefault(p => p.PizzaId == id);
        }

        public Crust getCrustById(int id){
            return _dbContext.Crust.FirstOrDefault(p => p.CrustID == id);
        }

        public Size getSizeById(int id){
            return _dbContext.Size.FirstOrDefault(p => p.SizeId == id);
        }

        public void postToppingList(ToppingList tL){
            Console.WriteLine(" got here repo posttopping");
            var newTL1 = _dbContext.ToppingList.Add(tL);// 
            _dbContext.SaveChanges();
            //return _dbContext.Pizza.FirstOrDefault(p => p.PizzaId == id);
        }

        public Order postOrder(Order newOrder){
            Console.WriteLine("here at repo postorder");
             var newO1 = _dbContext.Order.Add(newOrder);// 
            _dbContext.SaveChanges();
            return _dbContext.Order.FirstOrDefault(o => o.OrderId == newOrder.OrderId);
        }

        public void postAPizza(CustomPizza pizza){
            var newAP1 = _dbContext.CustomPizza.Add(pizza);// 
            _dbContext.SaveChanges();
        }
    }
}