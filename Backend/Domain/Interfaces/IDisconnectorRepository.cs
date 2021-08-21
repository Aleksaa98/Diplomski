using Domain.Wires;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Interfaces
{
    public interface IDisconnectorRepository : IGenericRepository<Disconnector>
    {
        bool GetByMridAndName(string mrid, string name);
    }
}
