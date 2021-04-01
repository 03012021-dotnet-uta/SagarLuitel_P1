using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using AbstractPizza;

using models;


namespace Repository
{
	public class PizzaBoxDbContext : DbContext
	{

		public DbSet<User> User { get; set; }
		public DbSet<Store> Store { get; set; }
		public DbSet<CustomPizza> CustomPizza { get; set; }
		//public DbSet<PresetPizza> PresetPizza { get; set; }
		public DbSet<Order> Order { get; set; }
		public DbSet<Inventory> Inventory { get; set; }
		public DbSet<Cart> Cart { get; set; }

		public DbSet<Topping> Topping { get; set; }
		public DbSet<Size> Size { get; set; }
		public DbSet<Crust> Crust { get; set; }
		public DbSet<ToppingList> ToppingList { get; set;}
		public DbSet<Pizza> Pizza { get; set; }		

		// public PizzaBoxDbContext(DbContextOptions<PizzaBoxDbContext> options) : base(options)
		// { }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			 optionsBuilder.UseSqlServer(@"Server=127.0.0.1,1433;Database=myPizzaBoxDb;User Id=sa;Password=D3goldhap!;");
            // @“Server=127.0.0.1;Database=Master;User Id=SA;Password=1Secure*Password1;”
		}
	}
}