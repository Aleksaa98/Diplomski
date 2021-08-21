using Domain.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models;

namespace Web.Services.Interfaces
{
    public interface ISubstationService
    {
        Task<bool> CreateNewSubstation(SubstationDTO substation);
        Task<IEnumerable<SubstationDTO>> GetAllSubstations();
        Task<SubstationDTO> GetSubstationById(int id);
        Task<bool> UpdateSubstation(int id, SubstationDTO substation);
        Task<bool> Delete(int id);
    }
}
