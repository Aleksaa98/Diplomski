using Context;
using Domain.Interfaces;
using Domain.Wires;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository
{
    public class BreakerRepository : GenericRepository<Breaker>, IBreakerRepository
    {
        public BreakerRepository(AppDbContext context) : base(context)
        {
        }

        public bool GetByMridAndName(string mrid, string name)
        {
            return _context.Breakers.Any(s => s.Mrid == mrid || s.Name == name);
        }

    }
}
