using Context;
using Domain.Interfaces;
using Domain.Wires;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository
{
    class LoadBreakSwitchRepository : GenericRepository<LoadBreakSwitch>, ILoadBreakSwitchRepository
    {
        public LoadBreakSwitchRepository(AppDbContext context) : base(context)
        {
        }

        public bool GetByMridAndName(string mrid, string name)
        {
            return _context.LoadBreakSwitches.Any(s => s.Mrid == mrid || s.Name == name);
        }

    }
}
