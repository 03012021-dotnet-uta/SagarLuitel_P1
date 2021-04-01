using PizzaBox.Abstract;
using System.ComponentModel.DataAnnotations;

namespace models
{
  public class Crust : AComponent
  {

    [Key]
    public int CrustID { get; set; }

    public Crust(){
      Name = "";
      Price = 0;
    }

    public Crust(string name, decimal price)
        {
            Name = name;
            Price = price;
        }
  }
}
