using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models.Request;
using Web.Models.Response;

namespace Web.Services.Interfaces
{
    public interface IFuseService
    {
        Task<bool> CreateNewFuse(FuseRequest fuse);
        Task<IEnumerable<FuseResponse>> GetAllFuses();
        Task<FuseResponse> GetFuseById(int id);
        Task<bool> UpdateFuse(int id, FuseRequest fuse);
        Task<bool> Delete(int id);
    }
}
