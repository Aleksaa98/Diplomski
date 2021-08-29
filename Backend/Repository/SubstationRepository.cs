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
            List<Substation> substations = await _context.Set<Substation>()
                                    .Include(m => m.Breakers).Include(m => m.Disconnector).Include(m => m.LoadBreakSwitches).Include(m => m.Fuses)
                                    .ToListAsync();

            return substations;
        }

        public async Task AddSubstationAndSwitches(Substation entity)
        {
            List<Disconnector> disconnectors = (List<Disconnector>)entity.Disconnector;
            List<Breaker> breakers = (List<Breaker>)entity.Breakers;
            List<Fuse> fuses = (List<Fuse>)entity.Fuses;
            List<LoadBreakSwitch> loadBreakSwitches = (List<LoadBreakSwitch>)entity.LoadBreakSwitches;
            Substation substation = new Substation()
            {
                Id = entity.Id,
                Mrid = entity.Mrid,
                Name = entity.Name,
                Description = entity.Description,
                State=entity.State
            };
            foreach (var item in disconnectors)
            {
                await _context.Set<Disconnector>().AddAsync(item);
            }
            foreach (var item in breakers)
            {
                await _context.Set<Breaker>().AddAsync(item);
            }
            foreach (var item in fuses)
            {
                await _context.Set<Fuse>().AddAsync(item);
            }
            foreach (var item in loadBreakSwitches)
            {
                await _context.Set<LoadBreakSwitch>().AddAsync(item);
            }

            await _context.Set<Substation>().AddAsync(substation);
        }
    }
}
