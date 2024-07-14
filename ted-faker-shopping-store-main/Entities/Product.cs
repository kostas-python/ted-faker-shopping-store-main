using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace src.app.Entities
{
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
        
        public long Price { get; set; }

        public int ReviewCount { get; set; }

        public int Rating { get; set; }
        
        public string Imagesrc { get; set; }

        public string Type { get; set; }

        public int QuantityInStock { get; set; }
    }
}