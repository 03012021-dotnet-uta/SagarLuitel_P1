using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using models;

namespace AbstractPizza
{
  public abstract class APizza
  {
    //[Key]
    public int APizzaId { get; set; }
    public string Name { get; set; }
    public Crust Crust { get; set; }
    public Size Size { get; set; }
    public int ToppingListId {get; set;}
    public int OrderId {get; set;}
    public int CartId {get; set;}
    
    //public ICollection<Topping> Toppings { get; set; }

    public APizza()
    {
      FactoryMethod();
    }

    private void FactoryMethod()
    {
      AddCrust();
      AddSize();
      AddToppings();

    }

    protected abstract void AddCrust();
    protected abstract void AddSize();
    protected abstract void AddToppings();
    public override string ToString()
    {
        return Name;
    }
  }
}

