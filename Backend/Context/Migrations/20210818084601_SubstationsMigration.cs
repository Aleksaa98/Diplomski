using Microsoft.EntityFrameworkCore.Migrations;

namespace Context.Migrations
{
    public partial class SubstationsMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SubstationId",
                table: "LoadBreakSwitches",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SubstationId",
                table: "Fuses",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SubstationId",
                table: "Disconnectors",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SubstationId",
                table: "Breakers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Substations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Mrid = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Substations", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_LoadBreakSwitches_SubstationId",
                table: "LoadBreakSwitches",
                column: "SubstationId");

            migrationBuilder.CreateIndex(
                name: "IX_Fuses_SubstationId",
                table: "Fuses",
                column: "SubstationId");

            migrationBuilder.CreateIndex(
                name: "IX_Disconnectors_SubstationId",
                table: "Disconnectors",
                column: "SubstationId");

            migrationBuilder.CreateIndex(
                name: "IX_Breakers_SubstationId",
                table: "Breakers",
                column: "SubstationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Breakers_Substations_SubstationId",
                table: "Breakers",
                column: "SubstationId",
                principalTable: "Substations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Disconnectors_Substations_SubstationId",
                table: "Disconnectors",
                column: "SubstationId",
                principalTable: "Substations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Fuses_Substations_SubstationId",
                table: "Fuses",
                column: "SubstationId",
                principalTable: "Substations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_LoadBreakSwitches_Substations_SubstationId",
                table: "LoadBreakSwitches",
                column: "SubstationId",
                principalTable: "Substations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Breakers_Substations_SubstationId",
                table: "Breakers");

            migrationBuilder.DropForeignKey(
                name: "FK_Disconnectors_Substations_SubstationId",
                table: "Disconnectors");

            migrationBuilder.DropForeignKey(
                name: "FK_Fuses_Substations_SubstationId",
                table: "Fuses");

            migrationBuilder.DropForeignKey(
                name: "FK_LoadBreakSwitches_Substations_SubstationId",
                table: "LoadBreakSwitches");

            migrationBuilder.DropTable(
                name: "Substations");

            migrationBuilder.DropIndex(
                name: "IX_LoadBreakSwitches_SubstationId",
                table: "LoadBreakSwitches");

            migrationBuilder.DropIndex(
                name: "IX_Fuses_SubstationId",
                table: "Fuses");

            migrationBuilder.DropIndex(
                name: "IX_Disconnectors_SubstationId",
                table: "Disconnectors");

            migrationBuilder.DropIndex(
                name: "IX_Breakers_SubstationId",
                table: "Breakers");

            migrationBuilder.DropColumn(
                name: "SubstationId",
                table: "LoadBreakSwitches");

            migrationBuilder.DropColumn(
                name: "SubstationId",
                table: "Fuses");

            migrationBuilder.DropColumn(
                name: "SubstationId",
                table: "Disconnectors");

            migrationBuilder.DropColumn(
                name: "SubstationId",
                table: "Breakers");
        }
    }
}
