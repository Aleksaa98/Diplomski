using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models.Request;
using Web.Models.Response;

namespace Web.Services.Interfaces
{
    public interface ILoadBreakSwitchService
    {
        Task<bool> CreateNewLoadBreakSwitch(LoadBreakSwitchRequest loadBreakSwitchRequest);
        Task<IEnumerable<LoadBreakSwitchResponse>> GetAllLoadBreakSwitches();
        Task<LoadBreakSwitchResponse> GetLoadBreakSwitchById(int id);
        Task<bool> UpdateLoadBreakSwitch(int id, LoadBreakSwitchRequest loadBreakSwitchRequest);
        Task<bool> Delete(int id);
    }
}
