using Microsoft.EntityFrameworkCore.Migrations;

namespace Repository.Migrations
{
    public partial class PizzaBoxMigration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PizzaID",
                table: "Inventory",
                newName: "PizzaId");

            migrationBuilder.AlterColumn<int>(
                name: "numOfPizza",
                table: "Inventory",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PizzaId",
                table: "Inventory",
                newName: "PizzaID");

            migrationBuilder.AlterColumn<string>(
                name: "numOfPizza",
                table: "Inventory",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
