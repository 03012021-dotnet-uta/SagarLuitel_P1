using PizzaBox.Abstract;
using System.ComponentModel.DataAnnotations;

namespace models
{
  public class Size : AComponent
  {
    [Key]
    public int SizeId { get; set; }
    
    public Size()
        {
            Name = "";
            Price = 0;
        }
        public Size(string name, decimal price)
        {
            Name = name;
            Price = price;
        }

  }
}
