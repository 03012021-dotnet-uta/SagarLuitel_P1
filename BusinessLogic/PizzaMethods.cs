using System;
using Repository;
using models;
using System.Collections.Generic;
using AbstractPizza;

namespace BusinessLogic
{
    public class PizzaMethods
    {
         private readonly PizzaBoxRepo _repo;
         
        private readonly userRepo _repoUser;

        public PizzaMethods(PizzaBoxRepo repo, userRepo repoUser){
            this._repo = repo;
            this._repoUser = repoUser;

        }

        public Topping seedTopping(Topping topping){

            Topping seededTopping = _repo.seedTopping(topping);
            if(seededTopping == null){
                 return null; 
            }
           return seededTopping;
        }

        public Crust seedCrust(Crust pizza){

            Crust seededCrust = _repo.seedCrust(pizza);
            if(seededCrust == null){
                 return null; 
            }
           return seededCrust;
        }

        public Pizza seedPizza(Pizza crust, int sId, int numOfPizza){

            Pizza seededPizza = _repo.seedPizza(crust);
            if(seededPizza == null){
                 return null; 
            }
            var newInven = new Inventory();
            newInven.PizzaId = seededPizza.PizzaId;
            newInven.StoreId = sId;
            newInven.numOfPizza = numOfPizza;

            _repo.seedInventory(newInven);
           return seededPizza;
        }

        public Size seedSize(Size size){

            Size seededSize = _repo.seedSize(size);
            if(seededSize == null){
                 return null; 
            }
           return seededSize;
        }
        public Store seedStore(Store store){

            Store seededStore = _repo.seedStore(store);
            if(seededStore == null){
                 return null; 
            }
           return seededStore;
        }

        public List<Store> getStore(){

            List<Store> allStore = _repo.getAllStore();
            if(allStore == null){
                return null;
            }
            return allStore;
        }

        public List<Topping> getTopping(){

            List<Topping> allTopping = _repo.getAllTopping();
            if(allTopping == null){
                return null;
            }
            return allTopping;
        }

        public List<Crust> getCrust(){

            List<Crust> allCrust = _repo.getAllCrust();
            if(allCrust == null){
                return null;
            }
            return allCrust;
        }
        public List<Size> getSize(){

            List<Size> allSize = _repo.getAllSize();
            if(allSize == null){
                return null;
            }
            return allSize;
        }

        public List<Pizza> getPizzas(){

            List<Pizza> allPizza = _repo.getAllPizza();
            if(allPizza == null){
                return null;
            }
            return allPizza;
        }

        public Order postOrder(RawOrder newOrder){
            
            string[] words = newOrder.toppingIds.Split(',');
            
            var nums = new List<int>();
            foreach (var item in words)
            {
                int i = 0;
                bool result = int.TryParse(item, out i);
                nums.Add(i);
            }
            
            ToppingList toppinglist = new ToppingList();

            

            if(nums.Count == 1){
                toppinglist.ToppingId1 = nums[0];
            }
             if(nums.Count == 2){
                toppinglist.ToppingId1 = nums[0];
                toppinglist.ToppingId2 = nums[1];
            }
             if(nums.Count == 3){
                toppinglist.ToppingId1 = nums[0];
                toppinglist.ToppingId2 = nums[1];
                toppinglist.ToppingId3 = nums[2];
            }
             if(nums.Count == 4){
                toppinglist.ToppingId1 = nums[0];
                toppinglist.ToppingId2 = nums[1];
                toppinglist.ToppingId3 = nums[2];
                toppinglist.ToppingId4 = nums[3];
            }
             if(nums.Count == 5){
                toppinglist.ToppingId1 = nums[0];
                toppinglist.ToppingId2 = nums[1];
                toppinglist.ToppingId3 = nums[2];
                toppinglist.ToppingId4 = nums[3];
                toppinglist.ToppingId5 = nums[4];
            }

            _repo.postToppingList(toppinglist);


            Pizza pizza = _repo.findPizzaByid(newOrder.pizzaId);
            
            Crust newCrust = _repo.getCrustById(newOrder.crustId);
            Size newSize = _repo.getSizeById(newOrder.sizeId);

            var newPizza = new CustomPizza(pizza.Name);    //here here here
                newPizza.Size = newSize;
                newPizza.Crust = newCrust;
                newPizza.ToppingListId = toppinglist.ToppingListId;
            
            var listofCPizza = new List<CustomPizza>();
            listofCPizza.Add(newPizza);
            
            Order myOrder =  new Order(){
                StoreId = newOrder.storeId,
                UserId = newOrder.userId,
                total  = System.Convert.ToDecimal(newOrder.Total),
            };
            myOrder.CPizzas = listofCPizza;
            //newPizza.OrderId = myOrder.OrderId;
            
            Order postedOrder = _repo.postOrder(myOrder);
            //_repo.postAPizza(newPizza);
            return null;
        }


