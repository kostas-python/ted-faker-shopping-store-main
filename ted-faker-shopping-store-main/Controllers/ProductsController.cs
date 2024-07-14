using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using src.app.Entities;
using ted_faker_shopping_store_main.Data;

namespace ted_faker_shopping_store_main.Controllers

{
[Route("ted_faker_shopping_store_main/[controller]")]
[ApiController]
public class ProductsController(StoreContext context) : ControllerBase

{
    private readonly StoreContext context = context;

    [HttpGet]

    public async Task<ActionResult<List<Product>>> GetProducts()
    {

        return await context.Products.ToListAsync();
    }

    [HttpGet("{id}")]

    public async Task<ActionResult<Product>>GetProduct(int id)
    {
        return await context.Products.FindAsync(id);
    }
}
}
