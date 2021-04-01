using System.Collections.Generic;
using System;
using AbstractPizza;
using System.ComponentModel.DataAnnotations;

namespace models
{

  public class Order
  {
    
    [Key]
    public int OrderId {get; set;}
    public DateTime OrderTime { get; set; } = DateTime.Now;
    public int StoreId {get; set;}
    public int UserId { get; set; }
    public ICollection<CustomPizza> CPizzas { get; set; }
    public decimal total {get; set;}


    // public Order(List<APizza> P){
    //   Pizzas = P;
    // }

    // public Order(){

    // }

    // public decimal calcTotal(){

    //   foreach( var pizza in Pizzas){
    //     total += pizza.Crust.Price;
    //     total += pizza.Size.Price;
    //     foreach(var t in pizza.Toppings){
            
    //         total += t.Price;
    //     }
    //   }
    //   return total;
    // }

  }

}
