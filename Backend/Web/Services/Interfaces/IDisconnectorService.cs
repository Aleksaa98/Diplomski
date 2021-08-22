using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models.Request;
using Web.Models.Response;

namespace Web.Services.Interfaces
{
    public interface IDisconnectorService
    {
        Task<bool> CreateNewDisconnector(DisconnectorRequest disconnector);
        Task<IEnumerable<DisconnectorResponse>> GetAllDisconnectors();
        Task<DisconnectorResponse> GetDisconnectorById(int id);
        Task<bool> UpdateDisconnector(int id, DisconnectorRequest disconnector);
        Task<bool> Delete(int id);
    }
}
