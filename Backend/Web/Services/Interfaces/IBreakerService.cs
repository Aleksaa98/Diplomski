using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models.Request;
using Web.Models.Response;

namespace Web.Services.Interfaces
{
    public interface IBreakerService
    {
        Task<bool> CreateNewBreaker(BreakerRequest breaker);
        Task<IEnumerable<BreakerResponse>> GetAllBreakers();
        Task<BreakerResponse> GetBreakerById(int id);
        Task<bool> UpdateBreaker(int id, BreakerRequest breaker);
        Task<bool> Delete(int id);
    }
}
