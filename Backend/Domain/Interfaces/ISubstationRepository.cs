using Domain.Core;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface ISubstationRepository:IGenericRepository<Substation>
    {
        bool GetByMridAndName(string mrid, string name);
        bool CheckIfEntityExists(int id);
        Task<IEnumerable<Substation>> GetAllSubstation();
        Task AddSubstationAndSwitches(Substation entity);
    }
}
