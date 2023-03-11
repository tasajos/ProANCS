﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace B3ND.Migrations
{
    /// <inheritdoc />
    public partial class n7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ubicacion2",
                table: "Personales");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ubicacion2",
                table: "Personales",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
