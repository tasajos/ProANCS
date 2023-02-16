using B3ND.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace B3ND.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonalController : ControllerBase
    {
        private readonly DBCN _context;

        public PersonalController(DBCN context)
        {


        _context = context;

        }

        [HttpGet] 
        public async Task<IActionResult> Get()
        {
            try
            {
                var listpersonal = await _context.Personales.ToListAsync();
                return Ok(listpersonal);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

            
        }

        
    }
}
