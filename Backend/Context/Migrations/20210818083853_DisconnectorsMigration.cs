using Microsoft.EntityFrameworkCore.Migrations;

namespace Context.Migrations
{
    public partial class DisconnectorsMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Disconnectors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ReactiveBreakingCurrent = table.Column<float>(type: "real", nullable: false),
                    Mrid = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CostPerUnit = table.Column<float>(type: "real", nullable: false),
                    FailureRate = table.Column<int>(type: "int", nullable: false),
                    IsUnderground = table.Column<bool>(type: "bit", nullable: false),
                    Phases = table.Column<int>(type: "int", nullable: false),
                    RatedVoltage = table.Column<float>(type: "real", nullable: false),
                    NormalOpen = table.Column<bool>(type: "bit", nullable: false),
                    Retained = table.Column<bool>(type: "bit", nullable: false),
                    SwitchOnCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Disconnectors", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Disconnectors");
        }
    }
}
