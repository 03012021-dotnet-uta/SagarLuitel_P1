using System;
using AbstractPizza;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace models
{
	public class Cart
	{	
		[Key]
		public int CartId { get; set; }
		public int UserId { get; set; }
		public int StoreId { get; set; }
		public ICollection<CustomPizza> CPizzas { get; set; }
	}
}