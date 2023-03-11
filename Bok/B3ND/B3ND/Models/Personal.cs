using System.ComponentModel;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace B3ND.Models
{
  

    public class Personal
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public string telefono { get; set; }
       
        public string ubicacion { get; set; }
        public string tipo { get; set; }
        public string detalle { get; set; }

        public string pedido { get; set; }
        public int cantidad { get; set; }
        public string color { get; set; }
        public int precio { get; set; }

        public DateTime FechaCreacion { get; set; }
    }

}

