using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using models;
using BusinessLogic;

namespace PizzaBox.Controllers
{
    [Route("api/[controller]")]
	[ApiController]
    public class PizzaController : ControllerBase
    {
        private readonly PizzaMethods _pizzaBusiness;

        public PizzaController(PizzaMethods business){
            this._pizzaBusiness = business;
        }


        [HttpPost("seedTopping")]
        public ActionResult<Topping> Register([FromBody] Topping topping){
            
            Console.WriteLine($"YAY! we made it to the C# side with. ");

            Topping newTopping = _pizzaBusiness.seedTopping(topping); 
            return newTopping;
        }

        [HttpPost("seedCrust")]
        public ActionResult<Crust> Register([FromBody] Crust crust){
            
            Console.WriteLine($"YAY! we made it to the C# side with. ");

            Crust newCrust = _pizzaBusiness.seedCrust(crust); 
            return newCrust;
        }

        [HttpPost("seedPizza")]
        public ActionResult<Pizza> Register([FromBody] Pizza pizza){
            
            Console.WriteLine($"YAY! we made it to the C# side with. ");

            Pizza newPizza = _pizzaBusiness.seedPizza(pizza); 
            return newPizza;
        }

        [HttpPost("seedSize")]
        public ActionResult<Size> Register([FromBody] Size size){
            
            Console.WriteLine($"YAY! we made it to the C# side with. ");

            Size newSize = _pizzaBusiness.seedSize(size); 
            return newSize;
        }

        // [HttpGet("getAll")]
        // public ActionResult<List<Store>, List<Pizza>, List<Topping>, List<Size>, List<Crust>> getAllStore(){

        //     List<Store> allStroe = _pizzaBusiness.getStore();
        //     List<Pizza> allPizza = _pizzaBusiness.getPizzas();
        //     List<Topping> allTopping = _pizzaBusiness.getTopping();
        //     List<Size> allSize = _pizzaBusiness.getSize();
        //     List<Crust> allCrust = _pizzaBusiness.getCrust();

        //     List<List<Store>, List<Pizza>, List<Topping>, List<Size>, List<Crust>> listOFlist = {allStroe, allPizza, allTopping, allCrust, allSize};

        //     return listOFlist;
        // }

        [HttpGet("getAllPizza")]
        public ActionResult<List<Pizza>> getAllPizza(){
            Console.WriteLine("got here");
            List<Pizza> allPizza = _pizzaBusiness.getPizzas();

            return allPizza;
        } 

        [HttpGet("getAllTopping")]
        public ActionResult<List<Topping>> getAllTopping(){
            Console.WriteLine("got here");
            List<Topping> allTopping = _pizzaBusiness.getTopping();

            return allTopping;
        } 

        [HttpGet("getAllCrust")]
        public ActionResult<List<Crust>> getAllCrust(){
            Console.WriteLine("got here");
            List<Crust> allCrust = _pizzaBusiness.getCrust();

            return allCrust;
        } 

        [HttpGet("getAllSize")]
        public ActionResult<List<Size>> getAllSize(){
            Console.WriteLine("got here");
            List<Size> allSize = _pizzaBusiness.getSize();

            return allSize;
        } 


        [HttpPost("postOrder")]
        public ActionResult<Order> postOrder([FromBody] RawOrder myorder){
            
            Console.WriteLine("here: " + myorder.crustId + " " + myorder.toppingIds + " " + myorder.Total + " " + myorder.storeId);

            Order newOrder = _pizzaBusiness.postOrder(myorder);

            return null;
        }

        [HttpPost("postCart")]
        public ActionResult<List<Order>> postOrder([FromBody] myCart mycart){
            Console.WriteLine("here: " + mycart.orderList[0].crustId);

            myCart newCart = _pizzaBusiness.postCart(mycart);

            return null;
        }

    }
}