using System.ComponentModel.DataAnnotations;

namespace models
{
    public class Pizza
    {
        [Key]
        public int PizzaId { get; set; }
        public string Name { get; set; }
    }
}