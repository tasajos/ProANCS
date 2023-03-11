using B3ND.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Text.Json;
using System.Text.Json.Nodes;
using Newtonsoft.Json;


namespace B3ND.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonalController : ControllerBase
    {
        private readonly DBCN _context;
        private object jsonObject;

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
                return Ok(personalss);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int Id)
        {
            try
            {
                var delete = await _context.Personales.FindAsync(Id);

                if (delete == null)
                {
                    return NotFound();
                }

                _context.Personales.Remove(delete);
                await _context.SaveChangesAsync();

                return NoContent();
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
                string json = JsonConvert.SerializeObject(personal);

                // Deserialize the JSON to a Personal object
                Personal deserializedPersonal = JsonConvert.DeserializeObject<Personal>(json);

                // Set the FechaCreacion property and save to the database
                deserializedPersonal.FechaCreacion = DateTime.Now;
                _context.Add(deserializedPersonal);
                await _context.SaveChangesAsync();



                //personal.FechaCreacion = DateTime.Now;
                //_context.Add(personal);
                //await _context.SaveChangesAsync();
                //return CreatedAtAction("Get", new { Id = personal.id }, personal);

                return CreatedAtAction("Get", new { Id = personal.id }, personal);
            }
            catch (System.Text.Json.JsonException ex)
            {
                // Handle JSON serialization or deserialization errors
                return BadRequest("Invalid JSON data: " + ex.Message);
            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }
           // catch (Exception ex)
            //{
              //  return BadRequest(ex.Message);
            //}

            
       // }

        


    }


}
