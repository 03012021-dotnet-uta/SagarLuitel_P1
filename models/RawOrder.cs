using System.Collections.Generic;

namespace models
{
    public class RawOrder
    {

      public int storeId { get; set; }
      public int pizzaId { get; set; }
      public int sizeId { get; set; }
      
      public int crustId { get; set; }

      public string toppingIds { get; set; }
      public float Total { get; set; }

      public int userId { get; set; }
    }
}