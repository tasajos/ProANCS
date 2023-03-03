using B3ND.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

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
        [HttpGet("{id}")]

        public async Task<IActionResult> Get(int Id)
        {
            try
            {
                var personalss = await _context.Personales.FindAsync(Id);
                return Ok (personalss);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

            


        [HttpPost]

        public async  Task<IActionResult> Post (Personal personal)
        {
            try
            {
             
                
                personal.FechaCreacion = DateTime.Now;
                _context.Add(personal);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = personal.id }, personal);
            
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
