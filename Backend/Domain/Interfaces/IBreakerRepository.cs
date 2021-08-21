using Domain.Wires;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Interfaces
{
    public interface IBreakerRepository : IGenericRepository<Breaker>
    {
        bool GetByMridAndName(string mrid, string name);
    }
}
