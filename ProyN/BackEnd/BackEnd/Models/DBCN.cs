using Microsoft.EntityFrameworkCore;

namespace BackEnd.Models
{
  public class DBCN: DbContext
  {

    public DBCN (DbContextOptions<DBCN> options):base(options) {



    }
    public DbSet<Personal> Personales { get; set; }



  }


}
