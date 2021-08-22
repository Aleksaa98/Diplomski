using Domain.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models.Request;
using Web.Models.Response;

namespace Web.Services.Interfaces
{
    public interface ISubstationService
    {
        Task<bool> CreateNewSubstation(SubstationRequest substation);
        Task<IEnumerable<SubstationResponse>> GetAllSubstations();
        Task<SubstationResponse> GetSubstationById(int id);
        Task<bool> UpdateSubstation(int id, SubstationRequest substation);
        Task<bool> Delete(int id);
    }
}
