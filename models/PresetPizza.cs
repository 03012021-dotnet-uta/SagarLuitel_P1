using System.Collections.Generic;
using AbstractPizza;
using System.ComponentModel.DataAnnotations;



namespace models
{
    public class PresetPizza : APizza
    {
        protected override void AddCrust()
        {
            Crust = new Crust();
        }

        protected override void AddSize()
        {
            Size = new Size();
        }

        protected override void AddToppings()
        {
            // Toppings = new List<Topping>
            // {
            //     new Topping(),
            //     new Topping(),
            //     new Topping(),
            //     new Topping(),
            //     new Topping()
            // };
        }

        public PresetPizza(string name)
        {   
            Name = name;
        }

    }
}
