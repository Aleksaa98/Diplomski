using Context;
using Domain.Interfaces;
using Domain.Wires;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository
{
    public class FuseRepository : GenericRepository<Fuse>, IFuseRepository
    {
        public FuseRepository(AppDbContext context) : base(context)
        {
        }

        public bool GetByMridAndName(string mrid, string name)
        {
            return _context.Fuses.Any(s => s.Mrid == mrid || s.Name == name);
        }

    }
}
