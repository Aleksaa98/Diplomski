using Context;
using Domain.Core;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public class SubstationRepository : GenericRepository<Substation>, ISubstationRepository
    {
        public SubstationRepository(AppDbContext context) : base(context)
        {
        }

        public bool GetByMridAndName(string mrid, string name)
        {
            return _context.Substations.Any(s => s.Mrid == mrid || s.Name==name);
        }

    }
}
