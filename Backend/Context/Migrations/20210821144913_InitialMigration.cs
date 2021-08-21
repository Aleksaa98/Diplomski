using Microsoft.EntityFrameworkCore.Migrations;

namespace Context.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Substations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Mrid = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    State = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Substations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Breakers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InTransitTime = table.Column<float>(type: "real", nullable: false),
                    RatedCurrent = table.Column<float>(type: "real", nullable: false),
                    SubstationId = table.Column<int>(type: "int", nullable: true),
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
                    table.PrimaryKey("PK_Breakers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Breakers_Substations_SubstationId",
                        column: x => x.SubstationId,
                        principalTable: "Substations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Disconnectors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ReactiveBreakingCurrent = table.Column<float>(type: "real", nullable: false),
                    SubstationId = table.Column<int>(type: "int", nullable: true),
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
                    table.ForeignKey(
                        name: "FK_Disconnectors_Substations_SubstationId",
                        column: x => x.SubstationId,
                        principalTable: "Substations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Fuses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RatingCurrent = table.Column<float>(type: "real", nullable: false),
                    Cutout = table.Column<bool>(type: "bit", nullable: false),
                    MaxFaultCurrent = table.Column<float>(type: "real", nullable: false),
                    SubstationId = table.Column<int>(type: "int", nullable: true),
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
                    table.PrimaryKey("PK_Fuses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Fuses_Substations_SubstationId",
                        column: x => x.SubstationId,
                        principalTable: "Substations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "LoadBreakSwitches",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RatedCurrent = table.Column<float>(type: "real", nullable: false),
                    SubstationId = table.Column<int>(type: "int", nullable: true),
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
                    table.PrimaryKey("PK_LoadBreakSwitches", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LoadBreakSwitches_Substations_SubstationId",
                        column: x => x.SubstationId,
                        principalTable: "Substations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Breakers_SubstationId",
                table: "Breakers",
                column: "SubstationId");

            migrationBuilder.CreateIndex(
                name: "IX_Disconnectors_SubstationId",
                table: "Disconnectors",
                column: "SubstationId");

            migrationBuilder.CreateIndex(
                name: "IX_Fuses_SubstationId",
                table: "Fuses",
                column: "SubstationId");

            migrationBuilder.CreateIndex(
                name: "IX_LoadBreakSwitches_SubstationId",
                table: "LoadBreakSwitches",
                column: "SubstationId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Breakers");

            migrationBuilder.DropTable(
                name: "Disconnectors");

            migrationBuilder.DropTable(
                name: "Fuses");

            migrationBuilder.DropTable(
                name: "LoadBreakSwitches");

            migrationBuilder.DropTable(
                name: "Substations");
        }
    }
}
