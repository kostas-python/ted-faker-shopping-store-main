using Microsoft.EntityFrameworkCore;
using src.app.Entities;


namespace ted_faker_shopping_store_main.Data
{
    public class StoreContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Product> Products { get; set; }
    }
}