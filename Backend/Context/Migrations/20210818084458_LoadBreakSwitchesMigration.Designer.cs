﻿// <auto-generated />
using Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Context.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20210818084458_LoadBreakSwitchesMigration")]
    partial class LoadBreakSwitchesMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.9")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Domain.Wires.Disconnector", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<float>("CostPerUnit")
                        .HasColumnType("real");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("FailureRate")
                        .HasColumnType("int");

                    b.Property<bool>("IsUnderground")
                        .HasColumnType("bit");

                    b.Property<string>("Mrid")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("NormalOpen")
                        .HasColumnType("bit");

                    b.Property<int>("Phases")
                        .HasColumnType("int");

                    b.Property<float>("RatedVoltage")
                        .HasColumnType("real");

                    b.Property<float>("ReactiveBreakingCurrent")
                        .HasColumnType("real");

                    b.Property<bool>("Retained")
                        .HasColumnType("bit");

                    b.Property<int>("SwitchOnCount")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Disconnectors");
                });

            modelBuilder.Entity("Domain.Wires.Fuse", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<float>("CostPerUnit")
                        .HasColumnType("real");

                    b.Property<bool>("Cutout")
                        .HasColumnType("bit");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("FailureRate")
                        .HasColumnType("int");

                    b.Property<bool>("IsUnderground")
                        .HasColumnType("bit");

                    b.Property<float>("MaxFaultCurrent")
                        .HasColumnType("real");

                    b.Property<string>("Mrid")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("NormalOpen")
                        .HasColumnType("bit");

                    b.Property<int>("Phases")
                        .HasColumnType("int");

                    b.Property<float>("RatedVoltage")
                        .HasColumnType("real");

                    b.Property<float>("RatingCurrent")
                        .HasColumnType("real");

                    b.Property<bool>("Retained")
                        .HasColumnType("bit");

                    b.Property<int>("SwitchOnCount")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Fuses");
                });

            modelBuilder.Entity("Domain.Wires.LoadBreakSwitch", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<float>("CostPerUnit")
                        .HasColumnType("real");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("FailureRate")
                        .HasColumnType("int");

                    b.Property<bool>("IsUnderground")
                        .HasColumnType("bit");

                    b.Property<string>("Mrid")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("NormalOpen")
                        .HasColumnType("bit");

                    b.Property<int>("Phases")
                        .HasColumnType("int");

                    b.Property<float>("RatedCurrent")
                        .HasColumnType("real");

                    b.Property<float>("RatedVoltage")
                        .HasColumnType("real");

                    b.Property<bool>("Retained")
                        .HasColumnType("bit");

                    b.Property<int>("SwitchOnCount")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("LoadBreakSwitches");
                });
#pragma warning restore 612, 618
        }
    }
}
