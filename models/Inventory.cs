using System;
using System.ComponentModel.DataAnnotations;

namespace models
{
	public class Inventory
	{
		[Key]
		public int InventoryId { get; set; } 
		public int CPizzaId { get; set; }
		public int StoreId { get; set; }
        public string numOfPizza { get; set; }
		      
	}
}