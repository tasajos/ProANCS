using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace B3ND.Migrations
{
    /// <inheritdoc />
    public partial class dlat : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "lat",
                table: "Personales");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "lat",
                table: "Personales",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
