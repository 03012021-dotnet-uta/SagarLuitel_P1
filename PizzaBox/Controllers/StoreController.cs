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
    public class StoreController : ControllerBase
    {
         private readonly PizzaMethods _pizzaBusiness;

        public StoreController(PizzaMethods business){
            this._pizzaBusiness = business;
        }


        [HttpPost("seedStore")]
        public ActionResult<Store> Register([FromBody] Store store){
            
            Console.WriteLine($"YAY! we made it to the C# side with. ");

            Store newStore = _pizzaBusiness.seedStore(store); 
            return newStore;
        }

        [HttpGet("getAllStore")]
        public ActionResult<List<Store>> getAllStore(){
            Console.WriteLine("got here");
            List<Store> allStroe = _pizzaBusiness.getStore();

            return allStroe;
        } 

        /// <summary>
        /// Takes a storeId and returns all the list of Order of that store.
        /// 
        /// </summary>
        /// <param name="storeId"></param>
        /// <returns></returns>
        [HttpGet("getAllStoreOrders/{storeId}")]
        public ActionResult<List<Order>> getAllStoreOrders(int storeId){

            List<Order> newOrderList = _pizzaBusiness.getAllStoreOrders(storeId);
            return newOrderList;
        }

        /// <summary>
        /// Takes a storeId and returns all the list of inventory of that store.
        /// 
        /// </summary>
        /// <param name="storeId"></param>
        /// <returns></returns>
        [HttpGet("getAllStoreInven/{storeId}")]
        public ActionResult<List<Inventory>> getAllStoreInven(int storeId){

             List<Inventory> newInventoryList = _pizzaBusiness.getAllStoreInven(storeId);
            return newInventoryList;
            
        }
    }
}