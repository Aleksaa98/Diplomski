using Domain.Core;
using Domain.Wires;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Disconnector> Disconnectors { get; set; }
        public DbSet<Fuse> Fuses { get; set; }
        public DbSet<LoadBreakSwitch> LoadBreakSwitches { get; set; }
        public DbSet<Breaker> Breakers { get; set; }
        public DbSet<Substation> Substations { get; set; }

    }
}
