using Context;
using Domain.Core;
using Domain.Interfaces;
using Domain.Wires;
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

        public bool CheckIfEntityExists(int id)
        {
            return _context.Substations.Any(e => e.Id == id);
        }

        public bool GetByMridAndName(string mrid, string name)
        {
            return _context.Substations.Any(s => s.Mrid == mrid || s.Name == name);
        }
        public async Task<IEnumerable<Substation>> GetAllSubstation()
        {
            //List<Substation> substations = await _context.Set<Substation>().ToListAsync();

            List<Substation> substations = await _context.Set<Substation>()
                                    .Include(m => m.Breakers).Include(m => m.Disconnector).Include(m => m.LoadBreakSwitches).Include(m => m.Fuses)
                                    .ToListAsync();

            return substations;
        }
        public void DeleteSubstation(Substation entity)
        {
            var substations = _context.Substations.OrderBy(e => e.Id).Include(m => m.Breakers).Include(m => m.Disconnector).Include(m => m.LoadBreakSwitches).Include(m => m.Fuses).First();

            _context.Remove(substations);
        }
    }
}
