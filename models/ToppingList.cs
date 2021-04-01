using System.ComponentModel.DataAnnotations;

namespace models
{
    public class ToppingList
    {
        [Key]
        public int ToppingListId { get; set; }
        public int ToppingId1 { get; set; }
        public int ToppingId2 { get; set; }
        public int ToppingId3 { get; set; }
        public int ToppingId4 { get; set; }
        public int ToppingId5 { get; set; }
        
    }
}