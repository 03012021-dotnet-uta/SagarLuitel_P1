using System.Collections.Generic;
using AbstractPizza;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace models
{
    
    public class CustomPizza
    {
        [Key]
        public int CPizzaId { get; set; }
        public string Name { get; set; }
        public Crust Crust { get; set; }
        public Size Size { get; set; }
        public int ToppingListId {get; set;}


        public CustomPizza()
        {   

        }
        protected void AddCrust()
        {
            Crust = new Crust();
        }

        protected void AddSize()
        {
            Size = new Size();
        }

        // protected override void AddToppings()
        // {
        //     // Toppings = new List<Topping>
        //     // {
        //     //     new Topping(),
        //     //     new Topping(),
        //     //     new Topping(),
        //     //     new Topping(),
        //     //     new Topping()
        //     // };
        // }
        public CustomPizza(string name)
        {   
            Name = "Custome made " + name;
        }

    }
}
