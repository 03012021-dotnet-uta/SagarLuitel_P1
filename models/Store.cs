using System;
using System.ComponentModel.DataAnnotations;

namespace models
{
	public class Store
	{
		[Key]
		public int StoreId { get; set; }
		public string storeName { get; set; }
		public string storeLocation { get; set; }
        public string storeAddress { get; set; }
        public string storePhoneNum { get; set; } 

	}
}