using PizzaBox.Abstract;
using System.ComponentModel.DataAnnotations;

namespace models
{
  public class Topping : AComponent
  {

    [Key]
    public int ToppingId { get; set; }
    //public int APizzaId { get; set; }

    public Topping()
    {
        Name = "";
        Price = 0;
    }
    public Topping(string name, decimal price)
    {
        this.Name = name;
        this.Price = price;
    }
  }
}