        public Order postCart(List<RawOrder> newOrderList){
            
             var listofCPizza = new List<CustomPizza>();
             float Total = 0;
            foreach (var rawOrder in newOrderList)
            {   
                string[] words = rawOrder.toppingIds.Split(',');
                
                var nums = new List<int>();
                foreach (var item in words)
                {
                    int i = 0;
                    bool result = int.TryParse(item, out i);
                    nums.Add(i);
                }
                
                ToppingList toppinglist = new ToppingList();

                if(nums.Count == 1){
                toppinglist.ToppingId1 = nums[0];
                }
                if(nums.Count == 2){
                    toppinglist.ToppingId1 = nums[0];
                    toppinglist.ToppingId2 = nums[1];
                }
                if(nums.Count == 3){
                    toppinglist.ToppingId1 = nums[0];
                    toppinglist.ToppingId2 = nums[1];
                    toppinglist.ToppingId3 = nums[2];
                }
                if(nums.Count == 4){
                    toppinglist.ToppingId1 = nums[0];
                    toppinglist.ToppingId2 = nums[1];
                    toppinglist.ToppingId3 = nums[2];
                    toppinglist.ToppingId4 = nums[3];
                }
                if(nums.Count == 5){
                    toppinglist.ToppingId1 = nums[0];
                    toppinglist.ToppingId2 = nums[1];
                    toppinglist.ToppingId3 = nums[2];
                    toppinglist.ToppingId4 = nums[3];
                    toppinglist.ToppingId5 = nums[4];
                }

                _repo.postToppingList(toppinglist);

                //decremanting from inventoey; 
                Inventory inv = _repo.updateInventory(rawOrder.pizzaId);
                if(inv == null){
                    return null;
                }

                Pizza pizza = _repo.findPizzaByid(rawOrder.pizzaId);

                Crust newCrust = _repo.getCrustById(rawOrder.crustId);
                Size newSize = _repo.getSizeById(rawOrder.sizeId);

                var newPizza = new CustomPizza(pizza.Name);    
                newPizza.Size = newSize;
                newPizza.Crust = newCrust;
                newPizza.ToppingListId = toppinglist.ToppingListId;

                listofCPizza.Add(newPizza);
                Total += rawOrder.Total;
            }           
            
            Order myOrder =  new Order(){
                StoreId = newOrderList[0].storeId,
                UserId = newOrderList[0].userId,
                total  = System.Convert.ToDecimal(Total)
            };
            myOrder.CPizzas = listofCPizza;
            
            return _repo.postOrder(myOrder);
             
        }

        public List<Order> getAllStoreOrders(int sid){
            List<Order> OL = _repoUser.getAllOrder();

            var myNewOrderList = new List<Order>();

            foreach (var item in OL)
            {   
                if(item.StoreId == sid){
                    myNewOrderList.Add(item);
                }
            }
            return myNewOrderList;
        }

        public List<Inventory> getAllStoreInven(int sid){

            List<Inventory> OL = _repo.getAllStoreInven();
            var myNewInvList = new List<Inventory>();
            foreach (var item in OL)
            {
                if (item.StoreId == sid)
                {
                    myNewInvList.Add(item);
                }
            }
            return myNewInvList;
        }
    }
}